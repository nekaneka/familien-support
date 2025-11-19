import React, { useState } from 'react';
import { Check, Star, Heart } from 'lucide-react';

export const Membership: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <section id="membership" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Vielen Dank!</h3>
            <p className="text-slate-600 mb-8">
              Ihr Mitgliedsantrag ist bei uns eingegangen. Wir werden die Unterlagen prüfen und senden Ihnen in Kürze eine Bestätigung sowie weitere Informationen per E-Mail zu.
            </p>
            <button 
              onClick={() => setFormStatus('idle')}
              className="text-sky-600 font-semibold hover:underline"
            >
              Zurück zum Formular
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="membership" className="py-20 bg-sky-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Werden Sie Teil unserer Gemeinschaft</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Als Mitglied stärken Sie nicht nur unseren Verein, sondern profitieren auch direkt von unseren Angeboten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Regular Member */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-sky-100 hover:border-sky-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-sky-100 rounded-xl text-sky-600">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Fördermitglied</h3>
            </div>
            <p className="text-slate-500 mb-6 h-12">Für Familien, die unsere Leistungen regelmäßig in Anspruch nehmen möchten.</p>
            <div className="text-3xl font-bold text-slate-900 mb-6">
              45€ <span className="text-sm font-normal text-slate-500">/ Jahr</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500 shrink-0" /> 
                <span>Ermäßigte Stundensätze für Betreuung</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500 shrink-0" /> 
                <span>Bevorzugte Terminvergabe</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Check className="w-5 h-5 text-green-500 shrink-0" /> 
                <span>Kostenlose Teilnahme an Elternabenden</span>
              </li>
            </ul>
          </div>

          {/* Honorary Member */}
          <div className="bg-gradient-to-br from-sky-600 to-sky-700 p-8 rounded-3xl shadow-lg text-white transform md:-translate-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ehrenmitglied / Pate</h3>
            </div>
            <p className="text-sky-100 mb-6 h-12">Unterstützen Sie Familien, die sich die Betreuung schwer leisten können.</p>
            <div className="text-3xl font-bold mb-6">
              ab 100€ <span className="text-sm font-normal text-sky-200">/ Jahr (Spende)</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sky-50">
                <Check className="w-5 h-5 text-sky-300 shrink-0" /> 
                <span>Ermöglicht kostenfreie Sozialstunden</span>
              </li>
              <li className="flex items-center gap-3 text-sky-50">
                <Check className="w-5 h-5 text-sky-300 shrink-0" /> 
                <span>Regelmäßiger Newsletter über Erfolge</span>
              </li>
              <li className="flex items-center gap-3 text-sky-50">
                <Check className="w-5 h-5 text-sky-300 shrink-0" /> 
                <span>Steuerlich absetzbar (Spendenquittung)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-slate-800 p-6 text-white text-center">
            <h3 className="text-xl font-bold">Aufnahmeantrag</h3>
            <p className="opacity-80 text-sm mt-1">Füllen Sie das Formular aus, um beizutreten.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="m-name" className="block text-sm font-medium text-slate-700">Vor- und Nachname</label>
                <input 
                  type="text" 
                  id="m-name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" 
                  placeholder="Max Mustermann"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="m-email" className="block text-sm font-medium text-slate-700">E-Mail-Adresse</label>
                <input 
                  type="email" 
                  id="m-email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" 
                  placeholder="max@beispiel.at"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="m-address" className="block text-sm font-medium text-slate-700">Anschrift</label>
              <input 
                type="text" 
                id="m-address" 
                required 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" 
                placeholder="Musterstraße 1, 1010 Wien"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="m-type" className="block text-sm font-medium text-slate-700">Mitgliedschaft</label>
                <select 
                  id="m-type" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all appearance-none"
                >
                  <option value="regular">Fördermitglied (45€/Jahr)</option>
                  <option value="honorary">Ehrenmitglied/Pate (Spende)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="m-amount" className="block text-sm font-medium text-slate-700">Freiwillige Spende (Optional)</label>
                <input 
                  type="text" 
                  id="m-amount" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" 
                  placeholder="z.B. 20€"
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 w-5 h-5 text-sky-600 rounded border-slate-300 focus:ring-sky-500" />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  Ich stimme zu, dass meine Daten zur Bearbeitung des Antrags gespeichert werden. Weitere Informationen finden Sie in der <a href="#" className="text-sky-600 hover:underline">Datenschutzerklärung</a>.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full bg-slate-800 text-white font-bold py-4 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {formStatus === 'submitting' ? 'Wird gesendet...' : 'Mitgliedschaft beantragen'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
