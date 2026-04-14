import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { supabase } from "@/lib/supabase";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  message: string;
}

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "bespoke-suits", label: "Bespoke Suits" },
  { value: "ready-to-wear", label: "Ready to Wear" },
  { value: "alterations", label: "Alterations" },
  { value: "shirts-trousers", label: "Shirts & Trousers" },
  { value: "consultation", label: "General Consultation" },
];

const ContactSection = () => {
  const ref = useFadeIn();
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferred_date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s\-+()]{10,}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setSubmitting(true);

    try {
      // Insert into Supabase appointments table
      const { error } = await supabase.from("appointments").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        preferred_date: form.preferred_date || null,
        message: form.message.trim(),
        status: "pending",
      });

      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message || "Failed to submit appointment");
      }

      setSubmitted(true);
      toast({
        title: "Appointment Request Sent",
        description: "We'll be in touch soon to confirm your consultation.",
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setSubmitError(errorMessage);
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferred_date: "",
      message: "",
    });
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="contact" ref={ref} className="fade-in-section py-24 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-2xl mx-auto">
        <p className="editorial-label text-center mb-8">Get in Touch</p>
        <h2 className="editorial-heading text-2xl md:text-3xl text-foreground text-center mb-4">
          Book an Appointment
        </h2>
        <p className="font-body text-sm font-light text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Schedule a consultation with our master tailors. We'll discuss your requirements 
          and guide you through our bespoke process.
        </p>

        {submitted ? (
          <div className="text-center py-12 bg-muted/30">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" strokeWidth={1} />
            <p className="editorial-heading text-xl text-foreground mb-4">
              Thank You!
            </p>
            <p className="font-body text-sm font-light text-muted-foreground mb-6 max-w-md mx-auto">
              Your appointment request has been received. Our team will contact you within 
              24 hours to confirm your consultation.
            </p>
            <button
              onClick={resetForm}
              className="editorial-link cursor-pointer mt-4"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            {/* Error message */}
            {submitError && (
              <div className="flex items-center gap-2 p-4 bg-destructive/10 text-destructive">
                <AlertCircle size={18} />
                <p className="font-body text-sm">{submitError}</p>
              </div>
            )}

            {/* Name & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="editorial-label">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  disabled={submitting}
                  className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors disabled:opacity-50"
                />
                {errors.name && <p className="font-body text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="editorial-label">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={submitting}
                  className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors disabled:opacity-50"
                />
                {errors.email && <p className="font-body text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="editorial-label">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                disabled={submitting}
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors disabled:opacity-50"
              />
              {errors.phone && <p className="font-body text-xs text-destructive">{errors.phone}</p>}
            </div>

            {/* Service Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service-type" className="editorial-label">Service Type *</label>
              <select
                id="service-type"
                name="service"
                value={form.service}
                onChange={handleChange}
                disabled={submitting}
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground py-2 outline-none focus:border-foreground transition-colors cursor-pointer disabled:opacity-50"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.service && <p className="font-body text-xs text-destructive">{errors.service}</p>}
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preferred_date" className="editorial-label">Preferred Date (Optional)</label>
              <input
                id="preferred_date"
                name="preferred_date"
                type="date"
                min={today}
                value={form.preferred_date}
                onChange={handleChange}
                disabled={submitting}
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground py-2 outline-none focus:border-foreground transition-colors disabled:opacity-50"
              />
              <p className="font-body text-xs text-muted-foreground mt-1">
                Our team will confirm availability within 24 hours.
              </p>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="editorial-label">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements, preferred styles, or any specific requests..."
                disabled={submitting}
                className="border-b border-border bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground py-2 outline-none focus:border-foreground transition-colors resize-none disabled:opacity-50"
              />
              {errors.message && <p className="font-body text-xs text-destructive">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="editorial-link self-center cursor-pointer disabled:opacity-50 flex items-center gap-2 mt-4"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Book Appointment"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
