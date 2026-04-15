import { useWaitingListContext } from "@/context/WaitingListContext";

const WaitingListSection = () => {
  const { openModal } = useWaitingListContext();

  return (
    <section
      className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center cursor-pointer group"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={openModal}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/85 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-white/70 text-[11px] uppercase tracking-[0.3em] font-light mb-4">
          NEW COLLECTION — LIMITED ACCESS
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white hover:underline underline-offset-8 transition-all">
          JOIN THE WAITING LIST
        </h2>
      </div>
    </section>
  );
};

export default WaitingListSection;
