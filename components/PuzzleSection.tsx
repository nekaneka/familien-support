import React from 'react';
import { Users, Target, Euro, Mail, Puzzle } from 'lucide-react';
import { PuzzleCardProps } from '../types';

const cards: PuzzleCardProps[] = [
  {
    title: 'Wer wir sind',
    subtitle: 'Ein engagiertes Team',
    description: 'Unser Team besteht aus erfahrenen Sozialpädagog:innen, Pflegekräften und geschulten Ehrenamtlichen. Wir arbeiten Hand in Hand, um professionelle und herzliche Unterstützung zu bieten.',
    icon: <Users className="w-8 h-8" />,
    colorClass: 'bg-sky-100 hover:bg-sky-200 text-sky-900',
    anchorId: 'about'
  },
  {
    title: 'Unser Ziel',
    subtitle: 'Entlastung & Förderung',
    description: 'Wir schaffen Freiräume für Eltern und fördern gleichzeitig die Entwicklung der Kinder durch individuelle Betreuung, Begleitung zu Terminen und Freizeitgestaltung.',
    icon: <Target className="w-8 h-8" />,
    colorClass: 'bg-green-100 hover:bg-green-200 text-green-900',
    anchorId: 'goals'
  },
  {
    title: 'Preise',
    subtitle: 'Fair & Transparent',
    description: 'Unsere Tarife sind sozial gestaffelt. Mitglieder profitieren von vergünstigten Stundensätzen. Wir beraten auch gerne zu Finanzierungsmöglichkeiten über Kassen oder Fonds.',
    icon: <Euro className="w-8 h-8" />,
    colorClass: 'bg-amber-100 hover:bg-amber-200 text-amber-900',
    anchorId: 'prices'
  },
  {
    title: 'Kontakt',
    subtitle: 'Wir sind für Sie da',
    description: 'Der erste Schritt ist oft der schwerste, aber wir machen es Ihnen leicht. Schreiben Sie uns unverbindlich. Wir melden uns zeitnah für ein persönliches Kennenlernen.',
    icon: <Mail className="w-8 h-8" />,
    colorClass: 'bg-rose-100 hover:bg-rose-200 text-rose-900',
    anchorId: 'contact-trigger'
  }
];

export const PuzzleSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-slate-100 mb-4">
            <Puzzle className="w-6 h-6 text-slate-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Unsere Bausteine für Ihre Hilfe</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Jeder Bereich greift ineinander, um ein stabiles Unterstützungsnetzwerk für Ihre Familie zu bilden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              id={card.anchorId}
              className={`
                ${card.colorClass} 
                p-8 rounded-3xl transition-all duration-300 
                hover:-translate-y-2 hover:shadow-xl 
                relative overflow-hidden group cursor-default
                border-2 border-white/50
              `}
            >
              {/* Decorative Puzzle Piece Nub (Visual only) */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-inherit opacity-0 md:opacity-100 group-hover:scale-125 transition-transform z-0" />
              
              <div className="relative z-10">
                <div className="bg-white/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <h4 className="text-lg font-semibold opacity-80 mb-4">{card.subtitle}</h4>
                <ul className="space-y-2 opacity-90 leading-relaxed">
                  {/* Splitting description into mock bullet points if long, otherwise just text */}
                  {card.description.includes('.') ? (
                     card.description.split('. ').filter(s => s.length > 2).map((sentence, i) => (
                       <li key={i} className="flex items-start gap-2">
                         <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                         <span>{sentence}{sentence.endsWith('.') ? '' : '.'}</span>
                       </li>
                     ))
                  ) : (
                    <p>{card.description}</p>
                  )}
                </ul>
                
                {card.anchorId === 'contact-trigger' && (
                  <a href="#contact" className="mt-6 inline-block bg-white/50 hover:bg-white/80 text-inherit font-bold py-2 px-6 rounded-lg transition-colors">
                    Zum Kontaktformular &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
