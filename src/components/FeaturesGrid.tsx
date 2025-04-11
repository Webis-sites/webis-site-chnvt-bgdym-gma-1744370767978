'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaUserTie, FaRegCreditCard, FaShippingFast, FaHandsHelping, FaExchangeAlt } from 'react-icons/fa';
import { useInView } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-neumorphic relative overflow-hidden"
      style={{
        boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.6)'
      }}
    >
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#45B7D1]/20 to-[#96CEB4]/20 blur-xl z-0"></div>
      <div className="relative z-10">
        <div className="flex justify-end mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#45B7D1]/10 to-[#96CEB4]/10 text-[#45B7D1]">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-right text-gray-800">{title}</h3>
        <p className="text-gray-600 text-right">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <FaTshirt size={28} />,
      title: "מותגים איכותיים",
      description: "אנו מציעים מגוון רחב של מותגים מובילים בתעשייה, עם דגש על איכות ועיצוב מודרני.",
      delay: 0
    },
    {
      icon: <FaUserTie size={28} />,
      title: "צוות מקצועי",
      description: "הצוות שלנו מורכב ממומחי אופנה שישמחו לייעץ ולעזור לך למצוא את הפריטים המושלמים.",
      delay: 1
    },
    {
      icon: <FaRegCreditCard size={28} />,
      title: "תשלום מאובטח",
      description: "אנו מציעים מגוון אפשרויות תשלום מאובטחות לנוחיותך, כולל תשלומים ללא ריבית.",
      delay: 2
    },
    {
      icon: <FaShippingFast size={28} />,
      title: "משלוח מהיר",
      description: "אנו מספקים שירותי משלוח מהירים ואמינים לכל רחבי הארץ, עם אפשרות למשלוח אקספרס.",
      delay: 3
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "שירות אישי",
      description: "אנו מאמינים במתן שירות אישי ומותאם לכל לקוח, כדי להבטיח חוויית קנייה מושלמת.",
      delay: 4
    },
    {
      icon: <FaExchangeAlt size={28} />,
      title: "החלפות והחזרות",
      description: "מדיניות החלפות והחזרות נוחה המאפשרת לך לקנות בביטחון מלא וללא דאגות.",
      delay: 5
    }
  ];

  return (
    <section id="features-grid" dir="rtl" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#45B7D1]/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-[#96CEB4]/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">למה לבחור בחנות בגדים גמא?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">אנו מחויבים לספק לכם את חווית הקנייה הטובה ביותר עם מגוון רחב של מוצרים איכותיים ושירות מעולה</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            בקרו אותנו עוד היום
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;