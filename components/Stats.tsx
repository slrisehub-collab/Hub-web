import React from 'react';
import { Users, BookOpen, HandHeart } from 'lucide-react';
import { StatItem } from '../types';

const STATS: StatItem[] = [
  { value: '1,000+', label: 'Youths Reached', icon: Users },
  { value: '20+', label: 'Training Programs', icon: BookOpen },
  { value: '15+', label: 'Community Partnerships', icon: HandHeart },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-gray py-12 -mt-10 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                {stat.icon && <stat.icon className="w-8 h-8 text-brand-royal" />}
              </div>
              <h3 className="font-heading font-bold text-4xl text-brand-cyan mb-2">{stat.value}</h3>
              <p className="font-medium text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;