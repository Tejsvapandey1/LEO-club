import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import type { BoardMember } from '../data/boardMembers';

interface BoardMemberCardProps {
  member: BoardMember;
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-blue-200">{member.position}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          {member.socialLinks.linkedin && (
            <a 
              href={member.socialLinks.linkedin}
              className="text-gray-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a 
              href={member.socialLinks.twitter}
              className="text-gray-500 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.socialLinks.instagram && (
            <a 
              href={member.socialLinks.instagram}
              className="text-gray-500 hover:text-pink-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardMemberCard;