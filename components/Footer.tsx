import React from 'react';
import { Facebook, Mail, Phone, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const LINKS = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Get Involved', href: '#involved' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Partners', href: '#partners' },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-3xl">SLRiseHub</h3>
            <p className="text-gray-300">
              Rising Minds. Rising Sierra Leone. Empowering the next generation through innovation and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="font-heading font-bold text-lg mb-6 text-brand-cyan">Quick Links</h4>
             <ul className="space-y-2">
               {LINKS.map((link) => (
                 <li key={link.label}>
                   <a href={link.href} className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center">
                     <ChevronRight className="w-4 h-4 mr-1 text-brand-cyan" /> {link.label}
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-cyan">Contact Info</h4>
            <div className="space-y-3">
              <a href="mailto:slrisehub@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 mr-3 text-brand-cyan group-hover:scale-110 transition-transform" />
                slrisehub@gmail.com
              </a>
              <a href="tel:+23279095969" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 mr-3 text-brand-cyan group-hover:scale-110 transition-transform" />
                +232 79 095969
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-cyan">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100068483297902" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SLRiseHub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;