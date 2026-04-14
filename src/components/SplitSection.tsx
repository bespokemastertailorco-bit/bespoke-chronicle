import { useFadeIn } from "@/hooks/useFadeIn";
import splitTailoring from "@/assets/split-tailoring.jpg";
import splitRtw from "@/assets/split-readytowear.jpg";

const panels = [
  {
    image: splitTailoring,
    alt: "Private Tailoring — hand-crafted garments",
    title: "Private Tailoring",
    subject: "Enquiry about Bespoke Tailoring",
  },
  {
    image: splitRtw,
    alt: "Ready to Wear — contemporary elegance",
    title: "Ready to Wear",
    subject: "Enquiry about Ready to Wear",
  },
];

const scrollToContactWithSubject = (subject: string) => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    const input = document.querySelector<HTMLInputElement>("#contact-subject");
    if (input) input.value = subject;
  }, 600);
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
          aria-label={panel.title}
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
            style={{ background: "rgba(0,0,0,0.25)" }}
          />
          {/* Label bottom-left with subtle animation */}
          <div className="absolute bottom-12 left-8 md:left-16 z-10 transition-transform duration-500 group-hover:translate-y-[-4px]">
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
