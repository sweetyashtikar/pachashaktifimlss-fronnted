import { createOrder, verifyPayment } from "../services/paymentService";

const PayNow = () => {
  const handlePayment = async () => {
    try {
      // 1️⃣ Create order
      const { data } = await createOrder({
        amount: 35000,
        projectType: "3d-graphics",
        email: "test@gmail.com",
        contact: "9999999999",
      });

      const order = data.data;

      // 2️⃣ Razorpay options
      const options = {
        key: order.key,
        amount: order.amount,
        currency: "INR",
        name: "Panch Shakti Production",
        description: "3D Graphics Project",
        order_id: order.orderId,

        handler: async function (response) {
          // 3️⃣ VERIFY PAYMENT
          await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          alert("✅ Payment Successful");
        },

        prefill: {
          email: "test@gmail.com",
          contact: "9999999999",
        },

        theme: {
          color: "#D4AF37",
        },
      };

      // 4️⃣ Open Razorpay
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (err) {
      console.error(err);
      alert("❌ Payment failed");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-black text-white px-6 py-3 rounded"
    >
      Pay ₹35,000 Now
    </button>
  );
};

export default PayNow;
