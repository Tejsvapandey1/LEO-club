import React from 'react';
import BoardMemberCard from './BoardMemberCard';
import boardMembers from '../data/boardMembers';

const BoardSection = () => {
  return (
    <section id="board" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Board</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated board members work tirelessly to organize impactful events and initiatives.
            Each brings unique skills and perspectives to help us serve our community better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map(member => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSection;