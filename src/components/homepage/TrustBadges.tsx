import { Link } from "react-router-dom";
import { RefreshCcw, Globe, Calendar } from "lucide-react";

const badges = [
  {
    icon: RefreshCcw,
    title: "FREE RETURNS & EXCHANGES",
    href: "/shipping-policy",
  },
  {
    icon: Globe,
    title: "FREE WORLDWIDE SHIPPING",
    href: "/shipping-policy",
  },
  {
    icon: Calendar,
    title: "BOOK A PRIVATE APPOINTMENT",
    href: "/book-appointment",
  },
];

const TrustBadges = () => {
  return (
    <section className="w-full bg-[#F8F6F2] py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {badges.map((badge) => (
            <Link
              key={badge.title}
              to={badge.href}
              className="flex flex-col items-center text-center group"
            >
              <badge.icon
                size={28}
                strokeWidth={1}
                className="text-neutral-600 mb-3 group-hover:text-black transition-colors"
              />
              <span className="text-[11px] uppercase tracking-[0.15em] font-light text-neutral-800 group-hover:text-black transition-colors">
                {badge.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
