import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface PuzzleCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  anchorId?: string;
}

export interface MembershipOption {
  title: string;
  description: string;
  price: string;
  benefits: string[];
  type: 'regular' | 'honorary';
}