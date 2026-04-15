import { useEffect } from "react";

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[120px]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 className="font-heading text-3xl md:text-4xl mb-12">Shipping & Returns Policy</h1>

        <div className="prose prose-neutral max-w-none">
          <h2 className="font-heading text-xl mt-8 mb-4">Shipping Information</h2>

          <h3 className="font-medium text-sm mt-6 mb-2">Domestic Shipping (India)</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We offer free shipping on all orders above ₹50,000 within India. For orders below
            this amount, a flat shipping fee of ₹500 applies. Orders are typically processed
            within 2-3 business days and delivered within 5-7 business days, depending on your
            location.
          </p>

          <h3 className="font-medium text-sm mt-6 mb-2">International Shipping</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We offer free worldwide shipping on all orders above ₹100,000. For international
            orders below this amount, shipping fees are calculated based on destination and
            package weight. International orders typically arrive within 10-14 business days,
            depending on customs clearance.
          </p>

          <h3 className="font-medium text-sm mt-6 mb-2">Order Processing</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            Orders are processed Monday through Saturday, excluding Indian public holidays.
            Bespoke and customized items may require additional processing time, which will
            be communicated to you during the order confirmation process.
          </p>

          <h3 className="font-medium text-sm mt-6 mb-2">Tracking Your Order</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            Once your order ships, you will receive an email with tracking information. You
            can use this information to monitor the status of your delivery through our
            shipping partner&apos;s website.
          </p>

          <h2 className="font-heading text-xl mt-10 mb-4">Returns & Exchanges</h2>

          <h3 className="font-medium text-sm mt-6 mb-2">Return Eligibility</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            We accept returns and exchanges within 14 days of delivery. To be eligible for a
            return:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>The item must be unworn, unwashed, and in original condition</li>
            <li>All original tags must be attached</li>
            <li>The item must be in its original packaging</li>
            <li>You must provide the original receipt or order confirmation</li>
          </ul>

          <h3 className="font-medium text-sm mt-6 mb-2">Non-Returnable Items</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            The following items cannot be returned or exchanged:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>Bespoke and customized garments</li>
            <li>Items with monograms or personalized embroidery</li>
            <li>Undergarments and socks</li>
            <li>Sale items marked as final sale</li>
            <li>Items damaged due to customer negligence</li>
          </ul>

          <h3 className="font-medium text-sm mt-6 mb-2">Return Process</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            To initiate a return, please contact our customer service team at
            theadmasons@gmail.com or +91 731 000 0000. Our team will provide you with a
            return authorization and shipping instructions. Please note:
          </p>
          <ul className="list-disc list-inside text-sm font-light text-neutral-600 leading-relaxed mb-4 space-y-1">
            <li>Return shipping costs are the responsibility of the customer unless the item is defective</li>
            <li>We recommend using a trackable shipping service for returns</li>
            <li>Returns should be sent to our Indore studio address</li>
          </ul>

          <h3 className="font-medium text-sm mt-6 mb-2">Refunds</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            Once we receive and inspect your return, we will process your refund within 5-7
            business days. Refunds will be issued to the original payment method. Please note
            that shipping costs are non-refundable unless the return is due to our error.
          </p>

          <h3 className="font-medium text-sm mt-6 mb-2">Exchanges</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            If you wish to exchange an item for a different size or color, please follow the
            return process above and place a new order for the desired item. This ensures faster
            processing and availability of your preferred item.
          </p>

          <h3 className="font-medium text-sm mt-6 mb-2">Damaged or Defective Items</h3>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            If you receive a damaged or defective item, please contact us immediately at
            theadmasons@gmail.com with photos of the damage. We will arrange for a replacement
            or full refund at no additional cost to you.
          </p>

          <h2 className="font-heading text-xl mt-10 mb-4">Contact Information</h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed mb-4">
            For any questions regarding shipping or returns, please contact us:
            <br />
            Email: theadmasons@gmail.com
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

export default ShippingPolicy;
