import { useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PrivateTailoringSection from "@/components/homepage/PrivateTailoringSection";
import ReadyToWearSection from "@/components/homepage/ReadyToWearSection";
import WaitingListSection from "@/components/homepage/WaitingListSection";
import CategoryGrid from "@/components/homepage/CategoryGrid";
import AtelierSection from "@/components/homepage/AtelierSection";
import LocationEventsSection from "@/components/homepage/LocationEventsSection";
import EditorialVideoPair from "@/components/homepage/EditorialVideoPair";
import BlackLabelSection from "@/components/homepage/BlackLabelSection";
import TrustBadges from "@/components/homepage/TrustBadges";
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
        <ReadyToWearSection />
        <WaitingListSection />
        <CategoryGrid />
        <AtelierSection />
        <LocationEventsSection />
        <EditorialVideoPair />
        <BlackLabelSection />
        <TrustBadges />
      </main>
      <Footer />
      <CartPanel />
      <WaitingListModal />
    </div>
  );
};

export default Index;
