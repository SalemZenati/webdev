import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold tracking-tight mb-4 block">
              <span className="text-blue-400">Salem</span> Zenati
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              I help businesses in our local area succeed online with beautiful, functional websites that attract customers and increase revenue.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@salemzenati.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Website Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">E-commerce Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Website Maintenance</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Content Management</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Salem Zenati. All rights reserved.</p>
          <p className="mt-1 text-sm">
            Helping businesses thrive in the digital world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;