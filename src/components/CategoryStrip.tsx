import { useFadeIn } from "@/hooks/useFadeIn";

const categories = [
  { name: "Blazers", image: "/images/service-bespoke.jpg" },
  { name: "Knitwear", image: "/images/service-rtw.jpg" },
  { name: "Leather Jackets", image: "/images/service-alterations.jpg" },
];

const CategoryStrip = () => {
  const ref = useFadeIn();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-32 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {categories.map((cat) => (
          <a key={cat.name} href="#services" onClick={handleClick} className="group hover-zoom block">
            <div className="overflow-hidden mb-5">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover max-w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <p className="editorial-label text-center">{cat.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryStrip;
