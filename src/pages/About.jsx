import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Award, Users, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-60 px-6 text-center">
          {/* Small Heading */}
          <h2 className="text-2xl md:text-4xl font-light tracking-wide">
            About Us
          </h2>

          {/* Yellow underline */}
          <div className="w-28 h-1 bg-yellow-500 mx-auto mt-4 mb-10 rounded-full" />

          {/* Company Name */}
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-serif tracking-[6px] uppercase mb-6">
            Panch Shakti Films & Studio
          </h1>

          {/* Tagline */}
          <p className="text-gray-400 text-lg md:text-xl mb-14">
            Elevating Your Visual Experience
          </p>

          <br></br>
          <br></br>
          <br></br>

          {/* About Description */}
          <p className="max-w-5xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed tracking-wide text-center">
            <span className="text-white font-medium">
              PANCH SHAKTI FILMS & STUDIO
            </span>{" "}
            is a dynamic creative hub redefining the visual landscape with
            innovation and impact. We specialize in a wide spectrum of
            professional services tailored to meet the unique needs of every
            client. Our expertise spans immersive filmmaking, high-impact
            advertisement production, striking indoor and outdoor model
            photoshoots, and premium product photography for commercial brands.
            With a passion for storytelling and a commitment to quality, we
            transform ideas into powerful visual experiences that captivate,
            inspire, and deliver results.
          </p>
        </section>

        {/* 2nd section */}
        <section className="bg-black py-0 px-6">
          {/* Main Card */}
          <div className="max-w-6xl mx-auto ">
            {/* Tabs */}
            <div className="flex justify-center gap-10 md:gap-24 mb-16 text-center">
              <button
                onClick={() => setActive("vision")}
                className={`relative text-2xl md:text-4xl font-semibold transition duration-300
            ${
              active === "vision"
                ? "text-yellow-500"
                : "text-gray-500 hover:text-white"
            }`}
              >
                Our Vision
                {active === "vision" && (
                  <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-yellow-500 rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActive("mission")}
                className={`relative text-2xl md:text-4xl font-semibold transition duration-300
            ${
              active === "mission"
                ? "text-yellow-500"
                : "text-gray-500 hover:text-white"
            }`}
              >
                Our Mission
                {active === "mission" && (
                  <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-yellow-500 rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActive("value")}
                className={`relative text-2xl md:text-4xl font-semibold transition duration-300
            ${
              active === "value"
                ? "text-yellow-500"
                : "text-gray-500 hover:text-white"
            }`}
              >
                Our Value
                {active === "value" && (
                  <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-yellow-500 rounded-full" />
                )}
              </button>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-300 text-lg md:text-xl leading-9 transition duration-300">
                {active === "vision" &&
                  "To become a leading creative force in the media industry by consistently delivering innovative, visually compelling, and emotionally engaging content. We strive to build lasting relationships with our clients by helping their brands stand out and thrive in a competitive digital world."}

                {active === "mission" &&
                  "To offer complete brand-building solutions through the perfect blend of creativity, strategy, and technical expertise. We produce memorable advertisements across various formats—video, photography, and digital media—along with professional film direction and casting services. Additionally, we provide celebrity management and launch support to ensure impactful brand promotions and sustainable growth.            "}

                {active === "value" &&
                  "We are guided by a commitment to purposeful creativity, client-focused collaboration, and uncompromising quality. By combining artistic vision with strategic thinking, we create impactful visual experiences that align with brand goals. With integrity, innovation, and professionalism at our core, we build trusted partnerships and deliver lasting value."}
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-24 px-6 bg-black overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full" />

          <div className="relative max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              Our Core Values
            </h2>

            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-16 rounded-full"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div
                className="bg-black/80 backdrop-blur rounded-3xl p-8 
                  border border-yellow-500/30 
                  hover:border-[#D4AF37] hover:scale-105 transition
                  flex flex-col items-center text-center"
              >
                <img
                  src="/projectDone.webp"
                  alt="Project Done"
                  className="w-14 h-14 mb-6"
                />
                <h3 className="text-4xl font-bold mb-3">1.5K +</h3>
                <p className="text-gray-400 text-lg">Project Done</p>
              </div>

              {/* Card 2 */}
              <div
                className="bg-black/80 backdrop-blur rounded-3xl p-8 
                  border border-yellow-500/30 
                  hover:border-[#D4AF37] hover:scale-105 transition
                  flex flex-col items-center text-center"
              >
                <img
                  src="/trustedClient.webp"
                  alt="Trusted Clients"
                  className="w-14 h-14 mb-6"
                />
                <h3 className="text-4xl font-bold mb-3">1K +</h3>
                <p className="text-gray-400 text-lg">Trusted Clients</p>
              </div>

              {/* Card 3 */}
              <div
                className="bg-black/80 backdrop-blur rounded-3xl p-8 
                  border border-yellow-500/30 
                  hover:border-[#D4AF37] hover:scale-105 transition
                  flex flex-col items-center text-center"
              >
                <img
                  src="/happyCustomer.webp"
                  alt="Happy Customer"
                  className="w-14 h-14 mb-6"
                />
                <h3 className="text-4xl font-bold mb-3">12 +</h3>
                <p className="text-gray-400 text-lg">Happy Customer</p>
              </div>

              {/* Card 4 */}
              <div
                className="bg-black/80 backdrop-blur rounded-3xl p-8 
                  border border-yellow-500/30 
                  hover:border-[#D4AF37] hover:scale-105 transition
                  flex flex-col items-center text-center"
              >
                <img
                  src="/customerSupport.webp"
                  alt="Customer Support"
                  className="w-14 h-14 mb-6"
                />
                <h3 className="text-4xl font-bold mb-3">24/7</h3>
                <p className="text-gray-400 text-lg">Customers Support</p>
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        <section className="bg-black text-white py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-5xl font-bold mb-4">Our Teams</h2>
            <p className="text-xl mb-16">
              <span className="text-yellow-500 font-semibold">
                Meet the Visionaries
              </span>{" "}
              Behind the Lens
            </p>

            {/* Outer Border co-fonder */}
            <div
              className="
    relative
    p-16
    border border-yellow-500/0
    rounded-[40px]
    transition-all duration-500
    hover:border-yellow-500
    hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
  "
            >
              {/* Section Title */}
              <h3 className="text-3xl font-semibold mb-12">
                Founder Co-Founder
              </h3>

              {/* Cards Grid (GAP FIXED HERE) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 justify-items-center">
                {/* ================= CARD 1 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/vaibhavJain.webp"
                    alt="Vaibhav Jain"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Vaibhav Jain</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      Founder & CEO
                    </p>
                  </div>
                </div>

                {/* ================= CARD 2 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/namrata.webp"
                    alt="Namrata Sancheti"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Namrata Sancheti</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      Co-Founder (JSPM Narhe)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <h2 className="text-4xl font-bold mb-12">Personal Assistance</h2>

            {/* Outer Yellow Border Personal Assistance */}
            <div
              className="
        relative
        p-16
        border border-yellow-500/0
        rounded-[40px]
        transition-all duration-500
        hover:border-yellow-500
        hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
      "
            >
              {/* Card Wrapper (CENTER) */}
              <div className="flex justify-center">
                {/* ================= CARD ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  {/* Image */}
                  <img
                    src="/rutuja.webp"
                    alt="Rutija"
                    className="
              w-full h-[320px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  {/* Info */}
                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Rutija</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      Personal Assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br></br>

            <h2 className="text-4xl font-bold mb-12">Website Developer</h2>

            {/* Outer Yellow Border  Website Developer*/}
            <div
              className="
        relative
        p-16
        border border-yellow-500/0
        rounded-[40px]
        transition-all duration-500
        hover:border-yellow-500
        hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
      "
            >
              {/* Card Wrapper (CENTER) */}
              <div className="flex justify-center">
                {/* ================= CARD ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  {/* Image */}
                  <img
                    src="/alok.webp"
                    alt="Alok"
                    className="
              w-full h-[320px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  {/* Info */}
                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Alok (JSPM Nahre)</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      (Fronted Developer)MD
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outer Yellow Border  UI UX Designer*/}

            <div
              className="
    relative
    p-16
    border border-yellow-500/0
    rounded-[40px]
    transition-all duration-500
    hover:border-yellow-500
    hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
  "
            >
              {/* Section Title */}
              <h3 className="text-3xl font-semibold mb-12">UI UX Designer</h3>

              {/* Cards Grid (GAP FIXED HERE) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 justify-items-center">
                {/* ================= CARD 1 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/shrushti.webp"
                    alt="Shrushti"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Srushti</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      UI UX Designer
                    </p>
                  </div>
                </div>

                {/* ================= CARD 2 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/namita.webp"
                    alt="Namita "
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Namita</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      UI UX Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outer Yellow Border Graphics Designers*/}

            <div
              className="
    relative
    p-16
    border border-yellow-500/0
    rounded-[40px]
    transition-all duration-500
    hover:border-yellow-500
    hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
  "
            >
              {/* Section Title */}
              <h3 className="text-3xl font-semibold mb-12">
                Graphics Designers
              </h3>

              {/* Cards Grid (GAP FIXED HERE) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 justify-items-center">
                {/* ================= CARD 1 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/saniya.webp"
                    alt="Saniya"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Saniya</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      3D Designer
                    </p>
                  </div>
                </div>

                {/* ================= CARD 2 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/kanchan.webp"
                    alt="Kanchan"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Kanchan</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      Jr. Graphics Designer
                    </p>
                  </div>
                </div>

                {/* ================= CARD 3 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/kaveri.webp"
                    alt="Kaveri"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Kaveri</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      Graphics Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outer Yellow Border  App Developer */}
            <h2 className="text-4xl font-bold mb-12">App Developer</h2>
            <div
              className="
        relative
        p-16
        border border-yellow-500/0
        rounded-[40px]
        transition-all duration-500
        hover:border-yellow-500
        hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
      "
            >
              {/* Card Wrapper (CENTER) */}
              <div className="flex justify-center">
                {/* ================= CARD ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  {/* Image */}
                  <img
                    src="/savita.webp"
                    alt="Savita"
                    className="
              w-full h-[320px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  {/* Info */}
                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Savita</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      App Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

              {/* Outer Yellow Border Software Developers*/}

            <div
              className="
    relative
    p-16
    border border-yellow-500/0
    rounded-[40px]
    transition-all duration-500
    hover:border-yellow-500
    hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
  "
            >
              {/* Section Title */}
              <h3 className="text-3xl font-semibold mb-12">
                Software Developers
              </h3>

              {/* Cards Grid (GAP FIXED HERE) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 justify-items-center">
                {/* ================= CARD 1 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/dipeeka.webp"
                    alt="Dipeeka"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Dipika
</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                     Data Scientist
                    </p>
                  </div>
                </div>

                {/* ================= CARD 2 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/tejaswin.webp"
                    alt="Tejaswin"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Tejaswin</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                     Data Scientist
                    </p>
                  </div>
                </div>

                {/* ================= CARD 3 ================= */}
                <div
                  className="
            group bg-white text-black rounded-3xl overflow-hidden
            w-[320px]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
          "
                >
                  <img
                    src="/pravalika.webp"
                    alt="Pravalika"
                    className="
              w-full h-[300px] object-cover
              grayscale
              transition-all duration-500
              group-hover:grayscale-0
            "
                  />

                  <div
                    className="
              text-center py-6
              bg-gray-200
              transition-all duration-500
              group-hover:bg-yellow-400
            "
                  >
                    <h4 className="text-xl font-bold">Pravalika</h4>
                    <p className="text-sm text-gray-700 group-hover:text-black">
                      Data Scientist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

   
      </div>
    </div>
  );
};

export default About;
