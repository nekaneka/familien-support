import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Familie die zusammen hält" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-sky-100/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-sky-800 text-sm font-semibold mb-6 shadow-sm animate-float">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          Gemeinsam stark für besondere Kinder
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 mb-6 tracking-tight leading-tight">
          Familienentlastung <br />
          <span className="text-sky-600">mit Herz und Verstand</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
          Wir unterstützen Familien mit Kindern, die im Alltag mehr Aufmerksamkeit, Struktur oder Pflege brauchen – egal ob aufgrund von Entwicklungsverzögerungen, Behinderung oder psychischen Schwierigkeiten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#contact" 
            className="bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200 hover:-translate-y-1"
          >
            Jetzt Kontakt aufnehmen
          </a>
          <a 
            href="#about" 
            className="bg-white text-sky-700 border-2 border-sky-100 px-8 py-4 rounded-full text-lg font-bold hover:border-sky-300 hover:bg-sky-50 transition-all"
          >
            Mehr erfahren
          </a>
        </div>

        {/* Image Placeholder for "Real Photo" feel */}
        <div className="mt-16 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
           <img 
            src="https://picsum.photos/1200/600" 
            alt="Glückliche Familie und Betreuer im Garten"
            className="w-full h-64 md:h-96 object-cover" 
           />
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-400 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};
