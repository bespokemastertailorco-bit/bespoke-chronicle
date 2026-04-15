import { Link } from "react-router-dom";

// Category images - REPLACE IMAGE comments apply to each category photo
const categories = [
  {
    title: "Into the Cold",
    href: "/collections/winter",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
  },
  {
    title: "Under the Sun",
    href: "/collections/summer",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
  },
  {
    title: "LEATHER GOODS",
    href: "/collections/leather-goods",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
  },
  {
    title: "SNEAKERS",
    href: "/collections/sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    title: "LOAFERS",
    href: "/collections/loafers",
    image: "https://images.unsplash.com/photo-1614252370105-f18b42ac4b84?w=500",
  },
  {
    title: "TRAVEL BAGS",
    href: "/collections/travel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
];

const CategoryGrid = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden"
              data-photo="replaceable"
            >
              {/* REPLACE IMAGE: {cat.title} Category */}
              <img
                src={cat.image}
                alt={cat.title}
                data-photo="replaceable"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white text-sm md:text-base uppercase tracking-[0.15em] font-light">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
