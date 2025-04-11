'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialsCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'רונית לוי',
      quote: 'השירות בחנות בגדים גמא הוא ברמה הגבוהה ביותר. תמיד מוצאת בדיוק את מה שאני מחפשת!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'יוסי כהן',
      quote: 'האיכות של הבגדים פה מדהימה. קניתי חולצה לפני שנתיים והיא עדיין נראית כמו חדשה.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'מיכל אברהם',
      quote: 'המבחר בחנות עצום ותמיד יש דברים חדשים. הצוות מקצועי ועוזר למצוא את הסגנון המושלם.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'דוד שמעוני',
      quote: 'המחירים הוגנים והאיכות מעולה. אני קונה פה כבר שנים וממליץ לכולם!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      name: 'שירה גולן',
      quote: 'הסגנון של הבגדים בחנות תמיד עדכני ואופנתי. אני תמיד מקבלת מחמאות על הבגדים שאני קונה פה.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      nextSlide(); // In RTL, left arrow moves to next slide
    } else if (e.key === 'ArrowRight') {
      prevSlide(); // In RTL, right arrow moves to previous slide
    }
  }, [nextSlide, prevSlide]);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  const pauseCarousel = () => setIsPaused(true);
  const resumeCarousel = () => setIsPaused(false);

  // Generate stars for rating
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className="inline-block text-yellow-400" aria-hidden="true" />
      ));
  };

  return (
    <div 
      id="testimonials-carousel" 
      dir="rtl" 
      className="relative w-full max-w-4xl mx-auto px-4 py-8 overflow-hidden"
      onMouseEnter={pauseCarousel}
      onMouseLeave={resumeCarousel}
      onFocus={pauseCarousel}
      onBlur={resumeCarousel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="המלצות לקוחות"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-right mb-2 text-gray-800">מה הלקוחות שלנו אומרים</h2>
        <div className="w-24 h-1 bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] mx-auto"></div>
      </div>

      {/* Glassmorphism container */}
      <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white border-opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#45B7D1]/10 to-[#96CEB4]/10 z-0"></div>
        
        <div className="relative z-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 text-right"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#45B7D1] to-[#96CEB4] blur-md opacity-70"></div>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 flex flex-col items-center md:items-start">
                <div className="mb-2 text-yellow-400 flex justify-center md:justify-start">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-lg md:text-xl mb-4 text-gray-800 text-center md:text-right">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <p className="font-bold text-[#45B7D1]">{testimonials[currentIndex].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation buttons - Neumorphic style */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-[#45B7D1] shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#96CEB4]"
          aria-label="הקודם"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#96CEB4] ${
                index === currentIndex
                  ? 'bg-[#45B7D1] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
                  : 'bg-gray-300 shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff]'
              }`}
              aria-label={`עבור להמלצה ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-[#45B7D1] shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#96CEB4]"
          aria-label="הבא"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;