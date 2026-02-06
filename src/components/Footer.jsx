import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Outer Glow Container */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-b from-[#141414] to-[#0a0a0a] 
                        rounded-3xl p-16
                        shadow-[0_0_60px_rgba(255,193,7,0.15)]">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* ===== Logo + Policies ===== */}
            <div>
            <img src="/footer.webp" alt="Footer Logo" className="w-52 h-26" />

              <ul className="space-y-6 text-lg">
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-300 hover:text-yellow-500 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#refund"
                    className="text-gray-300 hover:text-yellow-500 transition"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* ===== Quick Links ===== */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">
                Quick Links
              </h3>

              <ul className="space-y-5 text-lg">
                {["Home", "Services", "Our Work", "About Us", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-gray-300 hover:text-yellow-500 transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ===== Social Media ===== */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-400 mb-8">
                Follow Us On Social Media:
              </p>

              <div className="flex gap-5">
                {[
                  { icon: Linkedin, link: "#" },
                  { icon: Facebook, link: "#" },
                  { icon: Youtube, link: "#" },
                  { icon: Instagram, link: "#" },
                  { icon: "x", link: "#" },
                ].map((item, i) =>
                  item.icon === "x" ? (
                    <a
                      key={i}
                      href={item.link}
                      className="w-12 h-12 rounded-full border border-yellow-500
                                 flex items-center justify-center
                                 text-yellow-500
                                 hover:bg-yellow-500 hover:text-black
                                 transition"
                    >
                      X
                    </a>
                  ) : (
                    <a
                      key={i}
                      href={item.link}
                      className="w-12 h-12 rounded-full border border-yellow-500
                                 flex items-center justify-center
                                 text-yellow-500
                                 hover:bg-yellow-500 hover:text-black
                                 transition"
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16">
          <div className="h-[1px] w-full bg-yellow-500 mb-8" />
          <p className="text-center text-gray-500 text-lg tracking-wide">
            © 2024 PANCH SHAKTI FILMS & STUDIO | Powered by PANCH SHAKTI FILMS & STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
