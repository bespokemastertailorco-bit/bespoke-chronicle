import { Link } from "react-router-dom";

const AtelierSection = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <p className="text-white/60 text-[11px] uppercase tracking-[0.3em] font-light mb-6">
          Handcrafted in Indore — The Heart of Bespoke Master
        </p>
        
        <div className="relative aspect-[16/9] max-w-5xl mx-auto mb-8 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
            alt="The Atelier"
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        <Link
          to="/creations"
          className="inline-block px-8 py-3 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-all"
        >
          DISCOVER THE NEW BESPOKE CREATIONS
        </Link>
      </div>
    </section>
  );
};

export default AtelierSection;
