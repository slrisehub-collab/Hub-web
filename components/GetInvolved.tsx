import React from 'react';
import { Heart } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <section id="involved" className="py-20 bg-brand-royal text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-brand-cyan blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
          <Heart className="w-8 h-8 text-brand-cyan" />
        </div>
        
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Get Involved</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Become a member, volunteer, partner, or sponsor our mission. Together, we can empower the next generation of Sierra Leonean leaders.
        </p>
        
        <a 
          href="mailto:slrisehub@gmail.com?subject=Get Involved - SLRiseHub"
          className="inline-block bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default GetInvolved;