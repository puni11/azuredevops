'use client'
import { ChevronRightIcon, ContactIcon, PhoneForwardedIcon, SquareArrowOutUpRightIcon, UsersIcon, UserStarIcon } from '@animateicons/react/lucide';
import React, { useState } from 'react';
import CourseBanner from './CourseBanner';
import Form from './Form';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4';

export const HeroComponent = ({ isHomepage = true }) => {
  const primaryHeading = "Master Microsoft Azure + Azure DevOps — Job-Ready, Certification-Ready";
  const subHeading = "Hands-on labs, real deployment pipelines, and guidance from a Microsoft-certified trainer. Built for IT professionals ready to move into high-demand cloud roles.";


  return (
    <div className="w-full flex flex-col font-lexend">
      <section
        className="w-full flex flex-col items-center justify-center  px-6 py-16 md:py-24"
        style={{ position: 'relative', color: '#FFFFFF', overflow: 'hidden' }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

       

        {/* All content sits above the video */}
        <div className="relative w-full flex items-center" style={{ zIndex: 2 }}>
<div className='max-w-7xl mx-auto flex flex-col sm:flex-row gap-8 items-center'>
          {/* Top Label */}
          <div>
          <span className="inline-block text-sm font-semibold uppercase tracking-normal mb-4 opacity-80 animate-roll mt-8">
           {isHomepage ? 'Microsoft Certified Curriculum' : 'AZ-104 + AZ - 400'}
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl tracking-tight max-w-xl mb-6 animate-roll">
            {isHomepage ? primaryHeading : 'Become a Microsoft Certified Azure Administrator & Azure DevOps Engineer'}
          </h1>

          {/* Sub-headline */}
          <p className="text-md md:text-lg font-normal leading-relaxed max-w-3xl mb-10 opacity-100 animate-roll">
            {isHomepage ? subHeading : 'Master Azure Administrator (AZ-104) & Azure DevOps with live training, real projects, and certification guidance.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-start items-center gap-4 w-full max-w-3xl mb-8 animate-roll">
         
           <a
  id="enroll_btn"
  href={`${isHomepage ? 'https://rzp.io/rzp/sM9Ufce' : '#formSub'}`}
  target="_blank"
  className={`
    group relative overflow-hidden items-center justify-center
    w-full md:w-auto px-18 py-3.5 text-sm md:text-base
    font-bold text-gray-900 rounded-md cursor-pointer
    bg-gradient-to-b from-white to-gray-300 shadow-lg
    ${
      isHomepage
        ? "flex"          // Visible on both mobile & desktop
        : "flex md:hidden" // Visible only on mobile
    }
  `}
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>

  <span className="relative z-10 flex items-center justify-center gap-2">
    <SquareArrowOutUpRightIcon
      size={16}
      color="#111"
      className="group-hover:animate-bounce"
    />
    {isHomepage ? "Enroll Now" : "Book Free Demo"}
  </span>
</a>
           {isHomepage && (
            <a id='counselor_btn' href='#formSub' className="group flex items-center justify-center bg-white/20 backdrop-blur-sm gap-2 w-full cursor-pointer md:w-auto px-8 py-3.5 text-sm md:text-base font-bold text-white bg-transparent border border-white/20 rounded hover:bg-white/10 transition-all">
              <PhoneForwardedIcon size={16} duration={1} color="#ffffff" className="group-hover:animate-bounce transition-all duration-300" />
              Talk to a Counselor
            </a>
           )}
          </div>
<CourseBanner/>
          {/* Stats Row */}
          <div className="max-w-7xl mx-auto px-6 mb-14 mt-4">
            <div className="flex flex-wrap justify-start items-center gap-x-8 gap-y-4 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <UserStarIcon size={16} duration={1} color="#fff" />
                <span>4.8/5 Rated By Learners</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon size={16} duration={1} color="#fff" />
                <span>10,000+ Learners Trained</span>
              </div>
              {!isHomepage && (
                <div className="flex items-center gap-2">
                  <ContactIcon size={16} duration={1} color="#fff" /> 
                  <span>18+ Years Experience</span>
                </div>
              )}
               {!isHomepage && (
                <div className="flex items-center gap-2">
                  <ChevronRightIcon size={16} duration={1} color="#fff" /> 
                  <span>Red Hat Authorized Partner</span>
                </div>
              )}
            </div>
          </div>
</div>
          {/* Registration Form */}
          <Form isHomepage={isHomepage} />
</div>
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;