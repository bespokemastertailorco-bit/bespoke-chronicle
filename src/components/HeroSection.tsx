const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <img
        src="/images/hero-bg.jpg"
        alt="Bespoke Master — Spring Summer Collection hero"
        className="w-full h-full object-cover max-w-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-32">
        <p className="editorial-label mb-4">Bespoke Master</p>
        <h1 className="editorial-heading text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 text-center px-4">
          Spring Summer Collection
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={() => scrollTo("#contact")}
            className="editorial-link"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => scrollTo("#gallery")}
            className="editorial-link"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
