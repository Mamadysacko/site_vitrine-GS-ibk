import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, ChevronRight, Heart } from 'lucide-react';
import logo_ibk from '../assets/logo_ibk.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & About (Takes up 4 columns on large screens) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-white/10 p-1.5">
                <img src={logo_ibk} alt="Logo GS_IBK" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight block leading-none text-white group-hover:text-blue-100 transition-colors">GS_IBK</span>
                <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase">Établissement Scolaire</span>
              </div>
            </Link>
            <p className="text-blue-100/70 mb-8 text-sm leading-relaxed font-light max-w-sm">
              « Former aujourd'hui les citoyens de demain » <br/>
              Un cadre d'excellence, de rigueur et de discipline pour la réussite de vos enfants, de la maternelle au lycée.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Fb', href: '#', color: 'hover:bg-blue-600' },
             
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-200 font-bold text-sm ${social.color} hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Liens Rapides
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Notre Histoire', path: '/a-propos' },
                { name: 'Niveaux d\'enseignement', path: '/niveaux' },
                { name: 'Équipe Pédagogique', path: '/equipe' },
                { name: 'Inscriptions', path: '/inscription' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all text-sm flex items-center gap-2 group font-light">
                    <ChevronRight size={14} className="text-blue-500 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              Ressources
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Actualités', path: '/actualites' },
                { name: 'Galerie Photos', path: '/galerie' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all text-sm flex items-center gap-2 group font-light">
                    <ChevronRight size={14} className="text-cyan-500 group-hover:text-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Takes up 4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-white tracking-tight flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Nous Contacter
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-blue-100/70 text-sm font-light group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-transparent transition-all shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="pt-1.5 leading-relaxed">
                  Quartier Dixinn-Centre 1<br />
                  À 50M du Carrefour Échangeur<br />
                  Conakry, République de Guinée
                </span>
              </li>

              <li className="flex items-start gap-4 text-blue-100/70 text-sm font-light group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent transition-all shrink-0">
                  <Phone size={18} />
                </div>
                <span className="pt-1.5 leading-relaxed">
                  (+224) 624-24-56-24<br />
                  (+224) 624-39-68-84
                </span>
              </li>

              <li className="flex items-center gap-4 text-blue-100/70 text-sm font-light group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-transparent transition-all shrink-0">
                  <Mail size={18} />
                </div>
                <span>
                  gsibrahimababakake@gmail.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100/50 text-sm font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Groupe Scolaire Ibrahima Baba Kaké. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
