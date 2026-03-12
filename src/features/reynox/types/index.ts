export type HeroSlide = {
  id: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  industry: string[];
};

export type ProjectCase = {
  id: string;
  name: string;
  industry: string;
  serviceType: string;
  clientName: string;
  clientRole: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: string;
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};
