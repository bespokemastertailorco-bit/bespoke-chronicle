import { Link } from "react-router-dom";

const ReadyToWearSection = () => {
  return (
    <section className="w-full bg-[#F8F6F2]">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              Ready to Wear
            </h2>
            <p className="font-body text-neutral-600 text-sm md:text-base font-light mb-8 leading-relaxed">
              Contemporary elegance meets timeless design.
            </p>
            <Link
              to="/collections"
              className="inline-block px-8 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors"
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>

        {/* Right: Image/Video */}
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200"
            alt="Ready to Wear"
            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToWearSection;
