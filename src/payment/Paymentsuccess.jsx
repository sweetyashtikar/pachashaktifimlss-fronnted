// ─────────────────────────────────────────────────
// pages/PaymentSuccess.jsx
// ─────────────────────────────────────────────────
// Backend कडून आलेला data दाखrav (paymentId, orderId, etc.)

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Check, Download, Home, ArrowRight } from "lucide-react";

export default function PaymentSuccess() {
  const navigate  = useNavigate();
  const location  = useLocation();

  // ── Backend कडून आलेला data (PaymentMethodSelect ने state मध्ये pass केला) ──
  const amount    = location.state?.amount    || 35000;
  const orderId   = location.state?.orderId   || "N/A";
  const paymentId = location.state?.paymentId || "N/A";
  const method    = location.state?.method    || "upi";

  // ── Animate in stages ──
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 800);
    const t3 = setTimeout(() => setStage(3), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const methodLabels = { qr: "QR Code", upi: "UPI", credit: "Credit Card", debit: "Debit Card" };

  const now     = new Date();
  const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">

      {/* ── Animated success icon ── */}
      <div className="mt-24 mb-8 relative flex items-center justify-center">
        {stage >= 1 && (
          <>
            <div className="absolute rounded-full border border-[#34d399] opacity-0" style={{ width: 140, height: 140, animation: "pulseRing 2s ease-out infinite" }} />
            <div className="absolute rounded-full border border-[#34d399] opacity-0" style={{ width: 140, height: 140, animation: "pulseRing 2s ease-out 0.4s infinite" }} />
          </>
        )}

        <div
          className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500"
          style={{
            background: stage >= 1 ? "#34d39918" : "transparent",
            border: `3px solid ${stage >= 1 ? "#34d399" : "#1e1e1e"}`,
            transform: stage >= 1 ? "scale(1)" : "scale(0.6)",
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          {stage >= 2 && (
            <Check className="text-[#34d399]" style={{ width: 44, height: 44, strokeWidth: 3, opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? "scale(1)" : "scale(0.5)", transition: "all 0.3s ease" }} />
          )}
        </div>
      </div>

      {/* ── Heading ── */}
      <div className="text-center px-6 transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transform: stage >= 3 ? "translateY(0)" : "translateY(12px)" }}>
        <h1 className="text-3xl font-bold text-white mb-1">Payment Successful</h1>
        <p className="text-gray-500 text-sm">Your transaction is confirmed</p>
      </div>

      {/* ── Amount ── */}
      <div className="mt-8 text-center transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transitionDelay: "100ms" }}>
        <p className="text-5xl font-bold text-[#34d399]">₹{amount.toLocaleString()}</p>
        <p className="text-gray-600 text-sm mt-1">Paid via {methodLabels[method] || method}</p>
      </div>

      {/* ── Receipt card ── */}
      <div className="w-full max-w-sm mx-auto mt-10 px-6 transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transitionDelay: "200ms" }}>
        <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Receipt</p>
          </div>

          {[
            { label: "Project",    value: "3D Graphics — Premium" },
            { label: "Order ID",   value: orderId.length > 24 ? orderId.slice(0, 24) + "…" : orderId },
            { label: "Payment ID", value: paymentId.length > 24 ? paymentId.slice(0, 24) + "…" : paymentId },
            { label: "Method",     value: methodLabels[method] || method },
            { label: "Date",       value: dateStr },
            { label: "Time",       value: timeStr },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a]">
              <span className="text-xs text-gray-500">{row.label}</span>
              <span className="text-xs text-gray-300 font-mono">{row.value}</span>
            </div>
          ))}

          <div className="flex items-center justify-between px-5 py-4 bg-[#0f0f0f]">
            <span className="text-sm text-gray-400 font-semibold">Total Paid</span>
            <span className="text-sm text-[#34d399] font-bold">₹{amount.toLocaleString()}</span>
          </div>
        </div>

        <button className="w-full mt-4 py-3 rounded-xl border border-[#2a2a2a] text-gray-400 text-sm flex items-center justify-center gap-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
          <Download className="w-4 h-4" /> Download Receipt
        </button>
      </div>

      {/* ── Action buttons ── */}
      <div className="w-full max-w-sm mx-auto mt-8 px-6 pb-10 flex flex-col gap-3 transition-all duration-500" style={{ opacity: stage >= 3 ? 1 : 0, transitionDelay: "300ms" }}>
        <button onClick={() => navigate("/")} className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-semibold text-sm flex items-center justify-center gap-2">
          <Home className="w-4 h-4" /> Go to Home
        </button>
        <button onClick={() => navigate("/services/3d-graphics")} className="w-full py-3 rounded-xl border border-[#2a2a2a] text-gray-300 text-sm flex items-center justify-center gap-2 hover:border-[#D4AF37] transition-colors">
          Explore More Services <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <style>{`@keyframes pulseRing { 0% { transform: scale(0.85); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }`}</style>
    </div>
  );
}