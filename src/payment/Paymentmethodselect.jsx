// ═══════════════════════════════════════════════════════════════
// pages/PaymentMethodSelect.jsx
// Real Razorpay Integration with All Payment Methods
// ═══════════════════════════════════════════════════════════════

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  CreditCard,
  QrCode,
  Banknote,
  Loader2,
  Building2,
  Wallet,
} from "lucide-react";
import { selectMethod } from "../services/payment.service";

const PAYMENT_METHODS = [
  {
    id: "qr",
    label: "QR Code",
    sub: "Scan & Pay instantly",
    icon: QrCode,
    color: "#D4AF37",
    popular: true,
  },
  {
    id: "upi",
    label: "UPI",
    sub: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
    color: "#4A9EFF",
    popular: true,
  },
  {
    id: "credit",
    label: "Credit Card",
    sub: "Visa, Mastercard, Amex, RuPay",
    icon: CreditCard,
    color: "#a78bfa",
  },
  {
    id: "debit",
    label: "Debit Card",
    sub: "All bank debit cards",
    icon: Banknote,
    color: "#34d399",
  },
  {
    id: "netbanking",
    label: "Net Banking",
    sub: "All major banks supported",
    icon: Building2,
    color: "#f59e0b",
  },
  {
    id: "wallet",
    label: "Wallets",
    sub: "Paytm, Mobikwik, Amazon Pay",
    icon: Wallet,
    color: "#ec4899",
  },
  {
    id: "emi",
    label: "EMI",
    sub: "Credit Card EMI, Debit Card EMI",
    icon: CreditCard,
    color: "#8b5cf6",
  },
];

export default function PaymentMethodSelect() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || 35000;
  const orderId = location.state?.orderId || null;
  const projectType = location.state?.projectType || "3d-graphics";

  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ── Redirect if no orderId ──
  useEffect(() => {
    if (!orderId) {
      navigate("/services/3d-graphics");
    }
  }, [orderId, navigate]);

  // ── Load Razorpay Script ──
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // ── Handle Payment ──
  const handlePay = async () => {
    if (!selected || !orderId) return;

    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token");

    try {
      // Step 1: Save selected method to backend
      const methodRes = await selectMethod({ orderId, method: selected }, token);

      if (!methodRes.success) {
        throw new Error(methodRes.message || "Failed to save payment method");
      }

      // Step 2: Get user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

      // Step 3: Configure Razorpay options
      const options = {
        key: methodRes.data?.key || process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: amount * 100, // Convert to paise
        currency: "INR",
        name: "Panch Shakti Production",
        description: `Payment for ${projectType}`,
        order_id: orderId,
        prefill: {
          name: userInfo.name || "",
          email: userInfo.email || "",
          contact: userInfo.contact || "",
        },
        theme: {
          color: "#D4AF37",
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setError("Payment cancelled by user");
          },
        },
        handler: async function (response) {
          try {
            // Payment successful - verify on backend
            const verifyRes = await fetch(
              "http://localhost:5000/api/payment/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              // Navigate to success page
              navigate("/payment-success", {
                replace: true,
                state: {
                  amount,
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                  method: selected,
                  projectType,
                },
              });
            } else {
              throw new Error(verifyData.message || "Verification failed");
            }
          } catch (err) {
            console.error("❌ Verification Error:", err);
            navigate("/payment-failed", {
              replace: true,
              state: {
                amount,
                orderId,
                method: selected,
                reason: err.message || "Payment verification failed",
              },
            });
          }
        },
      };

      // Step 4: Open Razorpay Checkout
      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.error("❌ Payment Failed:", response.error);
        navigate("/payment-failed", {
          replace: true,
          state: {
            amount,
            orderId,
            method: selected,
            reason: response.error.description || "Payment failed",
          },
        });
      });

      razorpay.open();
    } catch (err) {
      console.error("❌ Payment Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  // ── Loading State ──
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#D4AF37] blur-xl opacity-30 scale-125" />
          <div className="relative w-28 h-28 rounded-full border-4 border-[#1a1a1a] flex items-center justify-center">
            <Loader2
              className="w-14 h-14 text-[#D4AF37]"
              style={{ animation: "spin 1s linear infinite" }}
            />
          </div>
        </div>
        <p className="mt-8 text-lg text-gray-300 font-medium tracking-wide">
          Opening Payment Gateway…
        </p>
        <p className="mt-2 text-sm text-gray-600">Please wait</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // ── Main UI ──
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e1e]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </button>
        <span className="text-xs text-gray-600 font-mono">
          {orderId ? `Order: ${orderId.slice(0, 18)}…` : "No Order"}
        </span>
      </div>

      <div className="max-w-md mx-auto px-6 pt-10 pb-32">
        {/* Amount Display */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
            Total Amount
          </p>
          <p className="text-5xl font-bold text-[#D4AF37]">
            ₹{amount.toLocaleString("en-IN")}
          </p>
          <p className="text-gray-600 text-sm mt-1 capitalize">
            {projectType.replace(/-/g, " ")} — Premium
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-[#ef444418] border border-[#ef444440] animate-shake">
            <p className="text-sm text-[#ef4444]">⚠️ {error}</p>
          </div>
        )}

        {/* Section Label */}
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
          Choose Payment Method
          <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px]">
            SECURE
          </span>
        </p>

        {/* Payment Method Cards */}
        <div className="flex flex-col gap-3">
          {PAYMENT_METHODS.map((m) => {
            const Icon = m.icon;
            const isSel = selected === m.id;

            return (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className="w-full text-left relative"
                style={{ outline: "none" }}
              >
                {m.popular && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold z-10">
                    POPULAR
                  </span>
                )}
                <div
                  className="rounded-xl border px-5 py-4 flex items-center gap-4 transition-all duration-200"
                  style={{
                    borderColor: isSel ? m.color : "#2a2a2a",
                    background: isSel ? `${m.color}08` : "#111111",
                    boxShadow: isSel ? `0 0 20px ${m.color}20` : "none",
                    transform: isSel ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: isSel ? `${m.color}18` : "#1a1a1a" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: m.color }} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {m.label}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{m.sub}</p>
                  </div>

                  {/* Radio Button */}
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ borderColor: isSel ? m.color : "#333" }}
                  >
                    {isSel && (
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: m.color }}
                      />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Security Info */}
        <div className="mt-8 p-4 rounded-xl bg-[#111] border border-[#1e1e1e]">
          <p className="text-xs text-gray-500 text-center">
            🔒 Secured by <strong className="text-[#D4AF37]">Razorpay</strong>{" "}
            · Your payment information is encrypted
          </p>
        </div>
      </div>

      {/* Fixed Bottom Pay Button */}
      <div className="fixed bottom-0 left-0 right-0 px-6 py-5 bg-[#0a0a0a] border-t border-[#1e1e1e] backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <button
            onClick={handlePay}
            disabled={!selected || loading}
            className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 disabled:cursor-not-allowed"
            style={{
              background: selected ? "#D4AF37" : "#2a2a2a",
              color: selected ? "#000" : "#555",
              boxShadow: selected ? "0 4px 24px #D4AF3740" : "none",
              transform: selected ? "translateY(-2px)" : "none",
            }}
          >
            {selected
              ? `Pay ₹${amount.toLocaleString("en-IN")} via ${
                  PAYMENT_METHODS.find((m) => m.id === selected)?.label
                }`
              : "Select a payment method above"}
          </button>
        </div>
      </div>
    </div>
  );
}