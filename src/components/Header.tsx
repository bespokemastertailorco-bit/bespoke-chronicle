import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Hamburger (mobile) */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>

        {/* Logo + Name — left */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3"
          aria-label="Bespoke Master — go to top"
        >
          <img
            src="/images/logo.png"
            alt="Bespoke Master Tailor Logo"
            className="h-16 w-16 object-contain"
          />
          <span className="text-lg font-semibold tracking-widest uppercase">
            Bespoke Master
          </span>
        </a>

        {/* Desktop nav — center */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="editorial-label hover:text-foreground transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Contact icon — right */}
        <a href="tel:+911234567890" aria-label="Call Us" className="hidden md:block text-foreground">
          <Phone size={18} strokeWidth={1} />
        </a>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="editorial-label text-left hover:text-foreground transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+911234567890" className="editorial-label hover:text-foreground transition-colors">
            Call Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
