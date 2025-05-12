import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <img 
                src="/images/Schoolmall-logo.jpeg" 
                alt="SchoolMall Logo" 
                className="h-12 w-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-400 mb-4">
              School Mall
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-300" />
                <span>Nairobi, Bazaar Plaza, 7th floor Crystal Suite 714</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <a href="tel:+254701542227" className="hover:text-white transition-colors">0701 542227</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <a href="mailto:info@schoolmall.co.ke" className="hover:text-white transition-colors">info@schoolmall.co.ke</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span>
                <a href="https://www.schoolmall.co.ke" className="hover:text-white transition-colors">www.schoolmall.co.ke</a>
              </li>
              <li>
                <span className="block text-gray-300">Mon - Sat / 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
                Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/refunds-returns" className="hover:text-white transition-colors">
                  Refunds & returns
                </Link>
              </li>
              <li>
                <Link href="/shipping-delivery" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
                Information
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
                My Account
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  My Shop
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  My Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Checkout
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="hover:text-white transition-colors">
                  Tracking Order
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-8 border-t border-gray-800 pt-10">
          <div>
            <h4 className="text-base font-semibold mb-3">FEATURED</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg" 
                  alt="Featured Product" 
                  className="w-16 h-12 object-cover rounded mr-3"
                />
                <div>
                  <p className="text-sm">HP ZBOOK 15 G6 Mobile Workstation with Intel Core i9</p>
                  <p className="text-primary font-medium text-sm mt-1">KSh 86,000</p>
                </div>
              </li>
              <li className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg" 
                  alt="Featured Product" 
                  className="w-16 h-12 object-cover rounded mr-3"
                />
                <div>
                  <p className="text-sm">HP ZBook 15 G6 with Intel Core i7</p>
                  <p className="text-primary font-medium text-sm mt-1">KSh 62,000 <span className="line-through text-gray-500 text-xs">KSh 70,000</span></p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3">RECENT</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg" 
                  alt="Recent Product" 
                  className="w-16 h-12 object-cover rounded mr-3"
                />
                <div>
                  <p className="text-sm">Lenovo Yoga 9 14IMH9 2-in-1 Intel Core Ultra 7</p>
                  <p className="text-primary font-medium text-sm mt-1">KSh 185,000</p>
                </div>
              </li>
              <li className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg" 
                  alt="Recent Product" 
                  className="w-16 h-12 object-cover rounded mr-3"
                />
                <div>
                  <p className="text-sm">Lenovo ThinkBook 15 Gen 2 Intel Core i5</p>
                  <p className="text-primary font-medium text-sm mt-1">KSh 70,000</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3">ON SALE</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg" 
                  alt="On Sale Product" 
                  className="w-16 h-12 object-cover rounded mr-3"
                />
                <div>
                  <p className="text-sm">Apple iPad Pro 12, M2 Chip, 8GB RAM, 512GB</p>
                  <p className="text-primary font-medium text-sm mt-1">KSh 185,000 <span className="line-through text-gray-500 text-xs">KSh 235,000</span></p>
                </div>
              </li>
              <li className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg" 
                  alt="On Sale Product" 
                  className="w-16 h-12 object-cover rounded mr-3"
                />
                <div>
                  <p className="text-sm">MacBook Air M3 Chip 16GB RAM 256GB SSD</p>
                  <p className="text-primary font-medium text-sm mt-1">KSh 147,000 <span className="line-through text-gray-500 text-xs">KSh 159,000</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyrights */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-gray-400">School Mall © {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div>
              <img 
                src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" 
                alt="Payment Options" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;