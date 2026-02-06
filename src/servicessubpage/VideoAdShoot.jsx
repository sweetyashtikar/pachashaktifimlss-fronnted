import React from "react";
import { Film, CheckCircle } from "lucide-react";

export default function VideoAdShoot() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=600&fit=crop"
          alt="Video Ad Shoot"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center text-[#D4AF37] mb-4">
            <Film className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Video Ad Shoot</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Professional commercial video production for TV, digital platforms, and social media.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* Features List */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">Our Services</h2>

          <ul className="space-y-4">
            {[
              "Concept development",
              "Professional crew",
              "Location shoots",
              "Post-production",
              "Multi-platform delivery"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="text-[#D4AF37] w-6 h-6" />
                <span className="text-lg text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Card */}
        <div className="bg-[#0f0f0f] border border-[#D4AF37] rounded-3xl p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Film className="text-[#D4AF37] w-7 h-7" />
              <h3 className="text-2xl font-bold">Production Investment</h3>
            </div>

            <p className="text-4xl font-bold text-[#4A9EFF] mb-2">
              ₹75,000 – ₹7,50,000
            </p>
            <p className="text-gray-500 mb-8">Per Video</p>
          </div>

          <div className="space-y-4">
            <button className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-semibold hover:scale-105 transition">
              Book Your Video Shoot
            </button>

            <button className="w-full py-4 rounded-xl border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-black transition">
              Get Free Consultation
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
