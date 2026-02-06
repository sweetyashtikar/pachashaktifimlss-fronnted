import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";

/* ===== COMMON PAGE WRAPPER ===== */
const PageWrapper = ({ children }) => (
  <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
    {children}
  </div>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error();

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        comments: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="py-60 bg-gradient-to-b from-gray-900 to-black">
        <PageWrapper>
          <h1 className="text-5xl font-bold text-center">
            Contact Us
          </h1>
        </PageWrapper>
      </section>

      {/* ================= FULL WIDTH MAP ================= */}
      <section className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps?q=Panchtirth+Annex+Kondhwa+Pune&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24">
        <PageWrapper>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* ===== LEFT INFO ===== */}
            <div className="space-y-16">

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-yellow-500 w-7 h-7" />
                  <h3 className="text-3xl font-bold">Address</h3>
                </div>

                <h4 className="text-yellow-500 font-semibold text-lg mb-2">
                  PANCH SHAKTI
                </h4>

                <p className="text-gray-400 max-w-md leading-relaxed">
                  Panchtirth Annex, B – 403 Opp. Gopinath Munde
                  Vyayamshala, Nr. V.I.I.T College,
                  Kondhwa (BK), Pune – 411048
                </p>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-yellow-500 w-7 h-7" />
                  <h3 className="text-3xl font-bold">Contact</h3>
                </div>

                <a
                  href="tel:+918888868698"
                  className="text-gray-300 text-xl hover:text-yellow-500 transition"
                >
                  +91 8888 8686 98
                </a>
              </div>
            </div>

            {/* ===== RIGHT FORM ===== */}
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Let’s <span className="text-yellow-500">Talk</span>
              </h2>

              <p className="text-gray-400 mb-10">
                Our team is here round-the-clock,
                ready to respond to all your inquiries
              </p>

              <div className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Full Name Here..."
                  className="w-full px-6 py-4 bg-transparent border border-yellow-500/30 rounded-full focus:border-yellow-500 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number..."
                  className="w-full px-6 py-4 bg-transparent border border-yellow-500/30 rounded-full focus:border-yellow-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Here..."
                  className="w-full px-6 py-4 bg-transparent border border-yellow-500/30 rounded-full focus:border-yellow-500 outline-none"
                />

                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter Your Comments..."
                  className="w-full px-6 py-4 bg-transparent border border-yellow-500/30 rounded-3xl focus:border-yellow-500 outline-none resize-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>
      <section className="py-12">
  <PageWrapper>
    <div className="grid md:grid-cols-3 gap-8">

      {/* Support */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]
                rounded-2xl px-6 py-6 text-center
                shadow-lg
                hover:scale-105 transition duration-300">

        <h3 className="text-yellow-500 text-3xl font-bold mb-4">
          Support
        </h3>
        <a
          href="mailto:support@panchshaktifilms.com"
          className="text-gray-300 text-lg hover:text-yellow-500 transition"
        >
          support@panchshaktifilms.com
        </a>
      </div>

      {/* Enquiry */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]
                rounded-2xl px-6 py-6 text-center
                shadow-lg
                hover:scale-105 transition duration-300">

        <h3 className="text-yellow-500 text-3xl font-bold mb-4">
          Enquiry
        </h3>
        <a
          href="mailto:enquiry@panchshaktifilms.com"
          className="text-gray-300 text-lg hover:text-yellow-500 transition"
        >
          enquiry@panchshaktifilms.com
        </a>
      </div>

      {/* Jobs */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]
                rounded-2xl px-6 py-6 text-center
                shadow-lg
                hover:scale-105 transition duration-300">

        <h3 className="text-yellow-500 text-3xl font-bold mb-4">
          Jobs
        </h3>
        <a
          href="mailto:jobs@panchshaktifilms.com"
          className="text-gray-300 text-lg hover:text-yellow-500 transition"
        >
          jobs@panchshaktifilms.com
        </a>
      </div>

    </div>
  </PageWrapper>
</section>
    </div>
  );
}
