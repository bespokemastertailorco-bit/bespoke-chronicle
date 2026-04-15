const steps = [
  {
    number: "01",
    title: "Consultation & Fabric Selection",
    description:
      "Your journey begins with a private consultation — in our Indore atelier or wherever you are. Our master tailor guides you through premium fabrics, linings, and details. Measurements are taken with precision.",
  },
  {
    number: "02",
    title: "Crafting & First Fitting",
    description:
      "Our artisans begin handcrafting your garment. The first fitting introduces structure, volume, and proportion — each element refined with care toward its intended form.",
  },
  {
    number: "03",
    title: "Final Fitting & Delivery",
    description:
      "Every detail is perfected — silhouette, comfort, movement. Your completed garment is carefully packaged and delivered to your door, anywhere in the world.",
  },
];

const TailoringProcess = () => {
  return (
    <section className="w-full py-20 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>The Bespoke Process</h2>
          <div className="rule" />
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-[#e8e8e8]">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0 border-b md:border-b-0 border-[#e8e8e8] last:border-0"
            >
              {/* Large number */}
              <span 
                className="font-heading text-[80px] leading-none block mb-4"
                style={{ color: "#d4cfc9", fontWeight: 300 }}
              >
                {step.number}
              </span>
              
              {/* Title */}
              <h3 className="text-[14px] uppercase tracking-[0.08em] text-[#1a1a1a] mb-4 font-normal">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-[13px] font-light text-[#6b6b6b] leading-[1.8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailoringProcess;
