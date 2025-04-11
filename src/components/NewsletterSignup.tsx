'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGift } from 'react-icons/fa';

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
}

const NewsletterSignup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: FormErrors = {};
    if (!formData.email) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ email: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="newsletter-signup" 
      dir="rtl" 
      className="w-full py-12 px-4 md:px-8 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Glassmorphism container */}
        <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-20 rounded-2xl p-8 md:p-10 border border-white border-opacity-30 shadow-lg">
          <div className="text-right">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              הצטרפו לניוזלטר שלנו
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 mb-6"
            >
              קבלו עדכונים על מבצעים, הגעות חדשות וטיפים אופנתיים ישירות לתיבת הדואר שלכם
            </motion.p>
            
            <div className="flex items-center justify-end mb-8 text-right">
              <div className="mr-4">
                <h3 className="text-xl font-bold text-gray-800">הירשמו וקבלו 10% הנחה</h3>
                <p className="text-gray-700">על הקנייה הראשונה שלכם</p>
              </div>
              <div className="bg-[#45B7D1] bg-opacity-20 p-3 rounded-full">
                <FaGift className="text-[#45B7D1] text-2xl" />
              </div>
            </div>
            
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#96CEB4] bg-opacity-20 text-gray-800 p-4 rounded-lg text-center mb-6"
              >
                <p className="font-medium">תודה שנרשמתם! קוד ההנחה נשלח לאימייל שלכם.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow relative">
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="האימייל שלכם"
                        className="w-full py-3 px-12 rounded-lg bg-white bg-opacity-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] text-right shadow-inner"
                        aria-label="כתובת אימייל"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="neumorphic-button py-3 px-8 rounded-lg bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          שולח...
                        </span>
                      ) : (
                        'הירשמו עכשיו'
                      )}
                    </motion.button>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 text-right">
                  * לא נשלח אליכם דואר זבל. ניתן לבטל את המנוי בכל עת.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#45B7D1] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-[#96CEB4] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* CSS for neumorphic effect */}
      <style jsx>{`
        .neumorphic-button {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15), 
                     -6px -6px 12px rgba(255, 255, 255, 0.25);
        }
        
        .neumorphic-button:hover {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.18), 
                     -8px -8px 16px rgba(255, 255, 255, 0.25);
        }
        
        .neumorphic-button:active {
          box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.15), 
                      inset -4px -4px 8px rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </section>
  );
};

export default NewsletterSignup;