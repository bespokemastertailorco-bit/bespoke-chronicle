import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useCurrency } from "@/context/CurrencyContext";
import { ALL_PRODUCTS, COLLECTION_NAMES, COLLECTION_SEO } from "@/data/products";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  image_hover?: string;
  category: string;
  badge?: string;
}

const collectionNames: Record<string, string> = {
  "shirts": "Bespoke Shirts",
  "classic-fit": "Classic Fit Shirts",
  "slim-fit": "Slim Fit Shirts",
  "dress-shirts": "Dress Shirts",
  "trousers": "Bespoke Trousers",
  "formal-trousers": "Formal Trousers",
  "all-season-trousers": "All Season Trousers",
  "blazers": "Bespoke Blazers",
  "single-breasted": "Single Breasted Blazers",
  "double-breasted": "Double Breasted Blazers",
  "suits": "Bespoke Suits",
  "two-piece-suits": "Two Piece Suits",
  "three-piece-suits": "Three Piece Suits",
  "coats": "Bespoke Coats",
  "overcoats": "Overcoats",
  "topcoats": "Topcoats",
  "formal-wear": "Bespoke Formal Wear",
  "black-tie": "Black Tie",
  "white-tie": "White Tie",
  "tuxedo": "Tuxedo",
};

const Collections = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const location = useLocation();
  const { formatPrice } = useCurrency();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");

  // Update document title for SEO
  useEffect(() => {
    const seo = collectionId ? COLLECTION_SEO[collectionId] : null;
    if (seo) {
      document.title = seo.title;
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", seo.description);
      }
    }
  }, [collectionId]);

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
      // Map data to include badge if present in our local data
      const mappedData = (data || []).map((p: Product) => {
        const localProduct = ALL_PRODUCTS.find(lp => lp.id === p.id);
        return {
          ...p,
          badge: localProduct?.badge
        };
      });
      setProducts(mappedData);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback to local products data
      const localProducts = collectionId 
        ? ALL_PRODUCTS.filter(p => p.category === collectionId).map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.images[0],
            category: p.category,
            badge: p.badge
          }))
        : ALL_PRODUCTS.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.images[0],
            category: p.category,
            badge: p.badge
          }));
      setProducts(localProducts);
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
    ? COLLECTION_NAMES[collectionId] || collectionId.replace(/-/g, " ").toUpperCase()
    : "ALL COLLECTIONS";

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <h1 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-2">
          {collectionName}
        </h1>
        {collectionId && COLLECTION_SEO[collectionId] && (
          <p className="text-center text-sm font-light text-neutral-500 mb-8 max-w-2xl mx-auto">
            {COLLECTION_SEO[collectionId].description}
          </p>
        )}

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
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] uppercase tracking-wider px-2 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xs font-light text-neutral-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs font-light text-neutral-500">
                  {formatPrice(product.price)}
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
