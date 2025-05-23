import monish from "../assets/Monish.png";
import aadarsh from "../assets/aadharsh.png";
import akshaya from "../assets/akshaya.png";
import aastha from "../assets/aashtha.png";
import hari from "../assets/harishprasad.png";
import kabya from "../assets/kabya.png";
import krish from "../assets/krish.png";
import manvi from "../assets/manvi.png";
import laasya from "../assets/laasya.png";
import ojhal from "../assets/ojhal.png";
import prashastha from "../assets/prashastha.png";
import pritika from "../assets/pritika.png";
import rishab from "../assets/rishab.png";
import sanju from "../assets/sanjushree.png";
import spandan from "../assets/spandan.png";
import varsha from "../assets/varsha.png";

export interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Rishab Gupta",
    position: "Co-Secretary",
    image: rishab,
    bio: "Rishab is a proactive Computer Science student known for his leadership and problem-solving skills. He has organized numerous successful workshops and seminars.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 2,
    name: "Spandan",
    position: "General Secretary",
    image: spandan,
    bio: "Spandan is an efficient coordinator and an advocate for student involvement. His vision and coordination skills ensure that the club runs smoothly.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 3,
    name: "Sai Krish",
    position: "Events Head",
    image: krish,
    bio: "Sai is known for executing events with creativity and precision. His passion lies in creating memorable experiences for all participants.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "Varsha Vinayan",
    position: "HR Manager",
    image: varsha,
    bio: "Varsha specializes in team dynamics and conflict resolution. She fosters a supportive environment within the club to ensure every member thrives.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 5,
    name: "Manvi Laharia",
    position: "Vice Chairperson",
    image: manvi,
    bio: "Manvi leads initiatives with strategic thinking and creative flair. She is instrumental in shaping the club's mission and outreach programs.",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 6,
    name: "Srii Aadharsh",
    position: "Publicity Head",
    image: aadarsh,
    bio: "Aadharsh is the creative mind behind the club’s outreach. He excels in designing and executing campaigns that grow the club’s visibility.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 7,
    name: "Akshaya Anand",
    position: "Publicity Coordinator",
    image: akshaya,
    bio: "Akshaya supports the publicity team with her strong writing and digital media skills. She ensures timely and engaging communication.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 8,
    name: "Prashastha",
    position: "Editorial Coordinator",
    image: prashastha,
    bio: "Prashastha is a meticulous editor who ensures clarity and coherence in all club publications. She helps give the club a strong voice.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 9,
    name: "Kabya Srivastava",
    position: "Editorial Head",
    image: kabya,
    bio: "Kabya brings stories to life with her words. As Editorial Head, she curates all official content, maintaining the club’s tone and message.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 10,
    name: "Pritika Vijaykumar",
    position: "Logistics Coordinator",
    image: pritika,
    bio: "Pritika ensures every club event is backed by thorough planning. She manages logistics with precision and adaptability.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 11,
    name: "Aastha Kale",
    position: "Management Coordinator",
    image: aastha,
    bio: "Aastha is the organizational engine of the club. Her detail-oriented nature helps keep club activities on track and efficient.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 12,
    name: "HariPrasad",
    position: "Creativity Head",
    image: hari,
    bio: "Hari brings visual storytelling to life. From posters to event themes, his artistic vision sets the tone for the club’s identity.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 13,
    name: "Ojhal Arora",
    position: "Creativity Head",
    image: ojhal,
    bio: "Ojhal’s creativity shines in every project she undertakes. Her imaginative designs help create vibrant and compelling club visuals.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 14,
    name: "Monish N S",
    position: "Chairperson",
    image: monish,
    bio: "Monish leads the team with vision and determination. His strategic insights and people-first mindset guide the club’s growth.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 15,
    name: "Sanjusree K",
    position: "Design Head",
    image: sanju,
    bio: "Sanjusree crafts the visual essence of the club. Her attention to detail ensures all materials align with the brand’s identity.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 16,
    name: "Laasya Kasturi",
    position: "Design Coordinator",
    image: laasya,
    bio: "Laasya assists in the creation of high-quality designs that capture the spirit of every club initiative with flair and elegance.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  }
];




export default boardMembers;
