import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Panel 1 - Our Craft */}
      <Link
        to="/our-story"
        className="w-full md:w-1/2 aspect-[3/4] md:aspect-[3/4] overflow-hidden group relative split-panel"
      >
        {/* REPLACE IMAGE: Editorial Panel 1 */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
          data-photo="replaceable"
          style={{ background: "#d4cfc9" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 split-overlay" />
        
        {/* Content */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <p className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-normal mb-2">
            Our Craft
          </p>
          <h3 className="font-heading text-white text-2xl md:text-3xl mb-4">
            Handcrafted in India
          </h3>
          <span className="text-white text-[11px] uppercase tracking-[0.1em] underline underline-offset-4">
            Discover →
          </span>
        </div>
      </Link>

      {/* Panel 2 - Manufacturing */}
      <Link
        to="/our-story"
        className="w-full md:w-1/2 aspect-[3/4] md:aspect-[3/4] overflow-hidden group relative split-panel"
      >
        {/* REPLACE IMAGE: Editorial Panel 2 */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
          data-photo="replaceable"
          style={{ background: "#c9c4bc" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 split-overlay" />
        
        {/* Content */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <p className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-normal mb-2">
            Manufacturing
          </p>
          <h3 className="font-heading text-white text-2xl md:text-3xl mb-2">
            We Build for Other Brands Too
          </h3>
          <p className="text-white/70 text-sm font-light mb-4">
            Private-label manufacturing with worldwide export.
          </p>
          <span className="text-white text-[11px] uppercase tracking-[0.1em] underline underline-offset-4">
            Learn More →
          </span>
        </div>
      </Link>
    </section>
  );
};

export default EditorialSection;
