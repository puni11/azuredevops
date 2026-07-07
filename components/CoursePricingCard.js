import React from 'react';
import { 
  GraduationCap, 
  Clock, 
  Check, 
  Calendar, 
  CreditCard, 
  Lock, 
  Download, 
  PhoneCall 
} from 'lucide-react';

const CoursePricingCard = () => {
  return (
    <div className=" bg-[#106AE0] relative rounded-xl shadow-2xl flex flex-col font-sans overflow-hidden border border-blue-400/30"
    style={{
            background: `
              linear-gradient(to bottom right, #0078d4 50%, #ffff 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 900 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'soft-light',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      
      {/* Top Main Section */}
      <div className="p-6 text-white flex flex-col gap-6">
        
        {/* Header Section */}
        <div className="flex gap-4 items-center">
          <div className="bg-white rounded-full p-2.5 text-[#106AE0] flex-shrink-0">
            <GraduationCap size={28} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-xl md:text-[22px] font-bold leading-tight mb-1">
              Azure DevOps Training Program
            </h2>
            <p className="text-blue-100 text-[13px] font-medium tracking-wide">
              Includes Azure Administrator (AZ-104) Foundation
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <div className="bg-[#FFE55C] text-gray-900 text-xs font-bold px-2.5 py-1 rounded w-max flex items-center gap-1.5 shadow-sm mb-4">
            <span className="text-sm">🔥</span> Special Launch Price
          </div>
          
          <div className="flex items-end gap-3 mb-1">
            <span className="text-5xl font-extrabold tracking-tight">₹9,999</span>
            <span className="text-lg line-through text-white/50 mb-1.5 font-medium">₹35,000</span>
          </div>
          <p className="text-blue-100 text-sm">(Plus GST)</p>
        </div>

        {/* Offer Deadline Banner */}
        <div className="bg-[#0B50B3] rounded-lg p-4 flex items-center gap-3 shadow-inner">
          <Clock size={24} className="text-white flex-shrink-0" />
          <div className="flex flex-col">
            <p className="font-bold text-white text-[15px]">Offer Ends 31 July, 2026</p>
            <p className="text-[13px] mt-0.5">
              <span className="text-[#FFE55C] font-bold">Save ₹25,000</span> 
              <span className="text-white/40 mx-2">|</span> 
              <span className="text-blue-100">Seats Filling Fast!</span>
            </p>
          </div>
        </div>

        {/* Included Features Card */}
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <h4 className="text-[#106AE0] font-bold text-[15px] mb-4">
            Included FREE With Your Enrollment
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2 text-[13px] text-gray-700 font-semibold">
            {[
              "Lifetime LMS Access", "GitHub Portfolio Support",
              "Resume Review", "Career Guidance",
              "Mock Interview Sessions", "Certification Guidance"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="flex-shrink-0">
                  <Check size={16} className="text-green-500 stroke-[3]" />
                </div>
                <span className="tracking-tight">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* Demo Button */}
          <a href="#formSub" id="book_free_demo_pricing" className="bg-gradient-to-b from-[#2A7DF6] to-[#1258C4] hover:from-[#408bf7] hover:to-[#1765da] rounded-lg p-3.5 flex flex-col items-center justify-center transition-all shadow-md w-full group">
            <div className="flex items-center gap-2 font-bold text-lg text-white mb-0.5">
               <Calendar size={20} />
               Book Free Demo Class
            </div>
            <p className="text-blue-100 text-xs font-medium">Talk to our expert & experience the live class</p>
          </a>

          {/* Enroll Button */}
          <a href="https://rzp.io/rzp/sM9Ufce" id="enroll_now_pricing" className="bg-gradient-to-b from-[#9D44CF] to-[#7426A3] hover:from-[#b057e3] hover:to-[#8431b8] rounded-lg p-3.5 flex flex-col items-center justify-center transition-all shadow-md w-full">
            <div className="flex items-center gap-2 font-bold text-lg text-white mb-0.5">
               <CreditCard size={20} />
               Enroll Now – ₹9,999
            </div>
            <p className="text-purple-100 text-xs font-medium">Secure your seat & start learning</p>
          </a>
        </div>

        {/* Secure Checkout Info */}
        <div className="flex flex-col items-center justify-center text-center mt-2">
          <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5 tracking-wide">
            <Lock size={16} />
            100% Secure Checkout
          </div>
          <p className="text-blue-100 text-[13px] font-medium">
            UPI • Cards • Net Banking • EMI Available
          </p>
        </div>

      </div>

      {/* Footer Section */}
      <div className="bg-[#F8FAFC] p-5 flex flex-col items-center border-t border-gray-200">
        <p className="text-gray-900 font-bold text-[15px] mb-3">Not Ready Yet?</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[13.5px] font-semibold text-[#106AE0] w-full">
          <a href="#formSub" id="download_syllabus_pricing" className="flex items-center gap-1.5 hover:text-blue-800 transition-colors">
            <Download size={16} /> Download Detailed Syllabus
          </a>
          <span className="text-gray-300 hidden md:inline">|</span>
          <a href="#formSub" id="talk_to_expert_pricing" className="flex items-center gap-1.5 hover:text-blue-800 transition-colors">
            <PhoneCall size={16} /> Talk to an Azure Expert
          </a>
        </div>
      </div>

    </div>
  );
};

export default CoursePricingCard;