export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  image: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}