import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- DATA ---
const capabilities = [
  { title: "Bulk Order Production", description: "From 50 to 5,000 units per style, with zero compromise on finish" },
  { title: "Private Label & White Label", description: "Your brand identity, our craftsmanship" },
  { title: "Custom Fabric Sourcing", description: "Loro Piana, Zegna, Holland & Sherry and domestic mills" },
  { title: "OEM Manufacturing", description: "Full white-glove OEM for fashion houses and retailers" },
  { title: "Export-Ready Packaging", description: "Branded packaging, documentation, duties handled" },
  { title: "International Quality Standards", description: "ISO-aligned QC at every production stage" },
];

const processSteps = [
  { num: "01", title: "Inquiry & Brief", description: "Share your requirements, quantities, and timeline" },
  { num: "02", title: "Sampling & Approval", description: "Physical samples developed to your exact standard" },
  { num: "03", title: "Production Run", description: "Precision cutting, stitching, and hand-finishing at scale" },
  { num: "04", title: "Quality Control", description: "Rigorous inspection against your specifications" },
  { num: "05", title: "Shipping & Export", description: "Full documentation and logistics to your warehouse" },
];

const countries = ["India", "UAE", "United Kingdom", "United States", "Canada"];

const orderTypes = [
  "Private Label",
  "OEM",
  "Bulk Order",
  "White Label",
  "Sampling Only",
];

// --- COMPONENT ---
const Manufacturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bespoke Manufacture — Bespoke Chronicle";
  }, []);

  const [formData, setFormData] = useState({
    company_name: "",
    country: "",
    contact_person: "",
    email: "",
    order_type: "",
    estimated_quantity: "",
    product_category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("manufacturing_inquiries").insert([{
        ...formData,
        created_at: new Date().toISOString(),
      }]);
      if (error) throw error;
      toast.success("Thank you — we'll be in touch within 48 hours.");
      setFormData({
        company_name: "",
        country: "",
        contact_person: "",
        email: "",
        order_type: "",
        estimated_quantity: "",
        product_category: "",
        message: "",
      });
    } catch (error) {
      console.error("Manufacturing inquiry error:", error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToInquiry = () => {
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-[#1A1A1A] text-white flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('/images/bespoke-manufacture.jpg')` }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/30 pointer-events-none" />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20">
          {/* Top Label */}
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A96E] mb-8">
            Est. 35 Years of Craft
          </p>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 max-w-4xl">
            The Atelier<br />
            Behind the<br />
            World&apos;s Finest.
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-sm md:text-base font-light text-white/70 max-w-2xl leading-relaxed mb-12">
            From a single bespoke suit to a full international collection — every piece leaves Indore handcrafted, export-ready, and impeccable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              onClick={scrollToInquiry}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-6 text-xs uppercase tracking-[0.2em] font-light bg-transparent rounded-none"
            >
              Request Manufacturing Quote
            </Button>
            <Button
              onClick={scrollToProcess}
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-white/10 px-8 py-6 text-xs uppercase tracking-[0.2em] font-light rounded-none"
            >
              View Our Process
            </Button>
          </div>

          {/* Country Strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-white/50">
            {countries.map((c, i) => (
              <span key={c} className="flex items-center gap-6">
                {c}
                {i < countries.length - 1 && <span className="text-[#C9A96E]">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: NUMBERS STRIP */}
      <section className="bg-[#111] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { num: "35+", label: "Years in Craft" },
              { num: "10,000+", label: "Garments Annually" },
              { num: "40+", label: "Countries Served" },
              { num: "100%", label: "Handfinished" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                  {stat.num}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CAPABILITIES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium">
              Capabilities
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-16 max-w-2xl">
            Built for Scale.<br />Finished by Hand.
          </h2>

          {/* 2-Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Text Intro */}
            <div className="max-w-md">
              <p className="font-body text-base md:text-lg font-light text-neutral-600 leading-relaxed">
                We don&apos;t choose between scale and soul. Our Indore atelier runs structured production lines managed by master craftsmen who have spent decades perfecting every technique.
              </p>
            </div>

            {/* Right: 6 Cards in 2x3 Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <h3 className="font-heading text-base md:text-lg mb-2 leading-tight">
                    {cap.title}
                  </h3>
                  <p className="font-body text-xs font-light text-neutral-500 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PROCESS */}
      <section id="process" className="py-20 md:py-28 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-4 block">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
              From First Contact to Final Stitch
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-neutral-300" />

            <div className="grid md:grid-cols-5 gap-8 md:gap-4">
              {processSteps.map((step, index) => (
                <div key={step.num} className="relative text-center md:text-left">
                  {/* Number Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#F7F4EF] border border-neutral-300 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <span className="font-heading text-lg text-[#1A1A1A]">{step.num}</span>
                  </div>
                  {/* Content */}
                  <h3 className="font-heading text-base md:text-lg mb-2">{step.title}</h3>
                  <p className="font-body text-xs font-light text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INQUIRY FORM */}
      <section id="inquiry" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Text */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-4 block">
                Start a Conversation
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
                Tell Us About Your Collection
              </h2>
              <p className="font-body text-base font-light text-neutral-600 leading-relaxed mb-8">
                Whether you&apos;re a fashion brand, retailer, or designer — we&apos;d love to understand your vision. Fill in the details and our team will respond within 48 hours.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wider text-neutral-500">
                {["Confidential", "No Minimum for Samples", "Export to 40+ Countries"].map((badge) => (
                  <span key={badge} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-light mb-2">
                    Company / Brand Name
                  </label>
                  <Input
                    type="text"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-light mb-2">
                      Country
                    </label>
                    <Input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-light mb-2">
                      Contact Person
                    </label>
                    <Input
                      type="text"
                      value={formData.contact_person}
                      onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                      className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-light mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-light mb-2">
                      Order Type
                    </label>
                    <Select
                      value={formData.order_type}
                      onValueChange={(val) => setFormData({ ...formData, order_type: val })}
                    >
                      <SelectTrigger className="rounded-none border-neutral-300 focus:ring-0">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {orderTypes.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-light mb-2">
                      Estimated Quantity
                    </label>
                    <Input
                      type="number"
                      value={formData.estimated_quantity}
                      onChange={(e) => setFormData({ ...formData, estimated_quantity: e.target.value })}
                      className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-light mb-2">
                    Product Category
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g. Suits, Shirts, Trousers"
                    value={formData.product_category}
                    onChange={(e) => setFormData({ ...formData, product_category: e.target.value })}
                    className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-light mb-2">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-none border-neutral-300 focus:border-[#1A1A1A] focus:ring-0 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1A1A] hover:bg-neutral-800 text-white py-6 text-xs uppercase tracking-[0.2em] font-light rounded-none disabled:opacity-50"
                >
                  {isSubmitting ? "SENDING..." : "Send Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOOTER CTA STRIP */}
      <section className="bg-[#1A1A1A] py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4">
            Ready to manufacture with us?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white italic mb-10">
            Let&apos;s build something extraordinary.
          </h2>
          <Button
            onClick={scrollToInquiry}
            variant="outline"
            className="border-[#F7F4EF] text-[#F7F4EF] hover:bg-[#F7F4EF] hover:text-[#1A1A1A] px-10 py-6 text-xs uppercase tracking-[0.2em] font-light bg-transparent rounded-none"
          >
            Begin Your Inquiry
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
