import { useWaitingListContext } from "@/context/WaitingListContext";

const WaitingListSection = () => {
  const { openModal } = useWaitingListContext();

  return (
    <section
      id="contact"
      className="relative w-full min-h-[450px] md:min-h-[550px] flex items-center justify-center cursor-pointer group"
      data-photo="replaceable"
      style={{
        background: "#1a1a1a",
      }}
      onClick={openModal}
    >
      {/* REPLACE IMAGE: CTA Section Background */}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl mb-6">
          Begin Your Bespoke Journey
        </h2>
        <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          We craft for those who appreciate the art of handmade clothing. Reach out to start a private conversation with our master tailor — in Indore or anywhere in the world.
        </p>
        <button className="btn-outline-white">
          Request a Consultation
        </button>
      </div>
    </section>
  );
};

export default WaitingListSection;
