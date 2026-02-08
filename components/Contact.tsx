import React, { useState } from 'react';
import { Mail, Phone, Facebook, MapPin, Send } from 'lucide-react';

const SIERRA_LEONE_DISTRICTS = [
  "Bo District",
  "Bombali District",
  "Bonthe District",
  "Falaba District",
  "Kailahun District",
  "Kambia District",
  "Karene District",
  "Kenema District",
  "Koinadugu District",
  "Kono District",
  "Moyamba District",
  "Port Loko District",
  "Pujehun District",
  "Tonkolili District",
  "Western Area Rural (Waterloo)",
  "Western Area Urban (Freetown)"
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    district: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({ name: '', email: '', district: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-royal mb-4">Contact Us</h2>
          <p className="text-gray-600">Have questions or want to partner with us? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-cyan h-full">
              <h3 className="font-heading font-bold text-xl text-brand-royal mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-royal">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <a href="mailto:slrisehub@gmail.com" className="text-gray-800 font-semibold hover:text-brand-cyan transition-colors break-all">
                      slrisehub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-royal">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-gray-800 font-semibold">+232 79 095969</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-royal">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Social Media</p>
                    <a href="https://www.facebook.com/profile.php?id=100068483297902" target="_blank" rel="noreferrer" className="text-gray-800 font-semibold hover:text-brand-cyan transition-colors">
                      SLRiseHub
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-royal">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Location</p>
                    <p className="text-gray-800 font-semibold">Sierra Leone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
              <h3 className="font-heading font-bold text-2xl text-brand-royal mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                   <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">District / Location</label>
                   <select
                      id="district"
                      name="district"
                      value={formState.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all bg-white"
                   >
                     <option value="" disabled>Select your district</option>
                     {SIERRA_LEONE_DISTRICTS.map((district) => (
                       <option key={district} value={district}>{district}</option>
                     ))}
                   </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-brand-royal text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center shadow-md"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;