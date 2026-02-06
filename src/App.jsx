import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginRegister from './pages/LoginRegister';
import CastingAgency from "./servicessubpage/CastingAgency"
import ModelActor from "./servicessubpage/Model&Actor"
import ProductAdShoot from "./servicessubpage/ProductAdShoot"
import WebsiteDevelopment from "./servicessubpage/WebsiteDevelopment"
import ModelPhotoshoot from "./servicessubpage/ModelPhotoshoot"
import MusicVideoAlbums from "./servicessubpage/MusicVideoAlbums"
import AIBasedDigitalMarketing from "./servicessubpage/AIBasedDigitalMarketing"
import CelebrityManagement from "./servicessubpage/CelebrityManagement"
import Graphics3D from "./servicessubpage/3DGraphicsDesigning"
import ModelPortfolioShoot from "./servicessubpage/ModelPortfolioShoot"
import CorporateBranding from "./servicessubpage/CorporateBranding"
import VideoAdShoot from "./servicessubpage/VideoAdShoot"
import PaymentMethodSelect from "./payment/Paymentmethodselect";
import PaymentSuccess from "./payment/Paymentsuccess";
import PaymentFailed from "./payment/Paymentfailed";
import LogoDesgin from "./servicessubpage/LogoDesign";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<LoginRegister />} />


        <Route path="/services/casting-agency" element={<CastingAgency />} />
        <Route path="/services/model-actor" element={<ModelActor />} />
        <Route path="/services/product-ad-shoot" element={<ProductAdShoot />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/model-photoshoot" element={<ModelPhotoshoot />} />
        <Route path="/services/music-video-albums" element={<MusicVideoAlbums />} />
        <Route path="/services/ai-digital-marketing" element={<AIBasedDigitalMarketing />} />
        <Route path="/services/celebrity-management" element={<CelebrityManagement />} />
        <Route path="/services/3d-graphics" element={<Graphics3D />} />
        <Route path="/services/model-portfolio" element={<ModelPortfolioShoot />} />
        <Route path="/services/corporate-branding" element={<CorporateBranding />} />
        <Route path="/services/video-ad-shoot" element={<VideoAdShoot />} />
        <Route path="/services/logo-design"  element={LogoDesgin}/>
        {/* Paymet */}
        <Route path="/payment-method" element={<PaymentMethodSelect />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>

      <Footer />
    </>
  );
}
