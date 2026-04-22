import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Ruler, Shirt, Mail, Phone } from "lucide-react";

const SizeGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <div className="h-10" />
      <Navbar />
      
      <main className="pt-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-4xl mb-4">
              International Size Guide
            </h1>
            <p className="text-neutral-600 font-light max-w-2xl mx-auto">
              All our garments are measured in UK sizing. Use this chart to convert to your local size.
            </p>
          </div>

          {/* Size Tables */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* TABLE 1 — SUITS & JACKETS */}
            <div className="bg-neutral-50 p-6 md:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Ruler size={20} strokeWidth={1.5} className="text-neutral-600" />
                <h2 className="font-heading text-lg">Suits & Jackets (Chest)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300">
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">UK</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">US</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">EU/FR</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">India</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">Chest</th>
                    </tr>
                  </thead>
                  <tbody className="font-light">
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">34" / 86cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">46</td><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">36" / 91cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">48</td><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">38" / 96cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">40</td><td className="py-2.5 px-2">40</td><td className="py-2.5 px-2">50</td><td className="py-2.5 px-2">40</td><td className="py-2.5 px-2">40" / 101cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">52</td><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">42" / 106cm</td></tr>
                    <tr><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">54</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">44" / 111cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 2 — SHIRTS */}
            <div className="bg-neutral-50 p-6 md:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Shirt size={20} strokeWidth={1.5} className="text-neutral-600" />
                <h2 className="font-heading text-lg">Shirts (Collar/Neck)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300">
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">UK</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">US</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">EU/FR</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">India</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">Neck</th>
                    </tr>
                  </thead>
                  <tbody className="font-light">
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">14</td><td className="py-2.5 px-2">14</td><td className="py-2.5 px-2">35-36</td><td className="py-2.5 px-2">35</td><td className="py-2.5 px-2">35-36cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">14.5</td><td className="py-2.5 px-2">14.5</td><td className="py-2.5 px-2">37</td><td className="py-2.5 px-2">37</td><td className="py-2.5 px-2">37cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">15</td><td className="py-2.5 px-2">15</td><td className="py-2.5 px-2">38-39</td><td className="py-2.5 px-2">39</td><td className="py-2.5 px-2">38-39cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">15.5</td><td className="py-2.5 px-2">15.5</td><td className="py-2.5 px-2">40-41</td><td className="py-2.5 px-2">41</td><td className="py-2.5 px-2">40-41cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">16</td><td className="py-2.5 px-2">16</td><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">42cm</td></tr>
                    <tr><td className="py-2.5 px-2">16.5</td><td className="py-2.5 px-2">16.5</td><td className="py-2.5 px-2">43-44</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">43-44cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 3 — TROUSERS */}
            <div className="bg-neutral-50 p-6 md:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Ruler size={20} strokeWidth={1.5} className="text-neutral-600" />
                <h2 className="font-heading text-lg">Trousers (Waist)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300">
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">UK</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">US</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">EU/FR</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">India</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">Waist</th>
                    </tr>
                  </thead>
                  <tbody className="font-light">
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">28</td><td className="py-2.5 px-2">28</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">28</td><td className="py-2.5 px-2">28" / 71cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">30</td><td className="py-2.5 px-2">30</td><td className="py-2.5 px-2">46</td><td className="py-2.5 px-2">30</td><td className="py-2.5 px-2">30" / 76cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">32</td><td className="py-2.5 px-2">32</td><td className="py-2.5 px-2">48</td><td className="py-2.5 px-2">32</td><td className="py-2.5 px-2">32" / 81cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">50</td><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">34" / 86cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">52</td><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">36" / 91cm</td></tr>
                    <tr><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">54</td><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">38" / 96cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 4 — OVERCOATS */}
            <div className="bg-neutral-50 p-6 md:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Ruler size={20} strokeWidth={1.5} className="text-neutral-600" />
                <h2 className="font-heading text-lg">Overcoats (Chest)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300">
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">UK</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">US</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">EU/FR</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">India</th>
                      <th className="text-left py-2 px-2 font-medium text-neutral-500 text-xs uppercase tracking-wider">Chest</th>
                    </tr>
                  </thead>
                  <tbody className="font-light">
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">34</td><td className="py-2.5 px-2">34" / 86cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">46</td><td className="py-2.5 px-2">36</td><td className="py-2.5 px-2">36" / 91cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">48</td><td className="py-2.5 px-2">38</td><td className="py-2.5 px-2">38" / 96cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">40</td><td className="py-2.5 px-2">40</td><td className="py-2.5 px-2">50</td><td className="py-2.5 px-2">40</td><td className="py-2.5 px-2">40" / 101cm</td></tr>
                    <tr className="border-b border-neutral-200"><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">52</td><td className="py-2.5 px-2">42</td><td className="py-2.5 px-2">42" / 106cm</td></tr>
                    <tr><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">54</td><td className="py-2.5 px-2">44</td><td className="py-2.5 px-2">44" / 111cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Contact Note */}
          <div className="mt-12 bg-black text-white p-8 md:p-10 rounded-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-heading text-xl mb-4">Not Sure of Your Size?</h3>
              <p className="font-light text-neutral-300 mb-6">
                All our garments are available in Made to Measure. 
                Contact us with your measurements and we'll advise the best option.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:bespokemastertailor.co@gmail.com" 
                  className="flex items-center gap-2 text-sm hover:text-neutral-300 transition-colors"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  bespokemastertailor.co@gmail.com
                </a>
                <a 
                  href="https://wa.me/917310000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-neutral-300 transition-colors"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  WhatsApp +91 7310000000
                </a>
              </div>
            </div>
          </div>

          {/* Back to Shopping */}
          <div className="mt-12 text-center">
            <Link
              to="/collections"
              className="inline-block text-sm uppercase tracking-wider underline hover:no-underline transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;
