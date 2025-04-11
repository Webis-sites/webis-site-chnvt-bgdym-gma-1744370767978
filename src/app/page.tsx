'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import ServicesSection from '@/components/ServicesSection';
import BookingSystem from '@/components/BookingSystem';
import PortfolioGallery from '@/components/PortfolioGallery';
import FAQSection from '@/components/FAQSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Components generated by the builder will be added here */}
              <HeroSection />        <FeaturedProducts />        <ServicesSection />        <BookingSystem />        <PortfolioGallery />        <FAQSection />        <TestimonialsCarousel />        <CTASection />        <Footer />        <Navbar />        <AboutSection />
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 חנות בגדים גמא. webis
        </div>
      </footer>
    </div>
  );
}