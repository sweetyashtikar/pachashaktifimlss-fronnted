import React from "react";
import axios from "axios";

export default function Graphics3DDesigning() {
  const [responseId, setResponseId] = React.useState("");
  const [responseStatus, setResponseStatus] = React.useState(null);
  const [paymentInput, setPaymentInput] = React.useState("");

  // Load Razorpay script
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Create order from backend
  const createRazorpayOrder = async (amount) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/create-order",
        {
          amount: amount * 100, // ₹10 = 1000 paise
          currency: "INR",
        }
      );

      handleRazorpayScreen(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Open Razorpay popup
  const handleRazorpayScreen = async (order) => {
    const loaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!loaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key:process.env.REACT_APP_RAZORPAY_KEY_ID,
 // safer than hardcoding
      amount: order.amount,
      currency: order.currency,
      order_id: order.order_id,
      name: "Panch Shakti",
      description: "Test Transaction",

      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
      },

      prefill: {
        name: "Sweety Ashtikar",
        email: "sweety@example.com",
        contact: "9309738784",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Fetch payment details
  const paymentFetch = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:5000/api/payment/${paymentInput}`
      );
      setResponseStatus(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

    <button
      onClick={() => createRazorpayOrder(10)}
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-4"
    >
      Payment of ₹10
    </button>

    {responseId && (
      <p className="text-green-600 font-medium mb-4">
        ✅ Payment ID: {responseId}
      </p>
    )}

    <h2 className="text-xl font-bold mb-4">
      Payment Verification
    </h2>

    <form onSubmit={paymentFetch} className="space-y-3">
      <input
        type="text"
        placeholder="Enter Payment ID"
        value={paymentInput}
        onChange={(e) => setPaymentInput(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Fetch Payment
      </button>
    </form>

    {responseStatus && (
      <div className="mt-6 bg-gray-50 p-4 rounded-lg text-left">
        <h3 className="font-bold mb-2">Payment Status:</h3>
        <p>Status: {responseStatus.status}</p>
        <p>Method: {responseStatus.method}</p>
        <p>Amount: ₹{responseStatus.amount / 100}</p>
      </div>
    )}

  </div>
</div>

  );
}
