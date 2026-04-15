import { Link } from "react-router-dom";

const tiles = [
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600",
  "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600",
  "https://images.unsplash.com/photo-1625910513956-7e95d8e2e04b?w=600",
  "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=600",
];

const BespokeEditorialSection = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-16">
          {/* Left: Label */}
          <div className="md:w-1/3">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-3">
              Handcrafted in Indore
            </p>
            <span className="font-heading text-white text-3xl md:text-4xl uppercase tracking-[0.15em] font-light">
              Formal Wear
            </span>
          </div>

          {/* Right: Editorial Text */}
          <div className="md:w-2/3">
            <h2 className="font-heading text-white text-2xl md:text-3xl mb-4">
              Dressed for Every Occasion
            </h2>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6 max-w-xl">
              From boardroom suits to black-tie occasions, every garment in our formal collection
              is constructed by hand in our Indore atelier. Premium European fabrics, precision
              tailoring, and a silhouette crafted exclusively for you — this is men's luxury
              formal wear at its finest.
            </p>
            <Link
              to="/collections/formal-wear"
              className="inline-block px-8 py-3 border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-all"
            >
              Explore Formal Wear
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {tiles.map((tile, index) => (
            <Link
              key={index}
              to="/collections/formal-wear"
              className={`group relative aspect-square overflow-hidden ${
                index === 1 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={tile}
                alt={`Bespoke Formal Wear ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BespokeEditorialSection;
