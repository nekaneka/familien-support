import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000); // Reset for demo
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Kontakt aufnehmen</h2>
              <p className="text-slate-600 leading-relaxed">
                Haben Sie Fragen zu unserem Angebot oder möchten Sie uns kennenlernen? Wir sind für Sie da.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 rounded-lg text-sky-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">E-Mail</h4>
                  <a href="mailto:info@familiensupport.at" className="text-slate-600 hover:text-sky-600 transition-colors">info@familiensupport.at</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 rounded-lg text-sky-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Telefon</h4>
                  <p className="text-slate-600">+43 123 456 789</p>
                  <p className="text-xs text-slate-400">Mo-Fr, 09:00 - 12:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 rounded-lg text-sky-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Büro</h4>
                  <p className="text-slate-600">Mustergasse 12/3<br/>1010 Wien</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100 relative">
              {isSent ? (
                 <div className="absolute inset-0 bg-white/95 backdrop-blur flex flex-col items-center justify-center rounded-3xl z-10 p-8 text-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Nachricht gesendet!</h3>
                    <p className="text-slate-600">Danke für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.</p>
                 </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="c-name" className="block text-sm font-medium text-slate-700">Ihr Name</label>
                    <input 
                      type="text" 
                      id="c-name" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all border"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="c-email" className="block text-sm font-medium text-slate-700">Ihre E-Mail</label>
                    <input 
                      type="email" 
                      id="c-email" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all border"
                      placeholder="max@beispiel.at"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="c-message" className="block text-sm font-medium text-slate-700">Ihre Nachricht</label>
                  <textarea 
                    id="c-message" 
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all border resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 w-5 h-5 text-sky-600 rounded border-slate-300 focus:ring-sky-500" />
                    <span className="text-sm text-slate-500">
                      Ich habe die <a href="#" className="text-sky-600 underline">Datenschutzerklärung</a> gelesen und stimme zu.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-sky-600 text-white font-bold py-4 rounded-xl hover:bg-sky-700 transition-colors shadow-lg hover:shadow-sky-200 flex items-center justify-center gap-2 group"
                >
                  <span>Nachricht senden</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
