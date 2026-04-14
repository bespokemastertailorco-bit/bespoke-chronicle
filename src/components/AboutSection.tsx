import { useFadeIn } from "@/hooks/useFadeIn";
import { Star } from "lucide-react";

const ABOUT_IMAGE = "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800";

const testimonials = [
  {
    name: "James Richardson",
    location: "London, UK",
    text: "Bespoke Master delivered the finest suit I have ever worn. The attention to detail is unmatched, and the fit is simply perfect. Worth every penny.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    rating: 5,
  },
  {
    name: "David Mitchell",
    location: "New York, USA",
    text: "Exceptional craftsmanship and a truly personal service. From the first consultation to the final fitting, everything was handled with professionalism.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    location: "Mumbai, India",
    text: "I've been a loyal customer for 8 years now. The quality has remained consistently outstanding. My bespoke shirts are the envy of my colleagues.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "The alterations service saved my favorite blazer after a weight change. You'd never know it was altered - looks like it was made just for me.",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100",
    rating: 5,
  },
  {
    name: "Robert Anderson",
    location: "Sydney, Australia",
    text: "I ordered a complete wardrobe for my wedding. The team understood my vision perfectly and delivered beyond expectations. Simply stunning work.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        strokeWidth={1.5}
        className={i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}
      />
    ))}
  </div>
);

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20">
      {/* Brand story */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
        <div>
          <p className="editorial-label mb-8">Our Legacy</p>
          <h2 className="editorial-heading text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
            A Tradition of Excellence Since 1989
          </h2>
          <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-4">
            For over three decades, Bespoke Master has been the destination for discerning 
            gentlemen who demand nothing but the finest. Our master tailors combine time-honored 
            techniques with contemporary elegance to create garments that are truly exceptional.
          </p>
          <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-6">
            Every stitch tells a story of dedication, precision, and an unwavering commitment 
            to quality. From the initial consultation to the final fitting, we ensure that 
            each garment reflects your unique style and fits you perfectly.
          </p>
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
            src={ABOUT_IMAGE}
            alt="Bespoke Master showroom featuring premium tailoring services"
            loading="lazy"
            className="w-full h-full object-cover max-w-full"
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto">
        <p className="editorial-label text-center mb-4">Client Experiences</p>
        <h3 className="editorial-heading text-xl md:text-2xl text-center text-foreground mb-12">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.name} className="flex flex-col bg-muted/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={`${t.name} testimonial avatar`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="editorial-label text-[10px] mb-0.5">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mt-4">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
        {/* Additional testimonials - 2 more for tablet/desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {testimonials.slice(3).map((t) => (
            <div key={t.name} className="flex flex-col bg-muted/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={`${t.name} testimonial avatar`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="editorial-label text-[10px] mb-0.5">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mt-4">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
