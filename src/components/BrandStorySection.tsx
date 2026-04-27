const trustItems = [
  { icon: "✦", label: "27+ Years Experience" },
  { icon: "✦", label: "10,000+ Garments Crafted" },
  { icon: "✦", label: "Pan-India & International Supply" },
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
              src="/gallery/gallery-01.jpg"
              alt="Master tailor at work"
              className="w-full h-full object-cover"
              style={{ borderRadius: "4px" }}
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a84c] mb-4 font-medium">
              Our Heritage
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-8 leading-tight"
              style={{ letterSpacing: "0.02em" }}
            >
              27 Years of Mastercraft
            </h2>
            <p className="text-[15px] font-light text-[#4a4a4a] leading-relaxed mb-10 max-w-[520px]">
              Bespoke Master was founded by master tailor Qayyum Ansari, whose hands have
              shaped thousands of garments across India and internationally. We specialize in
              precision bespoke tailoring for suits, sherwanis, formal wear, and custom
              uniforms — crafted for discerning individuals and wholesale retail partners.
            </p>

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
