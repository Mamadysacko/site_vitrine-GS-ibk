import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <span className="font-bold text-xl font-heading block leading-none">GS_IBK</span>
                <span className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">Établissement Scolaire</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              « Former aujourd'hui les citoyens de demain »
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors font-bold text-xs">
                Fb
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-colors font-bold text-xs">
                Tw
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors font-bold text-xs">
                Ig
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-colors font-bold text-xs">
                In
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading border-b border-gray-800 pb-2">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><Link to="/a-propos" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2">→ Notre Histoire</Link></li>
              <li><Link to="/niveaux" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2">→ Niveaux d'enseignement</Link></li>
              <li><Link to="/equipe" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2">→ Équipe Pédagogique</Link></li>
              <li><Link to="/inscription" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2">→ Inscriptions</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading border-b border-gray-800 pb-2">Ressources</h3>
            <ul className="space-y-3">
                 <li><Link to="/actualites" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2">→ Actualités</Link></li>
              <li><Link to="/galerie" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2">→ Galerie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
  <h3 className="text-lg font-bold mb-6 font-heading border-b border-gray-800 pb-2">
    Contact
  </h3>

  <ul className="space-y-4">
    <li className="flex items-start gap-3 text-gray-400 text-sm">
      <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
      <span>
        Quartier : Dixinn-Centre 1<br />
        À 50M du Carrefour Échangeur<br />
        Conakry, Guinée
      </span>
    </li>

    <li className="flex items-start gap-3 text-gray-400 text-sm">
      <Phone className="text-blue-500 mt-1 flex-shrink-0" size={18} />
      <span>
        (+224) 624-24-56-24<br />
        (+224) 624-39-68-84
      </span>
    </li>

    <li className="flex items-center gap-3 text-gray-400 text-sm">
      <Mail className="text-blue-500 flex-shrink-0" size={18} />
      <span>
        gsibrahimababakake@gmail.com
      </span>
    </li>

    <li className="flex items-start gap-3 text-gray-400 text-sm">
      <span className="text-blue-500 font-bold flex-shrink-0">
      </span>
    
    </li>
  </ul>
</div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GS_IBK. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
