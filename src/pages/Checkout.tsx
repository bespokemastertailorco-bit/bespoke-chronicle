import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { toast } from "sonner";
import { 
  Lock, 
  CreditCard, 
  Smartphone, 
  Wallet, 
  Building2, 
  MessageCircle,
  Check
} from "lucide-react";

// Payment method types
type PaymentMethod = 
  | "visa" | "mastercard" | "amex" | "discover"
  | "applepay" | "googlepay" | "paypal"
  | "upi" | "razorpay" | "paytm"
  | "klarna" | "stripe"
  | "banktransfer" | "whatsapp";

interface PaymentOption {
  id: PaymentMethod;
  name: string;
  subtitle?: string;
  category: string;
  icon: React.ReactNode;
  logo?: string;
}

const paymentOptions: PaymentOption[] = [
  // International Cards
  { id: "visa", name: "Visa", subtitle: "Credit/Debit", category: "International Cards", icon: <CreditCard size={20} />, logo: "VISA" },
  { id: "mastercard", name: "Mastercard", subtitle: "Credit/Debit", category: "International Cards", icon: <CreditCard size={20} />, logo: "MC" },
  { id: "amex", name: "American Express", subtitle: "Credit/Debit", category: "International Cards", icon: <CreditCard size={20} />, logo: "AMEX" },
  { id: "discover", name: "Discover", subtitle: "Discover Card", category: "International Cards", icon: <CreditCard size={20} />, logo: "DISC" },
  // Digital Wallets
  { id: "applepay", name: "Apple Pay", category: "Digital Wallets", icon: <Smartphone size={20} />, logo: "APPLE" },
  { id: "googlepay", name: "Google Pay", category: "Digital Wallets", icon: <Smartphone size={20} />, logo: "GPay" },
  { id: "paypal", name: "PayPal", subtitle: "Pay in your currency", category: "Digital Wallets", icon: <Wallet size={20} />, logo: "PP" },
  // India Specific
  { id: "upi", name: "UPI", subtitle: "GPay, PhonePe, Paytm", category: "India Specific", icon: <Smartphone size={20} />, logo: "UPI" },
  { id: "razorpay", name: "Razorpay", subtitle: "Net Banking / EMI / Wallets", category: "India Specific", icon: <Building2 size={20} />, logo: "RP" },
  { id: "paytm", name: "Paytm Wallet", category: "India Specific", icon: <Wallet size={20} />, logo: "PTM" },
  // UK/EU Specific
  { id: "klarna", name: "Klarna", subtitle: "Buy Now, Pay Later", category: "UK/EU Specific", icon: <Wallet size={20} />, logo: "KLAR" },
  { id: "stripe", name: "Stripe", subtitle: "EU Card Payments", category: "UK/EU Specific", icon: <CreditCard size={20} />, logo: "STRIPE" },
  // Other
  { id: "banktransfer", name: "Bank Transfer", subtitle: "Contact us for wire transfer details", category: "Other", icon: <Building2 size={20} /> },
  { id: "whatsapp", name: "WhatsApp / Custom Order", subtitle: "Message us to arrange bespoke payment", category: "Other", icon: <MessageCircle size={20} /> },
];

const Checkout = () => {
  const { items, subtotal, clearCart } = useCartContext();
  const { formatPrice, currency } = useCurrency();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("razorpay");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    country: "India",
    phone: "",
  });

  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Handle WhatsApp checkout
    if (selectedPayment === "whatsapp") {
      const itemsList = items
        .map(
          (item) =>
            `${item.name} (Size: ${item.size}, Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
        )
        .join("%0A");

      const message = `Hello! I would like to place an order:%0A%0A${itemsList}%0A%0ATotal: ${formatPrice(total)}%0APayment Method: ${paymentOptions.find(p => p.id === selectedPayment)?.name}%0A%0AShipping to:%0A${formData.name}%0A${formData.email}%0A${formData.address}%0A${formData.city}, ${formData.pincode}%0A${formData.country}%0APhone: ${formData.phone}`;

      const whatsappUrl = `https://wa.me/917310000000?text=${message}`;
      window.open(whatsappUrl, "_blank");

      toast.success("Order details sent via WhatsApp!");
      clearCart();
      return;
    }

    // For other payment methods (visual only)
    toast.success(`Order placed with ${paymentOptions.find(p => p.id === selectedPayment)?.name}. This is a demo - actual payment processing will be implemented.`);
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

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
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
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-2 text-sm font-light">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-medium text-base pt-2">
                  <span>Total ({currency.code})</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Lock size={14} className="text-neutral-500" />
                <h3 className="text-xs uppercase tracking-wider font-light">
                  Secure Payment
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                All transactions are encrypted and secure.
              </p>

              {/* Payment Options */}
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                {["International Cards", "Digital Wallets", "India Specific", "UK/EU Specific", "Other"].map((category) => {
                  const categoryOptions = paymentOptions.filter(p => p.category === category);
                  if (categoryOptions.length === 0) return null;

                  return (
                    <div key={category}>
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
                        {category}
                      </p>
                      <div className="space-y-2">
                        {categoryOptions.map((option) => (
                          <label
                            key={option.id}
                            className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                              selectedPayment === option.id
                                ? "border-black bg-neutral-50"
                                : "border-neutral-200 hover:border-neutral-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={option.id}
                              checked={selectedPayment === option.id}
                              onChange={() => setSelectedPayment(option.id)}
                              className="hidden"
                            />
                            <div className="flex-shrink-0">
                              {selectedPayment === option.id ? (
                                <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                                  <Check size={10} className="text-white" />
                                </div>
                              ) : (
                                <div className="w-4 h-4 border border-neutral-300 rounded-full" />
                              )}
                            </div>
                            <div className="flex-shrink-0 text-neutral-400">
                              {option.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium">{option.name}</p>
                              {option.subtitle && (
                                <p className="text-[10px] text-neutral-500">{option.subtitle}</p>
                              )}
                            </div>
                            {option.logo && (
                              <div className="flex-shrink-0 text-[10px] font-bold text-neutral-400 px-1">
                                {option.logo}
                              </div>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 mt-6 py-3 bg-neutral-50 rounded">
                <Lock size={14} className="text-neutral-500" />
                <span className="text-xs text-neutral-500">256-bit SSL Encryption</span>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-black text-white py-4 mt-6 text-sm uppercase tracking-[0.15em] font-light hover:bg-neutral-800 transition-colors"
              >
                Place Order
              </button>

              <p className="text-[10px] text-neutral-400 text-center mt-4">
                * This is a visual preview. Actual payment processing will be implemented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
