import { useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrivateTailoringSection from "@/components/homepage/PrivateTailoringSection";
import CategoryGrid from "@/components/homepage/CategoryGrid";
import TailoringProcess from "@/components/homepage/TailoringProcess";
import EditorialSection from "@/components/homepage/EditorialSection";
import WaitingListSection from "@/components/homepage/WaitingListSection";
import Footer from "@/components/Footer";
import CartPanel from "@/components/CartPanel";
import WaitingListModal from "@/components/WaitingListModal";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <div className="h-10" /> {/* Spacer for announcement bar */}
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PrivateTailoringSection />
        <CategoryGrid />
        <TailoringProcess />
        <EditorialSection />
        <WaitingListSection />
      </main>
      <Footer />
      <CartPanel />
      <WaitingListModal />
    </div>
  );
};

export default Index;
