import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hook/useAxiosSecure';

const Payment = () => {
    const params=useParams()
    const id=params.id
    const [axiosSecure]=useAxiosSecure()
    const {data:paymentData}=useQuery({
        queryKey:['paymentData'],
        queryFn:async()=>{
            const res=await axiosSecure(`/paymentData/${id}`)
            return res.data
        }
    })
    const price=((paymentData?.body?.Price))
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <h1 className='ml-6 mt-5 text-success text-xl'>Payment gateway implement</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id} paymentData={paymentData} Price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;