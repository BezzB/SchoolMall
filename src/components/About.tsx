'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '5000+', label: 'Books Sold' },
    { value: '5', label: 'Store Branches' },
    { value: '100%', label: 'Customer Satisfaction' },
  ];

  const benefits = [
    'CBC & 8-4-4 curriculum textbooks for all grades',
    'Storybooks, revision guides and reference materials',
    'Full range of stationery and art supplies',
    'School bags and educational accessories',
    'Special bulk order discounts for schools',
    'Call, WhatsApp or visit our branches for service',
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg" 
                alt="Our bookshop with shelves of educational books" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg lg:w-60">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="section-title">About SchoolMall Bookshop</h2>
            <p className="text-gray-600 mb-6">
              SchoolMall Bookshop is Kenya's premier educational bookstore, offering quality textbooks, stationery, and learning materials for all educational levels and curriculum systems.
            </p>
            <p className="text-gray-600 mb-8">
              With branches in Utawala (0755544776), Ruai (0757951666), Embakasi (0110489300), Fedha (0798691986), and Greenspan (0100321966), we make it convenient to get all your educational supplies. Order online or visit our stores for personalized service.
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose SchoolMall</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop" 
                className="btn-primary inline-block text-center"
              >
                Shop Now
              </Link>
              <a 
                href="tel:+254793488207" 
                className="btn-secondary inline-block text-center"
              >
                Call Us: 0793 488207
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;