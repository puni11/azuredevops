import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Will output 2026 based on current time

  return (
    <footer className="bg-[#0B1A3A] text-gray-300  pt-16 pb-8" 
    style={{
            background: `
              linear-gradient(to bottom right, #111 50%, #111 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 1500 1500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='250.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'soft-light',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-700/50 pb-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-4">
            <img src='https://openshift.grras.com/frontassets/img/logo.png' className='h-8 w-10 sm:h-12 sm:w-14 brightness-0 invert' />
            <p className="text-sm text-gray-200 leading-relaxed">
              Accelerate your cloud career with hands-on, expert-led Azure & DevOps training. We build industry-ready practitioners, not just certificate holders.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#curriculum" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Course Curriculum
                </a>
              </li>
              <li>
                <a href="#certifications" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Certifications
                </a>
              </li>
              <li>
                <a href="#instructor" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Meet the Instructor
                </a>
              </li>
              <li>
                <a href="#pricing" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Pricing & Batches
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies (Crucial for Ad Compliance) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Legal & Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://grras.com/terms-conditions/" target='_blank' className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="https://grras.com/privacy-policy/" target='_blank' className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://grras.com/refund-policy/" target='_blank' className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-blue-400" />
                  Refund & Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gray-500 shrink-0 mt-0.5" />
                <a href="mailto:support@cloudmastery.com" className="hover:text-white transition-colors">
                  training@grras.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gray-500 shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  B-4, near Danik Bhaskar, Vivek Vihar, Bajaj Nagar, Jaipur, Rajasthan 302015
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimers */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-xs text-gray-300">
            &copy; {currentYear} Grras Solutions Pvt Ltd Institute. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-400 max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> We are an independent training provider. This website and our training programs are not sponsored, endorsed, or affiliated with Microsoft Corporation. "Microsoft", "Azure", "AZ-104", and "AZ-400" are registered trademarks of Microsoft Corporation. Any use of these terms is purely for descriptive purposes to indicate the content of the training.
          </p>
        </div>

      </div>
    </footer>
  );
}