import React from 'react';
import { SDGItem } from '../types';

const SDGS: SDGItem[] = [
  { id: 4, title: 'Quality Education', description: 'Ensuring inclusive and equitable quality education and promoting lifelong learning.', color: '#C5192D' },
  { id: 8, title: 'Decent Work', description: 'Promoting sustained, inclusive and sustainable economic growth and decent work for all.', color: '#A21942' },
  { id: 9, title: 'Industry & Innovation', description: 'Building resilient infrastructure, promoting inclusive industrialization and fostering innovation.', color: '#FD6925' },
  { id: 10, title: 'Reduced Inequalities', description: 'Reducing inequality within and among countries by empowering underserved youth.', color: '#DD1367' },
];

const SDGs: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
           <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Global Goals</span>
           <h2 className="font-heading font-bold text-2xl text-brand-royal mt-1">Alignment with UN SDGs</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {SDGS.map((sdg) => (
            <div 
              key={sdg.id} 
              className="group relative overflow-hidden rounded-lg p-6 text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: sdg.color }}
            >
              <div className="absolute top-0 right-0 opacity-20 font-bold text-8xl -mr-4 -mt-4 font-heading">
                {sdg.id}
              </div>
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-lg mb-2 leading-tight">
                  {sdg.title}
                </h3>
                <p className="text-xs opacity-90 leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGs;