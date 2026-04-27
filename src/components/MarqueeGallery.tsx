import { useState, useEffect } from "react";

const FALLBACK_IMAGES = [
  "/gallery/gallery-01.jpg",
  "/gallery/gallery-02.jpg",
  "/gallery/gallery-03.jpg",
  "/gallery/gallery-04.jpg",
  "/gallery/gallery-05.jpg",
  "/gallery/gallery-06.jpg",
];

const GalleryRow = ({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{ display: "flex", gap: "12px", willChange: "transform" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="gallery-card flex-shrink-0"
            style={{ width: "280px", height: "380px" }}
          >
            <img
              src={src}
              alt={`Bespoke garment ${(i % images.length) + 1}`}
              style={{
                width: "280px",
                height: "380px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeGallery = () => {
  const [images, setImages] = useState<string[]>(FALLBACK_IMAGES);

  useEffect(() => {
    fetch("/gallery-manifest.json")
      .then((r) => r.json())
      .then((list: string[]) => {
        if (Array.isArray(list) && list.length > 0) setImages(list);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="gallery" style={{ background: "#FAF9F6" }} className="py-20">
      <div className="text-center mb-12 px-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a84c] mb-3 font-medium">
          Portfolio
        </p>
        <h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a]"
          style={{ letterSpacing: "0.03em" }}
        >
          Our Work
        </h2>
        <div className="mx-auto mt-4 w-10 h-px bg-[#1a1a1a]" />
      </div>

      <div className="flex flex-col gap-4 overflow-hidden">
        <GalleryRow images={images} direction="left" />
        <GalleryRow images={images} direction="right" />
      </div>
    </section>
  );
};

export default MarqueeGallery;
