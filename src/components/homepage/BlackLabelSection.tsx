import { Link } from "react-router-dom";

const tiles = [
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600",
  "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600",
  "https://images.unsplash.com/photo-1625910513956-7e95d8e2e04b?w=600",
  "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=600",
];

const BlackLabelSection = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-16">
          {/* Left: Black Label Badge */}
          <div className="md:w-1/3">
            <span className="font-heading text-[#D4AF37] text-3xl md:text-4xl uppercase tracking-[0.2em] font-light">
              BLACK LABEL
            </span>
          </div>

          {/* Right: Editorial Text */}
          <div className="md:w-2/3">
            <h2 className="font-heading text-white text-2xl md:text-3xl mb-4">
              Discover the Ceremony Selection
            </h2>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6 max-w-xl">
              Immerse yourself in the universe of refinement with the Bespoke Master Black
              Label Collection. Each piece, crafted with exclusive fabrics and unique designs,
              represents the perfect synergy between tradition and innovation. Wear uniqueness
              for your most special moments.
            </p>
            <Link
              to="/black-label"
              className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-light hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              DISCOVER BLACK LABEL
            </Link>
          </div>
        </div>

        {/* Grid */}
        {/* REPLACE IMAGE: Formal Wear Collection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {tiles.map((tile, index) => (
            <Link
              key={index}
              to="/black-label"
              className={`group relative aspect-square overflow-hidden ${
                index === 1 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              data-photo="replaceable"
            >
              <img
                src={tile}
                alt={`Black Label ${index + 1}`}
                data-photo="replaceable"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackLabelSection;
