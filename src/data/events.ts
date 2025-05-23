export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: 'upcoming' | 'past';
  tags: string[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Blood Donation Camp",
    date: "June 15, 2025",
    location: "VIT Main Campus",
    description: "Join us for our annual blood donation drive in partnership with the Red Cross. Your single donation can save up to three lives. Registration is required for all donors.",
    image: "https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: 'upcoming',
    tags: ['Health', 'Community Service']
  },
  {
    id: 2,
    title: "Tech for Good Hackathon",
    date: "July 8-10, 2025",
    location: "Technology Tower, VIT",
    description: "A 48-hour coding marathon where participants develop innovative tech solutions addressing social challenges. Open to all VIT students with prizes worth ₹50,000.",
    image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1600",
    category: 'upcoming',
    tags: ['Technology', 'Innovation']
  },
  {
    id: 3,
    title: "Environmental Awareness Workshop",
    date: "May 22, 2025",
    location: "Amphitheater, VIT",
    description: "Learn about sustainable practices and how small changes can make a big difference. The workshop includes hands-on activities and a campus clean-up initiative.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: 'upcoming',
    tags: ['Environment', 'Education']
  },
  {
    id: 4,
    title: "Rural School Outreach Program",
    date: "April 5, 2025",
    location: "Vellore District",
    description: "We'll be visiting rural schools to conduct educational activities, distribute school supplies, and inspire young minds. Transportation will be provided for volunteers.",
    image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: 'upcoming',
    tags: ['Education', 'Outreach']
  },
  {
    id: 5,
    title: "Winter Clothes Donation Drive",
    date: "January 10, 2025",
    location: "Student Activity Center",
    description: "We collected and distributed winter clothing to homeless shelters across Vellore. Over 500 items were donated, providing warmth to those in need during the winter months.",
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: 'past',
    tags: ['Charity', 'Community Service']
  },
  {
    id: 6,
    title: "Leadership Summit 2024",
    date: "February 25, 2025",
    location: "Convention Center, VIT",
    description: "A day-long conference featuring inspiring speakers, interactive workshops, and networking opportunities. The event focused on developing leadership skills for social impact.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: 'past',
    tags: ['Leadership', 'Development']
  }
];

export default events;