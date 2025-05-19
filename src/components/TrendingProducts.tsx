'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'HP Omen 17 Gaming Laptop',
    category: 'Gaming',
    price: 'KSh 117,000',
    originalPrice: 'KSh 120,000',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    rating: 4.8,
    reviews: 124,
    trending: true
  },
  {
    id: 2,
    name: 'MacBook Air M3 Chip',
    category: 'Apple',
    price: 'KSh 147,000',
    originalPrice: 'KSh 159,000',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
    rating: 4.9,
    reviews: 256,
    trending: true
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro',
    category: 'Apple',
    price: 'KSh 54,000',
    originalPrice: 'KSh 78,000',
    image: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg',
    rating: 4.7,
    reviews: 315,
    trending: true
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad P1 Gen 3',
    category: 'Lenovo',
    price: 'KSh 85,000',
    originalPrice: 'KSh 100,000',
    image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg',
    rating: 4.5,
    reviews: 89,
    trending: true
  },
  {
    id: 5,
    name: 'HP ProBook 440 G8 Notebook',
    category: 'HP',
    price: 'KSh 56,000',
    originalPrice: null,
    image: 'https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg',
    rating: 4.4,
    reviews: 76,
    trending: true
  },
  {
    id: 6,
    name: 'Samsung Galaxy S22 Ultra',
    category: 'Samsung',
    price: 'KSh 87,000',
    originalPrice: 'KSh 95,000',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    rating: 4.6,
    reviews: 192,
    trending: true
  }
];

const TrendingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const calculateMaxIndex = () => {
      const width = window.innerWidth;
      const itemsPerView = width >= 1024 ? 4 : width >= 768 ? 3 : 1;
      setMaxIndex(Math.max(0, products.length - itemsPerView));
    };

    // Calculate initial maxIndex
    calculateMaxIndex();

    // Add resize listener
    window.addEventListener('resize', calculateMaxIndex);

    // Cleanup
    return () => window.removeEventListener('resize', calculateMaxIndex);
  }, []);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / products.length;
      container.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="section-title">Trending Now</h2>
            <p className="text-lg text-gray-600">
              See what's popular with our customers this week
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full lg:w-1/4 md:w-1/3 flex-shrink-0 px-3 snap-start">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Product Image */}
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-56 object-cover"
                  />
                  {product.trending && (
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
                      Trending
                    </div>
                  )}
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                
                {/* Product Info */}
                <div className="p-4 flex-grow flex flex-col">
                  <div className="mb-auto">
                    <span className="text-sm text-gray-500 mb-1 block">{product.category}</span>
                    <h3 className="text-lg font-semibold hover:text-primary transition-colors mb-1">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                    </div>
                  </div>
                  
                  {/* Price and Action */}
                  <div className="mt-3">
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="w-full btn-primary flex items-center justify-center py-2 text-sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Dots */}
        <div className="flex justify-center mt-6 md:hidden">
          {Array.from({ length: products.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                currentIndex === index ? 'bg-primary w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts; 