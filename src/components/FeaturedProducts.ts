'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const FeaturedProducts: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'חולצת טי אורגנית',
      price: 129.90,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'חולצות'
    },
    {
      id: '2',
      name: 'ג׳ינס סקיני',
      price: 199.90,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'מכנסיים'
    },
    {
      id: '3',
      name: 'שמלת קיץ',
      price: 159.90,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'שמלות'
    },
    {
      id: '4',
      name: 'מעיל חורף',
      price: 349.90,
      image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'מעילים'
    },
    {
      id: '5',
      name: 'חולצה מכופתרת',
      price: 149.90,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'חולצות'
    },
    {
      id: '6',
      name: 'סוודר צמר',
      price: 179.90,
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'סוודרים'
    }
  ]);

  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',') + ' ₪';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="featured-products" className="py-16 px-4 md:px-8 lg:px-16" dir="rtl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-right text-gray-800">מוצרים מובילים</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] shadow-[4px_4px_10px_rgba(150,206,180,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_4px_4px_10px_rgba(69,183,209,0.3),inset_-4px_-4px_10px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            צפה בכל המוצרים
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="relative rounded-2xl overflow-hidden bg-white backdrop-blur-sm bg-opacity-70 shadow-[8px_8px_16px_rgba(174,174,192,0.4),-8px_-8px_16px_rgba(255,255,255,0.65)] hover:shadow-[12px_12px_20px_rgba(174,174,192,0.5),-12px_-12px_20px_rgba(255,255,255,0.8)] transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" 
                  style={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 space-x-reverse"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-[#45B7D1] shadow-lg hover:bg-[#45B7D1] hover:text-white transition-all duration-300"
                    aria-label="צפה במהירות"
                  >
                    <FiEye size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-[#45B7D1] shadow-lg hover:bg-[#45B7D1] hover:text-white transition-all duration-300"
                    aria-label="הוסף לסל"
                  >
                    <FiShoppingCart size={18} />
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="text-right">
                    <span className="block text-xs text-gray-500 mb-1">{product.category}</span>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-[#45B7D1] font-bold">{formatPrice(product.price)}</p>
                  </div>
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#45B7D1]/20 to-[#96CEB4]/20"></div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="block w-4 h-0.5 bg-[#45B7D1]"></span>
                      <span className="block w-0.5 h-4 bg-[#45B7D1] absolute"></span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;