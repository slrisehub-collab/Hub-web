import React from 'react';
import { CheckCircle2, Target, Eye, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-royal mb-4">About SLRiseHub</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We work at the intersection of education, digital skills, media, leadership, and community development to unlock the potential of young people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="font-heading font-bold text-2xl text-brand-royal mb-6 flex items-center">
              <Target className="mr-3 text-brand-cyan" /> Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              To empower young people in Sierra Leone through education, digital skills, media literacy, innovation, leadership, and entrepreneurship, enabling sustainable national development.
            </p>

            <h3 className="font-heading font-bold text-2xl text-brand-royal mb-6 flex items-center">
              <Eye className="mr-3 text-brand-cyan" /> Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digitally inclusive Sierra Leone where empowered young people drive innovation, good governance, economic growth, and sustainable development.
            </p>
          </div>
          
          <div className="bg-brand-gray p-8 rounded-2xl border-l-4 border-brand-cyan">
             <h3 className="font-heading font-bold text-2xl text-brand-royal mb-6">Core Values</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Empowerment', 'Innovation', 'Education', 'Integrity', 'Inclusion', 'Sustainability'].map((value) => (
                 <li key={value} className="flex items-center text-gray-700 font-medium">
                   <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2" />
                   {value}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-royal mb-6 text-center">Our History & Impact</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                SLRiseHub was founded in response to a growing and urgent need to bridge the digital, educational, and opportunity gap facing young people in Sierra Leone. As the global world rapidly transitioned toward technology, digital media, and artificial intelligence, many young people—particularly in underserved communities—were left without access to relevant skills, quality training, and mentorship.
              </p>
              <p>
                What began as a small youth-led initiative focused on digital literacy and media awareness soon evolved into a broader empowerment platform. The founders recognized that sustainable development requires more than access to technology—it demands critical thinking, leadership, creativity, ethical media engagement, and innovation.
              </p>
              <p className="font-semibold text-brand-royal">
                Today, SLRiseHub stands as a trusted youth empowerment and innovation hub, nurturing skilled, confident, and socially responsible young people.
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border border-blue-100 flex items-start">
               <Globe2 className="w-12 h-12 text-brand-cyan mr-4 flex-shrink-0" />
               <div>
                 <h4 className="font-heading font-bold text-lg text-brand-royal mb-2">Why It Matters</h4>
                 <p className="text-gray-600 text-sm md:text-base">
                   With one of the youngest populations in Africa, Sierra Leone’s future depends on how well its youth are prepared today. SLRiseHub directly addresses skills gaps, digital exclusion, and limited opportunities.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;