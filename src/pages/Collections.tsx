import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  image_hover?: string;
  category: string;
}

const collectionNames: Record<string, string> = {
  "t-shirts": "T-Shirts",
  "premium-tshirts": "Premium T-Shirts",
  "polo": "Polo",
  "shirts": "Shirts",
  "classic-fit": "Classic Fit Shirts",
  "slim-fit": "Slim Fit Shirts",
  "kimono": "Kimono Shirts",
  "trousers": "Trousers",
  "all-season-trousers": "All Season Trousers",
  "sneakers": "Sneakers",
  "loafers": "Loafers",
  "footwear-black-label": "Black Label Footwear",
  "cardigans": "Cardigans",
  "vests": "Vests",
  "sweaters": "Sweaters",
  "outerwear": "Outerwear",
  "jackets": "Jackets",
  "parka": "Parka",
  "trench": "Trench",
  "leather-goods": "Leather Goods",
  "clutch": "Clutch",
  "travel": "Travel Bags",
  "shopper": "Shopper",
  "garment-bags": "Garment Bags",
  "card-holders": "Card Holders",
  "accessories": "Accessories",
  "hats": "Hats",
  "pocket-square": "Pocket Square",
  "suspenders": "Suspenders",
  "ties": "Ties",
  "cufflinks": "Cufflinks",
  "scarves": "Scarves",
  "summer": "Summer Capsule",
  "swimwear": "Swimwear",
  "winter": "Winter Collection",
  "black-label": "Black Label",
};

const Collections = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, [collectionId]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = supabase.from("products").select("*");

      if (collectionId && collectionId !== "all") {
        query = query.eq("category", collectionId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback mock data
      setProducts([
        {
          id: "1",
          name: "Classic Navy Suit",
          price: 45000,
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=500",
          image_hover: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
          category: collectionId || "suits",
        },
        {
          id: "2",
          name: "Charcoal Wool Blazer",
          price: 28000,
          image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
          category: collectionId || "blazers",
        },
        {
          id: "3",
          name: "Premium Cotton Shirt",
          price: 6500,
          image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
          category: collectionId || "shirts",
        },
        {
          id: "4",
          name: "Leather Travel Bag",
          price: 35000,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
          category: collectionId || "travel",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const collectionName = collectionId
    ? collectionNames[collectionId] || collectionId.replace(/-/g, " ").toUpperCase()
    : "ALL COLLECTIONS";

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <h1 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-8">
          {collectionName}
        </h1>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
          <p className="text-xs font-light text-neutral-500">
            {products.length} products
          </p>
          <div className="flex items-center gap-3">
            <label className="text-xs font-light text-neutral-500">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-light border border-neutral-300 px-3 py-1.5 focus:outline-none focus:border-black"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-neutral-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {product.image_hover && (
                    <img
                      src={product.image_hover}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </div>
                <h3 className="text-xs font-light text-neutral-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs font-light text-neutral-500">
                  ₹{product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm font-light text-neutral-500">
              No products found in this collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
