import { useEffect } from "react";

const ExclusiveFabrics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-[140px] pb-12 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
          THE EXCLUSIVE SUPER & HYPER FIBER
        </h1>
        <p className="font-body text-sm md:text-base font-light text-neutral-600 max-w-2xl mx-auto">
          Discover the world&apos;s finest fabrics, carefully selected for their exceptional
          quality, comfort, and durability.
        </p>
      </div>

      {/* Section 1 - Text Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-xl md:text-2xl mb-4">
              Super 120s & Super 150s Wool
            </h2>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mb-4">
              The number refers to the fineness of the wool fiber. Higher numbers mean finer,
              softer, and more luxurious fabrics. Super 120s wool offers an excellent balance
              of comfort, durability, and refined appearance—perfect for year-round wear.
            </p>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              Super 150s takes this further, with ultra-fine fibers that create an incredibly
              soft hand-feel and elegant drape. These fabrics are reserved for our most
              discerning clients who demand nothing but the best.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800"
              alt="Premium Wool Fabrics"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="bg-[#F8F6F2] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800"
                alt="Vicuña and Cashmere"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl mb-4">
                Vicuña & Cashmere
              </h2>
              <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mb-4">
                Vicuña wool is the rarest and most precious fiber in the world. Harvested from
                the vicuña, a camelid native to the Andes, this fiber is finer than cashmere and
                was once reserved exclusively for Incan royalty.
              </p>
              <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                Our cashmere collection features the finest Mongolian cashmere, known for its
                exceptional softness and warmth. Each piece is carefully inspected to ensure
                it meets our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Text Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-xl md:text-2xl mb-4">
              Silk & Linen Blends
            </h2>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mb-4">
              For warmer months, we offer exquisite silk and linen blends that provide
              breathability without compromising on elegance. These fabrics are perfect for
              summer suits and lightweight jackets.
            </p>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              Our silk linings, sourced from Como, Italy, add a touch of luxury to every
              garment, while our cotton interlinings provide structure and shape that lasts
              for years.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"
              alt="Silk and Linen"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExclusiveFabrics;
