import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeGallery from "@/components/MarqueeGallery";
import BrandStorySection from "@/components/BrandStorySection";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <MarqueeGallery />
        <BrandStorySection />
        <B2BSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
