'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, PhoneCallIcon } from '@animateicons/react/lucide';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Trigger glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-3 ${
        scrolled 
          ? 'bg-white backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-white'
      }`}
    >
      {/* Left: Company Logo */}
      <div className="flex items-center shrink-0">
        <img src='https://openshift.grras.com/frontassets/img/logo.png' className='h-8 w-10 sm:h-12 sm:w-14' />
      </div>

 

      {/* Right: Download Brochure Button */}
      <div className="flex items-center shrink-0">
        <motion.a id="talk_to_counselor_btn"
        href='#formSub'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2 shadow-2xl overflow-hidden rounded-md bg-gradient-to-b from-[#2380c6] to-[#3a8fd0] backdrop-blur-sm border border-white/20 px-6 py-2.5 font-semibold text-white transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <span className="relative z-10 flex items-center gap-2 text-sm">
             <PhoneCallIcon size={16} />
            Talk To Counselor
           
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;