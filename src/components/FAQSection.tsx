'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'מה מדיניות ההחזרות של החנות?',
      answer: 'ניתן להחזיר מוצרים בתוך 14 יום מיום הרכישה עם קבלה מקורית. המוצרים חייבים להיות במצב חדש, עם תגיות מקוריות. החזר כספי יינתן באמצעי התשלום המקורי או כזיכוי בחנות לפי בחירתכם.'
    },
    {
      id: 'faq-2',
      question: 'מהן שעות הפעילות של החנות?',
      answer: 'החנות פתוחה בימים א׳-ה׳ בין השעות 9:00-21:00, בימי שישי בין השעות 9:00-14:00, ובמוצאי שבת משעה לאחר צאת השבת ועד 22:00. בחגים ייתכנו שינויים בשעות הפעילות, מומלץ לבדוק באתר או בעמוד הפייסבוק שלנו.'
    },
    {
      id: 'faq-3',
      question: 'איך אני יכול/ה לדעת מה המידה המתאימה לי?',
      answer: 'בכל מוצר באתר יש טבלת מידות מפורטת. אנו ממליצים למדוד בגד דומה שמתאים לכם היטב ולהשוות למידות בטבלה. בחנויות שלנו, צוות המכירות ישמח לעזור לכם למצוא את המידה המושלמת. אם רכשתם באונליין והמידה אינה מתאימה, ניתן להחליף בקלות.'
    },
    {
      id: 'faq-4',
      question: 'האם ניתן להזמין פריטים מיוחדים שאינם במלאי?',
      answer: 'כן, אנו מציעים שירות הזמנות מיוחדות. ניתן לפנות לצוות שלנו בחנות או דרך האתר, ונבדוק את זמינות הפריט אצל הספקים שלנו. זמן האספקה להזמנות מיוחדות נע בין 2-4 שבועות, תלוי בספק ובמוצר המבוקש.'
    },
    {
      id: 'faq-5',
      question: 'האם יש משלוחים לכל הארץ?',
      answer: 'כן, אנו מספקים משלוחים לכל רחבי הארץ. משלוחים רגילים מגיעים תוך 3-5 ימי עסקים. לאזורים מרוחקים ייתכן ויידרש זמן נוסף. ישנה אפשרות למשלוח אקספרס בתוספת תשלום, המגיע תוך 24 שעות לרוב אזורי הארץ.'
    },
    {
      id: 'faq-6',
      question: 'האם יש מועדון לקוחות? מה ההטבות?',
      answer: 'כן, מועדון הלקוחות שלנו מציע הטבות רבות כולל 10% הנחה קבועה על כל קנייה, מבצעים בלעדיים לחברי המועדון, הזמנה מוקדמת לקולקציות חדשות, ומתנת יום הולדת. ההצטרפות למועדון היא חינם ברכישה מעל 300 ש״ח או בעלות של 50 ש״ח לשנה.'
    },
    {
      id: 'faq-7',
      question: 'האם ניתן לבצע התאמות אישיות לבגדים?',
      answer: 'אנו מציעים שירותי תפירה והתאמות אישיות בכל הסניפים שלנו. השירות כרוך בתשלום נוסף התלוי בסוג ההתאמה הנדרשת. זמן הביצוע נע בין 2-7 ימי עסקים. יש להביא את הבגד נקי לאחר הרכישה.'
    },
    {
      id: 'faq-8',
      question: 'איך אפשר ליצור קשר עם שירות הלקוחות?',
      answer: 'ניתן ליצור קשר עם שירות הלקוחות שלנו במספר דרכים: טלפון: 03-1234567 (זמין בימים א׳-ה׳, 9:00-18:00), אימייל: service@gamafashion.co.il, צ׳אט באתר (זמין בשעות פעילות החנות), או בכל אחד מהסניפים שלנו. אנו מתחייבים לחזור לכל פנייה תוך יום עסקים אחד.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div id="faq-section" dir="rtl" className="w-full max-w-4xl mx-auto p-6 font-sans">
      <div className="text-right mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">שאלות נפוצות</h2>
        <p className="text-gray-600">מצאו תשובות לשאלות הנפוצות ביותר על חנות בגדים גמא</p>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#45B7D1]/20 to-[#96CEB4]/20 rounded-xl blur-xl opacity-70"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="mb-4 last:mb-0 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full text-right p-5 flex justify-between items-center rounded-xl transition-all duration-300 ${
                  activeIndex === item.id 
                    ? 'bg-gradient-to-r from-[#45B7D1]/10 to-[#96CEB4]/10 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7),inset_-3px_-3px_7px_rgba(94,104,121,0.3)]' 
                    : 'bg-white shadow-[3px_3px_6px_rgba(166,180,200,0.2),-3px_-3px_6px_rgba(255,255,255,0.7)]'
                }`}
                aria-expanded={activeIndex === item.id}
                aria-controls={`content-${item.id}`}
              >
                <span className="font-medium text-lg text-gray-800">{item.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`ml-2 flex-shrink-0 ${
                    activeIndex === item.id ? 'text-[#45B7D1]' : 'text-gray-500'
                  }`}
                >
                  <IoIosArrowDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.div
                    id={`content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-2 text-gray-600 text-right border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 text-right">
        <h3 className="text-xl font-medium mb-4 text-gray-800">עדיין יש לך שאלות?</h3>
        <p className="text-gray-600 mb-5">אנחנו כאן לעזור! צור/י קשר עם צוות שירות הלקוחות שלנו</p>
        <div className="flex flex-wrap gap-4 justify-end">
          <a 
            href="tel:03-1234567" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] text-white font-medium shadow-[3px_3px_6px_rgba(166,180,200,0.3),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-3px_-3px_7px_rgba(255,255,255,0.2)] transition-all duration-300"
          >
            התקשר/י עכשיו
          </a>
          <a 
            href="mailto:service@gamafashion.co.il" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#45B7D1] font-medium border border-[#45B7D1]/20 shadow-[3px_3px_6px_rgba(166,180,200,0.2),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-3px_-3px_7px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            שלח/י אימייל
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="חנות בגדים גמא" 
            className="w-full h-48 object-cover rounded-xl shadow-lg"
          />
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} חנות בגדים גמא. כל הזכויות שמורות.</p>
      </div>
    </div>
  );
};

export default FAQSection;