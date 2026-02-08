import React from 'react';
import { Users, BookOpen, HandHeart, Map, PieChart, TrendingUp } from 'lucide-react';

const DISTRICTS = [
  { name: 'Western Area Urban', percent: 40 },
  { name: 'Western Area Rural', percent: 15 },
  { name: 'Bo District', percent: 8 },
  { name: 'Bombali District', percent: 5 },
  { name: 'Kenema District', percent: 5 },
  { name: 'Port Loko District', percent: 4 },
  { name: 'Kono District', percent: 3 },
  { name: 'Moyamba District', percent: 3 },
  { name: 'Kambia District', percent: 3 },
  { name: 'Koinadugu District', percent: 2 },
  { name: 'Kailahun District', percent: 2 },
  { name: 'Pujehun District', percent: 2 },
  { name: 'Tonkolili District', percent: 2 },
  { name: 'Bonthe District', percent: 2 },
  { name: 'Falaba District', percent: 2 },
  { name: 'Karene District', percent: 2 },
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 bg-brand-gray -mt-10 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
           <h2 className="font-heading font-bold text-3xl text-brand-royal flex items-center justify-center">
             <TrendingUp className="mr-3 text-brand-cyan" />
             Live Impact Dashboard
           </h2>
           <p className="text-gray-600 mt-2">Real-time data on our reach and effectiveness across Sierra Leone.</p>
        </div>

        {/* Big Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { value: '1,000+', label: 'Youths Empowered', icon: Users },
            { value: '20+', label: 'Training Programs', icon: BookOpen },
            { value: '15+', label: 'Global Partners', icon: HandHeart },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 border-b-4 border-brand-cyan hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 p-3 rounded-full text-brand-royal">
                {stat.icon && <stat.icon className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-brand-royal">{stat.value}</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Demographics Card */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="font-heading font-bold text-xl text-brand-royal mb-6 flex items-center">
              <PieChart className="mr-2 text-brand-cyan w-5 h-5" /> Gender Balance
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>Female Participation</span>
                  <span className="text-brand-cyan">52%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-brand-cyan h-3 rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>Male Participation</span>
                  <span className="text-brand-royal">48%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-brand-royal h-3 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
               <div className="flex justify-between items-center text-sm text-gray-500">
                 <span>Average Age</span>
                 <span className="font-bold text-gray-800">18 - 25 Years</span>
               </div>
            </div>
          </div>

          {/* Regional Reach Card */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="font-heading font-bold text-xl text-brand-royal mb-6 flex items-center">
              <Map className="mr-2 text-brand-cyan w-5 h-5" /> Regional Reach
            </h3>
            
            <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              {DISTRICTS.map((region) => (
                <div key={region.name} className="relative">
                  <div className="flex justify-between text-sm font-medium mb-1 z-10 relative">
                    <span>{region.name}</span>
                    <span className="text-gray-500">{region.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-sm h-2">
                    <div className="bg-brand-royal h-2 rounded-sm opacity-80" style={{ width: `${region.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-400 italic text-center">
              * Active engagement across all districts
            </p>
          </div>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}</style>
    </section>
  );
};

export default Impact;