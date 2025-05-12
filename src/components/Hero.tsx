'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'SAMSUNG PHONES',
    subtitle: 'NEW ARRIVALS',
    description: 'Experience ultimate performance with the latest Samsung Galaxy series',
    btnText: 'SHOP NOW',
    btnLink: '/category/samsung',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    accent: 'from-blue-500/20 to-blue-600/20',
    textColor: 'text-blue-800',
    position: 'right',
  },
  {
    id: 2,
    title: 'PREMIUM LAPTOPS',
    subtitle: 'SPECIAL OFFERS',
    description: 'Save up to 15% on top brand laptops for work and gaming',
    btnText: 'VIEW DEALS',
    btnLink: '/category/laptops',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    accent: 'from-violet-500/20 to-violet-600/20',
    textColor: 'text-violet-800',
    position: 'left',
  },
  {
    id: 3,
    title: 'GAMING REVOLUTION',
    subtitle: 'LEVEL UP YOUR EXPERIENCE',
    description: 'Ultimate gaming setups with HP Omen & Victus series',
    btnText: 'EXPLORE',
    btnLink: '/category/gaming',
    image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
    accent: 'from-red-500/20 to-red-600/20',
    textColor: 'text-red-800',
    position: 'right',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-[85vh] overflow-hidden bg-gray-50">
      {/* Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="flex h-full">
            {/* Image Section */}
            <div className={`w-full md:w-3/5 relative ${slides[currentSlide].position === 'left' ? 'order-2' : 'order-1'}`}>
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Content Section */}
            <motion.div 
              className={`hidden md:flex md:w-2/5 items-center ${slides[currentSlide].position === 'left' ? 'order-1' : 'order-2'}`}
              initial={{ x: slides[currentSlide].position === 'left' ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className={`px-10 py-16 w-full bg-gradient-to-br ${slides[currentSlide].accent} h-full flex flex-col justify-center`}>
                <div className="max-w-lg">
                  <span className={`inline-block px-4 py-1 rounded-full bg-white/50 backdrop-blur-sm ${slides[currentSlide].textColor} font-medium text-sm mb-6`}>
                    {slides[currentSlide].subtitle}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-8">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slides[currentSlide].btnLink}
                      className="btn-primary py-3 px-8 flex items-center gap-2 font-medium"
                    >
                      {slides[currentSlide].btnText}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/shop"
                      className="bg-white py-3 px-8 rounded flex items-center gap-2 font-medium hover:bg-gray-100 transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Shop All
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Content Overlay */}
            <motion.div 
              className="absolute inset-0 flex md:hidden items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="p-8 bg-white/80 backdrop-blur-md rounded-xl max-w-md mx-4">
                <span className={`inline-block px-3 py-1 rounded-full ${slides[currentSlide].accent} ${slides[currentSlide].textColor} font-medium text-sm mb-3`}>
                  {slides[currentSlide].subtitle}
                </span>
                <h1 className="text-3xl font-bold mb-3 text-gray-900">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base text-gray-700 mb-5">
                  {slides[currentSlide].description}
                </p>
                <Link
                  href={slides[currentSlide].btnLink}
                  className="btn-primary w-full py-3 flex items-center justify-center gap-2 font-medium"
                >
                  {slides[currentSlide].btnText}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-md transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-md transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;