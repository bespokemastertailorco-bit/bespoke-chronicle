import { Link } from "react-router-dom";

const EditorialVideoPair = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* REPLACE IMAGE: Bespoke Suits Editorial */}
      <Link
        to="/collections/winter"
        className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] overflow-hidden group relative"
        data-photo="replaceable"
      >
        <img
          src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800"
          alt="Winter Collection"
          data-photo="replaceable"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </Link>
      {/* REPLACE IMAGE: Bespoke Coats Editorial */}
      <Link
        to="/collections/winter"
        className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] overflow-hidden group relative"
        data-photo="replaceable"
      >
        <img
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"
          alt="Winter Collection"
          data-photo="replaceable"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </Link>
    </section>
  );
};

export default EditorialVideoPair;
