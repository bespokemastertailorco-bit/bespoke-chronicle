import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { X } from "lucide-react";

const galleryItems = [
  { name: "Navy Wool Suit", image: "/images/gallery-1.jpg" },
  { name: "Cotton Dress Shirt", image: "/images/gallery-2.jpg" },
  { name: "Camel Overcoat", image: "/images/gallery-3.jpg" },
  { name: "Tailored Trousers", image: "/images/gallery-4.jpg" },
];

const FeaturedProducts = () => {
  const ref = useFadeIn();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" ref={ref} className="fade-in-section py-20 md:py-32 px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {galleryItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setLightbox({ src: item.image, alt: item.name })}
            className="group block text-left w-full cursor-pointer"
            aria-label={`View ${item.name} full size`}
          >
            <div className="hover-zoom overflow-hidden mb-5">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover max-w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <p className="font-body text-xs tracking-widest text-center text-foreground font-light">
              {item.name}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${lightbox.alt}`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={28} strokeWidth={1} />
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
