import { useEffect } from "react";

const creationImages = [
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=600", label: "Bespoke Suit" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600", label: "Formal Wear" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600", label: "Evening Wear" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", label: "Atelier" },
  { src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600", label: "Accessories" },
  { src: "https://images.unsplash.com/photo-1625910513956-7e95d8e2e04b?w=600", label: "Ceremony" },
];

const Creations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px]">
        {/* REPLACE IMAGE: Creations Hero */}
        <img
          src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=1600"
          alt="Creations"
          data-photo="replaceable"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white tracking-wider">
            CREATIONS
          </h1>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {creationImages.map((img, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid overflow-hidden cursor-pointer"
              data-photo="replaceable"
            >
              {/* REPLACE IMAGE: Creation {img.label} */}
              <img
                src={img.src}
                alt={img.label}
                data-photo="replaceable"
                className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Creations;
