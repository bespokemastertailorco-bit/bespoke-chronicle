import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const WorldwideBespokeSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative min-h-[520px] md:min-h-[600px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600"
          alt="Worldwide Bespoke Service"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Globe size={32} strokeWidth={1} className="text-white/70" />
          </div>

          <p className="text-white/60 text-[11px] uppercase tracking-[0.35em] font-light mb-4">
            Global Reach · Rooted in India
          </p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 leading-tight">
            Worldwide Bespoke Service
          </h2>

          <p className="text-white/80 text-base md:text-lg font-light italic mb-6">
            We Come to You — Anywhere in the World
          </p>

          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto mb-10">
            While our showroom and manufacturing unit are based in Indore, India, we offer a truly global service. Whether you visit us in Indore or we travel to meet you — in your city, your office, or your home — our master tailors bring the complete bespoke experience to you. Every garment is handcrafted in India and delivered to your door, wherever you are.
          </p>

          <Link
            to="/book-appointment"
            className="inline-block px-10 py-4 bg-white text-black text-[11px] uppercase tracking-[0.25em] font-light hover:bg-neutral-100 transition-colors"
          >
            Book a Private Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorldwideBespokeSection;
