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
    <section ref={ref} className="fade-in-section grid grid-cols-1 md:grid-cols-2">
      {panels.map((panel) => (
        <button
          key={panel.title}
          onClick={() => scrollToContactWithSubject(panel.subject)}
          className="group relative overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[70vh] w-full text-left cursor-pointer"
          aria-label={panel.title}
        >
          <img
            src={panel.image}
            alt={panel.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
          <div
            className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(0,0,0,0.55)" }}
          />
          {/* Label bottom-left */}
          <div className="absolute bottom-10 left-8 md:left-12">
            <h2
              className="editorial-heading text-2xl md:text-3xl"
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
