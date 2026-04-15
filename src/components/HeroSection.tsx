import { Link } from "react-router-dom";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* REPLACE IMAGE: Hero Background — add your photo here */}
      <div
        className="absolute inset-0 w-full h-full"
        data-photo="replaceable"
        style={{
          background: "#1a1a1a",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 max-w-[600px] h-full hero-fade-in">
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight text-white"
          style={{ letterSpacing: "0.02em" }}
        >
          The Art of Being Exceptional
        </h1>
        <p
          className="font-body text-sm md:text-base font-light mb-12 leading-relaxed max-w-xl text-white/80"
          style={{ letterSpacing: "0.02em" }}
        >
          For over 35 years, Bespoke Master has crafted garments that define excellence. 
          Experience the luxury of perfectly tailored clothing, made exclusively for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-outline-white"
          >
            Book Consultation
          </button>
          <Link
            to="/collections"
            className="btn-outline-white"
          >
            View Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-60">
        <div className="w-px h-12 bg-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
