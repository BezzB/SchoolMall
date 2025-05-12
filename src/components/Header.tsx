'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    'Gaming', 'EliteBook', 'Lenovo', 'X360', 'Omen', 
    'Envy', 'Pavilion', 'ProBook', 'Victus', 'MacBook'
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/Schoolmall-logo.jpeg"
              alt="SchoolMall Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                aria-expanded={isUserMenuOpen}
              >
                <User className="h-5 w-5" />
                <span>Hello, Sign In</span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity">
                  <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Login
                  </Link>
                  <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Register
                  </Link>
                  <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Account
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orders
                  </Link>
                  <Link href="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Wishlist
                  </Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-t border-gray-200 py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-6 overflow-x-auto pb-1">
              <Link href="/" className="font-medium text-gray-700 hover:text-primary whitespace-nowrap transition-colors">
                Home
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category}
                  href={`/category/${category.toLowerCase()}`} 
                  className="font-medium text-gray-700 hover:text-primary whitespace-nowrap transition-colors"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/Schoolmall-logo.jpeg"
                alt="SchoolMall Logo"
                className="h-10 w-auto"
              />
            </div>
            
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="space-y-4">
              <Link
                href="/"
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="block font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <Link
                  href="/login"
                  className="block font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login / Register
                </Link>
                <Link
                  href="/cart"
                  className="block font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;