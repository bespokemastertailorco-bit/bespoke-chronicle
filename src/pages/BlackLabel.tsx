import { useEffect } from "react";
import { Link } from "react-router-dom";

const gridImages = [
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600",
  "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600",
  "https://images.unsplash.com/photo-1625910513956-7e95d8e2e04b?w=600",
  "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=600",
  "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=600",
];

const BlackLabel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1600"
          alt="Black Label"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-[#D4AF37] tracking-[0.2em] font-light mb-4">
            BLACK LABEL
          </h1>
          <p className="font-body text-white/70 text-lg font-light">
            The pinnacle of Bespoke Master craftsmanship.
          </p>
        </div>
      </div>

      {/* Editorial Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gridImages.map((img, index) => (
            <Link
              key={index}
              to="/collections/black-label"
              className={`group relative overflow-hidden ${
                index % 3 === 1 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={img}
                alt={`Black Label ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-6">
            BOOK A PRIVATE FITTING FOR BLACK LABEL
          </h2>
          <p className="font-body text-white/60 text-sm font-light mb-8 max-w-xl mx-auto">
            Experience the ultimate in bespoke luxury. Schedule a private appointment
            with our master tailor to discuss your Black Label garment.
          </p>
          <Link
            to="/book-appointment"
            className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-light hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            BOOK NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlackLabel;
