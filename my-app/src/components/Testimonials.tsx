import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-blue-200">
            Don't just take my word for it - hear from my clients who've seen real results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-blue-800 rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-600"
                      />
                      <div className="md:ml-4 mt-4 md:mt-0 text-center md:text-left">
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-blue-300">{testimonial.business}</p>
                      </div>
                    </div>
                    <blockquote className="text-lg italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-white' : 'bg-blue-600 hover:bg-blue-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;