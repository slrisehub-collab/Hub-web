import React from 'react';
import { Briefcase, ArrowUpRight, Clock, MapPin, Mail } from 'lucide-react';
import { OpportunityItem } from '../types';

const OPPORTUNITIES: OpportunityItem[] = [
  {
    title: 'Digital Marketing Fellowship 2024',
    type: 'Internship',
    deadline: 'Nov 15, 2024',
    location: 'Freetown (Hybrid)',
    tags: ['Marketing', 'Social Media']
  },
  {
    title: 'Women in Tech Scholarship',
    type: 'Scholarship',
    deadline: 'Dec 01, 2024',
    location: 'Remote / Online',
    tags: ['Coding', 'Women Empowerment']
  },
  {
    title: 'Community Leadership Bootcamp',
    type: 'Training',
    deadline: 'Rolling Basis',
    location: 'Bo & Kenema',
    tags: ['Leadership', 'Civic Duty']
  }
];

const Opportunities: React.FC = () => {
  return (
    <section id="opportunities" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-cyan font-semibold tracking-wider uppercase text-sm">For Youth</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-royal mt-2">Opportunity Board</h2>
            <p className="text-gray-600 mt-4">
              Curated scholarships, internships, and training programs to accelerate your career.
            </p>
          </div>
          <a 
            href="mailto:slrisehub@gmail.com?subject=Inquiry about Opportunities" 
            className="hidden md:flex items-center text-brand-royal font-bold hover:text-brand-cyan transition-colors"
          >
            Inquire About Opportunities <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OPPORTUNITIES.map((opp, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-cyan transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
                  opp.type === 'Scholarship' ? 'bg-purple-100 text-purple-700' :
                  opp.type === 'Internship' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {opp.type}
                </span>
                <Briefcase className="w-5 h-5 text-gray-300 group-hover:text-brand-cyan transition-colors" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-brand-royal mb-2 group-hover:text-brand-cyan transition-colors">
                {opp.title}
              </h3>
              
              <div className="space-y-2 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" /> Deadline: {opp.deadline}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> {opp.location}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {opp.tags.map(tag => (
                  <span key={tag} className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded border border-gray-200">
                    #{tag}
                  </span>
                ))}
              </div>

              <a 
                href={`mailto:slrisehub@gmail.com?subject=Application: ${opp.title}`}
                className="block text-center w-full py-2 rounded-lg border-2 border-brand-royal text-brand-royal font-bold hover:bg-brand-royal hover:text-white transition-all text-sm flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" /> Apply via Email
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="mailto:slrisehub@gmail.com?subject=Inquiry about Opportunities" className="inline-block bg-brand-cyan text-brand-dark font-bold py-3 px-6 rounded-lg">
            Inquire About Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;