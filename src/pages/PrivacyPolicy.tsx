import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 className="font-heading text-3xl md:text-4xl mb-12">Privacy Policy</h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-6">
            At Bespoke Master, we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal information
            when you visit our website or make a purchase.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We may collect personal information from you in various ways, including:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>Personal identification information (name, email, phone number)</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information (processed securely through our payment partners)</li>
            <li>Measurements and preferences for bespoke services</li>
            <li>Device and browsing information (IP address, browser type)</li>
          </ul>

          <h2 className="font-heading text-xl mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>Processing and fulfilling your orders</li>
            <li>Communicating with you about your orders and appointments</li>
            <li>Providing customer support</li>
            <li>Sending promotional emails and newsletters (with your consent)</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="font-heading text-xl mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third
            parties, except as described below:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>Service providers who assist us in operating our website and conducting business</li>
            <li>Payment processors to complete transactions</li>
            <li>Shipping partners to deliver your orders</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="font-heading text-xl mt-8 mb-4">4. Data Security</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect
            your personal information from unauthorized access, disclosure, alteration, or
            destruction. However, no method of transmission over the internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">5. Cookies and Tracking</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your browsing
            experience, analyze website traffic, and understand user behavior. You can set
            your browser to refuse cookies, but some features of our website may not function
            properly as a result.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">6. Your Rights</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>Access and review your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <h2 className="font-heading text-xl mt-8 mb-4">7. Contact Us</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or wish to exercise your rights,
            please contact us at:
            <br />
            Email: bespokemastertailor.co@gmail.com
            <br />
            Phone: +91 731 000 0000
            <br />
            Address: ED-184, 3rd Floor, Scheme No. 94, Sector D, Khajrana Square, Indore, MP
          </p>

          <p className="text-sm font-light text-neutral-600 leading-relaxed mt-8">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
