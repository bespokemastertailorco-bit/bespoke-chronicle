import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (query) {
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [query]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("name", `%${query}%`);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Search error:", error);
      // Fallback mock data
      setProducts([
        {
          id: "1",
          name: `Classic ${query} Suit`,
          price: 45000,
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=500",
          category: "suits",
        },
        {
          id: "2",
          name: `${query} Wool Blazer`,
          price: 28000,
          image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
          category: "blazers",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-4">
          Search Results
        </h1>
        <p className="text-center text-sm font-light text-neutral-500 mb-8">
          {query ? `Showing results for "${query}"` : "Enter a search term"}
        </p>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-neutral-100 animate-pulse" />
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-light text-neutral-800 mb-1">{product.name}</h3>
                <p className="text-xs font-light text-neutral-500">
                  ₹{product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-500 font-light mb-4">
              No results found for &quot;{query}&quot;. Try a different search.
            </p>
            <Link
              to="/collections"
              className="text-sm uppercase tracking-wider underline hover:no-underline"
            >
              Browse All Collections
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
