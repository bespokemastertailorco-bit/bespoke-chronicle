const trustItems = [
  { icon: "✦", label: "27+ Years Experience" },
  { icon: "✦", label: "10,000+ Garments Crafted" },
  { icon: "✦", label: "Indore-based, Serving Globally" },
];

const BrandStorySection = () => {
  return (
    <section id="our-craft" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left: Portrait Image */}
          <div
            className="w-full lg:w-[420px] flex-shrink-0"
            style={{ aspectRatio: "3/4", maxHeight: "560px" }}
          >
            <img
              src="/qayyum.jpg"
              alt="Master Tailor Qayyum Ansari"
              className="w-full h-full object-cover"
              style={{ borderRadius: "4px" }}
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a84c] mb-4 font-medium">
              Our Craft
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-8 leading-tight"
              style={{ letterSpacing: "0.02em" }}
            >
              The Man Behind the Masterpiece
            </h2>
            <div className="text-[15px] font-light text-[#4a4a4a] leading-relaxed mb-10 max-w-[520px] space-y-4">
              <p>
                In the narrow lanes of Indore, where thread meets tradition,
                Master Tailor Qayyum Ansari has been doing what most cannot —
                crafting garments that feel like a second skin.
              </p>
              <p>
                With over 27 years of experience behind the needle, Mr. Qayyum
                has shaped thousands of garments for clients across India and
                internationally — each piece cut by hand, fitted by instinct,
                and finished with the patience that only a true craftsman carries.
              </p>
              <p>
                At Bespoke Master, we do not manufacture clothing. We construct
                experiences. Every suit, sherwani, and formal piece carries
                the weight of decades of mastery — made exclusively for you,
                measured to your body, and tailored to your story.
              </p>
              <p>
                This is not fast fashion. This is the art of being exceptional.
              </p>
            </div>

            {/* Trust Icons */}
            <div className="flex flex-col sm:flex-row gap-8">
              {trustItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <span className="text-[#c9a84c] text-xl">{item.icon}</span>
                  <span
                    className="text-[12px] uppercase tracking-[0.1em] font-medium text-[#1a1a1a]"
                    style={{ lineHeight: 1.4 }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
