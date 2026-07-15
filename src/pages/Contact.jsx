import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white font-heading mb-4"
        >
          Contactez-nous
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-200 max-w-2xl mx-auto"
        >
          Notre administration se tient à votre entière disposition pour répondre à toutes vos questions.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-3xl font-bold font-heading mb-8">Informations Pratiques</h2>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Adresse</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quartier Dixinn-Centre 1<br />
                  Commune de Dixinn<br />
                  Conakry, Guinée
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Téléphone & WhatsApp</h3>
                <p className="text-gray-600">(+224) 624 24 56 24</p>
                <p className="text-gray-600">(+224) 624 39 68 84</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-600">gsibrahimababakake@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Heures d'ouverture</h3>
                <p className="text-gray-600">Lundi - Vendredi : 07h30 - 17h00</p>
                <p className="text-gray-600">Samedi : 08h00 - 12h00</p>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">Rattachements administratifs</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>🏢 IRE / Conakry</li>
                <li>🏢 DCE / Dixinn</li>
                <li>🏢 DSSE / Dixinn</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <h2 className="text-2xl font-bold font-heading mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(+224) XX XX XX XX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Objet du message</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Demande de renseignements</option>
                    <option>Inscriptions</option>
                    <option>Problème technique (Espace connecté)</option>
                    <option>Réclamation</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
                  Envoyer le message <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-96 relative bg-gray-200">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <MapPin size={48} className="text-blue-500 mb-4" />
            <span className="font-bold text-xl">Groupe Scolaire Ibrahima Baba Kaké</span>
            <span className="text-sm">Quartier Dixinn-Centre 1, Commune de Dixinn, Conakry</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;