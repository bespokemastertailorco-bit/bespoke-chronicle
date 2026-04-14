import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { X } from "lucide-react";

const galleryItems = [
  { name: "Navy Wool Suit", category: "Tailoring", image: "/images/gallery-1.jpg" },
  { name: "Cotton Dress Shirt", category: "Ready-to-Wear", image: "/images/gallery-2.jpg" },
  { name: "Camel Overcoat", category: "Outerwear", image: "/images/gallery-3.jpg" },
  { name: "Tailored Trousers", category: "Bottoms", image: "/images/gallery-4.jpg" },
];

const FeaturedProducts = () => {
  const ref = useFadeIn();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="collection" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 text-center">
        <p className="editorial-label mb-6">The Collection</p>
        <h2 className="editorial-heading text-2xl md:text-4xl text-foreground max-w-2xl mx-auto leading-relaxed">
          Each piece crafted with precision, designed for distinction
        </h2>
      </div>

      {/* Product grid - luxury layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {galleryItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setLightbox({ src: item.image, alt: item.name })}
            className="group block text-left w-full cursor-pointer"
            aria-label={`View ${item.name} full size`}
          >
            <div className="relative overflow-hidden mb-6">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
            </div>
            {/* Product info - reveals on hover */}
            <div className="transition-all duration-300">
              <p className="editorial-label text-[10px] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </p>
              <p className="font-body text-sm tracking-widest text-foreground font-light">
                {item.name}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${lightbox.alt}`}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
