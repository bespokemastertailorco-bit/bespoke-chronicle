import { Link } from "react-router-dom";

const PrivateTailoringSection = () => {
  return (
    <section className="w-full bg-[#0A0A0A]">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Video */}
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[600px]">
          {/* REPLACE IMAGE: Bespoke Service Video Poster */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=1200"
            data-photo="replaceable"
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-measuring-a-piece-of-fabric-4818-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Private Tailoring
            </h2>
            <p className="font-body text-white/70 text-sm md:text-base font-light mb-8 leading-relaxed">
              The experience of a garment created exclusively for you.
            </p>
            <Link
              to="/our-story"
              className="inline-block px-8 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-light hover:bg-white/90 transition-colors mb-8"
            >
              DISCOVER THE BESPOKE UNIVERSE
            </Link>
            <div className="mt-4">
              <span className="font-heading text-white/40 text-xl tracking-[0.3em] uppercase">
                BESPOKE MASTER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateTailoringSection;
