import React from 'react';
import { Building2, Globe, Handshake, ChevronRight } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm">Collaborate With Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-2 mb-6">Partner for Impact</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We offer tailored partnership models for corporations, governments, and international NGOs. Join us in building a sustainable ecosystem for Sierra Leone's youth.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mt-1 bg-white/10 p-2 rounded-lg h-fit">
                   <Building2 className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl mb-1">Corporate CSR</h3>
                  <p className="text-blue-200 text-sm">Sponsor digital labs, hackathons, or scholarship funds aligned with your brand values.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mt-1 bg-white/10 p-2 rounded-lg h-fit">
                   <Globe className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl mb-1">International Development</h3>
                  <p className="text-blue-200 text-sm">Implement grant-funded programs with our boots-on-the-ground network and transparent reporting.</p>
                </div>
              </div>
            </div>

            <a 
              href="mailto:slrisehub@gmail.com?subject=Partnership Inquiry - SLRiseHub"
              className="mt-10 inline-flex items-center bg-brand-cyan text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-colors"
            >
              Request Partnership Deck <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
             <h3 className="font-heading font-bold text-2xl mb-6 text-center">Our Theory of Change</h3>
             <div className="space-y-4">
                <div className="bg-brand-royal/50 p-4 rounded-lg text-center border border-white/10">
                  <h4 className="font-bold text-brand-cyan mb-1">Input</h4>
                  <p className="text-xs text-blue-100">Funding, Mentorship, Technology</p>
                </div>
                <div className="flex justify-center"><div className="h-6 w-0.5 bg-white/20"></div></div>
                <div className="bg-brand-royal/50 p-4 rounded-lg text-center border border-white/10">
                  <h4 className="font-bold text-brand-cyan mb-1">Activity</h4>
                  <p className="text-xs text-blue-100">Bootcamps, Media Training, Incubation</p>
                </div>
                <div className="flex justify-center"><div className="h-6 w-0.5 bg-white/20"></div></div>
                <div className="bg-white text-brand-dark p-6 rounded-xl text-center shadow-xl">
                  <h4 className="font-bold text-brand-royal mb-1 text-lg">Impact</h4>
                  <p className="text-sm font-medium">Economic Growth, Good Governance, Employability</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;