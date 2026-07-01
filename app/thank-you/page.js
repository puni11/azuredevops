"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Mail } from 'lucide-react';

// Custom canvas-based Confetti component to avoid external dependencies
const CustomConfetti = ({ width, height, recycle }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const colors = ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'];
    
    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngleIncrement: (Math.random() * 0.07) + 0.05,
        tiltAngle: 0
      });
    }
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      let activeParticles = 0;
      
      particles.forEach((p) => {
        p.tiltAngle += p.tiltAngleIncrement;
        p.y += (Math.cos(p.tiltAngle) + p.dy + p.h / 2) / 2;
        p.x += Math.sin(p.tiltAngle) * 2;
        
        if (p.y <= height) activeParticles++;
        
        ctx.beginPath();
        ctx.lineWidth = p.w;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.w / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.h / 2);
        ctx.stroke();
        
        // Recycle particles back to the top
        if (p.y > height && recycle) {
          p.y = -20;
          p.x = Math.random() * width;
        }
      });
      
      if (activeParticles > 0 || recycle) {
        animationId = requestAnimationFrame(render);
      }
    };
    
    render();
    return () => cancelAnimationFrame(animationId);
  }, [width, height, recycle]);

  return <canvas ref={canvasRef} width={width} height={height} className="pointer-events-none" />;
};

// Custom useWindowSize hook to avoid hydration mismatches in Next.js
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Only execute on the client side
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function ThankYouPage() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Stop confetti from spawning new pieces after 7 seconds to save CPU
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
    
    return () => clearTimeout(timer);
  }, []);

  // Avoid rendering until mounted to prevent hydration errors with window dimensions
  if (!mounted) return null;

  return (
    <div className="min-h-screen dark:bg-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Confetti Layer */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <CustomConfetti
          width={width}
          height={height}
          recycle={showConfetti}
        />
      </div>

    

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white p-8 md:p-12 max-w-lg w-full text-center relative z-10 "
      >
        {/* Animated Check Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle className="w-12 h-12 text-sky-500" strokeWidth={2.5} />
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight"
        >
          Thank You!
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-600 text-lg mb-8 leading-relaxed"
        >
          We've successfully received your information. Our team is reviewing your details and will be in touch with you shortly.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => window.location.href = '/'}
            className="group mt-6 relative overflow-hidden flex items-center justify-center w-fit md:w-fit px-18 py-3 text-sm md:text-base font-normal text-gray-50 rounded-sm cursor-pointer bg-gradient-to-b from-sky-400 to-sky-600 shadow-lg"
          >
            <Home className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Back to Home
          </button>
          
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 pt-6 border-t border-slate-100"
        >
          
        </motion.div>
      </motion.div>
    </div>
  );
}