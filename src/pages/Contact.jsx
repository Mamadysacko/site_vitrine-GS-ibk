import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle, ExternalLink, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import imgEcole1 from '../assets/image ecole/image_1.png';
import imgEcole2 from '../assets/image ecole/image_2.png';
import imgEcole3 from '../assets/image ecole/image_3.png';
import imgEcole4 from '../assets/image ecole/image_4.png';
import imgEcole5 from '../assets/image ecole/image_5.png';

const Contact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [imgEcole1, imgEcole2, imgEcole3, imgEcole4, imgEcole5];

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Numéros WhatsApp
  const whatsappNumbers = [
    { number: '224624245624', label: 'Service Inscriptions' },
    { number: '224624396884', label: 'Service Administration' }
  ];

  // Fonction pour ouvrir WhatsApp
  const openWhatsApp = (number, message = '') => {
    const encodedMessage = encodeURIComponent(message || 'Bonjour, je souhaite obtenir des informations sur le Groupe Scolaire Ibrahima Baba Kaké.');
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  // Fonction pour envoyer l'email
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Construction du message
      const emailData = {
        to: 'gsibrahimababakake@gmail.com',
        from: formData.email,
        subject: `[Contact GSIBK] ${formData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <div style="background: #1e3a8a; padding: 20px; border-radius: 8px 8px 0 0; color: white; text-align: center;">
              <h2 style="margin: 0;">📬 Nouveau message du site</h2>
            </div>
            <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 8px 8px;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Informations du contact</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nom:</td>
                  <td style="padding: 8px 0;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Téléphone:</td>
                  <td style="padding: 8px 0;">${formData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Sujet:</td>
                  <td style="padding: 8px 0;">${formData.subject}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                <h4 style="color: #1e3a8a; margin-top: 0;">Message:</h4>
                <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #1e3a8a; white-space: pre-wrap; line-height: 1.6;">
                  ${formData.message}
                </div>
              </div>
              <div style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
                <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact du site du Groupe Scolaire Ibrahima Baba Kaké</p>
                <p style="margin: 5px 0 0 0;">Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Abidjan' })}</p>
              </div>
            </div>
          </div>
        `
      };

      // Envoi via EmailJS ou API (simulé ici)
      // Vous pouvez remplacer par votre service d'email (EmailJS, SendGrid, etc.)
      
      // Simulation d'envoi (à remplacer par votre API réelle)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simuler un succès à 90%
          if (Math.random() < 0.9) {
            resolve();
          } else {
            reject(new Error('Erreur lors de l\'envoi'));
          }
        }, 1500);
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour envoyer via WhatsApp (alternative)
  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour,\n\nJe suis ${formData.name} (${formData.email} - ${formData.phone}).\n\nSujet: ${formData.subject}\n\nMessage: ${formData.message}`;
    openWhatsApp(whatsappNumbers[0].number, whatsappMessage);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Image Banner Interactive */}
      <div className="relative h-80 bg-gray-900 overflow-hidden group">
        <motion.img
          key={currentImageIndex}
          src={bannerImages[currentImageIndex]}
          alt="GS_IBK"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-black/40" />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-blue-500 rounded-full" />
                <span className="uppercase tracking-widest text-sm font-bold text-blue-200 drop-shadow-md">
                  NOUS CONTACTER
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Contactez-nous <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Aujourd'hui</span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-50/90 mb-10 leading-relaxed font-light max-w-2xl">
                Notre administration se tient à votre entière disposition pour répondre à toutes vos questions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => changeImage('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => changeImage('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

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
                <div className="space-y-2">
                  {whatsappNumbers.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <p className="text-gray-600">{item.number.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5')}</p>
                      
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">Cliquez sur WhatsApp pour nous contacter directement</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-600">gsibrahimababakake@gmail.com</p>
                <p className="text-xs text-gray-500 mt-1">Pour les demandes non urgentes</p>
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

            {/* WhatsApp Button Section */}
            {/* Informations supplémentaires */}
            <div className="mt-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
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
              <h2 className="text-2xl font-bold font-heading mb-4">Envoyez-nous un message</h2>
              <p className="text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous pour nous envoyer un email ou contactez-nous directement sur WhatsApp.
              </p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700"
                >
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message envoyé avec succès !</p>
                    <p className="text-sm text-green-600">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700"
                >
                  <AlertCircle size={20} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Erreur lors de l'envoi</p>
                    <p className="text-sm text-red-600">Veuillez réessayer ou nous contacter par téléphone.</p>
                  </div>
                </motion.div>
              )}

              {/* WhatsApp Quick Contact */}
              <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Contact rapide</p>
                      <p className="text-sm text-gray-600">Nous répondons en quelques minutes</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openWhatsApp(whatsappNumbers[0].number)}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-green-200 flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    WhatsApp maintenant
                  </button>
                </div>
              </div>

              {/* Formulaire d'envoi par email */}
              <form className="space-y-6" onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                      placeholder="Votre nom"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                      placeholder="votre@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    placeholder="(+224) XX XX XX XX"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Objet du message <span className="text-red-500">*</span>
                  </label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Demande de renseignements">Demande de renseignements</option>
                    <option value="Inscriptions">Inscriptions</option>
                    <option value="Problème technique (Espace connecté)">Problème technique (Espace connecté)</option>
                    <option value="Réclamation">Réclamation</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows="5" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200 flex-1 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Envoyer par email
                      </>
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={sendWhatsAppMessage}
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.message}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-200 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={20} />
                    Envoyer via WhatsApp
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 justify-center mt-4">
                  <span className="flex items-center gap-1">📧 Email: gsibrahimababakake@gmail.com</span>
                  <span className="flex items-center gap-1">💬 WhatsApp: Réponse rapide</span>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[560px] relative bg-gray-200">
          <iframe
            title="Carte du GS IBK"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d491.8088479842717!2d-13.669213473877004!3d9.55462289623102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd716c128befb%3A0x3192c1b4edfd11bd!2sIBK!5e0!3m2!1sfr!2s!4v1784172713918!5m2!1sfr!2s"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="absolute inset-x-6 bottom-6 p-5 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Lieu de l'établissement</p>
                <h3 className="text-xl font-bold text-gray-900">Groupe Scolaire Ibrahima Baba Kaké</h3>
                <p className="text-sm text-gray-600">Quartier Dixinn-Centre 1, Commune de Dixinn, Conakry</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/NQYm5us2c9MXh7X79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-semibold transition-colors hover:bg-gray-800"
            >
              Se rendre à l'établissement
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;