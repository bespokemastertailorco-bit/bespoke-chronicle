import { useState } from "react";
import { Menu, X } from "lucide-react";

const WA_NUMBER = "917770969267";
const WA_MESSAGE = encodeURIComponent(
  "Hello, I'm interested in Bespoke Master B2B/wholesale. Please share more details."
);
const CATALOGUE_URL = "/catalogue/bespoke-master-catalogue.pdf";

const handleCatalogue = () => {
  const link = document.createElement("a");
  link.href = CATALOGUE_URL;
  link.download = "bespoke-master-catalogue.pdf";
  link.click();
  window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`, "_blank");
};

const navLinks = [
  { label: "Our Craft", href: "#our-craft" },
  { label: "Gallery", href: "#gallery" },
  { label: "B2B & Wholesale", href: "#b2b" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8] h-16">
        <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-[1400px] mx-auto">
          {/* LEFT: Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Bespoke Master"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* CENTER: Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* RIGHT: Get Catalogue CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCatalogue}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.12em] font-medium bg-[#1a1a1a] text-[#c9a84c] border border-[#1a1a1a] hover:bg-[#c9a84c] hover:text-[#1a1a1a] hover:border-[#c9a84c] transition-all duration-300"
            >
              Get Catalogue
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl lg:hidden">
            <div className="flex items-center justify-between p-4 border-b border-[#e8e8e8]">
              <img src="/logo.png" alt="Bespoke Master" className="h-10 w-auto object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-neutral-100 transition-colors"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>
            <nav className="p-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                    scrollTo(link.href);
                  }}
                  className="block w-full text-left py-3 text-sm uppercase tracking-wider font-light text-[#1a1a1a] border-b border-[#e8e8e8]"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleCatalogue();
                }}
                className="mt-6 w-full px-5 py-3 text-[11px] uppercase tracking-[0.12em] font-medium bg-[#1a1a1a] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a1a] transition-all duration-300"
              >
                Get Catalogue
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
