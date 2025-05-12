import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Package, Truck, CreditCard } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hot Deals Heading */}
        <div className="text-center mb-12">
          <h2 className="section-title">Hot Deals</h2>
          <p className="text-lg text-gray-600">Special offers on our top products</p>
        </div>

        {/* Hot Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Deal 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative mb-4">
              <img 
                src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg" 
                alt="HP Omen 17 Gaming Laptop" 
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                3% Off
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">HP Omen 17 Gaming Laptop</h3>
            <p className="text-sm text-gray-600 mb-4">Intel Core i7 9th Gen, 16GB RAM, 1TB SSD, Nvidia GeForce RTX 2070</p>
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-primary">KSh 117,000</span>
              <span className="ml-2 text-sm text-gray-500 line-through">KSh 120,000</span>
            </div>
            <Link 
              href="/products/hp-omen-17" 
              className="btn-primary w-full flex items-center justify-center py-2 px-4"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Link>
          </div>

          {/* Deal 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative mb-4">
              <img 
                src="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg" 
                alt="Apple iPhone 12 Pro" 
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                31% Off
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Apple iPhone 12 Pro</h3>
            <p className="text-sm text-gray-600 mb-4">256GB Storage, 6GB RAM, 12MP + 12MP + 12MP + TOF 3D LiDAR, 6.1 inches</p>
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-primary">KSh 54,000</span>
              <span className="ml-2 text-sm text-gray-500 line-through">KSh 78,000</span>
            </div>
            <Link 
              href="/products/iphone-12-pro" 
              className="btn-primary w-full flex items-center justify-center py-2 px-4"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Link>
          </div>

          {/* Deal 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative mb-4">
              <img 
                src="https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg" 
                alt="Lenovo ThinkPad P1 Gen 3" 
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                15% Off
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lenovo ThinkPad P1 Gen 3</h3>
            <p className="text-sm text-gray-600 mb-4">Intel Core i7 10th Gen, 32GB RAM, 512GB SSD, 15.6 Inch</p>
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-primary">KSh 85,000</span>
              <span className="ml-2 text-sm text-gray-500 line-through">KSh 100,000</span>
            </div>
            <Link 
              href="/products/lenovo-thinkpad-p1" 
              className="btn-primary w-full flex items-center justify-center py-2 px-4"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Link>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-t border-b border-gray-200">
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">Expert assistance for all your tech needs</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">7 Days Return Policy</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure payment</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">We Offer Shipping</h3>
              <p className="text-gray-600 text-sm">Order and we deliver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner; 