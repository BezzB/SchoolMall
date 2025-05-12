'use client';

import React from 'react';
import Link from 'next/link';

const brands = [
  {
    id: 1,
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png',
    link: '/brands/hp'
  },
  {
    id: 2,
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png',
    link: '/brands/apple'
  },
  {
    id: 3,
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
    link: '/brands/samsung'
  },
  {
    id: 4,
    name: 'Lenovo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png',
    link: '/brands/lenovo'
  },
  {
    id: 5,
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png',
    link: '/brands/dell'
  },
  {
    id: 6,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
    link: '/brands/microsoft'
  }
];

const BrandsShowcase = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-50 rounded-full opacity-20"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-gray-50 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Top Brands We Carry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the world's leading technology brands to bring you the best products
          </p>
        </div>
        
        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link 
              key={brand.id} 
              href={brand.link}
              className="flex items-center justify-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="mt-3 font-medium text-gray-700 group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Text Highlight */}
        <div className="text-center mt-12">
          <Link 
            href="/brands" 
            className="inline-block text-primary font-semibold hover:underline transition-colors"
          >
            View All Brands →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase; 