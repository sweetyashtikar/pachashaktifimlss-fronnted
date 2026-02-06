import React, { useState } from "react";
import { Film, CheckCircle, Loader2, Mail, Phone, MapPin, Clock, Send, X, CreditCard } from "lucide-react";

export default function CastingAgency() {
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const packages = [
    { 
      name: "Consultation", 
      amount: 1, 
      description: "Free initial consultation",
      features: ["30-min consultation", "Project feasibility analysis", "Basic planning"]
    },
    { 
      name: "Basic", 
      amount: 2, 
      description: "Basic casting services",
      features: ["Talent scouting", "Initial auditions", "Location recce", "Basic crew coordination"]
    },
    { 
      name: "Premium", 
      amount: 3, 
      description: "Complete production package",
      features: ["Full casting services", "Production management", "Director coordination", "Post-production support"]
    },
    { 
      name: "Enterprise", 
      amount: 4, 
      description: "Full-scale production",
      features: ["End-to-end production", "A-list talent access", "International locations", "Complete post-production"]
    }
  ];

  // Package select karun payment modal open kara
  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setShowPaymentModal(true);
  };

  // Modal close kara
  const closeModal = () => {
    setShowPaymentModal(false);
    setSelectedPackage(null);
    setCustomerInfo({ name: "", email: "", phone: "" });
  };

  // Payment process kara
  const processPayment = async () => {
    // Validation
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert("⚠️ Please fill all customer details!");
      return;
    }

    setLoading(true);

    try {
      // 1. Backend la order create karnyasathi request pathav
      const orderResponse = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          amount: selectedPackage.amount,
          projectType: selectedPackage.name.toLowerCase(),
          email: customerInfo.email,
          contact: customerInfo.phone,
          notes: { 
            description: selectedPackage.description,
            customerName: customerInfo.name
          }
        })
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error(orderData.message);
      }

      // Modal close kara
      setShowPaymentModal(false);

      // 2. Razorpay Payment Gateway Initialize kara
      const options = {
        key: orderData.data.keyId,
        amount: orderData.data.amount,
        currency: orderData.data.currency,
        name: "Panch Shakti Production",
        description: selectedPackage.description,
        image: "https://via.placeholder.com/150",
        order_id: orderData.data.orderId,
        
        // Payment successful zalyavar
        handler: async function (response) {
          try {
            // 3. Backend la payment verify karnyasathi request pathav
            const verifyResponse = await fetch("http://localhost:5000/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              alert(`✅ Payment Successful!\n\nPackage: ${selectedPackage.name}\nAmount: ₹${selectedPackage.amount.toLocaleString()}\nPayment ID: ${response.razorpay_payment_id}\n\nCheck your email for confirmation.`);
            } else {
              alert("❌ Payment verification failed! Please contact support.");
            }
          } catch (error) {
            alert("❌ Verification error: " + error.message);
          } finally {
            setLoading(false);
            setSelectedPackage(null);
            setCustomerInfo({ name: "", email: "", phone: "" });
          }
        },
        
        // Pre-fill customer details
        prefill: {
          name: customerInfo.name,
          email: customerInfo.email,
          contact: customerInfo.phone
        },
        
        // Theme customization
        theme: {
          color: "#D4AF37"
        },
        
        // Payment modal dismissed/closed
        modal: {
          ondismiss: function() {
            setLoading(false);
            alert("⚠️ Payment cancelled!");
          }
        }
      };

      // Razorpay window open kara
      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
      alert("❌ Error: " + error.message);
      setLoading(false);
      setShowPaymentModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop"
          alt="Casting Agency"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center text-[#D4AF37] mb-4">
            <Film className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Casting Agency / Director Producer
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Professional casting services for films, TV shows, commercials, and
            web series. Complete production management and direction services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#D4AF37]">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0f0f0f] border border-[#D4AF37]/30 rounded-xl p-6 hover:border-[#D4AF37] transition">
            <CheckCircle className="text-[#D4AF37] w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Talent Scouting</h3>
            <p className="text-gray-400">Professional auditions and talent discovery for your projects</p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#D4AF37]/30 rounded-xl p-6 hover:border-[#D4AF37] transition">
            <CheckCircle className="text-[#D4AF37] w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Production Management</h3>
            <p className="text-gray-400">End-to-end production coordination and execution</p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#D4AF37]/30 rounded-xl p-6 hover:border-[#D4AF37] transition">
            <CheckCircle className="text-[#D4AF37] w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Director Support</h3>
            <p className="text-gray-400">Creative direction and technical assistance throughout filming</p>
          </div>
        </div>

        {/* Pricing Packages */}
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Package</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="bg-[#0f0f0f] border-2 border-[#D4AF37]/50 rounded-2xl p-6 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-[#D4AF37] mb-1">
                  ₹{(pkg.amount / 1000).toFixed(0)}K
                </p>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handlePackageSelect(pkg)}
                className="w-full py-3 rounded-xl bg-[#D4AF37] text-black font-semibold hover:bg-[#F59E0B] transition flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Select {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Details Modal */}
      {showPaymentModal && selectedPackage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f0f0f] border-2 border-[#D4AF37] rounded-2xl max-w-md w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <CreditCard className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
              <h2 className="text-2xl font-bold mb-2">Complete Your Payment</h2>
              <p className="text-gray-400">Package: {selectedPackage.name}</p>
              <p className="text-3xl font-bold text-[#D4AF37] mt-2">
                ₹{selectedPackage.amount.toLocaleString()}
              </p>
            </div>

            {/* Customer Details Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="9876543210"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={processPayment}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-bold hover:bg-[#F59E0B] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Proceed to Payment
                  </>
                )}
              </button>

              <button
                onClick={closeModal}
                disabled={loading}
                className="w-full py-3 rounded-xl border-2 border-gray-700 text-gray-300 font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition disabled:opacity-50"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              🔒 Secure payment powered by Razorpay
            </p>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="bg-[#0f0f0f] border-t border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#D4AF37]">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <a href="mailto:contact@panchshakti.com" className="text-gray-400 hover:text-[#D4AF37]">
                    contact@panchshakti.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-[#D4AF37]">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400">
                    Film City, Mumbai, Maharashtra 400097
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Working Hours</h3>
                  <p className="text-gray-400">
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-[#D4AF37]/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Quick Enquiry</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white resize-none"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#F59E0B] transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/30 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Panch Shakti Production. All rights reserved.</p>
          <p className="mt-2 text-sm">Professional Casting & Production Services</p>
        </div>
      </footer>

    </div>
  );
}