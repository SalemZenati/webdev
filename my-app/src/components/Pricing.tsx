import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Choose the perfect plan for your business. Get a professional website that drives results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-Time Payment Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">One-Time Payment</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$300-500</span>
                <span className="text-gray-600 ml-2">one-time</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for businesses who prefer a single upfront payment for their website. Pricing depends on complexity and features.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check className="text-green-500 mr-2" size={20} />
                  5-page professional website
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-green-500 mr-2" size={20} />
                  Mobile-responsive design
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-green-500 mr-2" size={20} />
                  SEO optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-green-500 mr-2" size={20} />
                  Contact form integration
                </li>
                
                <li className="flex items-center text-gray-600">
                  <X className="text-red-500 mr-2" size={20} />
                  Ongoing maintenance
                </li>
                <li className="flex items-center text-gray-600">
                  <X className="text-red-500 mr-2" size={20} />
                  24/7 support
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-auto block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Monthly Subscription Plan */}
          <div className="bg-blue-900 rounded-lg shadow-lg overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Monthly Subscription</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$50</span>
                <span className="text-blue-200 ml-2">/month</span>
              </div>
              <p className="text-blue-200 mb-6">
                Best value with $0 down and complete website management.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  5-page professional website
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  Mobile-responsive design
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  SEO optimization
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  Contact form integration
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  Unlimited edits & updates
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  24/7 priority support
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="text-green-400 mr-2" size={20} />
                  Hosting included
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-auto block w-full bg-white text-blue-900 text-center py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All pricing plans are 100% negotiable. <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact me</a> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;