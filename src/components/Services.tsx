import React from 'react';
import { Monitor, BookOpen, Headphones, Clock, Shield, Server } from 'lucide-react';
import { Link } from './ui/Link';

const services = [
  {
    icon: <Monitor size={24} />,
    title: 'Hardware Solutions',
    description: 'Computers, tablets, interactive displays, and other hardware tailored for educational environments.',
    link: '/services/hardware'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Educational Software',
    description: 'Learning management systems, educational applications, and software licenses for schools.',
    link: '/services/software'
  },
  {
    icon: <Headphones size={24} />,
    title: 'Technical Support',
    description: 'Comprehensive IT support and maintenance services for educational institutions.',
    link: '/services/support'
  },
  {
    icon: <Clock size={24} />,
    title: 'Training & Development',
    description: 'Professional development workshops for educators to effectively use technology tools.',
    link: '/services/training'
  },
  {
    icon: <Shield size={24} />,
    title: 'Security Solutions',
    description: 'Cybersecurity protocols and systems designed specifically for educational environments.',
    link: '/services/security'
  },
  {
    icon: <Server size={24} />,
    title: 'Infrastructure Setup',
    description: 'Network infrastructure, server setups, and cloud solutions for educational institutions.',
    link: '/services/infrastructure'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Educational Technology Services
          </h2>
          <p className="text-lg text-gray-600">
            SchoolMall offers a wide range of services designed specifically for the unique needs of educational institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href={service.link} 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn more
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
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
          >
            View All Services
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;