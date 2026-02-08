import React from 'react';
import { ArrowRight, Handshake } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-brand-royal to-brand-dark text-white overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 rounded-l-full transform translate-x-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight max-w-4xl mx-auto">
          Empowering Sierra Leone’s Youth Through <span className="text-brand-cyan">Innovation</span>, Education & Media
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          SLRiseHub is a youth-centered empowerment and innovation hub building future-ready skills, leadership, and opportunities for young people across Sierra Leone.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=100068483297902" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center bg-brand-cyan text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Join SLRiseHub
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#partners" 
            className="flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-brand-royal transition-all duration-300"
          >
            <Handshake className="mr-2 w-5 h-5" />
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;