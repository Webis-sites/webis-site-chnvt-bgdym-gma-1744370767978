'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" dir="rtl" className="w-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 mt-12 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary opacity-20 blur-xl"></div>
      <div className="absolute top-40 left-10 w-60 h-60 rounded-full bg-secondary opacity-20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          
          {/* Store Info Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary border-b-2 border-secondary pb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              אודות חנות בגדים גמא
            </motion.h3>
            <p className="text-sm leading-relaxed">
              אנחנו חנות בגדים מוביל בתחום הקמעונאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="flex space-x-4 space-x-reverse justify-end mt-4">
              <motion.a 
                href="#" 
                aria-label="פייסבוק"
                className="neumorphic-social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-primary hover:text-blue-600 transition-colors" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="אינסטגרם"
                className="neumorphic-social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-primary hover:text-pink-600 transition-colors" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="טוויטר"
                className="neumorphic-social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-primary hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="וואטסאפ"
                className="neumorphic-social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-primary hover:text-green-500 transition-colors" />
              </motion.a>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary border-b-2 border-secondary pb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              צור קשר
            </motion.h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end gap-2">
                <span className="text-sm">רחוב הרצל 123, תל אביב</span>
                <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span className="text-sm" dir="ltr">03-1234567</span>
                <FaPhone className="text-secondary flex-shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span className="text-sm">info@gamafashion.co.il</span>
                <FaEnvelope className="text-secondary flex-shrink-0" />
              </li>
              <li className="flex items-start justify-end gap-2">
                <div className="text-sm text-right">
                  <div>ראשון-חמישי: 9:00-21:00</div>
                  <div>שישי: 9:00-14:00</div>
                  <div>שבת: סגור</div>
                </div>
                <FaClock className="text-secondary flex-shrink-0 mt-1" />
              </li>
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary border-b-2 border-secondary pb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              קישורים מהירים
            </motion.h3>
            <ul className="space-y-2">
              {['דף הבית', 'חנות', 'קולקציות', 'מבצעים', 'אודות', 'צור קשר', 'שאלות נפוצות'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    className="text-sm hover:text-primary transition-colors block"
                    whileHover={{ x: -5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary border-b-2 border-secondary pb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              הרשמה לניוזלטר
            </motion.h3>
            <p className="text-sm mb-4">הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים והנחות בלעדיות!</p>
            
            {subscribed ? (
              <motion.div 
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                תודה שנרשמת! בקרוב תקבל/י מאיתנו עדכונים.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="הכנס/י את כתובת האימייל שלך"
                    required
                    className="w-full px-4 py-2 rounded-lg text-right bg-white bg-opacity-70 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all neumorphic-input"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all neumorphic-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  הרשמה
                </motion.button>
              </form>
            )}
          </div>
        </div>
        
        {/* Bottom footer with copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="order-2 md:order-1 mt-4 md:mt-0 text-center md:text-right">
              <p>© {currentYear} חנות בגדים גמא. כל הזכויות שמורות.</p>
            </div>
            <div className="order-1 md:order-2 flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="hover:text-primary transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-primary transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-primary transition-colors">החזרות וביטולים</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glassmorphism card with store image */}
      <div className="hidden lg:block absolute bottom-20 left-10 w-64 h-40 rounded-xl overflow-hidden glassmorphism-card">
        <img 
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
          alt="חנות בגדים גמא" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <p className="text-white text-sm font-medium">בקרו אותנו בסניף המרכזי</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Add these styles to your global CSS or as a styled component
const globalStyles = `
  .neumorphic-social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f0f0f0;
    box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
    transition: all 0.3s ease;
  }
  
  .neumorphic-social-icon:hover {
    box-shadow: 3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff;
  }
  
  .neumorphic-button {
    background: linear-gradient(145deg, #45B7D1, #3da7be);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.5);
  }
  
  .neumorphic-button:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.5);
  }
  
  .neumorphic-input {
    box-shadow: inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff;
  }
  
  .glassmorphism-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
`;