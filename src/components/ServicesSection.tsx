import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "bespoke-suits",
    title: "Bespoke Suits",
    description: "Handcrafted suits tailored to your exact measurements. Over 40 hours of meticulous craftsmanship goes into every garment.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
    subject: "Enquiry about Bespoke Suits",
  },
  {
    id: "ready-to-wear",
    title: "Ready to Wear",
    description: "Curated collection of premium ready-made garments. Impeccable fit with the convenience of immediate availability.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600",
    subject: "Enquiry about Ready to Wear",
  },
  {
    id: "alterations",
    title: "Alterations",
    description: "Expert alterations to perfect the fit of your existing garments. From simple hems to complex restructuring.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    subject: "Enquiry about Alterations",
  },
  {
    id: "shirts-trousers",
    title: "Shirts & Trousers",
    description: "Custom shirts and trousers crafted from the finest fabrics. Perfect for business, formal, or casual occasions.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600",
    subject: "Enquiry about Shirts & Trousers",
  },
];

const scrollToContactWithSubject = (subject: string) => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    const subjectInput = document.querySelector<HTMLSelectElement>("#service-type");
    const messageInput = document.querySelector<HTMLTextAreaElement>("#contact-message");
    if (subjectInput) {
      const options = Array.from(subjectInput.options);
      const matchingOption = options.find(opt => opt.text.includes(subject.replace("Enquiry about ", "")));
      if (matchingOption) {
        subjectInput.value = matchingOption.value;
      }
    }
    if (messageInput) {
      messageInput.focus();
    }
  }, 700);
};

const ServicesSection = () => {
  const ref = useFadeIn();

  return (
    <section id="services" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="editorial-label mb-6">Our Services</p>
          <h2 className="editorial-heading text-2xl md:text-4xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Crafted with Precision, Designed for Distinction
          </h2>
          <p className="font-body text-sm font-light text-muted-foreground mt-6 max-w-xl mx-auto">
            From bespoke tailoring to expert alterations, we offer a complete range of services 
            for the discerning gentleman who values quality and craftsmanship.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-background overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="editorial-heading text-lg mb-3">{service.title}</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
                <button
                  onClick={() => scrollToContactWithSubject(service.subject)}
                  className="mt-6 flex items-center gap-2 editorial-link text-xs group/btn cursor-pointer"
                >
                  Book Now
                  <ArrowRight size={14} strokeWidth={1} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
