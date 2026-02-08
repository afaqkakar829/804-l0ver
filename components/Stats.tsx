
import React from 'react';
import { CRICKET_STATS } from '../constants';
import { Trophy, Users, Heart } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CRICKET_STATS.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="mb-6 inline-flex p-4 bg-emerald-800 rounded-2xl group-hover:scale-110 transition-transform">
                {i === 0 ? <Trophy className="w-8 h-8 text-emerald-400" /> : i === 1 ? <Users className="w-8 h-8 text-emerald-400" /> : <Heart className="w-8 h-8 text-emerald-400" />}
              </div>
              <h3 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</h3>
              <div className="text-5xl font-bold font-display mb-2">{stat.value}</div>
              <p className="text-emerald-100/60 font-medium italic">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
