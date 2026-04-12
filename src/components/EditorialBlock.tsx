import { useFadeIn } from "@/hooks/useFadeIn";

const EditorialBlock = () => {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="fade-in-section relative w-full my-20 md:my-32">
      <img
        src="/images/about.jpg"
        alt="Made to Measure — tailor crafting a garment"
        loading="lazy"
        className="w-full aspect-[16/7] object-cover max-w-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-3 text-center">
          Made to Measure
        </h2>
        <p className="font-body text-sm text-muted-foreground font-light mb-6 text-center">
          Every detail refined to perfection
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
    </section>
  );
};

export default EditorialBlock;
