import { Link } from "react-router-dom";

const EditorialVideoPair = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <Link
        to="/collections/winter"
        className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
      >
        <img
          src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800"
          alt="Winter Collection"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </Link>
      <Link
        to="/collections/winter"
        className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
      >
        <img
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"
          alt="Winter Collection"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </Link>
    </section>
  );
};

export default EditorialVideoPair;
