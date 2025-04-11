'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';

// Define types for our gallery items
interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string[];
  height: number;
}

// Define categories with Hebrew labels
const categories = [
  { id: 'all', label: 'הכל' },
  { id: 'casual', label: 'יומיומי' },
  { id: 'formal', label: 'אלגנטי' },
  { id: 'summer', label: 'קיץ' },
  { id: 'winter', label: 'חורף' },
  { id: 'accessories', label: 'אקססוריז' },
];

// Sample gallery items with Unsplash images
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'דגם שמלה קיצית בצבע תכלת',
    category: ['casual', 'summer'],
    height: 450,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'חליפה אלגנטית לגבר בצבע כחול כהה',
    category: ['formal'],
    height: 600,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'אקססוריז לנשים - תכשיטים ושעונים',
    category: ['accessories'],
    height: 350,
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'מעיל חורף עבה בצבע חום',
    category: ['winter'],
    height: 500,
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'חולצת טי קיצית בצבע לבן',
    category: ['casual', 'summer'],
    height: 400,
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'שמלת ערב אלגנטית בצבע שחור',
    category: ['formal'],
    height: 550,
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'צעיף חורפי בצבע אפור',
    category: ['winter', 'accessories'],
    height: 300,
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'שמלה קיצית פרחונית',
    category: ['casual', 'summer'],
    height: 480,
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'חליפת עסקים לאישה בצבע אפור',
    category: ['formal'],
    height: 520,
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'כובע חורף סרוג בצבע אדום',
    category: ['winter', 'accessories'],
    height: 380,
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'חולצה קיצית פרחונית',
    category: ['casual', 'summer'],
    height: 420,
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'מעיל חורף ארוך בצבע שחור',
    category: ['winter'],
    height: 580,
  },
];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Filter items when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter((item) => item.category.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsFilterOpen(false);
  };

  // Handle keyboard navigation for gallery items
  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      // Handle item selection (could open a modal or detailed view)
      event.preventDefault();
      console.log(`Selected item: ${itemId}`);
    }
  };

  return (
    <div id="portfolio-gallery" dir="rtl" className="w-full px-4 py-8 md:px-8 lg:px-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-right mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          הקולקציות שלנו
        </h2>
        <p className="text-gray-600 mb-6">
          גלו את מגוון הפריטים האיכותיים בחנות בגדים גמא
        </p>
        
        {/* Filter Section */}
        <div className="relative mb-8" ref={filterRef}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-300"
            aria-expanded={isFilterOpen}
            aria-controls="category-dropdown"
          >
            <FiFilter className="ml-1" />
            <span>סינון לפי: {categories.find(cat => cat.id === selectedCategory)?.label}</span>
          </motion.button>
          
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              id="category-dropdown"
              className="absolute top-full right-0 mt-2 w-48 bg-white/80 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden"
              style={{
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <ul className="py-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-right px-4 py-2 hover:bg-gradient-to-l hover:from-transparent hover:to-[#96CEB4]/20 transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-l from-transparent to-[#45B7D1]/20 font-medium'
                          : ''
                      }`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-white"
            style={{
              height: `${item.height}px`,
              boxShadow: '8px 8px 16px rgba(0,0,0,0.05), -8px -8px 16px rgba(255,255,255,0.8)'
            }}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, item.id)}
            aria-label={item.alt}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
              <span className="text-white text-sm font-medium">{item.alt}</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full relative"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Empty state when no items match the filter */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">לא נמצאו פריטים בקטגוריה זו</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#45B7D1] to-[#96CEB4] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            הצג את כל הפריטים
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;