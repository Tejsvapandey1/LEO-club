import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Leadership Through Service
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          LEO Club of Vellore Institute of Technology empowering youth through service, leadership, and community impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105 font-medium flex items-center justify-center gap-2"
          >
            Learn More <ArrowRight size={18} />
          </a>
          <a 
            href="#events" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105 font-medium"
          >
            Upcoming Events
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;