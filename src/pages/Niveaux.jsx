import { useState } from 'react'; // HMR trigger
import { motion, AnimatePresence } from 'framer-motion';
import {
  Book,
  Palette,
  Calculator,
  Microscope,
  Globe,
  GraduationCap,
  ArrowRight,
  Users,
  Award,
  Music,
  Languages,
  BookOpen,
  School,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

import imgEcole1 from '../assets/image ecole/image_1.png';
import imgEcole2 from '../assets/image ecole/image_2.png';
import imgEcole3 from '../assets/image ecole/image_3.png';
import imgEcole4 from '../assets/image ecole/image_4.png';
import imgEcole5 from '../assets/image ecole/image_5.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const niveauxData = [
  {
    id: 'maternelle',
    title: 'Maternelle',
    subtitle: 'Les Premiers Pas',
    description: 'Un environnement stimulant et bienveillant pour les premiers pas dans le monde de l\'apprentissage.',
    icon: <Palette size={32} />,
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/30',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    classes: [
      { name: 'Petite Section', code: 'PS', description: 'Découverte et éveil' },
      { name: 'Moyenne Section', code: 'MS', description: 'Exploration et apprentissage' },
      { name: 'Grande Section', code: 'GS', description: 'Préparation au CP' }
    ],
    features: [
      { icon: Palette, text: 'Éveil artistique et créativité' },
      { icon: Globe, text: 'Initiation aux langues' },
      { icon: Book, text: 'Développement de la motricité' },
      { icon: Music, text: 'Éveil musical et rythmique' }
    ]
  },
  {
    id: 'primaire',
    title: 'Primaire',
    subtitle: 'Les Fondamentaux',
    description: 'Acquisition des savoirs fondamentaux et développement de l\'autonomie.',
    icon: <Book size={32} />,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/30',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    classes: [
      { name: '1ère Année', code: 'CP1', description: 'Apprentissage de la lecture' },
      { name: '2ème Année', code: 'CP2', description: 'Renforcement des acquis' },
      { name: '3ème Année', code: 'CE1', description: 'Approfondissement' },
      { name: '4ème Année', code: 'CE2', description: 'Consolidation' },
      { name: '5ème Année', code: 'CM1', description: 'Préparation au Collège' },
      { name: '6ème Année', code: 'CM2', description: 'Transition Collège' }
    ],
    features: [
      { icon: Book, text: 'Maîtrise de la lecture et écriture' },
      { icon: Calculator, text: 'Fondamentaux des mathématiques' },
      { icon: Globe, text: 'Découverte du monde' },
      { icon: Languages, text: 'Initiation aux langues vivantes' }
    ]
  },
  {
    id: 'college',
    title: 'Collège',
    subtitle: 'La Construction',
    description: 'Approfondissement des connaissances et développement de l\'autonomie.',
    icon: <School size={32} />,
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-500',
    shadow: 'shadow-blue-500/30',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
    classes: [
      { name: '7ème Année', code: '6ème A', description: 'Classe unique' },
      { name: '8ème Année', code: '5ème B', description: 'Classe unique' },
      { name: '9ème Année', code: '4ème', description: 'Classe unique' },
      { name: '10ème Année', code: '3ème A', description: 'Classe unique' },
    ],
    features: [
      { icon: Microscope, text: 'Sciences et expérimentation' },
      { icon: Calculator, text: 'Mathématiques avancées' },
      { icon: Book, text: 'Littérature et culture' },
      { icon: Globe, text: 'Langues et ouverture' }
    ]
  },
  {
    id: 'lycee',
    title: 'Lycée',
    subtitle: 'L\'Excellence',
    description: 'Préparation intensive au baccalauréat et aux études supérieures.',
    icon: <GraduationCap size={32} />,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/30',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    classes: [
      {
        serie: 'Série Littéraire',
        icon: <BookOpen size={20} />,
        niveaux: [
          { name: '11ème Année', code: '1ère L' },
          { name: '12ème Année', code: '2nde L' },
          { name: 'Terminale', code: 'Tle L' }
        ]
      },
      {
        serie: 'Série Scientifique',
        icon: <Microscope size={20} />,
        niveaux: [
          { name: '11ème Année', code: '1ère S' },
          { name: '12ème Année', code: '2nde S' },
          { name: 'Terminale', code: 'Tle S' }
        ]
      }
    ],
    features: [
      { icon: GraduationCap, text: 'Préparation au Baccalauréat' },
      { icon: Globe, text: 'Orientation post-bac' },
      { icon: Microscope, text: 'Spécialisation scientifique' },
      { icon: Book, text: 'Spécialisation littéraire' }
    ]
  }
];

const LevelCard = ({ level, isExpanded, onToggle }) => {
  const colorMap = {
    pink: { text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-100', iconBg: 'bg-pink-100' },
    emerald: { text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-100' },
    blue: { text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100' },
    amber: { text: 'text-amber-600', light: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-100' }
  };
  const colors = colorMap[level.color];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={level.image}
          alt={level.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80`} />
        
        <div className="absolute top-4 right-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/30 shadow-lg">
            {level.subtitle}
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${level.gradient} text-white shadow-lg ${level.shadow} transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-300`}>
            {level.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-extrabold text-white mb-1">{level.title}</h3>
            <p className="text-sm text-blue-100 font-light line-clamp-1">{level.description}</p>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {level.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`p-2 rounded-xl ${colors.iconBg} ${colors.text} shrink-0`}>
                <feature.icon size={16} />
              </div>
              <span className="text-slate-600 text-sm font-medium leading-snug pt-1">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-4">
          <button
            onClick={onToggle}
            className={`w-full py-4 ${colors.light} ${colors.text} ${colors.border} border rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-95 transition-all`}
          >
            {isExpanded ? 'Masquer le détail des classes' : `Voir les ${level.id === 'lycee' ? 'séries' : 'classes'}`}
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={`mt-2 p-5 bg-slate-50 rounded-2xl border border-slate-100`}>
                  {level.id === 'lycee' ? (
                    <div className="space-y-6">
                      {level.classes.map((serie, idx) => (
                        <div key={idx}>
                          <div className={`flex items-center gap-2 mb-3 ${colors.text}`}>
                            {serie.icon}
                            <span className="font-bold text-lg">{serie.serie}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            {serie.niveaux.map((niveau, nIdx) => (
                              <div key={nIdx} className="bg-white rounded-xl p-3 text-center border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
                                <div className="font-extrabold text-slate-800 text-sm mb-1">{niveau.code}</div>
                                <div className="text-xs text-slate-500 font-medium">{niveau.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {level.classes.map((cls, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-3 text-center border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
                          <div className="font-extrabold text-slate-800 text-sm mb-1">{cls.code}</div>
                          <div className="text-xs text-slate-500 font-medium">{cls.name}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            to="/inscription"
            className={`w-full py-4 bg-gradient-to-r ${level.gradient} text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg ${level.shadow} hover:scale-[1.02] transition-all duration-300`}
          >
            S'inscrire en {level.title}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Niveaux = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [imgEcole1, imgEcole2, imgEcole3, imgEcole4, imgEcole5];

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    }
  };
  const [expandedLevel, setExpandedLevel] = useState(null);

  const toggleLevel = (id) => {
    setExpandedLevel(expandedLevel === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ==================== HEADER & IMAGE BANNER ==================== */}
      <div className="relative h-[65vh] min-h-[500px] bg-slate-900 overflow-hidden group">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={bannerImages[currentImageIndex]}
            alt="Niveaux d'enseignement"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-slate-900/40 backdrop-blur-[2px]" />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                <span className="uppercase tracking-widest text-sm font-bold text-blue-200 drop-shadow-md">
                  PARCOURS SCOLAIRE
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                Nos Niveaux <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  d'Enseignement
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-50/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
                Du Primaire au Lycée, nous accompagnons chaque élève dans son parcours académique avec <strong className="text-white font-bold">excellence, rigueur et discipline</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/inscription"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-4 font-bold shadow-xl shadow-white/10 transition-all hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1"
                >
                  Procéder à l'inscription
                  <ChevronRight size={20} className="text-blue-600" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => changeImage('prev')}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => changeImage('next')}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                idx === currentImageIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ==================== GRILLE DES NIVEAUX ==================== */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-widest mb-4 border border-blue-200 uppercase">
              Nos Formations
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Un Parcours Complet
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto">
              Des classes adaptées à chaque âge pour un apprentissage structuré et progressif
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10"
          >
            {niveauxData.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                isExpanded={expandedLevel === level.id}
                onToggle={() => toggleLevel(level.id)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-6 bg-white/10 rounded-3xl backdrop-blur-md mb-8 border border-white/10 shadow-xl">
              <GraduationCap size={48} className="text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Prêt à Rejoindre le GS_IBK ?
            </h2>
            <p className="text-xl text-blue-100/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Inscrivez votre enfant dès maintenant et offrez-lui une éducation d'excellence dans un cadre propice à sa réussite.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/inscription"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold shadow-xl shadow-white/10 transition-all hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                Procéder à l'inscription
                <ArrowRight size={20} className="text-blue-600" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm text-lg"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Niveaux;