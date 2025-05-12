"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Phone } from 'lucide-react';

const categories = ['All', 'Gaming', 'HP', 'Lenovo', 'Apple', 'Samsung', 'Accessories'];

const products = [
  {
    id: 1,
    name: 'HP Omen 17 Intel Core i7 9th Gen',
    category: 'Gaming',
    price: 'KSh 117,000',
    originalPrice: 'KSh 120,000',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    discount: '3% Off',
    specs: '16GB RAM, 1TB SSD, Nvidia GeForce RTX 2070 TI 6 GB Dedicated Graphics, 17-inch FHD Screen'
  },
  {
    id: 2,
    name: 'HP ZBook 15 G5 Intel Core i7 8th Gen',
    category: 'HP',
    price: 'KSh 68,000',
    originalPrice: 'KSh 75,000',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    discount: '9% Off',
    specs: '32GB RAM, 512GB SSD, 15.6 Inches FHD Display, 4GB GDDR5 NVIDIA Quadro P1000 Graphics'
  },
  {
    id: 3,
    name: 'Lenovo Yoga 9 Intel Core Ultra 7',
    category: 'Lenovo',
    price: 'KSh 185,000',
    originalPrice: null,
    image: 'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg',
    discount: 'New',
    specs: '16GB RAM, 1TB SSD, 14" WQXGA OLED Touch, Windows 11 Home'
  },
  {
    id: 4,
    name: 'MacBook Air M3 Chip',
    category: 'Apple',
    price: 'KSh 147,000',
    originalPrice: 'KSh 159,000',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
    discount: '8% Off',
    specs: '16GB RAM, 256GB SSD, 13.6" Display'
  },
  {
    id: 5,
    name: 'HP ProBook 440 G8 Notebook PC',
    category: 'HP',
    price: 'KSh 56,000',
    originalPrice: null,
    image: 'https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg',
    discount: null,
    specs: '11th Gen Intel Core i7-1165G7 Quad-core, 16 GB RAM, 512 GB SSD, 14.0 Inch FHD Screen'
  },
  {
    id: 6,
    name: 'Apple iPhone 12 Pro',
    category: 'Apple',
    price: 'KSh 54,000',
    originalPrice: 'KSh 78,000',
    image: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg',
    discount: '31% Off',
    specs: '256GB Storage, 6GB RAM, 12MP + 12MP + 12MP + TOF 3D LiDAR, 6.1 inches'
  },
  {
    id: 7,
    name: 'Samsung Galaxy A16',
    category: 'Samsung',
    price: 'KSh 21,000',
    originalPrice: null,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    discount: null,
    specs: '128GB Storage, 4GB RAM'
  },
  {
    id: 8,
    name: 'Lenovo ThinkPad P1 Gen 3',
    category: 'Lenovo',
    price: 'KSh 85,000',
    originalPrice: 'KSh 100,000',
    image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg',
    discount: '15% Off',
    specs: 'Intel Core i7 10th Gen, 32GB RAM, 512GB SSD, 15.6 Inch'
  },
  {
    id: 9,
    name: 'HP Envy x360 2-in-1',
    category: 'HP',
    price: 'KSh 96,000',
    originalPrice: 'KSh 100,000',
    image: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg',
    discount: '4% Off',
    specs: 'Intel Ultra 7-155U 12-Core, 16GB RAM, 512 SSD, Intel Graphics, 14" Display'
  }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="section-title">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Quality laptops, phones and accessories
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Product Image and Discount Badge */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}
                  </div>
                )}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-sm hover:text-primary transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    <Link href={`/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{product.specs}</p>
                </div>
                
                {/* Price */}
                <div className="mb-4 flex items-center">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex space-x-2">
                  <Link 
                    href={`/products/${product.id}`}
                    className="flex-1 btn-secondary text-sm text-center py-2"
                  >
                    View Details
                  </Link>
                  <button className="btn-primary flex items-center justify-center text-sm py-2 px-4">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Quick Shop Buttons */}
              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <button className="text-xs text-gray-600 hover:text-primary font-medium">
                  Quick View
                </button>
                <a href="tel:+254701542227" className="text-xs text-gray-600 hover:text-primary font-medium flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  Call to Order
                </a>
                <a href="https://wa.me/+254701542227" className="text-xs text-gray-600 hover:text-primary font-medium">
                  WhatsApp Order
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/shop" 
            className="btn-primary inline-block py-3 px-8 text-lg font-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;