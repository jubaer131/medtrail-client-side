

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import UseAuth from "../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";



const ChackoutForm = ({ id }) => {
    console.log(id)

    const [error, seterror] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionid, settransactionid] = useState('')
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxioussecure()
    const { user } = UseAuth()


    const { data: chectout = [], isPending, refetch } = useQuery({
        queryKey: ['checkout'],
        queryFn: async () =>
            await axiosSecure('/paymenthistory')
                .then(res => {
                    const match = res.data.find(item => item._id === id);
                    return match;
                })
    });


    const totalPrice = chectout.campFees;


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                    // toast.success('payment ok')
                })
        }

    }, [axiosSecure, totalPrice])



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            seterror(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            seterror('')
        }
        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmerror) {
            console.log('confirm error')
        } else {
            console.log('payment Intent', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log('paymentintent id', paymentIntent.id)
                settransactionid(paymentIntent.id)
                // now update payment status in database
                const payment = {

                    PaymentStatus: 'paid'
                }
                const res = await axiosSecure.patch(`/payments/${id}`, payment)
                console.log('payment sava', res.data)
                refetch()
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "payment successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/registeredcamp')
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn bg-lime-400 btn-sm mt-3" type="submit" >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionid && <p className="text-green-600">your transactionid : {transactionid}</p>}
        </form>
    );
};

export default ChackoutForm;