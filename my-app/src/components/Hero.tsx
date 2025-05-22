import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 flex items-center relative overflow-hidden"
    >
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-fadeIn">
            Helping Businesses <span className="text-blue-300">Thrive Online</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 opacity-0 animate-fadeIn animation-delay-300">
            I'm Salem Zenati, a web developer dedicated to creating beautiful, functional websites that help local businesses connect with more customers.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fadeIn animation-delay-600">
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              See My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-100 font-medium rounded-lg hover:bg-blue-800 hover:border-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;