import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const locationData: Record<
  string,
  {
    city: string;
    address: string;
    phone: string;
    image: string;
    hours: string;
    mapsUrl: string;
  }
> = {
  indore: {
    city: "Indore Studio",
    address: "ED-184, 3rd Floor, Scheme No. 94, Sector D, Khajrana Square, Indore, MP",
    phone: "+91 731 000 0000",
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1200",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234567890123!2d75.8567!3d22.7196",
  },
  mumbai: {
    city: "Mumbai Studio",
    address: "Bandra West, Mumbai, Maharashtra",
    phone: "+91 22 0000 0000",
    image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1200",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890123!2d72.8295!3d19.0596",
  },
  delhi: {
    city: "Delhi",
    address: "The Leela Palace, Chanakyapuri, New Delhi",
    phone: "+91 11 0000 0000",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200",
    hours: "By Appointment Only",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.1928!3d28.5983",
  },
  dubai: {
    city: "Dubai",
    address: "Taj Hotel, Business Bay, Dubai, UAE",
    phone: "+971 4 000 0000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    hours: "By Appointment Only",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1234567890123!2d55.2693!3d25.1853",
  },
  london: {
    city: "London",
    address: "The Franklin Hotel, 24 Egerton Gardens, London SW3",
    phone: "+44 20 0000 0000",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
    hours: "By Appointment Only",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1234567890123!2d-0.1706!3d51.4975",
  },
};

const Location = () => {
  const { city } = useParams<{ city: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  const location = city ? locationData[city.toLowerCase()] : null;

  if (!location) {
    return (
      <div className="min-h-screen bg-white pt-[140px] flex flex-col items-center justify-center">
        <p className="text-lg font-light text-neutral-500 mb-4">Location not found</p>
        <Link to="/" className="text-sm uppercase tracking-wider underline hover:no-underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={location.image}
          alt={location.city}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-wider">
            {location.city.toUpperCase()}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Details */}
          <div>
            <h2 className="font-heading text-2xl mb-6">{location.city}</h2>

            <div className="space-y-4 text-sm font-light">
              <div>
                <h3 className="font-medium text-black mb-1">Address</h3>
                <p className="text-neutral-600">{location.address}</p>
              </div>

              <div>
                <h3 className="font-medium text-black mb-1">Phone</h3>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  {location.phone}
                </a>
              </div>

              <div>
                <h3 className="font-medium text-black mb-1">Hours</h3>
                <p className="text-neutral-600">{location.hours}</p>
              </div>
            </div>

            <Link
              to={`/book-appointment?location=${encodeURIComponent(city || "")}`}
              className="inline-block mt-8 bg-black text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors"
            >
              BOOK APPOINTMENT HERE
            </Link>
          </div>

          {/* Right: Map */}
          <div>
            <div className="aspect-square bg-neutral-100 border border-neutral-200">
              <iframe
                src={location.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city} Location`}
                className="grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
