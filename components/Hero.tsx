
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
      {/* Background with parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountains of Pakistan" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/50 to-emerald-950"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-emerald-500/30">
          Cricketer • Philanthropist • Leader
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
          Imran Khan <br/> 
          <span className="text-emerald-400">The Legend's Legacy</span>
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100/80 mb-10 leading-relaxed font-light">
          A journey from the cricket fields of Lahore to the pinnacle of world leadership. 
          A story of grit, resilience, and an unwavering vision for a New Pakistan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#journey" 
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95"
          >
            Explore His Journey
          </a>
          <a 
            href="#ask-kaptaan" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-md border border-white/20 active:scale-95"
          >
            Ask the Kaptaan AI
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7-7-7m14-8l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
