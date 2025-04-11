'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CallToActionSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="cta-section" 
      dir="rtl" 
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="רקע חנות בגדים"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#45B7D1]/80 to-[#96CEB4]/80 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end">
          {/* Glassmorphism Card */}
          <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md md:p-12">
            <h2 className="mb-4 text-right font-sans text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              גלו את הסגנון האישי שלכם
            </h2>
            
            <p className="mb-8 text-right font-sans text-lg text-white/90 md:text-xl">
              בחנות בגדים גמא, אנו מציעים חווית קניה אישית עם מגוון רחב של פריטים איכותיים. הזמינו פגישת סטיילינג אישית ותנו לנו לעזור לכם למצוא את המראה המושלם.
            </p>
            
            {/* Neumorphic Button */}
            <div className="flex justify-end">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <a 
                  href="#booking"
                  className={`
                    relative inline-block rounded-xl px-8 py-4 text-lg font-bold text-white transition-all duration-300
                    ${isHovered 
                      ? 'bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] shadow-[4px_4px_10px_rgba(150,206,180,0.3),-4px_-4px_10px_rgba(69,183,209,0.3)]' 
                      : 'bg-gradient-to-l from-[#45B7D1]/90 to-[#96CEB4]/90 shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)]'
                    }
                  `}
                  aria-label="קבע תור לפגישת סטיילינג"
                >
                  קבע תור עכשיו
                </a>
                
                {/* Animated Pulse Effect */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0.7, scale: 1 }}
                    animate={{ 
                      opacity: 0,
                      scale: 1.4,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-l from-[#45B7D1]/50 to-[#96CEB4]/50"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#45B7D1]/30 backdrop-blur-md"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute right-20 top-10 h-16 w-16 rounded-full bg-[#96CEB4]/30 backdrop-blur-md"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default CallToActionSection;