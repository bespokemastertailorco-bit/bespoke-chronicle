import { useState } from "react";
import { Instagram, Facebook, Linkedin, ArrowUp, MessageCircle } from "lucide-react";

const navScroll = (href: string) => {
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = () => {
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-border py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* About */}
        <div>
          <h4 className="editorial-label mb-6">About</h4>
          <ul className="space-y-3">
            <li>
              <button onClick={() => navScroll("#about")} className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Our Story
              </button>
            </li>
            <li>
              <button onClick={() => navScroll("#services")} className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Craftsmanship
              </button>
            </li>
            <li>
              <button onClick={() => navScroll("#contact")} className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Book a Visit
              </button>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="editorial-label mb-6">Customer Service</h4>
          <ul className="space-y-3">
            <li>
              <button onClick={() => navScroll("#contact")} className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Contact Us
              </button>
            </li>
            <li>
              <button onClick={() => navScroll("#services")} className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Size Guide
              </button>
            </li>
            <li>
              <button onClick={() => navScroll("#gallery")} className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Gallery
              </button>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="editorial-label mb-6">Legal</h4>
          <ul className="space-y-3">
            {/* TODO: Replace # with real policy pages when available */}
            <li><a href="#" className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 className="editorial-label mb-6">Stay Connected</h4>
          <p className="font-body text-sm font-light text-muted-foreground mb-2">
            Malhar Mega Mall, Indore
          </p>
          <p className="font-body text-sm font-light text-muted-foreground mb-6">
            +91 731 000 0000
          </p>

          {subscribed ? (
            <p className="font-body text-sm font-light text-foreground mb-6">Thank you for subscribing!</p>
          ) : (
            <div className="flex border-b border-border pb-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button onClick={handleSubscribe} className="editorial-label text-foreground cursor-pointer hover:opacity-70 transition-opacity">
                Subscribe
              </button>
            </div>
          )}

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/bespokemasterglobal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={18} strokeWidth={1} />
            </a>
            <a
              href="https://facebook.com/bespokemaster"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook size={18} strokeWidth={1} />
            </a>
            <a
              href="https://www.linkedin.com/in/bespoke-master-b2781a402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} strokeWidth={1} />
            </a>
            <a
              href="https://wa.me/917310000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle size={18} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs font-light text-muted-foreground text-center">
          © {currentYear} Bespoke Master. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex items-center gap-2 editorial-label hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowUp size={14} strokeWidth={1} />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
