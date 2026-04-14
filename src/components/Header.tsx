import { useState, useRef, useEffect } from "react";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Collection", href: "#collection" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignOut = async () => {
    setDropdownOpen(false);
    await signOut();
  };

  const displayEmail = user?.email
    ? user.email.length > 20
      ? user.email.slice(0, 18) + "…"
      : user.email
    : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-border" : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Hamburger (mobile) */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
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
              src="/logo.png"
              alt="Bespoke Master"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav — center */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`editorial-label hover:opacity-70 transition-all cursor-pointer ${scrolled ? "" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: Account */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`flex items-center gap-1.5 editorial-label hover:opacity-70 transition-all cursor-pointer ${scrolled ? "" : "text-white/80 hover:text-white"}`}
                >
                  <User size={14} strokeWidth={1} />
                  <span>{displayEmail}</span>
                  <ChevronDown size={12} strokeWidth={1} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-3 w-48 bg-background border border-border shadow-lg py-2">
                    <button
                      onClick={() => { setDropdownOpen(false); handleNavClick("#about"); }}
                      className="w-full text-left px-4 py-3 text-sm font-light hover:bg-muted transition-colors cursor-pointer"
                    >
                      My Account
                    </button>
                    <div className="border-t border-border my-1" />
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-3 text-sm font-light text-red-500 hover:bg-muted transition-colors cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className={`flex items-center gap-1.5 editorial-label hover:opacity-70 transition-all cursor-pointer ${scrolled ? "" : "text-white/80 hover:text-white"}`}
              >
                <User size={14} strokeWidth={1} />
                <span>Account</span>
              </button>
            )}
          </div>
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
            {user ? (
              <>
                <button
                  onClick={() => { setMobileOpen(false); handleNavClick("#about"); }}
                  className="editorial-label text-left hover:text-foreground transition-colors cursor-pointer"
                >
                  My Account
                </button>
                <button
                  onClick={handleSignOut}
                  className="editorial-label text-left text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => { setMobileOpen(false); setAuthModalOpen(true); }}
                className="editorial-label text-left hover:text-foreground transition-colors cursor-pointer"
              >
                Account
              </button>
            )}
          </nav>
        )}
      </header>

      {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
    </>
  );
};

export default Header;
