'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStore, FaUserTie, FaAward, FaHistory } from 'react-icons/fa';
import Image from 'next/image';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const milestones: Milestone[] = [
    {
      year: '2005',
      title: 'הקמת החנות',
      description: 'פתיחת הסניף הראשון של חנות בגדים גמא במרכז העיר',
      icon: <FaStore className="text-2xl text-primary" />,
    },
    {
      year: '2010',
      title: 'הרחבת השירותים',
      description: 'הוספת מחלקת עיצוב אישי ושירותי תפירה מותאמים',
      icon: <FaUserTie className="text-2xl text-primary" />,
    },
    {
      year: '2015',
      title: 'פרס מצוינות',
      description: 'זכייה בפרס השירות המצטיין בענף האופנה',
      icon: <FaAward className="text-2xl text-primary" />,
    },
    {
      year: '2020',
      title: 'התרחבות ארצית',
      description: 'פתיחת סניפים נוספים ברחבי הארץ והשקת חנות אונליין',
      icon: <FaHistory className="text-2xl text-primary" />,
    },
  ];

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-right">
            <div className="inline-block mb-4 px-4 py-2 rounded-lg bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm border border-gray-200 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                <span className="text-primary">אודות</span> חנות בגדים גמא
              </h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border border-gray-200 shadow-lg mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                אנחנו בחנות בגדים גמא מובילים את תחום הקמעונאות כבר שנים רבות, עם מחויבות עמוקה לאיכות ומקצועיות. 
                הצוות המיומן שלנו מתמחה במתן שירות אישי ומותאם לכל לקוח, תוך הקפדה על סטנדרטים גבוהים ועיצובים עדכניים.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                אנו מאמינים שלבוש איכותי הוא יותר מסתם בגד - הוא ביטוי של אישיות וסגנון. 
                לכן, אנו בוחרים בקפידה את הקולקציות שלנו כדי להציע ללקוחותינו את המיטב בעולם האופנה, 
                תוך שמירה על נגישות ומחירים הוגנים.
              </p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm border border-gray-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">ציר זמן - ההיסטוריה שלנו</h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-secondary bg-opacity-20 shadow-inner">
                      <span className="font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        {milestone.icon}
                        <h4 className="text-xl font-semibold text-gray-800">{milestone.title}</h4>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div variants={itemVariants} className="order-first lg:order-last">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-secondary/20 mix-blend-overlay z-10 rounded-2xl"></div>
              <div className="absolute inset-0 p-1 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-filter backdrop-blur-sm z-0">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="חנות בגדים מודרנית"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-6 right-6 left-6 p-6 rounded-xl bg-white bg-opacity-80 backdrop-filter backdrop-blur-md border border-gray-200 shadow-lg z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">המחויבות שלנו</h3>
                <p className="text-gray-700">
                  אנו מחויבים להציע ללקוחותינו חווית קנייה מושלמת, עם שירות אישי, 
                  מגוון עשיר של מוצרים איכותיים ואווירה נעימה בכל ביקור בחנות.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 p-5 rounded-xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm border border-gray-200 shadow-lg"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center">
                <div className="w-1/4 h-2 rounded-full bg-primary/30"></div>
                <div className="w-1/5 h-2 rounded-full bg-secondary/50"></div>
                <div className="w-1/3 h-2 rounded-full bg-primary/50"></div>
                <div className="w-1/6 h-2 rounded-full bg-secondary/30"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-medium text-gray-700">
                  מצפים לראותכם בחנות!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;