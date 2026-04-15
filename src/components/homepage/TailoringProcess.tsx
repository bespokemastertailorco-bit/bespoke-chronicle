const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
        <rect x="20" y="10" width="40" height="60" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="28" y1="26" x2="52" y2="26" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="28" y1="34" x2="52" y2="34" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="28" y1="42" x2="44" y2="42" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="56" cy="56" r="10" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="53" y1="56" x2="59" y2="56" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="56" y1="53" x2="56" y2="59" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Consultation & Fabric Selection",
    description:
      "Your journey begins with a personal consultation — in our Indore showroom or wherever you are in the world. Our master tailor guides you through a curated selection of premium fabrics, linings, buttons, and details. Your measurements are taken with precision, and every element is designed around your body and your personal style.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
        <path d="M20 20 L40 10 L60 20 L60 55 C60 65 40 72 40 72 C40 72 20 65 20 55 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <line x1="32" y1="40" x2="48" y2="40" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="40" y1="32" x2="40" y2="52" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
        <line x1="10" y1="38" x2="70" y2="38" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4"/>
      </svg>
    ),
    title: "Crafting & First Fitting",
    description:
      "Our artisans begin handcrafting your garment in our Indore workshop. The first fitting introduces the structure of your piece — allowing volumes, proportions, and lines to emerge with clarity. Every element is refined with care, guiding the garment toward its intended form.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto">
        <rect x="18" y="14" width="44" height="52" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M28 14 C28 14 28 22 40 22 C52 22 52 14 52 14" stroke="currentColor" strokeWidth="1.2"/>
        <polyline points="30,44 37,51 52,36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Final Fitting & Delivery",
    description:
      "The final fitting perfects every detail — silhouette, comfort, and movement — until the garment is exactly right. Once complete, your bespoke piece is carefully packaged and delivered to you, preserving its integrity and character wherever you are in the world.",
  },
];

const TailoringProcess = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.35em] font-light mb-4">
            The Bespoke Experience
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-black">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center px-6 md:px-10 py-10 md:py-0 ${
                index < steps.length - 1
                  ? "border-b md:border-b-0 md:border-r border-neutral-100"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="text-neutral-300 mb-6">{step.icon}</div>

              {/* Step Number */}
              <span className="font-heading text-5xl md:text-6xl text-neutral-100 leading-none mb-4 select-none">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg md:text-xl uppercase tracking-wider text-black mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 md:mt-20">
          <a
            href="/book-appointment"
            className="inline-block px-10 py-4 border border-black text-black text-[11px] uppercase tracking-[0.25em] font-light hover:bg-black hover:text-white transition-all duration-300"
          >
            Begin Your Bespoke Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default TailoringProcess;
