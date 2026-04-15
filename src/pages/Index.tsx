import { useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrivateTailoringSection from "@/components/homepage/PrivateTailoringSection";
import CategoryGrid from "@/components/homepage/CategoryGrid";
import TailoringProcess from "@/components/homepage/TailoringProcess";
import AtelierSection from "@/components/homepage/AtelierSection";
import WorldwideBespokeSection from "@/components/homepage/LocationEventsSection";
import EditorialVideoPair from "@/components/homepage/EditorialVideoPair";
import BespokeEditorialSection from "@/components/homepage/BlackLabelSection";
import TrustBadges from "@/components/homepage/TrustBadges";
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
      <Navbar />
      <main>
        <HeroSection />
        <PrivateTailoringSection />
        <CategoryGrid />
        <TailoringProcess />
        <AtelierSection />
        <WorldwideBespokeSection />
        <EditorialVideoPair />
        <BespokeEditorialSection />
        <TrustBadges />
        <WaitingListSection />
      </main>
      <Footer />
      <CartPanel />
      <WaitingListModal />
    </div>
  );
};

export default Index;
