import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const clientInitial = {
  name: "",
  email: "",
  phone: "",
  service_interest: "Bespoke Suit",
  message: "",
};

const manufacturerInitial = {
  company_name: "",
  country: "",
  contact_person: "",
  email: "",
  order_type: "Private Label",
  message: "",
};

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-4 my-2">
    <span className="h-px w-10 bg-neutral-400" />
    <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
      {label}
    </span>
    <span className="h-px w-10 bg-neutral-400" />
  </div>
);

const inputCls =
  "w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors";
const labelCls = "block text-xs uppercase tracking-wider font-light mb-2";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [clientData, setClientData] = useState(clientInitial);
  const [clientSubmitting, setClientSubmitting] = useState(false);

  const [mfgData, setMfgData] = useState(manufacturerInitial);
  const [mfgSubmitting, setMfgSubmitting] = useState(false);

  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClientSubmitting(true);
    try {
      const { error } = await supabase.from("contact_inquiries").insert([
        { ...clientData, created_at: new Date().toISOString() },
      ]);
      if (error) throw error;
      toast.success("Message sent successfully!");
      setClientData(clientInitial);
    } catch (error) {
      console.error("Client inquiry error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setClientSubmitting(false);
    }
  };

  const handleMfgSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMfgSubmitting(true);
    try {
      const { error } = await supabase.from("manufacturing_inquiries").insert([
        { ...mfgData, created_at: new Date().toISOString() },
      ]);
      if (error) throw error;
      toast.success("Inquiry sent. Our team will be in touch within 48 hours.");
      setMfgData(manufacturerInitial);
    } catch (error) {
      console.error("Manufacturer inquiry error:", error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setMfgSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 className="font-heading text-3xl md:text-4xl text-center mb-4 uppercase tracking-wider">
          Contact Us
        </h1>
        <p className="text-center text-sm font-light text-neutral-600 max-w-2xl mx-auto mb-12">
          Whether you are commissioning your first bespoke garment or exploring a
          manufacturing partnership — we&apos;d love to hear from you.
        </p>

        {/* Shared Contact Details */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-sm font-light text-neutral-600 mb-16 md:mb-20">
          <div>
            <h3 className="font-medium text-black mb-2">Email</h3>
            <a
              href="mailto:bespokemastertailor.co@gmail.com"
              className="hover:text-black transition-colors"
            >
              bespokemastertailor.co@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-medium text-black mb-2">Business Hours</h3>
            <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* SECTION A — Individual Clients */}
        <section className="mb-20 md:mb-28">
          <SectionDivider label="For Individual Clients" />
          <div className="text-center mt-6 mb-10">
            <h2 className="font-heading text-2xl md:text-3xl mb-3">
              General &amp; Bespoke Client Inquiries
            </h2>
            <p className="text-sm font-light text-neutral-600 max-w-xl mx-auto">
              For bespoke appointments, product questions, and everything in
              between.
            </p>
          </div>

          <form
            onSubmit={handleClientSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Name *</label>
                <input
                  type="text"
                  required
                  value={clientData.name}
                  onChange={(e) =>
                    setClientData({ ...clientData, name: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Email *</label>
                <input
                  type="email"
                  required
                  value={clientData.email}
                  onChange={(e) =>
                    setClientData({ ...clientData, email: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Phone</label>
                <input
                  type="tel"
                  value={clientData.phone}
                  onChange={(e) =>
                    setClientData({ ...clientData, phone: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Service Interest</label>
                <select
                  value={clientData.service_interest}
                  onChange={(e) =>
                    setClientData({
                      ...clientData,
                      service_interest: e.target.value,
                    })
                  }
                  className={`${inputCls} bg-white`}
                >
                  <option>Bespoke Suit</option>
                  <option>Shirt</option>
                  <option>Accessories</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelCls}>Message *</label>
              <textarea
                required
                rows={5}
                value={clientData.message}
                onChange={(e) =>
                  setClientData({ ...clientData, message: e.target.value })
                }
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={clientSubmitting}
              className="w-full bg-black text-white py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {clientSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </section>

        {/* SECTION B — Manufacturers & Brands */}
        <section className="bg-[#F8F6F2] -mx-4 md:-mx-8 px-4 md:px-8 py-16 md:py-20">
          <SectionDivider label="For Manufacturers & Brands" />
          <div className="text-center mt-6 mb-10">
            <h2 className="font-heading text-2xl md:text-3xl mb-3">
              Manufacturing &amp; B2B Inquiries
            </h2>
            <p className="text-sm font-light text-neutral-600 max-w-xl mx-auto">
              Private label, OEM and bulk production partnerships from our
              Indore atelier.
            </p>
          </div>

          <form
            onSubmit={handleMfgSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Company Name *</label>
                <input
                  type="text"
                  required
                  value={mfgData.company_name}
                  onChange={(e) =>
                    setMfgData({ ...mfgData, company_name: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Country *</label>
                <input
                  type="text"
                  required
                  value={mfgData.country}
                  onChange={(e) =>
                    setMfgData({ ...mfgData, country: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Contact Person *</label>
                <input
                  type="text"
                  required
                  value={mfgData.contact_person}
                  onChange={(e) =>
                    setMfgData({ ...mfgData, contact_person: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Email *</label>
                <input
                  type="email"
                  required
                  value={mfgData.email}
                  onChange={(e) =>
                    setMfgData({ ...mfgData, email: e.target.value })
                  }
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className={labelCls}>Order Type *</label>
              <select
                required
                value={mfgData.order_type}
                onChange={(e) =>
                  setMfgData({ ...mfgData, order_type: e.target.value })
                }
                className={`${inputCls} bg-white`}
              >
                <option>Private Label</option>
                <option>OEM</option>
                <option>Bulk</option>
              </select>
            </div>

            <div>
              <label className={labelCls}>Message *</label>
              <textarea
                required
                rows={5}
                value={mfgData.message}
                onChange={(e) =>
                  setMfgData({ ...mfgData, message: e.target.value })
                }
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={mfgSubmitting}
              className="w-full bg-black text-white py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {mfgSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
