"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Kamau',
    role: 'Software Developer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    product: 'HP Omen 17 Gaming Laptop',
    rating: 5,
    content: 'The HP Omen 17 exceeded all my expectations. The performance is incredible for both work and gaming. Customer service was outstanding - they helped me choose the perfect configuration for my needs. Fast delivery too!',
  },
  {
    id: 2,
    name: 'Mary Wanjiku',
    role: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    product: 'MacBook Air M3',
    rating: 5,
    content: 'As a designer, I need a reliable machine with excellent color accuracy. The MacBook Air M3 is perfect! SchoolMall offered the best price I could find, and their technical team was very helpful with my questions about software compatibility.',
  },
  {
    id: 3,
    name: 'David Ochieng',
    role: 'University Student',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    product: 'Samsung Galaxy S22',
    rating: 4,
    content: 'Great phone with an amazing camera! SchoolMall had a student discount which made it much more affordable. The shipping was fast and the phone arrived in perfect condition with all accessories.',
  },
  {
    id: 4,
    name: 'Faith Muthoni',
    role: 'Business Consultant',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    product: 'Lenovo ThinkPad P1',
    rating: 5,
    content: 'The ThinkPad P1 is a powerhouse for business use. I appreciate the professional advice from SchoolMall staff - they helped me understand the specs and choose the right model. Premium service from start to finish!',
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read real experiences from our satisfied customers across Kenya
          </p>
        </div>
        
        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-5 left-10 bg-primary text-white p-3 rounded-full">
              <Quote className="h-6 w-6" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Customer Avatar */}
              <div className="flex flex-col items-center">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 shadow-sm"
                />
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                </div>
                
                {/* Product & Rating */}
                <div className="mt-3 text-center">
                  <p className="text-gray-800 text-sm font-medium">{currentTestimonial.product}</p>
                  <div className="flex items-center justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1">
                <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-between mt-10">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === index ? 'bg-primary w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;