'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative min-h-screen w-full overflow-hidden bg-gray-100"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="חנות בגדים מודרנית"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full max-w-2xl">
          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-md bg-white/20 p-8 md:p-12 rounded-2xl border border-white/30 shadow-xl text-right"
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-xl font-medium text-white/90 mb-1">חנות בגדים גמא</h2>
              <div className="h-1 w-16 bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] rounded-full mr-auto"></div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              חנות בגדים מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-8"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <button 
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] text-white font-medium text-lg
                shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.1)]
                hover:shadow-[8px_8px_15px_rgba(0,0,0,0.3),-8px_-8px_15px_rgba(255,255,255,0.15)]
                active:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.1)]
                transition-all duration-300 ease-out"
                aria-label="קבע תור עכשיו"
              >
                <span className="flex items-center justify-center gap-2">
                  קבע תור עכשיו
                  <FaArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Floating Elements for Visual Interest */}
          <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-[#45B7D1]/20 backdrop-blur-md z-10 hidden lg:block"></div>
          <div className="absolute bottom-32 left-40 w-16 h-16 rounded-full bg-[#96CEB4]/20 backdrop-blur-md z-10 hidden lg:block"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.7 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#45B7D1]/30 to-[#96CEB4]/30 backdrop-blur-md z-0 hidden lg:block"
          ></motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;