import React from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ArrowRight, 
  Download, 
  PhoneCall, 
  SquareArrowDownRight
} from 'lucide-react';

export default function PricingAndBatch() {
  return (
    <div className='dark:bg-white'>
    <section id='pricing' className="max-w-7xl mx-auto font-lexend py-20 px-6 sm:px-0 text-gray-900">
      
      {/* Section Header */}
      <div className=" mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
          Enroll Today — Secure Your Seat
        </h2>
        <p className="text-md sm:text-lg text-gray-800 max-w-2xl">
          Know the details of the batch and start your journey towards Azure & DevOps mastery.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-roll">
        
        {/* Left Column: Batch Details Card (White Bg) */}
        <div className="bg-white rounded-sm shadow-lg border border-gray-200 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 border-b border-gray-100 pb-4">
              Upcoming Batch Details
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-sm flex items-center justify-center shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Next Cohort Starts</h4>
                  <p className="text-gray-600">August 01, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-sm flex items-center justify-center shrink-0">
                  <Video size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mode of Training</h4>
                  <p className="text-gray-600">100% Live Instructor-Led Online</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-sm flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Seats Available</h4>
                  <p className="text-gray-600">Limited for personalized attention</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-md border border-gray-100">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="text-blue-600" size={20} />
              Prerequisites
            </h4>
            <p className="text-sm text-gray-600">
              Basic understanding of IT infrastructure. No prior coding or cloud experience required. We cover fundamentals to advanced topics.
            </p>
          </div>
        </div>

        {/* Right Column: Pricing Card (Gradient Grain Bg) */}
        <div 
          className="rounded-sm shadow-2xl p-8 md:p-10 flex flex-col text-white relative overflow-hidden"
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
          {/* Price Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-white">Azure + Azure DevOps Course</h3>
            <p className="text-white/80 text-sm mb-6">Complete course package with lifetime portal access.</p>
            
            <div className="flex items-end gap-3 mb-1">
              <span className="text-5xl font-extrabold">₹9,999</span>
              <span className="text-lg line-through text-white/60 mb-1">₹35,000</span>
            </div>
            <p className="text-xs text-white/90 bg-white/20 inline-block px-3 py-1 rounded-sm  mt-3 backdrop-blur-sm">
              (Plus GST)
            </p>
          </div>

          {/* Offer Deadline */}
          <div className="bg-black/20 rounded-lg p-4 mb-6 border border-white/10 backdrop-blur-sm text-sm">
            <span className="font-bold text-white">Early Bird Offer :</span> Ensure your enrollment before <strong>July 10, 2026</strong> to lock in this discounted price.
          </div>

          {/* EMI Option */}
         

          {/* Primary CTA */}
        <a href='https://rzp.io/rzp/sM9Ufce' target='_blank' className="group relative overflow-hidden flex items-center justify-center w-full md:w-auto px-18 py-3.5 text-sm md:text-base font-bold text-gray-50 rounded-md cursor-pointer bg-gradient-to-b from-gray-700 to-gray-950 shadow-lg">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/70 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <SquareArrowDownRight size={16} duration={1} color="#fff" className="group-hover:animate-bounce" />
                Enroll Now
              </span>
            </a>

          {/* Secure Payment Badges */}
          <div className="flex flex-col items-center justify-center space-y-3 mb-8 mt-6">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Lock size={16} />
              <span>100% Secure Checkout</span>
            </div>
            {/* Replace with actual logo images if you have them */}
            <div className="flex gap-4 opacity-80 text-sm font-bold tracking-wider">
              <span>RAZORPAY</span>
            </div>
          </div>

          {/* Secondary Actions & Policies */}
          <div className="mt-auto pt-6 border-t border-white/20 flex flex-col items-center text-center">
            <p className="text-sm text-white/80 mb-4">Need to think it over?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-6">
              <a href='#formSub' className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors cursor-pointer">
                <Download size={16} /> Download Brochure
              </a>
              <span className="text-white/40">|</span>
              <a href='#formSub' className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors cursor-pointer">
                <PhoneCall size={16} /> Talk to a Counselor
              </a>
            </div>
           
          </div>
          
        </div>

      </div>
    </section>
    </div>
  );
}