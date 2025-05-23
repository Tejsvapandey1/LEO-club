import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About LEO Club VIT</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            LEO stands for Leadership, Experience, and Opportunity. We are a youth organization affiliated with Lions Clubs International, focused on developing leadership skills through community service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:-translate-y-2">
            <div className="text-blue-600 mb-4">
              <Award size={48} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To promote service activities among youth and to provide leadership development through community service. We aim to create a positive impact in our community while developing essential skills for the future.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:-translate-y-2">
            <div className="text-blue-600 mb-4">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in community and humanitarian service, empowering volunteers to serve their communities, meet humanitarian needs, encourage peace, and promote international understanding.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:-translate-y-2">
            <div className="text-blue-600 mb-4">
              <Heart size={48} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              We believe in integrity, accountability, excellence, diversity, empathy, cooperation, and innovation. These core values guide our initiatives and help us make a meaningful difference in the lives of those we serve.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="LEO Club members volunteering" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our History</h3>
              <p className="text-gray-600 mb-6">
                The LEO Club of Vellore Institute of Technology was established in 2010 with a vision to create a platform for students to contribute to society while developing their leadership skills. Since then, we have organized numerous events and initiatives that have touched thousands of lives.
              </p>
              <p className="text-gray-600">
                Over the years, we have partnered with various NGOs and organizations to extend our reach and maximize our impact. Our club has received multiple awards and recognitions for outstanding service projects and innovative initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;