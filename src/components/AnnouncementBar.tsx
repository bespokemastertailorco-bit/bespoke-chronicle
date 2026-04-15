import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  return (
    <Link
      to="/book-appointment"
      className="block w-full bg-black text-white text-center py-2.5 px-4 text-[12px] uppercase tracking-[0.15em] font-light sticky top-0 z-[60] hover:bg-neutral-900 transition-colors"
    >
      BOOK A PRIVATE APPOINTMENT AT A BESPOKE MASTER LOCATION
    </Link>
  );
};

export default AnnouncementBar;
