'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Laptops & Computers',
    description: 'High-performance laptops and computers for school and work',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    link: '/category/laptops',
    color: 'from-blue-500/20 to-blue-600/20',
    textColor: 'text-blue-800'
  },
  {
    id: 2,
    name: 'School Textbooks',
    description: 'CBC and 8-4-4 curriculum textbooks for all grades',
    image: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg',
    link: '/category/textbooks',
    color: 'from-green-500/20 to-green-600/20',
    textColor: 'text-green-800'
  },
  {
    id: 3,
    name: 'Stationery & Art Supplies',
    description: 'Quality pens, notebooks, and art materials for students',
    image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg',
    link: '/category/stationery',
    color: 'from-yellow-500/20 to-amber-500/20',
    textColor: 'text-amber-800'
  },
  {
    id: 4,
    name: 'Phones & Tablets',
    description: 'Latest models with excellent features for connectivity',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    link: '/category/phones',
    color: 'from-violet-500/20 to-violet-600/20',
    textColor: 'text-violet-800'
  },
  {
    id: 5,
    name: 'Printers & Accessories',
    description: 'Reliable printers, scanners and accessories for school or office',
    image: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg',
    link: '/category/printers',
    color: 'from-red-500/20 to-red-600/20',
    textColor: 'text-red-800'
  },
  {
    id: 6,
    name: 'School Bags & Accessories',
    description: 'Durable backpacks and essential school accessories',
    image: 'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg',
    link: '/category/schoolbags',
    color: 'from-teal-500/20 to-teal-600/20',
    textColor: 'text-teal-800'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of educational materials and tech products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${category.color} p-6 group`}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 inline-block p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-12 h-12 object-cover rounded"
                    />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${category.textColor}`}>{category.name}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                </div>
                <Link 
                  href={category.link}
                  className={`inline-flex items-center font-medium ${category.textColor} group-hover:underline`}
                >
                  Shop Now
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories; 