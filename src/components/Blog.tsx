import React from 'react';
import { CalendarClock, User, ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

const blogPosts = [
  {
    id: 1,
    title: '5 Ways Technology is Transforming Education in 2025',
    excerpt: 'Discover the latest educational technology trends that are changing how students learn and teachers instruct in today\'s digital classrooms.',
    image: 'https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg',
    date: 'May 15, 2025',
    author: 'Sarah Johnson',
    category: 'EdTech Trends'
  },
  {
    id: 2,
    title: 'The Complete Guide to Setting Up Digital Classrooms',
    excerpt: 'Learn how to create effective digital learning environments that enhance student engagement and facilitate better learning outcomes.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    date: 'April 28, 2025',
    author: 'Michael Rodriguez',
    category: 'Digital Classrooms'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Educational Institutions',
    excerpt: 'Protect your school\'s digital assets and sensitive information with these essential cybersecurity strategies designed for educational settings.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    date: 'April 10, 2025',
    author: 'Jennifer Wilson',
    category: 'Security'
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600">
              Insights, guides, and news from the world of educational technology.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="mt-4 md:mt-0 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            View all articles 
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <Link href={`/blog/${post.id}`} className="block overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center mr-4">
                    <CalendarClock size={16} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center">
                    <User size={16} className="mr-1" />
                    {post.author}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read More 
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100">
                Get the latest educational technology news, product updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="md:w-1/3">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-blue-800 hover:bg-blue-900 px-5 py-3 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;