import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
}

export interface Sector {
  name: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  location: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}
