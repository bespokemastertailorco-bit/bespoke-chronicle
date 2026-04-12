import { useFadeIn } from "@/hooks/useFadeIn";

const scrollToContactWithSubject = (subject: string) => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    const subjectInput = document.querySelector<HTMLInputElement>("#contact-subject");
    if (subjectInput) subjectInput.value = subject;
  }, 600);
};

const services = [
  {
    image: "/images/service-bespoke.jpg",
    alt: "Bespoke Tailoring — garment crafted exclusively for you",
    title: "Private Tailoring",
    desc: "The experience of a garment crafted exclusively for you.",
    subject: "Enquiry about Bespoke Tailoring",
  },
  {
    image: "/images/service-rtw.jpg",
    alt: "Ready to Wear — contemporary elegance",
    title: "Ready to Wear",
    desc: "Contemporary elegance meets timeless design.",
    subject: "Enquiry about Ready to Wear",
  },
  {
    image: "/images/service-alterations.jpg",
    alt: "Alterations — expert garment alterations",
    title: "Alterations",
    desc: "Expert alterations ensuring the perfect fit every time.",
    subject: "Enquiry about Alterations",
  },
];

const MainSplit = () => {
  const ref = useFadeIn();

  return (
    <section id="services" ref={ref} className="fade-in-section">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="group relative hover-zoom block">
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover max-w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-4">
              <h2 className="editorial-heading text-2xl md:text-3xl text-foreground mb-3 text-center">
                {service.title}
              </h2>
              <p className="font-body text-sm text-muted-foreground font-light mb-4 text-center max-w-xs">
                {service.desc}
              </p>
              <button
                onClick={() => scrollToContactWithSubject(service.subject)}
                className="editorial-link cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSplit;
