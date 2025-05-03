import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600">
              I combine these technologies and skills to build powerful, effective websites for local businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.id} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'progressAnimation 1.5s ease-out forwards' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progressAnimation {
          from { width: 0; }
          to { width: var(--final-width); }
        }
      `}</style>
    </section>
  );
};

export default Skills;