import React from 'react';
import selfieImg from '../assets/images/selfie.png';
import { Code, Monitor, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me!
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My name is Salem Zenati, I'm a software engineer and web developer with a passion for helping businesses in our community thrive in the digital world. I specialize in creating beautiful, functional websites that attract customers and drive growth.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I treat each website project with utmost care and perfection. I make sure that you are 100% satisfied with the results and end up with a website you are proud of.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My goal is simple: to help your business reach more customers, create a heightened sense of trust between your current customers and your business, and make a positive impact in the community.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <Code className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Clean Code</h3>
                  <p className="text-gray-600 text-sm">Fast-loading, secure websites built with best practices</p>
                </div>
              </div>
              <div className="flex items-start">
                <Monitor className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Modern Design</h3>
                  <p className="text-gray-600 text-sm">Beautiful, professional interfaces that reflect your brand</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Local Focus</h3>
                  <p className="text-gray-600 text-sm">Specialized in helping businesses in my community</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">Focused on websites that convert visitors to customers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
              <img
                src={selfieImg}
                alt="Web Developer at work"
                className="rounded-lg shadow-sm w-full h-auto max-w-full object-contain block"
                style={{ maxHeight: '600px' }}
              />
            </div>
            <div 
              className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-4 translate-y-4 -z-0"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;