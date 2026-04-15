import { useEffect, useRef, useState } from "react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=1600";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        if (scrollY < heroHeight) {
          setOffsetY(scrollY * 0.3);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* REPLACE IMAGE: Hero Background */}
      {/* Parallax Background with Unsplash image */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-bg"
        data-photo="replaceable"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 max-w-4xl hero-fade-in">
        <h1
          className="editorial-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-tight"
          style={{ color: "#f5f5f5", letterSpacing: "0.06em" }}
        >
          The Art of Being Exceptional
        </h1>
        <p
          className="font-body text-sm md:text-base lg:text-lg font-light mb-12 leading-relaxed max-w-xl tracking-wide"
          style={{ color: "rgba(245,245,245,0.9)" }}
        >
          For over 35 years, Bespoke Master has crafted garments that define excellence. 
          Experience the luxury of perfectly tailored clothing, made exclusively for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="hero-cta-btn"
          >
            Book Consultation
          </button>
          <button
            onClick={() => scrollTo("#collection")}
            className="px-8 py-3 text-xs tracking-widest uppercase font-light border transition-all duration-300 cursor-pointer hover:bg-white/10"
            style={{
              fontFamily: "var(--font-body)",
              color: "#f5f5f5",
              borderColor: "rgba(245,245,245,0.5)",
              background: "transparent",
            }}
          >
            View Collection
          </button>
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
