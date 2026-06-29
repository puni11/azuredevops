"use client";

import { motion } from "framer-motion";

// Extracted image URLs from your HTML
const row1Images = Array.from({ length: 10 }, (_, i) => `https://grras.com/wp-content/uploads/2025/02/hp${i + 1}.png`);
const row2Images = Array.from({ length: 10 }, (_, i) => `https://grras.com/wp-content/uploads/2025/02/hp${i + 2}.png`);
const row3Ids = [21, 22, 23, 24, 25, 26, 28, 33, 34, 35];
const row3Images = row3Ids.map(id => `https://grras.com/wp-content/uploads/2025/02/hp${id}.png`);

// Reusable Infinite Marquee Component
const InfiniteMarquee = ({ 
  images, 
  direction = "left", 
  speed = 25 
}) => {
  return (
    <div style={{ overflow: "hidden", display: "flex", width: "100%", marginBottom: "1.5rem" }}>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{ display: "flex", gap: "15px", flexShrink: 0 }}
      >
        {/* We duplicate the array to create a seamless infinite loop */}
        {[...images, ...images].map((src, index) => (
          <div key={index} style={{ width: "138px", flexShrink: 0 }}>
            <img
              src={src}
              alt={`Hiring Partner ${index}`}
              style={{ width: "138px", height: "52px", objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HiringPartners() {
  return (
    <div className="row dark:bg-white" style={{ padding: "2rem 0", overflow: "hidden" }}>
      <div className="col-lg-12 text-center">
        
        {/* Heading Section */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 dark:text-black">
          <span>600+ Hiring</span> Partners Across Industries
        </h2>
        <p className="text-gray-800 mb-12">
          Our extensive network of hiring partners spans various industries, offering diverse opportunities to kickstart your career.
        </p>

        {/* Sliders replacing Owl Carousel */}
        <div className="carousel-container" style={{ position: "relative", width: "100%" }}>
          {/* Row 1: Slides Left */}
          <InfiniteMarquee images={row1Images} direction="left" speed={30} />
          
          {/* Row 2: Slides Right (RTL equivalent) */}
          <InfiniteMarquee images={row2Images} direction="right" speed={35} />
          
          {/* Row 3: Slides Left */}
          <InfiniteMarquee images={row3Images} direction="left" speed={28} />
        </div>

        {/* Optional Button (Commented out in your original code) */}
        {/* 
        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary text-14">See All Our Hiring Partners</a>
        </div> 
        */}

      </div>
    </div>
  );
}