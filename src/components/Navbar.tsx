'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'דף הבית', href: '/' },
    { 
      id: 'products', 
      label: 'מוצרים', 
      href: '/products',
      children: [
        { id: 'men', label: 'גברים', href: '/products/men' },
        { id: 'women', label: 'נשים', href: '/products/women' },
        { id: 'kids', label: 'ילדים', href: '/products/kids' },
      ]
    },
    { id: 'services', label: 'שירותים', href: '/services' },
    { id: 'gallery', label: 'גלריה', href: '/gallery' },
    { id: 'about', label: 'אודות', href: '/about' },
    { id: 'contact', label: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      id="navbar"
      dir="rtl" 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="חנות בגדים גמא"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] bg-clip-text text-transparent">
                חנות בגדים גמא
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center text-gray-700 hover:text-[#45B7D1] px-3 py-2 text-base font-medium rounded-md transition-all duration-200 focus:outline-none"
                    onClick={() => toggleDropdown(item.id)}
                    aria-expanded={activeDropdown === item.id}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <FiChevronDown className="mr-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#45B7D1] px-3 py-2 text-base font-medium rounded-md transition-all duration-200"
                    onClick={closeDropdowns}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                        style={{
                          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.05), -5px -5px 15px rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.children.map((child) => (
                            <Link
                              key={child.id}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#96CEB4]/10 hover:text-[#45B7D1] text-right"
                              role="menuitem"
                              onClick={() => {
                                closeDropdowns();
                                toggleMenu();
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] hover:from-[#3da7c1] hover:to-[#85bda3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#45B7D1]"
              style={{
                boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)'
              }}
            >
              <FiCalendar className="ml-2 -mr-1 h-4 w-4" />
              קביעת תור
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full bg-gray-100 text-gray-600 hover:text-[#45B7D1] hover:bg-gray-200 transition-all duration-200"
              style={{
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.05), -2px -2px 5px rgba(255, 255, 255, 0.8)'
              }}
            >
              <span className="sr-only">חיפוש</span>
              <FiSearch className="h-5 w-5" />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#45B7D1] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#45B7D1]"
              aria-expanded={isOpen}
              style={{
                boxShadow: isOpen ? 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.5)' : 
                '2px 2px 5px rgba(0, 0, 0, 0.05), -2px -2px 5px rgba(255, 255, 255, 0.8)'
              }}
            >
              <span className="sr-only">{isOpen ? 'סגור תפריט' : 'פתח תפריט'}</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#45B7D1] hover:bg-gray-100 focus:outline-none"
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={activeDropdown === item.id}
                      >
                        {item.label}
                        <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.id ? 'transform rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pr-4 mt-1 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#45B7D1] hover:bg-gray-100 text-right"
                                onClick={toggleMenu}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#45B7D1] hover:bg-gray-100 text-right"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 space-x-reverse px-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-l from-[#45B7D1] to-[#96CEB4] hover:from-[#3da7c1] hover:to-[#85bda3] focus:outline-none"
                  style={{
                    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)'
                  }}
                >
                  <FiCalendar className="ml-2 -mr-1 h-4 w-4" />
                  קביעת תור
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-full bg-gray-100 text-gray-600 hover:text-[#45B7D1] hover:bg-gray-200 transition-all duration-200"
                  style={{
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.05), -2px -2px 5px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <span className="sr-only">חיפוש</span>
                  <FiSearch className="h-5 w-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;