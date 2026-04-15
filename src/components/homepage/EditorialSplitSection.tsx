import { Link } from "react-router-dom";

const EDITORIAL_LEFT_IMAGE = ""; // Replace with your image path
const EDITORIAL_RIGHT_IMAGE = ""; // Replace with your image path

const editorialLeft = {
  bg: "#2c2c2c",
  label: "PRIVATE TAILORING",
  heading: "Crafted Exclusively for You",
  link: "DISCOVER →",
  href: "/book-appointment",
};

const editorialRight = {
  bg: "#3a3a3a",
  label: "READY TO WEAR",
  heading: "Refined. Measured. Delivered.",
  link: "EXPLORE →",
  href: "/collections",
};

const EditorialSplitSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Panel Left */}
      <Link
        to={editorialLeft.href}
        className="w-full md:w-1/2 overflow-hidden group relative"
        style={{ minHeight: "600px" }}
        data-photo="replaceable"
      >
        <div
          className="absolute inset-0 w-full h-full transition-all duration-[400ms] group-hover:brightness-90"
          style={{
            background: EDITORIAL_LEFT_IMAGE
              ? `url(${EDITORIAL_LEFT_IMAGE}) center/cover no-repeat`
              : editorialLeft.bg,
          }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-[400ms]" />
        <div className="absolute bottom-0 left-0 z-10 p-10">
          <p className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-normal mb-2">
            {editorialLeft.label}
          </p>
          <h3 className="font-heading text-white text-2xl md:text-3xl mb-4">
            {editorialLeft.heading}
          </h3>
          <span className="text-white text-[11px] uppercase tracking-[0.1em] underline underline-offset-4">
            {editorialLeft.link}
          </span>
        </div>
      </Link>

      {/* Panel Right */}
      <Link
        to={editorialRight.href}
        className="w-full md:w-1/2 overflow-hidden group relative"
        style={{ minHeight: "600px" }}
        data-photo="replaceable"
      >
        <div
          className="absolute inset-0 w-full h-full transition-all duration-[400ms] group-hover:brightness-90"
          style={{
            background: EDITORIAL_RIGHT_IMAGE
              ? `url(${EDITORIAL_RIGHT_IMAGE}) center/cover no-repeat`
              : editorialRight.bg,
          }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-[400ms]" />
        <div className="absolute bottom-0 left-0 z-10 p-10">
          <p className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-normal mb-2">
            {editorialRight.label}
          </p>
          <h3 className="font-heading text-white text-2xl md:text-3xl mb-4">
            {editorialRight.heading}
          </h3>
          <span className="text-white text-[11px] uppercase tracking-[0.1em] underline underline-offset-4">
            {editorialRight.link}
          </span>
        </div>
      </Link>
    </section>
  );
};

export default EditorialSplitSection;
