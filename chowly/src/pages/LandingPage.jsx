// src/pages/LandingPage.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DealsSection from "@/components/DealsSection";
import PopularMenu from "@/components/PopularMenu";
import PopularRestaurants from "@/components/PopularRestaurants";
import PopularVendors from "@/components/PopularVendors";
import PartnerSection from "@/components/PartnerSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <Navbar />
        <HeroSection />
        <DealsSection />
        <PopularMenu />
        <PopularRestaurants />
        <PopularVendors />
        <PartnerSection />
        <AboutSection />
        <Footer />
      </div>
    </Router>
  );
}
