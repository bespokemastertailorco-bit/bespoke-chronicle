import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SplitSection from "@/components/SplitSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SplitSection />
        <ServicesSection />
        <FeaturedProducts />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
