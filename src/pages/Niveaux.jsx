import React, { useState } from 'react';
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
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

// Structure des niveaux selon les données fournies
const niveauxData = [
  {
    id: 'maternelle',
    title: 'Maternelle',
    subtitle: 'Les Premiers Pas',
    description: 'Un environnement stimulant et bienveillant pour les premiers pas dans le monde de l\'apprentissage.',
    icon: <Palette size={28} />,
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-600',
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
    icon: <Book size={28} />,
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
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
    icon: <School size={28} />,
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
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
    icon: <GraduationCap size={28} />,
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
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

// Composant de carte de niveau
const LevelCard = ({ level, isExpanded, onToggle }) => {
  const colorMap = {
    pink: { bg: 'bg-pink-500', text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-200' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' }
  };
  const colors = colorMap[level.color];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* En-tête avec image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={level.image}
          alt={level.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent`} />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <div className={`p-2 rounded-xl ${colors.bg} text-white`}>
              {level.icon}
            </div>
            <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {level.subtitle}
            </span>
          </div>
          <h3 className="text-2xl font-bold">{level.title}</h3>
          <p className="text-sm text-white/80">{level.description}</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {level.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs">
              <feature.icon className={colors.text} size={14} />
              <span className="text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Bouton pour voir les classes */}
        <button
          onClick={onToggle}
          className={`w-full py-3 ${colors.light} ${colors.text} rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition`}
        >
          {isExpanded ? 'Masquer les classes' : `Voir les classes (${level.id === 'lycee' ? '2 séries' : level.classes.length})`}
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Classes détaillées */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className={`mt-4 p-4 ${colors.light} rounded-xl border ${colors.border}`}>
                {level.id === 'lycee' ? (
                  // Affichage pour le Lycée avec séries
                  <div className="space-y-4">
                    {level.classes.map((serie, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 mb-2">
                          {serie.icon}
                          <span className="font-bold text-gray-800">{serie.serie}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {serie.niveaux.map((niveau, nIdx) => (
                            <div key={nIdx} className="bg-white rounded-lg p-2 text-center border border-gray-100">
                              <div className="font-bold text-gray-800 text-sm">{niveau.code}</div>
                              <div className="text-xs text-gray-500">{niveau.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Affichage pour les autres niveaux
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {level.classes.map((cls, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-2 text-center border border-gray-100">
                        <div className="font-bold text-gray-800 text-sm">{cls.code}</div>
                        <div className="text-xs text-gray-500">{cls.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bouton d'inscription */}
        <Link
          to="/inscription"
          className={`mt-4 w-full py-3 ${colors.bg} text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg`}
        >
          Inscrire en {level.title}
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
};

const Niveaux = () => {
  const [expandedLevel, setExpandedLevel] = useState(null);

  const toggleLevel = (id) => {
    setExpandedLevel(expandedLevel === id ? null : id);
  };

  // Statistiques globales
  const globalStats = [
    { icon: School, value: '4', label: 'Niveaux' },
    { icon: Users, value: '30+', label: 'Classes' },
    { icon: Award, value: '98%', label: 'Taux de réussite' },
    { icon: BookOpen, value: '20+', label: 'Matières' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&q=80"
            alt="Niveaux d'enseignement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider border border-white/20 mb-4">
              PARCOURS SCOLAIRE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Niveaux d'Enseignement
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Du Primaire au Lycée, le Groupe Scolaire Ibrahima Baba Kaké accompagne chaque élève
              dans son parcours académique avec <strong className="text-white">excellence, rigueur et discipline</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== STATISTIQUES GLOBALES ==================== */}


      {/* ==================== GRILLE DES NIVEAUX ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Un Parcours Complet
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des classes adaptées à chaque âge et chaque niveau, pour un apprentissage progressif et structuré
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
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
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={56} className="mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Rejoindre le GS_IBK ?
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
              Inscrivez votre enfant dès maintenant et offrez-lui une éducation d'excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/inscription"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:shadow-2xl transition-all"
              >
                Procéder à l'inscription
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
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