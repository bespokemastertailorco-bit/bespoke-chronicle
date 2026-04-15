import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, Search, ShoppingBag, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCartContext } from "@/context/CartContext";
import AuthModal from "./AuthModal";

const COLLECTION_DROPDOWN_IMAGE = ""; // Replace with your image path

// Collection dropdown - Clothing categories
const collectionLinks = [
  { label: "Suits", href: "/collections/suits" },
  { label: "Blazers", href: "/collections/blazers" },
  { label: "Coats", href: "/collections/coats" },
  { label: "Trousers", href: "/collections/trousers" },
  { label: "Shirts", href: "/collections/shirts" },
  { label: "Formal Wear", href: "/collections/formal-wear" },
  { label: "Made to Measure", href: "/book-appointment" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { totalItems, setIsOpen: setCartOpen } = useCartContext();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setCollectionDropdownOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="fixed top-10 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8] h-16">
        <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-[1400px] mx-auto">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 -ml-2 hover:opacity-70 transition-opacity lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1} />
            </button>
            <Link to="/" className="hidden lg:block">
              <img
                src="/logo.png"
                alt="Bespoke Master"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* CENTER: Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {/* Collection with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCollectionDropdownOpen(true)}
              onMouseLeave={() => setCollectionDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity">
                Collection
                <ChevronDown size={12} strokeWidth={1} />
              </button>
              
              {/* Dropdown Mega Menu */}
              {collectionDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in-down">
                  <div className="bg-white border-b border-[#e8e8e8] shadow-sm">
                    <div className="flex max-w-[900px]">
                      {/* Left Column - Clothing Links */}
                      <div className="p-10 min-w-[280px]">
                        <h4 className="text-[11px] uppercase tracking-[0.1em] font-normal text-[#6b6b6b] mb-6">
                          Clothing
                        </h4>
                        <ul className="space-y-4">
                          {collectionLinks.map((link) => (
                            <li key={link.href}>
                              <Link
                                to={link.href}
                                className="text-[14px] font-light text-[#1a1a1a] hover:underline transition-all duration-300"
                                style={{ lineHeight: "2" }}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Right Side - Hero Image */}
                      <div className="w-[320px] h-[400px] relative">
                        <div
                          className="w-full h-full flex items-end p-6 relative overflow-hidden"
                          data-photo="replaceable"
                          style={{
                            background: COLLECTION_DROPDOWN_IMAGE
                              ? `url(${COLLECTION_DROPDOWN_IMAGE}) center/cover no-repeat`
                              : "#2c2c2c",
                          }}
                        >
                          {/* Dark overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="relative z-10 text-white">
                            <p className="text-[10px] uppercase tracking-[0.15em] mb-2 opacity-80">
                              Bespoke Master
                            </p>
                            <h3 className="font-heading text-2xl mb-3">
                              Handcrafted in India
                            </h3>
                            <Link
                              to="/collections"
                              className="text-[11px] uppercase tracking-[0.1em] underline underline-offset-4 hover:opacity-70 transition-opacity"
                            >
                              Discover →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/book-appointment"
              className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
            >
              Bespoke Service
            </Link>
            <Link
              to="/our-story"
              className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
            >
              Our Craft
            </Link>
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
            >
              Showroom
            </Link>
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT: Icons */}
          <div className="flex items-center justify-end gap-2 ml-auto">
            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden absolute left-1/2 -translate-x-1/2">
              <img
                src="/logo.png"
                alt="Bespoke Master"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {user ? (
              <div className="relative group">
                <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Account">
                  <User size={18} strokeWidth={1} />
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-lg border border-[#e8e8e8] py-2 min-w-[150px]">
                    <button
                      onClick={signOut}
                      className="w-full text-left px-4 py-2 text-xs font-light hover:bg-neutral-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Login"
              >
                <User size={18} strokeWidth={1} />
              </button>
            )}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
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
              <span className="font-heading text-lg tracking-wider text-[#1a1a1a]">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-neutral-100 transition-colors"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>
            <nav className="p-4 overflow-y-auto h-[calc(100%-70px)]">
              {/* Collection */}
              <MobileNavSection title="Collection">
                <div className="space-y-3">
                  {collectionLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm font-light text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </MobileNavSection>
              
              <Link
                to="/book-appointment"
                className="block py-3 text-sm uppercase tracking-wider font-light text-[#1a1a1a] border-b border-[#e8e8e8]"
                onClick={() => setMobileOpen(false)}
              >
                Bespoke Service
              </Link>
              <Link
                to="/our-story"
                className="block py-3 text-sm uppercase tracking-wider font-light text-[#1a1a1a] border-b border-[#e8e8e8]"
                onClick={() => setMobileOpen(false)}
              >
                Our Craft
              </Link>
              <Link
                to="/contact"
                className="block py-3 text-sm uppercase tracking-wider font-light text-[#1a1a1a] border-b border-[#e8e8e8]"
                onClick={() => setMobileOpen(false)}
              >
                Showroom
              </Link>
              <Link
                to="/contact"
                className="block py-3 text-sm uppercase tracking-wider font-light text-[#1a1a1a] border-b border-[#e8e8e8]"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              
              <div className="mt-8 pt-6 border-t border-[#e8e8e8]">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="flex items-center gap-2 py-2 text-sm font-light text-[#6b6b6b]"
                >
                  <User size={16} strokeWidth={1} />
                  {user ? "My Account" : "Login / Register"}
                </button>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white z-[80] animate-fade-in">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e8e8]">
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                autoFocus
                className="w-full text-lg font-light placeholder:text-[#6b6b6b] focus:outline-none bg-transparent"
              />
            </form>
            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
              }}
              className="p-2 hover:bg-neutral-100 transition-colors"
            >
              <X size={24} strokeWidth={1} />
            </button>
          </div>
        </div>
      )}

      {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
    </>
  );
};

// Mobile Nav Section Component
const MobileNavSection = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="border-b border-[#e8e8e8]">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full py-3 text-sm uppercase tracking-wider font-light text-[#1a1a1a]"
      >
        {title}
        <ChevronDown
          size={16}
          strokeWidth={1}
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pb-4 pl-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Navbar;
