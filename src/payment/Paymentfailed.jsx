// ─────────────────────────────────────────────────
// pages/PaymentFailed.jsx
// ─────────────────────────────────────────────────
// Backend कडून आलेला reason दाखrav

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, RotateCcw, ArrowLeft, Phone } from "lucide-react";

export default function PaymentFailed() {
  const navigate = useNavigate();
  const location = useLocation();

  // ── Backend कडून आलेला data ──
  const amount  = location.state?.amount  || 35000;
  const orderId = location.state?.orderId || null;
  const method  = location.state?.method  || "upi";
  const reason  = location.state?.reason  || "Payment failed. Please try again.";  // backend कडून आलेला reason

  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 800);
    const t3 = setTimeout(() => setStage(3), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const methodLabels = { qr: "QR Code", upi: "UPI", credit: "Credit Card", debit: "Debit Card" };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">

      {/* ── Animated fail icon ── */}
      <div className="mt-24 mb-8 relative flex items-center justify-center">
        {stage >= 1 && (
          <>
            <div className="absolute rounded-full border border-[#ef4444] opacity-0" style={{ width: 140, height: 140, animation: "pulseRingRed 2s ease-out infinite" }} />
            <div className="absolute rounded-full border border-[#ef4444] opacity-0" style={{ width: 140, height: 140, animation: "pulseRingRed 2s ease-out 0.4s infinite" }} />
          </>
        )}

        <div
          className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500"
          style={{
            background: stage >= 1 ? "#ef444418" : "transparent",
            border: `3px solid ${stage >= 1 ? "#ef4444" : "#1e1e1e"}`,
            transform: stage >= 1 ? "scale(1)" : "scale(0.6)",
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          {stage >= 2 && (
            <X className="text-[#ef4444]" style={{ width: 40, height: 40, strokeWidth: 3, opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? "scale(1)" : "scale(0.5)", transition: "all 0.3s ease" }} />
          )}
        </div>
      </div>

      {/* ── Heading ── */}
      <div className="text-center px-6 transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transform: stage >= 3 ? "translateY(0)" : "translateY(12px)" }}>
        <h1 className="text-3xl font-bold text-white mb-1">Payment Failed</h1>
        <p className="text-gray-500 text-sm">Your transaction could not be completed</p>
      </div>

      {/* ── Amount ── */}
      <div className="mt-8 text-center transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transitionDelay: "100ms" }}>
        <p className="text-4xl font-bold text-[#ef4444]">₹{amount.toLocaleString()}</p>
        <p className="text-gray-600 text-sm mt-1">Attempted via {methodLabels[method] || method}</p>
      </div>

      {/* ── Error detail card ── */}
      <div className="w-full max-w-sm mx-auto mt-10 px-6 transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transitionDelay: "200ms" }}>
        <div className="bg-[#111] border border-[#2a2020] rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#2a2020] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <p className="text-xs text-[#ef4444] uppercase tracking-widest font-semibold">Error Details</p>
          </div>

          {/* Reason — from backend */}
          <div className="px-5 py-4 border-b border-[#1a1a1a]">
            <p className="text-xs text-gray-500 mb-1">Reason</p>
            <p className="text-sm text-gray-300">{reason}</p>
          </div>

          {[
            { label: "Order ID", value: orderId ? (orderId.length > 24 ? orderId.slice(0, 24) + "…" : orderId) : "N/A" },
            { label: "Method",   value: methodLabels[method] || method },
            { label: "Status",   value: "Failed" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a]">
              <span className="text-xs text-gray-500">{row.label}</span>
              <span className="text-xs font-mono" style={{ color: row.label === "Status" ? "#ef4444" : "#999" }}>{row.value}</span>
            </div>
          ))}

          <div className="px-5 py-4 bg-[#0f0f0f]">
            <p className="text-xs text-gray-600">If you were charged, the amount will be refunded within 3–5 business days automatically.</p>
          </div>
        </div>

        <button className="w-full mt-4 py-3 rounded-xl border border-[#2a2a2a] text-gray-400 text-sm flex items-center justify-center gap-2 hover:border-[#ef4444] hover:text-[#ef4444] transition-colors">
          <Phone className="w-4 h-4" /> Contact Support
        </button>
      </div>

      {/* ── Action buttons ── */}
      <div className="w-full max-w-sm mx-auto mt-8 px-6 pb-10 flex flex-col gap-3 transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transitionDelay: "300ms" }}>
        {/* Retry — new order create kar ani method select page par ja */}
        <button
          onClick={() => navigate("/services/3d-graphics")}
          className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-semibold text-sm flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> Retry Payment
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-xl border border-[#2a2a2a] text-gray-300 text-sm flex items-center justify-center gap-2 hover:border-[#D4AF37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>

      <style>{`@keyframes pulseRingRed { 0% { transform: scale(0.85); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }`}</style>
    </div>
  );
}