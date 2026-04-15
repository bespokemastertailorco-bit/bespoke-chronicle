import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  MessageCircle,
  RefreshCcw,
  Globe,
  HandHelping,
  CreditCard,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email: email.trim(), created_at: new Date().toISOString() }]);

      if (error) throw error;

      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Row 1: Trust Badges */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link
              to="/shipping-policy"
              className="flex flex-col items-center text-center group"
            >
              <RefreshCcw
                size={24}
                strokeWidth={1}
                className="text-white/60 mb-3 group-hover:text-white transition-colors"
              />
              <span className="text-[10px] uppercase tracking-[0.15em] font-light text-white/80 group-hover:text-white transition-colors">
                FREE RETURNS & EXCHANGES
              </span>
            </Link>
            <Link
              to="/shipping-policy"
              className="flex flex-col items-center text-center group"
            >
              <Globe
                size={24}
                strokeWidth={1}
                className="text-white/60 mb-3 group-hover:text-white transition-colors"
              />
              <span className="text-[10px] uppercase tracking-[0.15em] font-light text-white/80 group-hover:text-white transition-colors">
                FREE WORLDWIDE SHIPPING
              </span>
            </Link>
            <Link
              to="/our-story"
              className="flex flex-col items-center text-center group"
            >
              <HandHelping
                size={24}
                strokeWidth={1}
                className="text-white/60 mb-3 group-hover:text-white transition-colors"
              />
              <span className="text-[10px] uppercase tracking-[0.15em] font-light text-white/80 group-hover:text-white transition-colors">
                HANDCRAFTED IN INDIA
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Row 2: Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Bespoke Master"
                className="h-10 w-auto object-contain invert"
              />
            </Link>
            <address className="not-italic text-xs font-light text-white/60 leading-relaxed mb-4">
              ED-184, 3rd Floor, Scheme No. 94,<br />
              Sector D, Khajrana Square,<br />
              Indore, MP - India
            </address>
            <p className="text-xs font-light text-white/60 mb-1">
              <a href="tel:+917310000000" className="hover:text-white transition-colors">
                +91 731 000 0000
              </a>
            </p>
            <p className="text-xs font-light text-white/60">
              <a href="mailto:theadmasons@gmail.com" className="hover:text-white transition-colors">
                theadmasons@gmail.com
              </a>
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-light mb-6 text-white/80">
              Useful Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-light mb-6 text-white/80">
              Locations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/locations/delhi"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Bespoke Tailor Delhi
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/dubai"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Bespoke Tailor Dubai
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/london"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Bespoke Tailor London
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/mumbai"
                  className="text-xs font-light text-white/60 hover:text-white transition-colors"
                >
                  Bespoke Tailor Mumbai
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-light mb-6 text-white/80">
              Subscribe to newsletter
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-transparent border border-white/30 px-4 py-2.5 text-xs font-light text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] font-light hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBSCRIBE"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Row 3: Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-[10px] font-light text-white/50">
              © {currentYear} — Bespoke Master®
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-light text-white/50 uppercase tracking-wider">
                Visa
              </span>
              <span className="text-[10px] font-light text-white/50 uppercase tracking-wider">
                Mastercard
              </span>
              <span className="text-[10px] font-light text-white/50 uppercase tracking-wider">
                UPI
              </span>
              <span className="text-[10px] font-light text-white/50 uppercase tracking-wider">
                PayPal
              </span>
              <span className="text-[10px] font-light text-white/50 uppercase tracking-wider">
                Amex
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/bespokemasterglobal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Instagram size={18} strokeWidth={1} />
              </a>
              <a
                href="https://facebook.com/bespokemaster"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Facebook size={18} strokeWidth={1} />
              </a>
              <a
                href="https://wa.me/917310000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle size={18} strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
