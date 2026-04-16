import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          ...formData,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 className="font-heading text-3xl md:text-4xl text-center mb-12 uppercase tracking-wider">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Contact Details */}
          <div>
            <h2 className="font-heading text-xl mb-6">Get in Touch</h2>

            <div className="space-y-6 text-sm font-light text-neutral-600">
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
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Bespoke Appointment</option>
                  <option>Ready to Wear</option>
                  <option>Leather Goods</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-neutral-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
