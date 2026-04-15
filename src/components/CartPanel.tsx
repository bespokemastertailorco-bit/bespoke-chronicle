import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartPanel = () => {
  const { items, subtotal, isOpen, setIsOpen, removeItem, updateQuantity } = useCartContext();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[70] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-heading text-lg uppercase tracking-wider">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-neutral-100 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-neutral-300 mb-4" />
              <p className="text-neutral-500 font-light">Your cart is empty</p>
              <Link
                to="/collections"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm uppercase tracking-wider underline hover:no-underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover bg-neutral-100"
                  />
                  <div className="flex-1">
                    <h3 className="font-light text-sm">{item.name}</h3>
                    <p className="text-xs text-neutral-500 mt-1">Size: {item.size}</p>
                    <p className="text-sm mt-2">₹{item.price.toLocaleString()}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border hover:bg-neutral-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={1} />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border hover:bg-neutral-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={1} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-1 hover:bg-neutral-100 transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={16} strokeWidth={1} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-light">Subtotal</span>
              <span className="font-medium">₹{subtotal.toLocaleString()}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-black text-white text-center py-3 text-xs uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPanel;
