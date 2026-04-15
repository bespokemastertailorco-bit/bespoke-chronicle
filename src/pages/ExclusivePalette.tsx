import { useEffect } from "react";

const colors = [
  { name: "Midnight Navy", hex: "#1a2744" },
  { name: "Charcoal Grey", hex: "#36454f" },
  { name: "Ivory Cream", hex: "#f5f5dc" },
  { name: "British Racing Green", hex: "#004225" },
  { name: "Burgundy", hex: "#800020" },
  { name: "Camel", hex: "#c19a6b" },
  { name: "Slate Blue", hex: "#6a5acd" },
  { name: "Jet Black", hex: "#0a0a0a" },
  { name: "Sand Beige", hex: "#c2b280" },
  { name: "Forest Green", hex: "#228b22" },
  { name: "Deep Plum", hex: "#673147" },
  { name: "Cobalt", hex: "#0047ab" },
  { name: "Royal Purple", hex: "#7851a9" },
  { name: "Rust", hex: "#b7410e" },
  { name: "Silver Grey", hex: "#c0c0c0" },
  { name: "Chocolate Brown", hex: "#3d1c02" },
];

const ExclusivePalette = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
          alt="The Exclusive Palette"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-wider">
            THE EXCLUSIVE PALETTE
          </h1>
        </div>
      </div>

      {/* Color Swatches */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-light text-neutral-600 max-w-2xl mx-auto">
            Our curated selection of timeless colors, each carefully chosen to complement
            your personal style and occasion. From classic navy to bold burgundy,
            discover the shades that define elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="group">
              <div
                className="w-full aspect-square rounded-sm shadow-sm group-hover:shadow-md transition-shadow"
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-2 text-[10px] uppercase tracking-wider font-light text-neutral-600 text-center group-hover:text-black transition-colors">
                {color.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#F8F6F2] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Color is Personal
          </h2>
          <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
            The color of your garment is as personal as the fit. Our master tailors will
            guide you through our exclusive palette, helping you select the perfect shade
            that complements your skin tone, hair color, and personal style. Whether you
            prefer the timeless elegance of navy and charcoal, or the bold statement of
            burgundy or British racing green, your bespoke garment will be a true reflection
            of your individuality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExclusivePalette;
