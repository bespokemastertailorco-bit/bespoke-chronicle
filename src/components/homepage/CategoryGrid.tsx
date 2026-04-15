import { Link } from "react-router-dom";

const categories = [
  {
    title: "Shirts",
    href: "/collections/shirts",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=500",
  },
  {
    title: "Trousers",
    href: "/collections/trousers",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500",
  },
  {
    title: "Blazers",
    href: "/collections/blazers",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
  },
  {
    title: "Suits",
    href: "/collections/suits",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
  },
  {
    title: "Coats",
    href: "/collections/coats",
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500",
  },
  {
    title: "Formal Wear",
    href: "/collections/formal-wear",
    image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500",
  },
];

const CategoryGrid = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.35em] font-light mb-3">
            Men's Luxury Collections
          </p>
          <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-black">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.title}
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
