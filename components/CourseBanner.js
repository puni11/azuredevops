import { BookOpenCheckIcon } from '@animateicons/react/lucide';
import { CalendarRange, ClockIcon } from 'lucide-react';
import React from 'react';

export default function CourseBanner() {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center border-y border-gray-200/20 shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 md:px-8 md:py-6 my-5 gap-6 md:gap-0">
        
        {/* Section 1: Start Date */}
        <div className="flex items-center gap-4 justify-start w-full">
          <div className="flex-shrink-0">
            <ClockIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-50 mb-1">Batch Start Date</span>
            <span className="text-base font-semibold text-gray-50">03 August</span>
          </div>
        </div>

        {/* Divider (Horizontal on mobile, Vertical on desktop) */}
        <div className="justify-self-center w-1/2 md:w-px h-px md:h-8 bg-gray-200/20 hidden sm:block"></div>

        {/* Section 2: Program Duration */}
        <div className="flex items-center gap-4 justify-start w-full pl:0 sm:pl-8">
          <div className="flex-shrink-0">
            <CalendarRange />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-50 mb-1">Duration</span>
            <span className="text-base font-semibold text-gray-50">60 Hours</span>
          </div>
        </div>

        {/* Divider */}
        <div className="justify-self-center w-1/2 md:w-px h-px md:h-8 bg-gray-200/20 hidden sm:block"></div>

        {/* Section 3: Learning Format */}
        <div className="flex items-center gap-4 justify-start w-full pl-0 sm:pl-8">
          <div className="flex-shrink-0">
            <BookOpenCheckIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-50 mb-1">Training Mode</span>
            <span className="text-base font-semibold text-gray-50">Online / Classroom</span>
          </div>
        </div>

      </div>
    </div>
  );
}