import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
  {
    city: "DELHI",
    date: "JUNE 5TH - 6TH 2026",
    description:
      "Experience Premium Bespoke Tailoring. Reserve with our master tailor at The Leela Palace, Chanakyapuri, New Delhi",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600",
    href: "/locations/delhi",
  },
  {
    city: "DUBAI",
    date: "JUNE 10TH - 15TH 2026",
    description:
      "Experience Premium Bespoke Tailoring. Reserve with our master tailor at Taj Hotel, Business Bay, Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
    href: "/locations/dubai",
  },
  {
    city: "LONDON",
    date: "JULY 8TH - 9TH 2026",
    description:
      "Experience Premium Bespoke Tailoring. Reserve with our master tailor at The Franklin Hotel, 24 Egerton Gardens, London SW3",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600",
    href: "/locations/london",
  },
  {
    city: "MUMBAI",
    date: "JULY 20TH - 21ST 2026",
    description:
      "Experience Premium Bespoke Tailoring at our flagship studio, Bandra West",
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600",
    href: "/locations/mumbai",
  },
];

const LocationEventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider">
            Private Tailoring Events
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-2 border border-neutral-200 hover:border-black transition-colors disabled:opacity-30"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-2 border border-neutral-200 hover:border-black transition-colors disabled:opacity-30"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="flex-shrink-0 w-[85vw] md:w-[calc(25%-12px)] snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src={loc.image}
                  alt={loc.city}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <p className="text-white text-xs uppercase tracking-[0.2em] font-light">
                    {loc.city}
                  </p>
                  <p className="text-white/70 text-[10px] uppercase tracking-wider mt-1">
                    {loc.date}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white/90 text-xs font-light leading-relaxed mb-4">
                    {loc.description}
                  </p>
                  <Link
                    to={loc.href}
                    className="inline-block w-full bg-white text-black text-center py-2.5 text-[10px] uppercase tracking-widest font-light hover:bg-neutral-100 transition-colors"
                  >
                    BOOK AN APPOINTMENT
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationEventsSection;
