
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white font-display mb-6">Imran Khan</h2>
            <p className="text-lg mb-8 leading-relaxed max-w-md italic">
              "I don't think I can ever be defeated by anyone as long as I don't defeat myself."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"><span className="sr-only">Facebook</span>FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"><span className="sr-only">Twitter</span>TW</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"><span className="sr-only">Instagram</span>IG</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Initiatives</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Shaukat Khanum Hospital</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Namal University</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Ehsas Program</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Clean Green Pakistan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#journey" className="hover:text-emerald-400 transition-colors">Timeline</a></li>
              <li><a href="#ask-kaptaan" className="hover:text-emerald-400 transition-colors">Ask AI</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cricket Stats</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Political Manifestos</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest">
          <p>© 2024 Legend's Journey. All Rights Reserved.</p>
          <p className="text-slate-500">A Digital Tribute Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
