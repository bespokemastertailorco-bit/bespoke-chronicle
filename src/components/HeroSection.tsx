import heroBg from "@/assets/hero-bg.png";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.4)" }}
      />

      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 max-w-3xl hero-fade-in">
        <h1
          className="editorial-heading text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ color: "#f5f5f5", letterSpacing: "0.04em" }}
        >
          The Art of Being Exceptional
        </h1>
        <p
          className="font-body text-sm md:text-base font-light mb-10 leading-relaxed max-w-lg"
          style={{ color: "#f5f5f5cc" }}
        >
          Curated ready-to-wear &amp; hand-crafted bespoke — for those who set the standard, not follow it.
        </p>
        <button
          onClick={() => scrollTo("#services")}
          className="hero-cta-btn"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
