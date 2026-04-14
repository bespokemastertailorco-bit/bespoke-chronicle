import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { name: "Classic Navy Suit", category: "Bespoke Tailoring", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500" },
  { name: "Burgundy Blazer", category: "Outerwear", image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?w=500" },
  { name: "White Dress Shirt", category: "Shirting", image: "https://images.unsplash.com/photo-1571945192086-9b7f1e51e3d9?w=500" },
  { name: "Charcoal Trousers", category: "Bottoms", image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500" },
  { name: "Tan Waistcoat", category: "Accessories", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500" },
  { name: "Check Overcoat", category: "Outerwear", image: "https://images.unsplash.com/photo-1625910513956-7e95d8e2e04b?w=500" },
];

const FeaturedProducts = () => {
  const ref = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryItems.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  const currentLightbox = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <section id="collection" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 text-center">
        <p className="editorial-label mb-6">The Collection</p>
        <h2 className="editorial-heading text-2xl md:text-4xl text-foreground max-w-2xl mx-auto leading-relaxed">
          Each piece crafted with precision, designed for distinction
        </h2>
        <p className="font-body text-sm font-light text-muted-foreground mt-6 max-w-xl mx-auto">
          Browse our gallery of bespoke creations and ready-to-wear pieces, 
          each one a testament to our commitment to excellence.
        </p>
      </div>

      {/* Masonry-style gallery grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <button
            key={item.name}
            onClick={() => openLightbox(index)}
            className={`group relative overflow-hidden cursor-pointer ${
              index === 0 || index === 3 ? "row-span-2" : ""
            }`}
            aria-label={`View ${item.name} full size`}
          >
            <div className={`relative overflow-hidden ${index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"}`}>
              <img
                src={item.image}
                alt={`${item.name} - ${item.category}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
              {/* Info on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="editorial-label text-[10px] text-white/80 mb-2">{item.category}</p>
                <p className="font-body text-sm tracking-widest text-white font-light">
                  {item.name}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal with navigation */}
      {currentLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${currentLightbox.name}`}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} strokeWidth={1} />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          {/* Image container */}
          <div className="flex flex-col items-center max-w-5xl">
            <img
              src={currentLightbox.image}
              alt={`${currentLightbox.name} - ${currentLightbox.category}`}
              className="max-h-[80vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <p className="font-body text-sm text-white/60">{currentLightbox.category}</p>
              <p className="font-body text-lg text-white mt-1">{currentLightbox.name}</p>
            </div>
            <p className="font-body text-xs text-white/40 mt-2">
              {lightboxIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
