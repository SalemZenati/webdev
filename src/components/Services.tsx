import React from 'react';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  // Dynamic icon rendering based on icon name
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={36} className="text-blue-600 mb-4" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Specialized Services for Small Businesses
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            I offer comprehensive web solutions tailored specifically for local businesses looking to establish or improve their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-start">
                {renderIcon(service.icon)}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                >
                  Learn more
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;