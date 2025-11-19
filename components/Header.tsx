import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Startseite', href: '#home' },
  { label: 'Wer wir sind', href: '#about' },
  { label: 'Unser Ziel', href: '#goals' },
  { label: 'Preise', href: '#prices' },
  { label: 'Mitglied werden', href: '#membership' },
  { label: 'Kontakt', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <HeartHandshake className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-sky-800 tracking-tight">
            FamilienSupport
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-sky-600 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-sky-600 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Hilfe anfragen
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-sky-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col py-4 px-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-700 hover:text-sky-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-sky-600 text-white text-center py-3 rounded-lg font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Jetzt Hilfe anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
