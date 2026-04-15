import { Link } from "react-router-dom";

const EditorialVideoPair = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <Link
        to="/collections/suits"
        className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] overflow-hidden group relative"
      >
        <img
          src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800"
          alt="Bespoke Suits"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="text-white text-[10px] uppercase tracking-[0.25em] font-light mb-1">Collection</p>
          <p className="text-white font-heading text-xl uppercase tracking-wider">Bespoke Suits</p>
        </div>
      </Link>
      <Link
        to="/collections/coats"
        className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] overflow-hidden group relative"
      >
        <img
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"
          alt="Bespoke Coats"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="text-white text-[10px] uppercase tracking-[0.25em] font-light mb-1">Collection</p>
          <p className="text-white font-heading text-xl uppercase tracking-wider">Bespoke Coats</p>
        </div>
      </Link>
    </section>
  );
};

export default EditorialVideoPair;
