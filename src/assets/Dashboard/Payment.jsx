
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import ChackoutForm from './ChackoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {

    const { id } = useParams()
    return (
        <div className='max-w-3xl mx-auto p-20 md:mt-20 border-2 border-lime-500 rounded-3xl shadow-2xl shadow-lime-500'>
            <h1 className='text-center my-6 md:text-4xl font-bold'>Please pay to join Camp</h1>
            <h1 className='text-center mb-10 md:text-4xl font-bold'>Payment </h1>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackoutForm id={id}></ChackoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;