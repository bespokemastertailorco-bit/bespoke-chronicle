import { useEffect } from "react";

const BDLadies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1600"
          alt="BD Ladies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
            BD LADIES
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 font-light">
            Elegance crafted for women.
          </p>
        </div>
      </div>

      {/* Block 1 - Text Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-xl md:text-2xl mb-4">
              Tailored for Her
            </h2>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mb-4">
              BD Ladies represents our commitment to bringing the art of bespoke tailoring
              to women who appreciate exceptional craftsmanship. Each garment is designed
              with the female form in mind, combining traditional techniques with contemporary
              silhouettes.
            </p>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              From power suits for the boardroom to elegant evening wear, our master tailors
              create pieces that empower and inspire confidence. Every stitch is placed with
              precision, every cut designed to flatter.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800"
              alt="Tailored for Her"
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
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=800"
                alt="The Art of Detail"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl mb-4">
                The Art of Detail
              </h2>
              <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mb-4">
                We understand that the details make the difference. From the perfect sleeve
                length to the ideal waist definition, every element of your garment is
                customized to your preferences and measurements.
              </p>
              <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                Choose from our exquisite collection of fabrics—luxurious wools, silks, and
                cashmeres—all selected for their quality and drape. Our lining options range
                from classic solids to exclusive prints, allowing you to add a personal touch
                to even the hidden details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3 - Text Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-xl md:text-2xl mb-4">
              The BD Ladies Experience
            </h2>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed mb-4">
              Your journey begins with a private consultation where we discuss your style
              preferences, lifestyle needs, and vision for your perfect garment. Our master
              tailor will take comprehensive measurements and guide you through fabric
              selection.
            </p>
            <p className="font-body text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              Multiple fittings ensure that your garment fits flawlessly. The result is a
              piece that feels like a second skin—comfortable, elegant, and uniquely yours.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="BD Ladies Experience"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BDLadies;
