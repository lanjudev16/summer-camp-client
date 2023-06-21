import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import useAuth from "../../../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = ({ Price,id,paymentData }) => {
  const navigate=useNavigate()
  const [tranSectionId, setTranSectionId] = useState("");
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [err, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
  if(Price){
    axiosSecure.post("/create-payment-intent", { Price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }
  }, [Price]);
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
    console.log(card);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    if (paymentIntent.status==="succeeded") {
      console.log(paymentIntent);
      setTranSectionId(paymentIntent.id)
      const body={
        paymentData,
        id,
        email:user?.email,
        name:user?.displayName
      }
      axiosSecure.post('/dashboard/student/payment',body).then(data=>{
        if(data){
          console.log(data)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully payment complete',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/dashboard/student/booking')
        }
      })

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-10 my-5">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-success"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {err && <p className="text-red-500 text-2xl">{err}</p>}
      {tranSectionId && <p className="text-green-500 ml-5 text-xl">successfully payment complete and transaction id is {tranSectionId}</p>}
    </>
  );
};
export default CheckoutForm;
