import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { MediaItem } from '../types';

const NEWS_ITEMS: MediaItem[] = [
  {
    title: 'Launching the Digital Skills Bootcamp 2024',
    date: 'Oct 12, 2024',
    category: 'Education',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    title: 'Youth Leadership Summit: Voices of Freetown',
    date: 'Sept 25, 2024',
    category: 'Events',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    title: 'Partnering with Local Schools for AI Literacy',
    date: 'Aug 10, 2024',
    category: 'Partnership',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

const Media: React.FC = () => {
  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-royal mb-4">Media & News</h2>
            <p className="text-gray-600 text-lg">
              Latest updates, events, photos, videos, and press releases from SLRiseHub activities and impact across Sierra Leone.
            </p>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=100068483297902"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-royal font-semibold flex items-center hover:text-brand-cyan transition-colors"
          >
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md aspect-video">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {item.date}</span>
                <span className="flex items-center"><Tag className="w-3 h-3 mr-1" /> News</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-royal group-hover:text-brand-cyan transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;