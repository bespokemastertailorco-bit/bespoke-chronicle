import { useFadeIn } from "@/hooks/useFadeIn";

const testimonials = [
  {
    name: "James R.",
    text: "Bespoke Master delivered the finest suit I have ever worn. The attention to detail is unmatched.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "David M.",
    text: "Exceptional craftsmanship and a truly personal service. I wouldn't go anywhere else.",
    avatar: "/images/avatar-2.jpg",
  },
];

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20">
      {/* Brand story */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
        <div>
          <p className="editorial-label mb-8">Our Legacy</p>
          <h2 className="editorial-heading text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
            Bespoke Master is a legacy of craftsmanship with over 35 years of excellence, offering
            private tailoring services to clients across the world.
          </h2>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="editorial-link cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/owner.jpg"
            alt="Bespoke Master — owner and master tailor"
            className="w-full h-full object-cover max-w-full"
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto">
        <p className="editorial-label text-center mb-12">What Our Clients Say</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col items-center text-center gap-4">
              <img
                src={t.avatar}
                alt={`${t.name} testimonial avatar`}
                className="w-14 h-14 rounded-full object-cover max-w-full"
              />
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                "{t.text}"
              </p>
              <p className="editorial-label">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
