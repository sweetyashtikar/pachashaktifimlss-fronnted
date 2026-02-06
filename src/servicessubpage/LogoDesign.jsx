import React from "react";

export default function LogoDesignHero() {
  const services = [
    "Symbol/Iconic Logo",
    "Illustrative Logo",
    "Typographical Logo",
    "Abstract Logo",
    "3D Logo",
  ];

  const works = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
  ];

  return (
    <section className="bg-[#0f172a] text-white">

      {/* ================= HERO SECTION ================= */}
      <div className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1f2937] flex items-center px-8">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-sm mb-4">
              Respoke Visual Identity
            </p>

            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
              The Face of <br />
              <span className="text-yellow-500">Your Brand</span>
            </h1>

            <p className="text-gray-300 mb-8 max-w-md">
              Crafting visual identities that resonate and endure.
              Elegant serif typography with golden accents for modern luxury.
            </p>

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
              Order Now →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/logoDesign.webp"
              alt="Logo Design"
              className="w-[400px] md:w-[500px] drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* ================= POPULAR SERVICES ================= */}
      <div className="py-16 px-6">

        <h2 className="text-3xl text-center mb-12 font-semibold">
          Popular Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-20">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-yellow-500 rounded-xl w-48 h-44 flex items-center justify-center text-center p-4 hover:scale-105 transition"
            >
              <p className="text-yellow-400 font-medium">{item}</p>
            </div>
          ))}

        </div>

        {/* ================= CREATIVE WORKS ================= */}
        <h2 className="text-3xl text-center mb-12 font-semibold">
          Our Creative Logo Design Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {works.map((img, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={img}
                alt="Logo Work"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
