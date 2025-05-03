import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Small Business Websites That Work
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Here are some of the websites I've built for local businesses that have helped them reach more customers and grow their revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal for expanded view */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600">
                {selectedProject.description}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard: React.FC<{ 
  project: Project;
  onClick: () => void;
}> = ({ project, onClick }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <h3 className="text-white text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              {project.description}
            </p>
            <button 
              onClick={onClick}
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;