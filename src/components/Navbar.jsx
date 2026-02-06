import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import bgImg from "../assets/back.webp";
export default function Navbar() {
    return (
        <>
            <nav className="relative w-full">

                <div
                    className="absolute inset-0 w-full h-full -z-10"
                >
                    <img src={bgImg} alt="Navbar Background" className="absolute inset-0 w-full h-full object-cover opacity-10 -z-20" />
                </div>

                {/* 🔶 Top Gradient Rectangle */}
                <div
                    className="absolute left-0 w-full h-[53px] z-40"
                    style={{
                        top: "0px",
                        background:
                            "linear-gradient(90deg, #FFD14D 0%, rgba(248,188,12,0.737255) 23.21%, #FCC72E 45.16%, #F8BC0C 73.03%, #FFD14D 100%)",
                    }}
                />

                {/* 🔷 Navbar Body */}
                <div
                    className="absolute left-0 w-full z-50"
                    style={{ top: "50px" }}
                >
                    <div className="max-w-[1440px] mx-auto px-[60px] flex items-center justify-between">

                        {/* 🟡 Logo */}
                        <img
                            src={logo}
                            alt="PSFS Logo"
                            className="w-[105px] h-[118px] object-contain cursor-pointer"
                        />

                        {/* 🔵 Center Menu (Multi-links) */}
                        <ul className="flex items-center gap-[48px] text-white text-xl font-medium">
                            <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
                            <NavLink to="/about" className="hover:text-yellow-400">About Us</NavLink>

                            <NavLink to="/services" className="hover:text-yellow-400">Services</NavLink>
                            <NavLink to="/work" className="hover:text-yellow-400">Our Work</NavLink>
                            <NavLink to="/blog" className="hover:text-yellow-400">Blog</NavLink>
                            <NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink>
                        </ul>

                        {/* 🟠 Register / Login Button */}
                        <button
                            className="flex items-center justify-center
                       px-[26px] py-[4px]
                       w-[200px] h-[60px]
                       border border-white text-white
                       rounded-full text-xl
                       hover:bg-yellow-500 hover:text-black hover:border-yellow-500
                       transition"
                        >
                            <NavLink to='/register'>
                            Register / Login
                            </NavLink>
                        </button>

                    </div>
                </div>
            </nav>



        </>


    );
}
