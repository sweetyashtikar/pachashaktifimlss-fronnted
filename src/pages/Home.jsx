import React from "react";
import bgImg from "../assets/back.webp";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Send } from "lucide-react";

export default function Home() {


    type Testimonial = {
        id: number;
        text: string;
        name: string;
        location: string;
        image: string;
        active?: boolean;
    };

    const testimonials: Testimonial[] = [
        {
            id: 1,
            text:
                "Their Service make me happy because they solutions for your Business and we create ideas and solution for your problem and make growth Solutions offer range of services to their and I am really happy with their service.",
            name: "Arnav Shah",
            location: "Mumbai, India",
            image: "/images/user1.jpg",
            active: true,
        },
        {
            id: 2,
            text:
                "Their Service make me happy because they solutions for your Business and we create ideas and solution for your problem and make growth Solutions offer range of services.",
            name: "Shruti Sinha",
            location: "Pune, India",
            image: "/images/user2.jpg",
        },
        {
            id: 3,
            text:
                "Their Service make me happy because they solutions for your Business and we create ideas and solution for your problem and make growth Solutions offer range of services to their and I am really happy with their service.",
            name: "K. Nishant",
            location: "Bengaluru, India",
            image: "/images/user3.jpg",
        },
    ];


    const sliderRef = useRef(null);

    const scroll = (dir) => {
        sliderRef.current.scrollBy({
            left: dir === "left" ? -320 : 320,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* // section 1  HerSection*/}
            <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
                {/* Background Image */}
                <img
                    src={bgImg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* Side Vignette Effect (important for exact look) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl px-12 text-white mt-40">
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-wide">
                        Crafting Visual Stories
                        <br />
                        That Inspire...
                    </h1>

                    {/* Button */}
                    <button
                        className="
    mt-10 px-12 py-4
    rounded-full text-xl font-medium
    flex items-center gap-3 mx-auto
    transition-all duration-300

    /* Default Gradient (1st image) */
    bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600
    text-black border-2 border-transparent

    /* Hover → Outline (2nd image) */
hover:bg-black
    hover:text-white
    hover:border-yellow-500
  "
                    >
                        Explore Services
                        <span className="text-2xl">→</span>
                    </button>
                </div>
            </section>
            {/* // section 2 3 img*/}

            <section className="bg-black py-20 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Heading Text */}
                    <p className="text-lg md:text-3xl font-semibold leading-relaxed max-w-4xl mx-auto text-gray-200">
                        Welcome to Panch Shakti Films & Studio — where creativity meets
                        strategy. From cinematic films to bold branding and high-impact
                        photoshoots, we turn ideas into unforgettable visuals.
                    </p>

                    {/* Card */}

                    <img
                        src="/four.webp"
                        alt="Amazing Value"
                        className="w-180 h-180 object-contain mt-2 mb-2 py-4 mx-auto"
                    />
                </div>
            </section>

            {/* // section 3 services*/}

            <section className="bg-black py-24 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
                        Popular Services
                    </h2>

                    {/* Slider Wrapper */}
                    <div className="relative">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                   w-9 h-9 border border-yellow-400 text-yellow-400 rounded-full"
                        >
                            ‹
                        </button>

                        {/* Slider */}
                        <div
                            ref={sliderRef}
                            className="
          flex gap-4 
          overflow-x-scroll 
          scroll-smooth 
          px-12
          no-scrollbar
        "
                        >
                            {/* Card */}
                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Model Photoshoot
                                </h3>
                                <img
                                    src="/modelPhotoshoot.webp"
                                    className="rounded-xl w-full h-46 object-cover"
                                    alt=""
                                />
                            </div>

                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Voice Over
                                </h3>
                                <img
                                    src="/voice.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>

                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Music Albums Shoot
                                </h3>
                                <img
                                    src="/musicAlbumShoot.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>

                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Social Media & Digital Marketing
                                </h3>
                                <img
                                    src="/socialMedia.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>

                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Product Ad Shoot
                                </h3>
                                <img
                                    src="/product.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>

                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Casting & Modelling Platform
                                </h3>
                                <img
                                    src="/castingModelling.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>

                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Corporate Branding
                                </h3>
                                <img
                                    src="/corporateBranding.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>
                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Video Ad Shoot
                                </h3>
                                <img
                                    src="/videoAdShoots.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>
                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Website Development
                                </h3>
                                <img
                                    src="/websiteDevelopment.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>
                            <div className="min-w-[180px] border border-yellow-400 rounded-2xl p-3 bg-[#0d0d0d]">
                                <h3 className="text-yellow-400 font-semibold mb-2">
                                    Celebrity Management
                                </h3>
                                <img
                                    src="/celebMgmt.webp"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
                   w-9 h-9 border border-yellow-400 text-yellow-400 rounded-full"
                        >
                            ›
                        </button>
                    </div>
                </div>

                {/* Button */}
                <NavLink to="/services">
                    <button
                        className="
      mt-10 px-12 py-4
      rounded-full text-xl font-medium
      flex items-center gap-3 mx-auto
      transition-all duration-300

      bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600
      text-black border-2 border-transparent

      hover:bg-black
      hover:text-white
      hover:border-yellow-500
    "
                    >
                        View All Services
                        <span className="text-2xl">→</span>
                    </button>
                </NavLink>
            </section>

            {/* // section 4 ads*/}

            <section className="bg-black text-white py-16 px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-semibold mb-10">Our Ad Work</h2>


            </section>


            {/* // section 5 testimonial*/}

            <section className="bg-black py-20 px-6">
                {/* Heading */}
                <h2 className="text-4xl text-white text-center font-medium mb-14">
                    Testimonials
                </h2>

                {/* Cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className={`bg-[#15191f] rounded-2xl p-8 relative transition
              ${item.active ? "border border-yellow-500" : "border border-transparent"}
            `}
                        >
                            {/* Text */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                {item.text}
                            </p>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-sm">★</span>
                                ))}
                            </div>

                            {/* User */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="text-gray-400 text-sm">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* // section 6 newsletter*/}

            <section className="relative bg-black py-28 px-6 flex justify-center items-center overflow-hidden">

                {/* Background big text */}
                <h1 className="absolute text-[120px] md:text-[160px] font-bold text-white/5 select-none">
                    Newsletter
                </h1>

                {/* Input Box */}
                <div className="relative w-full max-w-3xl">
                    <div className="flex items-center bg-[#11151a] border border-gray-700 rounded-full p-2 shadow-xl">

                        {/* Input */}
                        <input
                            type="email"
                            placeholder="Enter your Email Address"
                            className="flex-1 bg-transparent outline-none px-6 py-4 text-gray-300 placeholder-gray-500"
                        />

                        {/* Button */}
                        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition">
                            <Send size={18} />
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>


        </>
    );
}
