import { useFadeIn } from "@/hooks/useFadeIn";

const PANEL_IMAGE_1 = "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=800";
const PANEL_IMAGE_2 = "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800";

const panels = [
  {
    image: PANEL_IMAGE_1,
    alt: "Master tailor taking measurements for bespoke suit",
    title: "Private Tailoring",
    subject: "bespoke-suits",
    description: "Handcrafted for you",
  },
  {
    image: PANEL_IMAGE_2,
    alt: "Ready to wear premium collection display",
    title: "Ready to Wear",
    subject: "ready-to-wear",
    description: "Curated excellence",
  },
];

const scrollToContactWithSubject = (subject: string) => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    const subjectSelect = document.querySelector<HTMLSelectElement>("#service-type");
    if (subjectSelect) {
      subjectSelect.value = subject;
      // Trigger change event to update form state
      subjectSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, 700);
};

const SplitSection = () => {
  const ref = useFadeIn();

  return (
    <section id="split" ref={ref} className="fade-in-section grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {panels.map((panel) => (
        <button
          key={panel.title}
          onClick={() => scrollToContactWithSubject(panel.subject)}
          className="split-panel group relative overflow-hidden h-[50vh] md:h-screen w-full text-left cursor-pointer"
          aria-label={`${panel.title} - ${panel.description}`}
        >
          <img
            src={panel.image}
            alt={panel.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay - smooth darkening on hover */}
          <div
            className="split-overlay absolute inset-0"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
          {/* Label with subtle animation */}
          <div className="absolute bottom-12 left-8 md:left-16 z-10 transition-transform duration-500 group-hover:translate-y-[-4px]">
            <p className="editorial-label text-[10px] text-white/70 mb-2">
              {panel.description}
            </p>
            <h2
              className="editorial-heading text-2xl md:text-4xl tracking-wide"
              style={{ color: "#f5f5f5" }}
            >
              {panel.title}
            </h2>
          </div>
        </button>
      ))}
    </section>
  );
};

export default SplitSection;
