import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useCartContext } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { toast } from "sonner";
import { Ruler } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  category?: string;
  fabric_care?: string;
  shipping_returns?: string;
}

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCartContext();
  const { formatPrice } = useCurrency();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      // Fallback mock data
      setProduct({
        id: id || "1",
        name: "Classic Navy Suit",
        price: 45000,
        description:
          "A timeless navy suit crafted from premium Super 120s wool. Features a two-button jacket with notch lapels, double vent, and flat-front trousers. Perfect for business or formal occasions.",
        images: [
          "https://images.unsplash.com/photo-1594938298603-c8148c4b4de1?w=800",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800",
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
        fabric_care:
          "100% Super 120s wool. Dry clean only. Store on a proper hanger to maintain shape.",
        shipping_returns:
          "Free worldwide shipping. Returns accepted within 14 days of delivery. Items must be unworn with tags attached.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

    addItem({
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      image: product.images[0],
    });

    toast.success("Added to cart!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-[120px] flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-[120px] flex flex-col items-center justify-center">
        <p className="text-lg font-light text-neutral-500 mb-4">Product not found</p>
        <Link
          to="/collections"
          className="text-sm uppercase tracking-wider underline hover:no-underline"
        >
          Back to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 border-2 overflow-hidden ${
                    selectedImage === index ? "border-black" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="font-heading text-2xl md:text-3xl mb-2">{product.name}</h1>
            <p className="font-heading text-xl md:text-2xl text-neutral-600 mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="font-body text-sm font-light text-neutral-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider font-light">
                  Size
                </label>
                <Link
                  to="/size-guide"
                  className="flex items-center gap-1 text-xs text-neutral-500 hover:text-black transition-colors"
                >
                  <Ruler size={12} strokeWidth={1.5} />
                  Size Guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-xs font-light border transition-colors text-left ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-neutral-300 hover:border-black"
                    }`}
                    title={size}
                  >
                    <span className="block truncate max-w-[200px]">{size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider font-light mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                >
                  -
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors mb-4"
            >
              ADD TO CART
            </button>

            {/* Book Fitting / Consultation */}
            {product.category === "made-to-measure" ? (
              <Link
                to="/book-appointment"
                className="block text-center bg-neutral-100 text-black py-3 text-xs uppercase tracking-[0.15em] font-light hover:bg-neutral-200 transition-colors mb-4"
              >
                BOOK A CONSULTATION
              </Link>
            ) : (
              <Link
                to="/book-appointment"
                className="block text-center text-xs uppercase tracking-wider font-light underline hover:no-underline mb-4"
              >
                BOOK A FITTING
              </Link>
            )}

            {/* Delivery Info */}
            <p className="text-xs text-neutral-500 text-center mb-8">
              {product.category === "made-to-measure" 
                ? "Made to Measure: 4–8 weeks delivery. Includes fitting sessions."
                : "Bespoke items: 4–8 weeks. RTW: 5–7 working days."}
            </p>

            {/* Accordions */}
            <Accordion type="single" collapsible className="border-t border-neutral-200">
              <AccordionItem value="description">
                <AccordionTrigger className="text-xs uppercase tracking-wider font-light py-4">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-neutral-600 pb-4">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="fabric">
                <AccordionTrigger className="text-xs uppercase tracking-wider font-light py-4">
                  Fabric & Care
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-neutral-600 pb-4">
                  {product.fabric_care || "Premium fabrics sourced from the world's finest mills. Professional dry clean recommended."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-xs uppercase tracking-wider font-light py-4">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-neutral-600 pb-4">
                  {product.shipping_returns || "Free worldwide shipping. 14-day return policy for unworn items with tags attached."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
