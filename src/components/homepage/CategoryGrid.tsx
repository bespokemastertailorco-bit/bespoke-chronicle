import { Link } from "react-router-dom";

const CATEGORY_SUITS_IMAGE = ""; // Replace with your image path
const CATEGORY_BLAZERS_IMAGE = ""; // Replace with your image path
const CATEGORY_COATS_IMAGE = ""; // Replace with your image path
const CATEGORY_TROUSERS_IMAGE = ""; // Replace with your image path
const CATEGORY_SHIRTS_IMAGE = ""; // Replace with your image path
const CATEGORY_FORMALWEAR_IMAGE = "/images/formal-wear.png";

const categories = [
  {
    title: "Suits",
    href: "/collections/suits",
    image: CATEGORY_SUITS_IMAGE,
    bg: "#c8c4be",
  },
  {
    title: "Blazers",
    href: "/collections/blazers",
    image: CATEGORY_BLAZERS_IMAGE,
    bg: "#b8b4ae",
  },
  {
    title: "Coats",
    href: "/collections/coats",
    image: CATEGORY_COATS_IMAGE,
    bg: "#d2cec8",
  },
  {
    title: "Trousers",
    href: "/collections/trousers",
    image: CATEGORY_TROUSERS_IMAGE,
    bg: "#bfbbb5",
  },
  {
    title: "Shirts",
    href: "/collections/shirts",
    image: CATEGORY_SHIRTS_IMAGE,
    bg: "#cac6c0",
  },
  {
    title: "Formal Wear",
    href: "/collections/formal-wear",
    image: CATEGORY_FORMALWEAR_IMAGE,
    bg: "#b5b1ab",
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
              {/* Placeholder background */}
              <div
                className="placeholder-img transition-all duration-500 group-hover:brightness-90"
                data-photo="replaceable"
                style={{
                  background: cat.image
                    ? `url(${cat.image}) center/cover no-repeat`
                    : cat.bg,
                }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
              
              {/* Category name overlay */}
              <div className="absolute inset-0 flex items-end p-5">
                <h3
                  className="text-white uppercase font-normal"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
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
