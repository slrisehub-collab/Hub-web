import React from 'react';
import { Monitor, Mic, UserCheck, Rocket, Cpu, HeartHandshake, LucideIcon } from 'lucide-react';
import { ProgramItem } from '../types';

const PROGRAMS: ProgramItem[] = [
  {
    title: 'Digital Skills & ICT',
    description: 'Practical computer, internet, and productivity skills.',
    audience: 'Youths & students',
    outcome: 'Improved employability',
    icon: Monitor
  },
  {
    title: 'Media & Journalism',
    description: 'Media literacy, communication, and ethical storytelling.',
    audience: 'Aspiring journalists',
    outcome: 'Informed youth voices',
    icon: Mic
  },
  {
    title: 'Leadership & Public Speaking',
    description: 'Confidence, civic engagement, and leadership training.',
    audience: 'Young leaders',
    outcome: 'Community impact',
    icon: UserCheck
  },
  {
    title: 'Entrepreneurship & Innovation',
    description: 'Idea development and startup readiness.',
    audience: 'Young entrepreneurs',
    outcome: 'Job creation',
    icon: Rocket
  },
  {
    title: 'AI & Emerging Tech',
    description: 'Awareness and responsible use of AI and new technologies.',
    audience: 'Tech-curious youth',
    outcome: 'Future-ready skills',
    icon: Cpu
  },
  {
    title: 'Community Outreach',
    description: 'Inclusion-focused school and rural programs.',
    audience: 'Underserved communities',
    outcome: 'Digital inclusion',
    icon: HeartHandshake
  },
];

const ProgramCard: React.FC<{ program: ProgramItem }> = ({ program }) => (
  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group">
    <div className="w-14 h-14 bg-brand-gray rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-colors text-brand-royal">
      <program.icon className="w-8 h-8" />
    </div>
    <h3 className="font-heading font-bold text-xl text-brand-royal mb-3">{program.title}</h3>
    <p className="text-gray-600 mb-6 min-h-[48px]">{program.description}</p>
    
    <div className="space-y-2 border-t border-gray-100 pt-4">
      <div className="flex items-start text-sm">
        <span className="font-semibold text-brand-royal w-24">Target:</span>
        <span className="text-gray-600">{program.audience}</span>
      </div>
      <div className="flex items-start text-sm">
        <span className="font-semibold text-brand-royal w-24">Impact:</span>
        <span className="text-gray-600">{program.outcome}</span>
      </div>
    </div>
  </div>
);

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-cyan font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-royal mt-2 mb-4">Programs & Initiatives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse range of programs aims to equip the next generation with the tools they need to succeed in a digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;