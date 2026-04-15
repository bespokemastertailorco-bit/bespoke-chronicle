import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const locations = [
  "Indore Showroom",
  "Client's Location (We Travel to You)",
];

const serviceTypes = [
  "Bespoke Suit",
  "Bespoke Blazer",
  "Bespoke Shirt",
  "Bespoke Trousers",
  "Bespoke Coat",
  "Bespoke Formal Wear",
  "Fabric Consultation",
  "Alterations & Adjustments",
];

const timeSlots = [
  "Morning 10–12",
  "Afternoon 12–3",
  "Evening 3–6",
];

const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const prefillLocation = searchParams.get("location");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: prefillLocation
      ? locations.find((l) => l.toLowerCase().includes(prefillLocation.toLowerCase())) || "Indore Studio"
      : "Indore Showroom",
    service_type: "Bespoke Suit",
    preferred_date: "",
    preferred_time: "Morning 10–12",
    special_requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("appointments").insert([
        {
          ...formData,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast.success("Appointment confirmed! We will contact you shortly.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        location: "Indore Showroom",
        service_type: "Bespoke Suit",
        preferred_date: "",
        preferred_time: "Morning 10–12",
        special_requests: "",
      });
    } catch (error) {
      console.error("Appointment booking error:", error);
      toast.error("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-4">
            BOOK A PRIVATE APPOINTMENT
          </h1>
          <p className="font-body text-sm font-light text-neutral-600">
            Whether you visit our Indore showroom or we travel to you — book your personal bespoke consultation with our master tailor.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Preferred Location *
              </label>
              <select
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors bg-white"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Service Type *
              </label>
              <select
                required
                value={formData.service_type}
                onChange={(e) =>
                  setFormData({ ...formData, service_type: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors bg-white"
              >
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Preferred Time *
              </label>
              <select
                required
                value={formData.preferred_time}
                onChange={(e) =>
                  setFormData({ ...formData, preferred_time: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors bg-white"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-light mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              required
              value={formData.preferred_date}
              onChange={(e) =>
                setFormData({ ...formData, preferred_date: e.target.value })
              }
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-light mb-2">
              Special Requests
            </label>
            <textarea
              rows={4}
              value={formData.special_requests}
              onChange={(e) =>
                setFormData({ ...formData, special_requests: e.target.value })
              }
              placeholder="Any specific requirements or preferences..."
              className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "CONFIRMING..." : "CONFIRM APPOINTMENT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
