import React from 'react';
import { MessageCircle, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Testimonials */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Quote className="w-8 h-8 text-sky-300 fill-sky-100" />
              <h2 className="text-2xl font-bold text-slate-800">Was Eltern sagen</h2>
            </div>
            <div className="space-y-6">
              <blockquote className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-sky-400">
                <p className="text-slate-600 italic mb-4">"Dank der Entlastungsstunden konnten wir endlich wieder einmal durchschnaufen. Unser Sohn liebt die Nachmittage mit seiner Betreuerin."</p>
                <footer className="font-semibold text-slate-800">– Anna M., Mutter eines 8-jährigen Sohnes</footer>
              </blockquote>
              <blockquote className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-400">
                <p className="text-slate-600 italic mb-4">"Das Team ist unglaublich herzlich. Man merkt sofort, dass hier der Mensch im Mittelpunkt steht."</p>
                <footer className="font-semibold text-slate-800">– Thomas K., Vater</footer>
              </blockquote>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-8 h-8 text-sky-300" />
              <h2 className="text-2xl font-bold text-slate-800">Häufige Fragen</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl p-4 shadow-sm cursor-pointer open:ring-2 open:ring-sky-100 transition-all">
                <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                  Für wen ist das Angebot gedacht?
                  <span className="text-sky-500 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-3 text-slate-600 text-sm leading-relaxed pl-1 border-l-2 border-sky-100">
                  Für alle Familien in Österreich mit Kindern, die aufgrund von physischen, psychischen oder entwicklungsbedingten Herausforderungen besondere Unterstützung benötigen.
                </div>
              </details>

              <details className="group bg-white rounded-xl p-4 shadow-sm cursor-pointer open:ring-2 open:ring-sky-100 transition-all">
                <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                  Was kostet die Betreuung?
                  <span className="text-sky-500 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-3 text-slate-600 text-sm leading-relaxed pl-1 border-l-2 border-sky-100">
                  Wir arbeiten mit gestaffelten Tarifen. Mitglieder erhalten Rabatte. In einem persönlichen Gespräch klären wir gerne Finanzierungsmöglichkeiten über Fonds oder Kassen.
                </div>
              </details>

              <details className="group bg-white rounded-xl p-4 shadow-sm cursor-pointer open:ring-2 open:ring-sky-100 transition-all">
                <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                  Wie schnell bekommen wir Hilfe?
                  <span className="text-sky-500 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-3 text-slate-600 text-sm leading-relaxed pl-1 border-l-2 border-sky-100">
                  Wir versuchen, Erstgespräche innerhalb von 3-5 Werktagen zu ermöglichen. Die tatsächliche Betreuung hängt von der Verfügbarkeit unseres Teams in Ihrer Region ab.
                </div>
              </details>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
