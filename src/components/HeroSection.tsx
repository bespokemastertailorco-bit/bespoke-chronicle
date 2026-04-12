import heroBg from "@/assets/hero-bg.png";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <p className="editorial-label mb-4 text-white/70">Bespoke Master</p>
        <h1 className="editorial-heading text-3xl md:text-5xl lg:text-6xl text-white mb-6">
          Spring Summer Collection
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={() => scrollTo("#contact")}
            className="editorial-link text-white after:bg-white"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => scrollTo("#gallery")}
            className="editorial-link text-white after:bg-white"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
