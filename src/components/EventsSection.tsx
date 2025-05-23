import React, { useState } from 'react';
import EventCard from './EventCard';
import events from '../data/events';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const upcomingEvents = events.filter(event => event.category === 'upcoming');
  const pastEvents = events.filter(event => event.category === 'past');
  
  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Events</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We organize various events throughout the year to serve our community and develop leadership skills among our members.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === 'upcoming' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === 'past' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {activeTab === 'past' && (
          <div className="text-center mt-12">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 border border-blue-600 rounded transition-colors">
              View All Past Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;