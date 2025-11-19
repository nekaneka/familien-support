import React from 'react';
import { HeartHandshake, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <HeartHandshake className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">FamilienSupport</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Unterstützung für Familien mit besonderen Kindern in Österreich. Gemeinsam schaffen wir Entlastung und Lebensfreude.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">Wer wir sind</a></li>
              <li><a href="#goals" className="hover:text-sky-400 transition-colors">Unser Ziel</a></li>
              <li><a href="#prices" className="hover:text-sky-400 transition-colors">Preise & Finanzierung</a></li>
              <li><a href="#membership" className="hover:text-sky-400 transition-colors">Mitglied werden</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Satzung</a></li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h3 className="text-white font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>info@familiensupport.at</li>
              <li>+43 123 456 789</li>
              <li>Mustergasse 12/3, 1010 Wien</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm opacity-50">
          &copy; {new Date().getFullYear()} FamilienSupport Österreich. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};
