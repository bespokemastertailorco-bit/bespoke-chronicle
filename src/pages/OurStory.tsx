import { useEffect } from "react";

const fabricBrands = [
  "Loro Piana",
  "Ermenegildo Zegna",
  "Scabal",
  "Holland & Sherry",
  "Ariston",
  "Vitale Barberis",
];

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-[140px] pb-12 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
          THE MAISON
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4">
          Master Tailor, Est. 1998
        </h1>
        <p className="font-heading text-xl md:text-2xl text-neutral-600">
          EVERYTHING BEGINS WITH PASSION
        </p>
      </div>

      {/* Block 1 - Text Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              Everything begins with the passion for high tailoring of our Master Tailor,
              entrepreneur and master craftsman. After years of studying in the finest ateliers of
              Europe and training in the world of fashion, he founded the tailoring brand
              BESPOKE MASTER®. It is a tailoring house with an internal atelier that creates
              garments of high manufacture using the finest fabrics available on the market.
              Everything begins on the cutting table where the main activity of the house comes
              to life — &apos;The Tailored Garment&apos; — and expands to the production of accessories
              such as cashmere and silk ties, bow ties, shirts, shoes and many other menswear
              accessories. All rigorously hand made.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {/* REPLACE IMAGE: Our Story Section */}
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
              alt="Our Story"
              data-photo="replaceable"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Block 2 - Image Left, Text Right */}
      <section className="bg-[#F8F6F2] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              {/* REPLACE IMAGE: 40 Hours Stitching Process */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="40 Hours of Stitching"
                data-photo="replaceable"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl mb-6">
                40 HOURS OF STITCHING — TIME IS GOLDEN
              </h2>
              <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                Each garment requires a long processing time. Everything is carried out with the
                utmost care for detail — passing the steam iron point by point, caring for the lapels
                and their roundness, the padding of thin canvas layers, the precise and harmonious cut.
                Like a puzzle where all the pieces fit perfectly — stripes, checks, and patterns fall
                to recompose the desired garment design. We work on a personalised paper pattern, the
                fit base for each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3 - Text Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              THE BESPOKE MASTER EXPERIENCE
            </h2>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              Everything begins with the choice of jacket and trouser model, then moving to the
              most suitable fabric depending on the season, climate and purpose of the garment. Once
              the use of the garment is identified, it is the turn of pockets, lapels, sleeve
              attachment etc., then moving to the decision of physical details that will characterise
              the garment. We start from the inside, choosing from our silk linings, trouser adjustment
              buckles and buttons in Australian mother-of-pearl or zinc, which can also be hand painted
              in the colour of the chosen fabric. It takes approximately three fittings to create a
              flawless Bespoke Master garment.
            </p>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mt-4">
              Our atelier and manufacturing unit are based in Indore, India. Clients are welcome to
              visit us in person, or our master tailors can travel to meet you — at your home, office,
              or city, anywhere in the world. Every garment is handcrafted by hand and delivered to
              you with care.
            </p>
            <p className="font-body text-xs font-light text-neutral-400 mt-6 italic">
              We also offer private-label manufacturing for select luxury brands, with worldwide delivery.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {/* REPLACE IMAGE: Bespoke Experience Section */}
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
              alt="Bespoke Experience"
              data-photo="replaceable"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fabric Brands Section */}
      <section className="bg-[#0A0A0A] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
            WE SELECT THE FINEST FABRICS FOR YOU
          </h2>
          <p className="font-body text-sm font-light text-white/60 mb-12 max-w-2xl mx-auto">
            Like a puzzle where all the pieces fit perfectly — stripes, checks, and patterns fall
            to recompose the desired garment design. We work on a personalised paper pattern, the
            fit base for each client.
          </p>

          {/* Scrolling Brands */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {fabricBrands.map((brand) => (
              <span
                key={brand}
                className="font-heading text-lg md:text-xl text-white/40 tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
