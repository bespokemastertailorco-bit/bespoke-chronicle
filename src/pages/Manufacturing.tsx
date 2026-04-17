import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const capabilities = [
  {
    title: "Bulk Order Production",
    description:
      "Minimum 50 units per style, scaled to thousands without sacrificing the handcrafted detailing our atelier is known for.",
  },
  {
    title: "Private Label & White Label",
    description:
      "Flexible private and white label programs — your brand identity, our craftsmanship, tailored to your market.",
  },
  {
    title: "Custom Fabric Sourcing",
    description:
      "Access to premium domestic mills and imported houses including Loro Piana, Zegna, Holland & Sherry and more.",
  },
  {
    title: "OEM Manufacturing for Fashion Brands",
    description:
      "End-to-end OEM partnerships for contemporary and heritage fashion houses across menswear categories.",
  },
  {
    title: "Export-ready Packaging & Documentation",
    description:
      "Branded packaging, hang tags, barcoding, and all commercial documentation prepared for seamless export.",
  },
  {
    title: "International Quality Standards",
    description:
      "Rigorous in-house QC aligned with global compliance standards — fit, finish, and consistency guaranteed.",
  },
];

const processSteps = [
  {
    title: "Inquiry & Requirements",
    description:
      "Share your brief — product type, quantities, fabrics, timelines. Our team responds within 48 hours.",
  },
  {
    title: "Sampling & Approval",
    description:
      "We develop tech packs, patterns and physical samples until every detail meets your standard.",
  },
  {
    title: "Production Run",
    description:
      "Approved samples move into our Indore atelier for precision cutting, stitching and hand-finishing.",
  },
  {
    title: "QC & Packaging",
    description:
      "Each piece is inspected against your spec sheet, then packed to your branding and retail requirements.",
  },
  {
    title: "Shipping & Export",
    description:
      "Full export documentation and logistics coordination — delivered to your warehouse, anywhere in the world.",
  },
];

const productTypes = [
  "Suits",
  "Blazers",
  "Shirts",
  "Trousers",
  "Coats & Outerwear",
  "Formal Wear",
  "Accessories",
  "Other",
];

const initialForm = {
  company_name: "",
  country: "",
  product_type: "Suits",
  estimated_quantity: "",
  fabric_preference: "",
  message: "",
};

const Manufacturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("manufacturing_inquiries").insert([
        {
          ...formData,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast.success("Inquiry sent. Our team will be in touch within 48 hours.");
      setFormData(initialForm);
    } catch (error) {
      console.error("Manufacturing inquiry error:", error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] text-white pt-[160px] pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-6">
            Manufacturing — Indore, India
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            World-Class Manufacturing, Crafted in India
          </h1>
          <p className="font-body text-sm md:text-base font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            Our Indore atelier is equipped to handle bulk international orders —
            without compromising the handcrafted precision Bespoke Chronicle is
            known for.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Capabilities
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Built for Scale, Finished by Hand
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="border-t border-neutral-200 pt-6"
            >
              <h3 className="font-heading text-lg md:text-xl mb-3">
                {cap.title}
              </h3>
              <p className="font-body text-sm font-light text-neutral-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F8F6F2] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Our Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl">
              From Inquiry to Export
            </h2>
          </div>

          <ol className="space-y-8 md:space-y-10">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
              >
                <span className="font-heading text-3xl md:text-4xl text-neutral-400 w-12 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="border-t border-neutral-300 pt-4">
                  <h3 className="font-heading text-lg md:text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm font-light text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Manufacturing Inquiry
          </p>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Start a Conversation
          </h2>
          <p className="font-body text-sm font-light text-neutral-600 max-w-xl mx-auto">
            Share a few details about your project and our production team will
            respond within 48 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.company_name}
                onChange={(e) =>
                  setFormData({ ...formData, company_name: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Product Type *
              </label>
              <select
                required
                value={formData.product_type}
                onChange={(e) =>
                  setFormData({ ...formData, product_type: e.target.value })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors bg-white"
              >
                {productTypes.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-2">
                Estimated Quantity *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 500 units"
                value={formData.estimated_quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estimated_quantity: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-light mb-2">
              Fabric Preference
            </label>
            <input
              type="text"
              placeholder="e.g. Super 120s wool, cotton poplin, imported"
              value={formData.fabric_preference}
              onChange={(e) =>
                setFormData({ ...formData, fabric_preference: e.target.value })
              }
              className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-light mb-2">
              Message *
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Manufacturing;
