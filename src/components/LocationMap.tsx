'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaDirections, FaBus, FaCar, FaWalking } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BusinessHours {
  day: string;
  hours: string;
}

const LocationMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'directions' | 'hours'>('directions');
  
  const businessHours: BusinessHours[] = [
    { day: 'ראשון', hours: '09:00 - 21:00' },
    { day: 'שני', hours: '09:00 - 21:00' },
    { day: 'שלישי', hours: '09:00 - 21:00' },
    { day: 'רביעי', hours: '09:00 - 21:00' },
    { day: 'חמישי', hours: '09:00 - 21:00' },
    { day: 'שישי', hours: '09:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  const transportationOptions = [
    { 
      icon: <FaBus className="ml-2" />, 
      title: 'אוטובוס', 
      description: 'קווים 18, 24, 75 מגיעים לתחנה הקרובה במרחק של 2 דקות הליכה מהחנות.' 
    },
    { 
      icon: <FaCar className="ml-2" />, 
      title: 'רכב פרטי', 
      description: 'חניון ציבורי זמין במרחק של 50 מטר מהחנות. שעתיים ראשונות חינם ללקוחות החנות.' 
    },
    { 
      icon: <FaWalking className="ml-2" />, 
      title: 'הליכה', 
      description: '10 דקות הליכה ממרכז העיר. עקבו אחר השילוט לכיוון מרכז הקניות גמא.' 
    },
  ];

  return (
    <section id="location-map" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-right mb-8 text-gray-800">
          <span className="relative inline-block">
            המיקום שלנו
            <motion.span 
              className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-[#45B7D1] to-[#96CEB4]"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map Container */}
          <motion.div 
            className="lg:w-3/5 rounded-2xl overflow-hidden shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="מפת המיקום של חנות בגדים גמא" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-6 text-white">
                <motion.div 
                  className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-bold mb-2">חנות בגדים גמא</h3>
                  <p className="text-sm">רחוב הרצל 45, תל אביב</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Info Container */}
          <motion.div 
            className="lg:w-2/5 bg-white rounded-2xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#45B7D1]/10 to-[#96CEB4]/10 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-inner flex-grow">
              <h3 className="text-2xl font-bold text-right mb-6 text-gray-800">פרטי התקשרות</h3>
              
              <div className="space-y-4 mb-8">
                <motion.a 
                  href="tel:+972-3-1234567" 
                  className="flex items-center justify-end text-gray-700 hover:text-[#45B7D1] transition-colors"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-right">03-1234567</span>
                  <FaPhone className="mr-3 text-[#45B7D1]" />
                </motion.a>
                
                <motion.a 
                  href="mailto:info@gamafashion.co.il" 
                  className="flex items-center justify-end text-gray-700 hover:text-[#45B7D1] transition-colors"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-right">info@gamafashion.co.il</span>
                  <FaEnvelope className="mr-3 text-[#45B7D1]" />
                </motion.a>
                
                <motion.div 
                  className="flex items-center justify-end text-gray-700"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-right">רחוב הרצל 45, תל אביב</span>
                  <FaDirections className="mr-3 text-[#45B7D1]" />
                </motion.div>
              </div>
              
              {/* Tabs */}
              <div className="mb-4 border-b border-gray-200">
                <div className="flex justify-end space-x-4 space-x-reverse">
                  <button
                    onClick={() => setActiveTab('hours')}
                    className={`py-2 px-4 font-medium text-sm relative ${
                      activeTab === 'hours' 
                        ? 'text-[#45B7D1]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    שעות פעילות
                    {activeTab === 'hours' && (
                      <motion.div 
                        className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#45B7D1]"
                        layoutId="activeTab"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('directions')}
                    className={`py-2 px-4 font-medium text-sm relative ${
                      activeTab === 'directions' 
                        ? 'text-[#45B7D1]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    הגעה לחנות
                    {activeTab === 'directions' && (
                      <motion.div 
                        className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#45B7D1]"
                        layoutId="activeTab"
                      />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === 'hours' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-end mb-4">
                      <h4 className="font-medium text-gray-800">שעות פעילות</h4>
                      <FaClock className="ml-2 text-[#45B7D1]" />
                    </div>
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between py-1 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{item.hours}</span>
                        <span className="font-medium text-gray-800">{item.day}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
                
                {activeTab === 'directions' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-end mb-4">
                      <h4 className="font-medium text-gray-800">איך מגיעים אלינו</h4>
                      <FaDirections className="ml-2 text-[#45B7D1]" />
                    </div>
                    {transportationOptions.map((option, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white/50 p-3 rounded-lg shadow-sm"
                        whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}
                      >
                        <div className="flex items-center justify-end mb-1">
                          <h5 className="font-medium text-gray-800">{option.title}</h5>
                          {option.icon}
                        </div>
                        <p className="text-gray-600 text-right text-sm">{option.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;