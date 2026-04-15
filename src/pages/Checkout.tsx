import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    country: "India",
    phone: "",
  });

  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleWhatsAppCheckout = () => {
    const itemsList = items
      .map(
        (item) =>
          `${item.name} (Size: ${item.size}, Qty: ${item.quantity}) - ₹${
            item.price * item.quantity
          }`
      )
      .join("%0A");

    const message = `Hello! I would like to place an order:%0A%0A${itemsList}%0A%0ATotal: ₹${total}%0A%0AShipping to:%0A${formData.name}%0A${formData.address}%0A${formData.city}, ${formData.pincode}%0A${formData.country}%0APhone: ${formData.phone}`;

    const whatsappUrl = `https://wa.me/917310000000?text=${message}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Order details sent via WhatsApp!");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-[140px] flex flex-col items-center justify-center">
        <p className="text-lg font-light text-neutral-500 mb-4">Your cart is empty</p>
        <Link
          to="/collections"
          className="bg-black text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Shipping Details */}
          <div>
            <h2 className="font-heading text-lg mb-6">Shipping Details</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Address *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-light mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-light mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div>
            <h2 className="font-heading text-lg mb-6">Order Summary</h2>

            <div className="bg-neutral-50 p-6 mb-6">
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="font-light">
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-2 text-sm font-light">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-medium text-base pt-2">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider font-light mb-4">
                Payment Method
              </h3>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-600 text-white py-4 text-sm uppercase tracking-[0.15em] font-light hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Pay via WhatsApp
              </button>
            </div>

            <p className="text-xs text-neutral-500 text-center">
              Your order details will be sent via WhatsApp for payment confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
