import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      /* TODO: Replace the mailto fallback below with your real form endpoint.
         Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) }) */
      window.location.href = `mailto:info@bespokemaster.com?subject=${encodeURIComponent(
        form.subject || "Website Enquiry"
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      setSubmitted(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-xl mx-auto">
        <p className="editorial-label text-center mb-8">Get in Touch</p>
        <h2 className="editorial-heading text-2xl md:text-3xl text-foreground text-center mb-12">
          Book a Consultation
        </h2>

        {submitted ? (
          <div className="text-center py-12">
            <p className="editorial-heading text-xl text-foreground mb-4">
              Thank you! We'll be in touch soon.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              className="editorial-link cursor-pointer mt-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="editorial-label">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors"
              />
              {errors.name && <p className="font-body text-xs text-destructive">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="editorial-label">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors"
              />
              {errors.email && <p className="font-body text-xs text-destructive">{errors.email}</p>}
            </div>

            {/* Subject (pre-fillable from service buttons) */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-subject" className="editorial-label">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Enquiry about Bespoke Tailoring"
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="editorial-label">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors resize-none"
              />
              {errors.message && <p className="font-body text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="editorial-link self-center cursor-pointer disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
