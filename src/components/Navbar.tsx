import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Search,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCartContext } from "@/context/CartContext";
import { useWaitingListContext } from "@/context/WaitingListContext";
import AuthModal from "./AuthModal";

// Shop dropdown columns — men's luxury bespoke categories only
const shopColumns = [
  {
    title: "Shirts",
    links: [
      { label: "View All", href: "/collections/shirts" },
      { label: "Classic Fit", href: "/collections/classic-fit" },
      { label: "Slim Fit", href: "/collections/slim-fit" },
      { label: "Dress Shirts", href: "/collections/dress-shirts" },
    ],
  },
  {
    title: "Trousers",
    links: [
      { label: "View All", href: "/collections/trousers" },
      { label: "Formal Trousers", href: "/collections/formal-trousers" },
      { label: "All Season", href: "/collections/all-season-trousers" },
    ],
  },
  {
    title: "Blazers",
    links: [
      { label: "View All", href: "/collections/blazers" },
      { label: "Single Breasted", href: "/collections/single-breasted" },
      { label: "Double Breasted", href: "/collections/double-breasted" },
    ],
  },
  {
    title: "Suits",
    links: [
      { label: "View All", href: "/collections/suits" },
      { label: "Two Piece", href: "/collections/two-piece-suits" },
      { label: "Three Piece", href: "/collections/three-piece-suits" },
    ],
  },
  {
    title: "Coats",
    links: [
      { label: "View All", href: "/collections/coats" },
      { label: "Overcoat", href: "/collections/overcoats" },
      { label: "Topcoat", href: "/collections/topcoats" },
    ],
  },
  {
    title: "Formal Wear",
    links: [
      { label: "View All", href: "/collections/formal-wear" },
      { label: "Black Tie", href: "/collections/black-tie" },
      { label: "White Tie", href: "/collections/white-tie" },
      { label: "Tuxedo", href: "/collections/tuxedo" },
    ],
  },
];

// About dropdown links
const aboutLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Creations", href: "/creations" },
  { label: "Exclusive Fabrics", href: "/exclusive-fabrics" },
  { label: "Exclusive Palette", href: "/exclusive-palette" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { totalItems, setIsOpen: setCartOpen } = useCartContext();
  const { openModal: openWaitingList } = useWaitingListContext();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
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
      <header className="fixed top-[38px] left-0 right-0 z-50 bg-white border-b border-[#e5e5e5]">
        <div className="flex items-center px-4 md:px-8 lg:px-12 py-4 gap-6">
          {/* Far Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Bespoke Master"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile: Hamburger (after logo) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-1 hover:opacity-70 transition-opacity lg:hidden text-black ml-auto"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1} />
          </button>

          {/* Desktop Nav Links — center */}
          <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {/* About - Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-light text-black hover:opacity-60 transition-opacity">
                About
                <ChevronDown size={12} strokeWidth={1} />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white shadow-xl border border-neutral-100 flex">
                    <div className="p-8 min-w-[200px]">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block py-2 text-[11px] uppercase tracking-wider font-light text-neutral-600 hover:text-black transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="w-[280px] h-[320px]">
                      <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600"
                        alt="About Bespoke Master"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Shop - Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("shop")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-light text-black hover:opacity-60 transition-opacity">
                Shop
                <ChevronDown size={12} strokeWidth={1} />
              </button>
              {activeDropdown === "shop" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white shadow-xl border border-neutral-100 p-8">
                    <div className="grid grid-cols-3 gap-x-12 gap-y-6">
                      {shopColumns.map((col) => (
                        <div key={col.title}>
                          <h4 className="text-[10px] uppercase tracking-wider font-medium mb-3 text-neutral-900">
                            {col.title}
                          </h4>
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  to={link.href}
                                  className="text-[11px] font-light text-neutral-600 hover:text-black transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bespoke Service */}
            <Link
              to="/our-story"
              className="text-[11px] uppercase tracking-[0.2em] font-light text-black hover:opacity-60 transition-opacity"
            >
              Bespoke Service
            </Link>

            {/* Showroom */}
            <Link
              to="/locations/indore"
              className="text-[11px] uppercase tracking-[0.2em] font-light text-black hover:opacity-60 transition-opacity"
            >
              Showroom
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.2em] font-light text-black hover:opacity-60 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          {/* Far Right: Icons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 text-black">
            {user ? (
              <div className="relative group">
                <button className="p-2 hover:opacity-70 transition-opacity">
                  <User size={18} strokeWidth={1} />
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-lg border border-neutral-100 py-2 min-w-[150px]">
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
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-in */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl lg:hidden animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between p-4 border-b border-[#e5e5e5]">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png" alt="Bespoke Master" className="h-8 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-neutral-100 transition-colors"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            <nav className="p-4 overflow-y-auto h-[calc(100%-70px)]">
              <MobileNavItem
                title="About"
                links={aboutLinks}
              />
              <MobileNavShop columns={shopColumns} />
              <Link
                to="/our-story"
                className="block py-3 text-sm uppercase tracking-wider font-light border-b border-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Bespoke Service
              </Link>
              <Link
                to="/locations/indore"
                className="block py-3 text-sm uppercase tracking-wider font-light border-b border-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Showroom
              </Link>
              <Link
                to="/contact"
                className="block py-3 text-sm uppercase tracking-wider font-light border-b border-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-6 pt-4 border-t border-neutral-200 space-y-3">
                <button
                  onClick={() => setCartOpen(true)}
                  className="flex items-center gap-2 py-2 text-sm font-light"
                >
                  <ShoppingBag size={16} strokeWidth={1} />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="flex items-center gap-2 py-2 text-sm font-light"
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
        <div className="fixed inset-0 bg-white z-[80] animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5]">
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search garments, fabrics..."
                autoFocus
                className="w-full text-lg font-light placeholder:text-neutral-400 focus:outline-none"
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

// Mobile Nav Components
const MobileNavItem = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full py-3 text-sm uppercase tracking-wider font-light"
      >
        {title}
        <ChevronDown
          size={16}
          strokeWidth={1}
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pb-3 pl-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-1.5 text-xs font-light text-neutral-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNavShop = ({
  columns,
}: {
  columns: { title: string; links: { label: string; href: string }[] }[];
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full py-3 text-sm uppercase tracking-wider font-light"
      >
        Shop
        <ChevronDown
          size={16}
          strokeWidth={1}
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pb-3 pl-4">
          {columns.map((col) => (
            <div key={col.title} className="mb-4">
              <h4 className="text-[10px] uppercase tracking-wider font-medium mb-2 text-neutral-900">
                {col.title}
              </h4>
              <div className="space-y-1.5">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-1 text-xs font-light text-neutral-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
