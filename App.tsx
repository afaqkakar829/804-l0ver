
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { QUOTES } from './constants';
import { Menu, X, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className={`text-2xl font-bold font-display transition-colors ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
            IMRAN KHAN
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-widest">
            {['Journey', 'Stats', 'Quotes', 'Ask AI'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-emerald-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col gap-4 shadow-xl animate-fade-in-down">
            {['Journey', 'Stats', 'Quotes', 'Ask AI'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 font-bold py-2 px-4 hover:bg-emerald-50 rounded-lg flex items-center justify-between"
              >
                {item} <ChevronRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Timeline />
        <Stats />
        
        {/* Quotes Section */}
        <section id="quotes" className="py-24 bg-white overflow-hidden relative">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[300px] font-black text-emerald-50 select-none opacity-50 font-display">
            "
          </div>
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {QUOTES.map((quote, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                  <p className="text-xl font-medium text-slate-800 mb-6 leading-relaxed italic">
                    "{quote.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-0.5 bg-emerald-600 group-hover:w-12 transition-all"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      {quote.context}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ChatBot />
      </main>

      <Footer />
    </div>
  );
};

export default App;
