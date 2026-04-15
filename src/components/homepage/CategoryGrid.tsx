import { Link } from "react-router-dom";

const categories = [
  {
    title: "Suits",
    href: "/collections/suits",
    imageComment: "<!-- REPLACE IMAGE: Category - Suits -->",
  },
  {
    title: "Blazers",
    href: "/collections/blazers",
    imageComment: "<!-- REPLACE IMAGE: Category - Blazers -->",
  },
  {
    title: "Coats",
    href: "/collections/coats",
    imageComment: "<!-- REPLACE IMAGE: Category - Coats -->",
  },
  {
    title: "Trousers",
    href: "/collections/trousers",
    imageComment: "<!-- REPLACE IMAGE: Category - Trousers -->",
  },
  {
    title: "Shirts",
    href: "/collections/shirts",
    imageComment: "<!-- REPLACE IMAGE: Category - Shirts -->",
  },
  {
    title: "Formal Wear",
    href: "/collections/formal-wear",
    imageComment: "<!-- REPLACE IMAGE: Category - Formal Wear -->",
  },
];

const CategoryGrid = () => {
  return (
    <section id="collection" className="w-full py-20 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>Our Collection</h2>
          <div className="rule" />
        </div>
        
        {/* Tight 3px grid like Canali */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group category-cell aspect-square relative overflow-hidden"
            >
              {cat.imageComment}
              {/* Placeholder background */}
              <div 
                className="placeholder-img transition-transform duration-500 group-hover:scale-[1.03]"
                data-photo="replaceable"
                style={{ background: "#f0ede8" }}
              />
              
              {/* Category name overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <h3 
                  className="text-white text-xs uppercase tracking-[0.1em] font-normal"
                  style={{ 
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
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
