
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import ChackoutForm from './ChackoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
   
    const { id } = useParams()
    return (
        <div className='max-w-3xl mx-auto mt-8'>
            <h1 className='text-center my-6 text-3xl font-semibold'>Please pay to join Camp</h1>
            <h1 className='text-center mb-10 text-3xl font-bold'>Payment </h1>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackoutForm id={id}></ChackoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;