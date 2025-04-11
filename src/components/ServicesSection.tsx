'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaRulerCombined, FaClipboardList, FaCrown } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCardProps[] = [
    {
      icon: <FaTshirt size={32} />,
      title: "סטיילינג אישי",
      description: "פגישת ייעוץ אישית עם סטייליסט מקצועי שיעזור לך למצוא את הסגנון המושלם עבורך ויתאים לך פריטים שמחמיאים למבנה הגוף שלך.",
      imageUrl: "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaRulerCombined size={32} />,
      title: "תיקונים והתאמות",
      description: "שירות תפירה מקצועי להתאמה מושלמת של הבגדים שלך. התאמת מידות, קיצורים, והתאמות אישיות לכל פריט שתרכוש אצלנו.",
      imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaClipboardList size={32} />,
      title: "הזמנות מיוחדות",
      description: "אפשרות להזמין פריטים מיוחדים שאינם במלאי הקבוע שלנו. נעזור לך למצוא ולהזמין פריטים ייחודיים המתאימים לצרכים שלך.",
      imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <FaCrown size={32} />,
      title: "חווית קניה VIP",
      description: "שירות קניה אישי ומפנק בחנות סגורה, כולל כיבוד קל, יחס אישי, וסיוע מלא בבחירת פריטים. חוויה שתהפוך את הקניה לחוויה בלתי נשכחת.",
      imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="services" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dir-rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            בחנות בגדים גמא אנו מציעים מגוון שירותים מקצועיים כדי להבטיח שתקבלו את החוויה הטובה ביותר ואת הבגדים המושלמים עבורכם.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                </div>
                
                <div className="p-6 text-right">
                  <div className="flex items-center justify-end mb-4">
                    <h3 className="text-xl font-bold text-gray-800 ml-3">{service.title}</h3>
                    <div className="text-[#45B7D1]">{service.icon}</div>
                  </div>
                  
                  <p className="text-gray-600">{service.description}</p>
                  
                  <div className="mt-6">
                    <div 
                      className="inline-block py-2 px-4 bg-gradient-to-r from-[#45B7D1]/80 to-[#96CEB4]/80 text-white rounded-lg backdrop-blur-sm border border-white/20 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                      style={{ backdropFilter: 'blur(8px)' }}
                    >
                      קרא עוד
                    </div>
                  </div>
                </div>
                
                {/* Glassmorphism effect overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 pointer-events-none border border-white/10 rounded-2xl opacity-0 transition-opacity duration-300"
                  style={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    backdropFilter: 'blur(4px)'
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="inline-block py-3 px-8 bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] text-white rounded-full shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.5)] cursor-pointer transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
            לכל השירותים שלנו
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;