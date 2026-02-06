import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function CelebrityManagement() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop"
          alt="Celebrity Management"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center text-[#D4AF37] mb-4">
            <Star className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Celebrity Management
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            End-to-end celebrity management services including brand endorsements,
            PR, event appearances, and career development.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">
            What We Offer
          </h2>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#D4AF37] w-6 h-6" />
              <span className="text-lg text-gray-300">Brand endorsements</span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#D4AF37] w-6 h-6" />
              <span className="text-lg text-gray-300">PR & publicity</span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#D4AF37] w-6 h-6" />
              <span className="text-lg text-gray-300">Event management</span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#D4AF37] w-6 h-6" />
              <span className="text-lg text-gray-300">Career guidance</span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#D4AF37] w-6 h-6" />
              <span className="text-lg text-gray-300">Contract negotiations</span>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="bg-[#0f0f0f] border border-[#D4AF37] rounded-3xl p-10">
          <h3 className="text-2xl font-bold mb-6">Monthly Investment</h3>

          <p className="text-4xl font-bold text-[#4A9EFF] mb-2">
            ₹50,000 - ₹5,00,000
          </p>
          <p className="text-gray-500 mb-8">Per Month</p>

          <div className="space-y-4">
            <button className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-semibold hover:scale-105 transition">
              Get Free Consultation
            </button>

            <button className="w-full py-4 rounded-xl border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-black transition">
              WhatsApp Us Now
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
