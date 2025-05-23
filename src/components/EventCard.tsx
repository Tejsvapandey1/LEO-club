import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '../data/events';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isPast = event.category === 'past';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${isPast ? 'opacity-90' : ''}`}>
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-56 object-cover"
        />
        {!isPast && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Upcoming
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {!isPast && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
            Register Now
          </button>
        )}
        {isPast && (
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors">
            View Gallery
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;