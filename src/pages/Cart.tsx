import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, X } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

const Cart = () => {
  const { items, subtotal, removeItem, updateQuantity } = useCartContext();
  const { formatPrice } = useCurrency();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-12">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-neutral-500 font-light mb-4">Your cart is empty</p>
            <Link
              to="/collections"
              className="inline-block bg-black text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border-b border-neutral-200 pb-2 mb-4 hidden md:grid grid-cols-12 gap-4 text-xs uppercase tracking-wider font-light text-neutral-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid md:grid-cols-12 gap-4 items-center pb-6 border-b border-neutral-200"
                  >
                    {/* Product */}
                    <div className="md:col-span-6 flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover bg-neutral-100"
                      />
                      <div>
                        <h3 className="text-sm font-light">{item.name}</h3>
                        <p className="text-xs text-neutral-500 mt-1">
                          Size: {item.size}
                        </p>
                        <p className="text-xs text-neutral-500 md:hidden mt-1">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Minus size={14} strokeWidth={1} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Plus size={14} strokeWidth={1} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 text-right hidden md:block">
                      <p className="text-sm font-light">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Subtotal */}
                    <div className="md:col-span-2 flex items-center justify-end gap-4">
                      <p className="text-sm font-light">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} strokeWidth={1} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6">
                <h2 className="font-heading text-lg mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm font-light mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full bg-black text-white text-center py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors"
                >
                  PROCEED TO CHECKOUT
                </Link>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
