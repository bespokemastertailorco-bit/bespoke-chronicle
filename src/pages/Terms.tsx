import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 className="font-heading text-3xl md:text-4xl mb-12">Terms & Conditions</h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-6">
            Welcome to Bespoke Master. By accessing or using our website, you agree to be bound
            by these Terms and Conditions. Please read them carefully before making a purchase.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">1. General Terms</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            These Terms and Conditions govern your use of the Bespoke Master website and your
            purchase of products from us. By placing an order, you confirm that you are at least
            18 years old and legally capable of entering into binding contracts.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">2. Products and Pricing</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            All products displayed on our website are subject to availability. Prices are listed
            in Indian Rupees (₹) and are inclusive of applicable taxes unless otherwise stated.
            We reserve the right to modify prices at any time without prior notice.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">3. Orders and Payment</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            When you place an order, you will receive an order confirmation via email. This
            confirmation does not constitute acceptance of your order. We reserve the right to
            refuse or cancel any order for any reason, including but not limited to product
            availability, errors in product information, or suspected fraudulent activity.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">4. Shipping and Delivery</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We offer worldwide shipping. Delivery times may vary depending on your location.
            Please refer to our Shipping & Returns Policy for detailed information about
            shipping methods, costs, and delivery timeframes.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">5. Returns and Exchanges</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We accept returns and exchanges within 14 days of delivery for unworn items with
            original tags attached. Bespoke and customized items are non-returnable except in
            cases of manufacturing defects. Please refer to our Shipping & Returns Policy for
            complete details.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">6. Intellectual Property</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            All content on this website, including but not limited to text, images, logos, and
            designs, is the property of Bespoke Master and is protected by copyright and other
            intellectual property laws. Unauthorized use of any content is strictly prohibited.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            Bespoke Master shall not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of our website or products. Our total
            liability shall not exceed the amount paid for the specific product in question.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">8. Governing Law</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            These Terms and Conditions shall be governed by and construed in accordance with
            the laws of India. Any disputes arising under these terms shall be subject to the
            exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
          </p>

          <h2 className="font-heading text-xl mt-8 mb-4">9. Contact Information</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
            <br />
            Email: theadmasons@gmail.com
            <br />
            Phone: +91 731 000 0000
          </p>

          <p className="text-sm font-light text-neutral-600 leading-relaxed mt-8">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
