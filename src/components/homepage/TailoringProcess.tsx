import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "The Consultation",
    description:
      "We begin with an in-depth conversation — your lifestyle, your occasions, your preferences. Our master tailor listens before he measures. This is where a garment begins.",
  },
  {
    number: "02",
    title: "The Craft",
    description:
      "Every pattern is drawn by hand. Every seam is placed with intention. Working exclusively with the finest European fabrics — Loro Piana, Scabal, Holland & Sherry — each piece takes over 40 hours to complete.",
  },
  {
    number: "03",
    title: "The Fitting",
    description:
      "Three fittings. Each one refining the silhouette until the garment moves as you move. Then it is finished, pressed, and delivered — to Indore, or to your door, anywhere in the world.",
  },
];

const TailoringProcess = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F8F6F2]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.35em] font-light mb-3">
            The Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-black">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-neutral-200">
          {steps.map((step) => (
            <div key={step.number} className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0 border-b md:border-b-0 border-neutral-200 last:border-0">
              <span className="font-heading text-5xl md:text-6xl text-neutral-200 leading-none block mb-4">
                {step.number}
              </span>
              <h3 className="font-heading text-lg uppercase tracking-[0.12em] text-black mb-3">
                {step.title}
              </h3>
              <p className="text-sm font-light text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/book-appointment"
            className="inline-block px-10 py-3.5 bg-black text-white text-[11px] uppercase tracking-[0.25em] font-light hover:bg-neutral-800 transition-colors"
          >
            Begin Your Bespoke Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TailoringProcess;
