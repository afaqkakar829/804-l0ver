
import React from 'react';
import { MILESTONES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">A Life of Purpose</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto italic">
            "It is not about where you start, but the vision that drives you forward."
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-100"></div>

          <div className="space-y-24">
            {MILESTONES.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Year Bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 md:-translate-y-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                        item.category === 'cricket' ? 'bg-blue-100 text-blue-700' :
                        item.category === 'philanthropy' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {item.category}
                      </span>
                      <span className="text-emerald-600 font-bold font-display text-xl">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
