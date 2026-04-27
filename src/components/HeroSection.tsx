const HERO_IMAGE = "/hero-bg.jpg";

const WA_NUMBER = "919993786959";
const WA_MESSAGE = encodeURIComponent(
  "Hello, I'm interested in Bespoke Master tailoring. Please share more details."
);
const CATALOGUE_URL = "/catalogue/bespoke-master-catalogue.pdf";

const handleWhatsApp = () => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`, "_blank");
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full"
        data-photo="replaceable"
        style={{
          background: HERO_IMAGE ? `url(${HERO_IMAGE}) center/cover no-repeat` : "#1c1a17",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 max-w-[640px] h-full hero-fade-in">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a84c] mb-5 font-medium">
          Est. 1997 · Indore, India
        </p>
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
          For over 27 years, Bespoke Master has crafted garments that define excellence.
          Every garment is cut by hand, fitted by instinct, and finished with decades of mastery — made exclusively for you.
        </p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-3 px-8 py-4 text-[12px] uppercase tracking-[0.14em] font-medium bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Connect on WhatsApp →
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-60">
        <div className="w-px h-12 bg-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
