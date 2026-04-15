import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#e8e8e8]">
      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Bespoke Master"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] font-light text-[#6b6b6b] leading-relaxed mb-6">
              Handcrafted in India. Available Worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/bespokemasterglobal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
              >
                <Instagram size={18} strokeWidth={1} />
              </a>
              <a
                href="https://wa.me/917310000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
              >
                <MessageCircle size={18} strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Collection */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-normal mb-6 text-[#1a1a1a]">
              Our Collection
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collections/suits"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Suits
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/blazers"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Blazers
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/coats"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Coats
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/trousers"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Trousers
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/shirts"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Shirts
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/formal-wear"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Formal Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Bespoke Master */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-normal mb-6 text-[#1a1a1a]">
              Bespoke Master
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/book-appointment"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Bespoke Service
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Our Craft
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[13px] font-light text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-normal mb-6 text-[#1a1a1a]">
              Contact
            </h4>
            <address className="not-italic text-[13px] font-light text-[#6b6b6b] leading-[1.8] mb-4">
              Atelier & Manufacturing Unit<br />
              Indore, Madhya Pradesh, India<br />
              Available Worldwide
            </address>
            <p className="text-[13px] font-light">
              <a 
                href="mailto:theadmasons@gmail.com" 
                className="text-[#6b6b6b] hover:text-[#1a1a1a] hover:underline transition-all duration-300"
              >
                theadmasons@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <p className="text-[10px] uppercase tracking-[0.1em] font-light text-[#6b6b6b] text-center">
            © {currentYear} Bespoke Master. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
