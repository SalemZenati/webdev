import breatheImg from '../assets/images/breathe.png'
import greetingsImg from '../assets/images/greetings.png'
import portfolioImg from '../assets/images/portfolio.png'
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Breathe",
    description: "Created a complete website for students at San Jose State University to learn about meditation and mindfulness.",
    image: breatheImg,
    link: ""
  },
  {
    id: 2,
    title: "Greetings Social Networking Website",
    description: "A social networking website that allows users to create profiles, post updates, and connect with friends.",
    image: greetingsImg,
    link: "#"
  },
  {
    id: 3,
    title: "Power Washing Company Website",
    description: "A professional website mockup for a power washing company to showcase their services and attract new customers.",
    image: portfolioImg,
    link: "#"
  }
];
