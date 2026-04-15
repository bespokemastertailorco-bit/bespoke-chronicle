import { Link } from "react-router-dom";

const PrivateTailoringSection = () => {
  return (
    <section id="services" className="w-full py-20 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="editorial-label mb-4">Bespoke Service</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Made for You, Wherever You Are
            </h2>
            <p className="text-[#6b6b6b] text-sm leading-[1.8] mb-8 max-w-lg">
              Our master tailors are based in Indore, India — where every garment is handcrafted by hand in our atelier. Clients are welcome to visit our showroom, or we travel to meet you anywhere in the world. Your measurements, your fabric, your garment — built entirely around you.
            </p>
            <Link
              to="/book-appointment"
              className="btn-outline self-start"
            >
              Begin Your Journey
            </Link>
          </div>

          {/* Right: Tall Placeholder Image */}
          <div className="w-full lg:w-1/2">
            {/* REPLACE IMAGE: Bespoke Service Section */}
            <div 
              className="aspect-[3/4] w-full"
              data-photo="replaceable"
              style={{ background: "#e8e4df" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateTailoringSection;
