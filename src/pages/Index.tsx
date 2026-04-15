import { useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/homepage/CategoryGrid";
import EditorialSplitSection from "@/components/homepage/EditorialSplitSection";
import PrivateTailoringSection from "@/components/homepage/PrivateTailoringSection";
import TailoringProcess from "@/components/homepage/TailoringProcess";
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
        <CategoryGrid />
        <EditorialSplitSection />
        <PrivateTailoringSection />
        <TailoringProcess />
        <WaitingListSection />
      </main>
      <Footer />
      <CartPanel />
      <WaitingListModal />
    </div>
  );
};

export default Index;
