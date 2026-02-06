import React, { useState } from 'react';
import { Camera, Film, Palette, Code, Music, Users, Star, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Casting Agency / Director Producer",
      description: "Professional casting services for films, TV shows, commercials, and web series. Complete production management and direction services.",
      price: "₹50,000 - ₹5,00,000",
      period: "Per Project",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=800&fit=crop",
      icon: <Film className="w-8 h-8" />,
      route: "/services/casting-agency",
      features: [
        "Talent scouting and auditions",
        "Complete production management",
        "Director coordination",
        "Location scouting",
        "Script development support"
      ]
    },
    {
      id: 2,
      title: "Model & Actor",
      description: "Professional model and actor services for fashion, commercial, and entertainment projects.",
      price: "Contact for pricing",
      period: "Per Project",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
      icon: <Users className="w-8 h-8" />,
      route: "/services/model-actor",
      features: [
        "Fashion modeling",
        "Commercial shoots",
        "Acting for films & TV",
        "Brand ambassadors",
        "Event appearances"
      ]
    },
    {
      id: 3,
      title: "Product Ad Shoot",
      description: "High-quality product photography and videography for advertising and e-commerce.",
      price: "₹25,000 - ₹2,00,000",
      period: "Per Shoot",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=800&fit=crop",
      icon: <Camera className="w-8 h-8" />,
      route: "/services/product-ad-shoot",
      features: [
        "Studio and outdoor shoots",
        "4K video production",
        "Professional lighting",
        "Post-production editing",
        "E-commerce ready images"
      ]
    },
    {
      id: 4,
      title: "Website Development",
      description: "Custom website design and development with modern technologies and responsive design.",
      price: "₹30,000 - ₹3,00,000",
      period: "Per Project",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=800&fit=crop",
      icon: <Code className="w-8 h-8" />,
      route: "/services/website-development",
      features: [
        "Custom web design",
        "Responsive development",
        "E-commerce solutions",
        "SEO optimization",
        "Maintenance & support"
      ]
    },
    {
      id: 5,
      title: "Model Photoshoot",
      description: "Professional fashion and commercial photoshoots. Studio and outdoor location shoots with complete styling and editing.",
      price: "₹20,000 - ₹1,50,000",
      period: "Per Session",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
      icon: <Camera className="w-8 h-8" />,
      route: "/services/model-photoshoot",
      features: [
        "Fashion photography",
        "Portfolio development",
        "Commercial shoots",
        "Complete styling",
        "Professional editing"
      ]
    },
    {
      id: 6,
      title: "Music Video Albums",
      description: "Creative music video production with cinematic quality and storytelling.",
      price: "₹1,00,000 - ₹10,00,000",
      period: "Per Video",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=800&fit=crop",
      icon: <Music className="w-8 h-8" />,
      route: "/services/music-video-albums",
      features: [
        "Concept development",
        "Cinematography",
        "Color grading",
        "VFX & animation",
        "Distribution support"
      ]
    },
    {
      id: 7,
      title: "AI Based Digital Marketing",
      description: "Data-driven digital marketing strategies powered by AI and analytics.",
      price: "₹40,000 - ₹4,00,000",
      period: "Per Month",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop",
      icon: <TrendingUp className="w-8 h-8" />,
      route: "/services/ai-digital-marketing",
      features: [
        "AI-powered campaigns",
        "Social media marketing",
        "Performance analytics",
        "Content strategy",
        "ROI optimization"
      ]
    },
    {
      id: 8,
      title: "Celebrity Management",
      description: "Complete celebrity management services including brand endorsements, event appearances, and career development.",
      price: "₹50,000 - ₹5,00,000",
      period: "Per Month",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      icon: <Star className="w-8 h-8" />,
      route: "/services/celebrity-management",
      features: [
        "Brand endorsements",
        "Event management",
        "PR & publicity",
        "Career guidance",
        "Contract negotiations"
      ]
    },
    {
      id: 9,
      title: "3D Graphics Designing",
      description: "Cutting-edge 3D graphics and animation for advertising, film, and digital content.",
      price: "₹35,000 - ₹3,50,000",
      period: "Per Project",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=800&fit=crop",
      icon: <Palette className="w-8 h-8" />,
      route: "/services/3d-graphics",
      features: [
        "3D modeling",
        "Animation",
        "Product visualization",
        "Architectural renders",
        "VFX integration"
      ]
    },
    {
      id: 10,
      title: "Model Portfolio Shoot",
      description: "Complete portfolio shoot for aspiring models. Multiple looks, professional editing, and digital delivery of high-res images.",
      price: "₹15,000 - ₹50,000",
      period: "Per Session",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
      icon: <Award className="w-8 h-8" />,
      route: "/services/model-portfolio",
      features: [
        "Multiple look changes",
        "Professional makeup",
        "Studio & outdoor",
        "High-res images",
        "Portfolio consultation"
      ]
    },
    {
      id: 11,
      title: "Corporate Branding",
      description: "Complete corporate branding solutions including logo design, brand identity, and marketing collateral.",
      price: "₹50,000 - ₹5,00,000",
      period: "Per Project",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=800&fit=crop",
      icon: <Palette className="w-8 h-8" />,
      route: "/services/corporate-branding",
      features: [
        "Brand strategy",
        "Logo & identity design",
        "Marketing materials",
        "Brand guidelines",
        "Digital assets"
      ]
    },
    {
      id: 12,
      title: "Video Ad Shoot",
      description: "Professional commercial video production for TV, digital platforms, and social media.",
      price: "₹75,000 - ₹7,50,000",
      period: "Per Video",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=800&fit=crop",
      icon: <Film className="w-8 h-8" />,
      route: "/services/video-ad-shoot",
      features: [
        "Concept development",
        "Professional crew",
        "Location shoots",
        "Post-production",
        "Multi-platform delivery"
      ]
    },
      {
      id: 13,
      title: "Logo Design",
      description: "Professional logo design services for businesses and brands.",
      price: "₹15,000 - ₹1,50,000",
      period: "Per Logo",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=800&fit=crop",
      icon: <Palette className="w-8 h-8" />,
      route: "/services/logo-design",
      features: [
        "Concept development",
        "Professional crew",
        "Location shoots",
        "Post-production",
        "Multi-platform delivery"
      ]
    }
  ];

  const handleServiceClick = (service) => {
    // Navigate to the service detail page
    // For React Router: use navigate(service.route)
    // For now, using window.location
    window.location.href = service.route;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-60 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-9xl font-bold text-gray-700">SERVICES</div>
          <div className="absolute bottom-20 right-20 text-9xl font-bold text-gray-700">CREATIVE</div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 relative z-10">Our Services</h1>
        <div className="w-32 h-1 bg-[#D4AF37] mb-6"></div>
        <p className="text-xl text-gray-400 max-w-3xl">
          Comprehensive creative solutions tailored to bring your vision to life with professional excellence
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              onClick={() => handleServiceClick(service)}
            >
              {/* Background Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Icon */}
                <div className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  {service.price && (
                    <div className="mb-4">
                      <p className="text-[#4A9EFF] text-xl font-bold">{service.price}</p>
                      <p className="text-gray-500 text-sm">{service.period}</p>
                    </div>
                  )}

                  {/* Read More Button */}
                  <button className="flex items-center gap-2 text-[#D4AF37] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-4">
                    View Details <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Let's discuss how we can bring your creative vision to life with our professional services.
        </p>
        <button className="px-12 py-4 bg-[#D4AF37] text-black font-bold rounded-full text-lg hover:bg-[#FFD700] transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
}