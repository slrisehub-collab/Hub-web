import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export interface ProgramItem {
  title: string;
  description: string;
  audience: string;
  outcome: string;
  icon: LucideIcon;
}

export interface MediaItem {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface OpportunityItem {
  title: string;
  type: 'Scholarship' | 'Internship' | 'Training' | 'Grant';
  deadline: string;
  location: string;
  tags: string[];
}

export interface SDGItem {
  id: number;
  title: string;
  description: string;
  color: string;
  icon?: LucideIcon;
}
