import { useFadeIn } from "@/hooks/useFadeIn";

const categories = [
  { name: "Blazers", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600", description: "Tailored perfection" },
  { name: "Knitwear", image: "https://images.unsplash.com/photo-1625910513956-7e95d8e2e04b?w=600", description: "Comfort meets style" },
  { name: "Leather Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600", description: "Timeless edge" },
];

const CategoryStrip = () => {
  const ref = useFadeIn();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="editorial-label text-center mb-8">Browse by Category</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat) => (
            <a key={cat.name} href="#collection" onClick={handleClick} className="group hover-zoom block">
              <div className="overflow-hidden mb-5">
                <img
                  src={cat.image}
                  alt={`${cat.name} - ${cat.description}`}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover max-w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="editorial-label text-center">{cat.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;
