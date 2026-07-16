import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Heart,
  History,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  GraduationCap,
  Shield,
  Building,
  School,
  Dumbbell,
  Monitor,
  Droplet,
  Zap,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Eye,
  Quote,
  Download,
  FileText,
} from 'lucide-react';
import ficheRenseignement from '../assets/fiche-renseignement.pdf';

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
      staggerChildren: 0.1
    }
  }
};

const APropos = () => {
  const [activeInfrastructure, setActiveInfrastructure] = useState(null);

  // Statistiques
  const stats = [
    { value: '+600', label: 'Élèves Inscrits', color: 'text-blue-600', icon: <Users size={24} /> },
    { value: '+30', label: 'Enseignants Qualifiés', color: 'text-orange-500', icon: <GraduationCap size={24} /> } ];

  // Timeline
  const timelineEvents = [
    {
      year: '2001',
      title: 'Création de l\'établissement',
      description: 'Ouverture des premières classes avec une vision ambitieuse pour l\'éducation en Guinée.',
      icon: <Calendar size={20} />
    },
    {
      year: '2010',
      title: 'Extension et ouverture du Collège',
      description: 'Construction de nouveaux bâtiments et élargissement de l\'offre éducative.',
      icon: <BookOpen size={20} />
    },
    {
      year: '2015',
      title: 'Lancement du Lycée',
      description: 'L\'établissement devient un groupe scolaire complet du primaire au lycée.',
      icon: <GraduationCap size={20} />
    },
    {
      year: '2024',
      title: 'Modernisation Numérique',
      description: 'Intégration complète d\'outils numériques et d\'espaces pédagogiques connectés.',
      icon: <Shield size={20} />
    },
    {
      year: '2026',
      title: 'Création du Centre Informatique',
      description: 'Ouverture d\'un centre informatique dédié aux élèves et au personnel pour favoriser l\'apprentissage des outils informatiques et technologiques.',
      icon: <Monitor size={20} />
    }
  ];

  // Valeurs
  const values = [
    { icon: <Target size={24} />, title: 'Travail', desc: 'L\'effort, la persévérance et le dépassement de soi.' },
    { icon: <Target size={24} />, title: 'Rigueur', desc: 'L\'exigence académique et la recherche de qualité.' },
    { icon: <Target size={24} />, title: 'Discipline', desc: 'Le respect des règles et de l\'autorité.' }  ];

  const infrastructureSlides = [
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
      alt: 'Bloc A du groupe scolaire',
      title: 'Bloc A : Primaire et Collège'
    },
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80',
      alt: 'Bloc B du lycée',
      title: 'Bloc B : Lycée'
    },
    {
      src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
      alt: 'Centre informatique',
      title: 'Centre Informatique'
    },
    {
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80',
      alt: 'Terrain multisports',
      title: 'Terrain Multisports'
    },
    {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fb0a?auto=format&fit=crop&q=80',
      alt: 'Installations sanitaires',
      title: 'Installations Sanitaires'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % infrastructureSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [infrastructureSlides.length]);

  // Infrastructures détaillées
  const infrastructures = [
    {
      id: 'bloc-a',
      title: 'Bloc A : Primaire et Collège',
      icon: <Building size={28} />,
      color: 'blue',
      description: 'Le premier bâtiment de l\'établissement est un bloc moderne composé de deux étages. Il accueille les classes du Primaire ainsi que celles du Collège.',
      details: [
        'Salles de classe spacieuses et aérées',
        'Aménagées pour favoriser l\'apprentissage',
        'Équipées de tableaux interactifs',
        'Climatisation et éclairage adaptés'
      ],
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80'
    },
    {
      id: 'bloc-b',
      title: 'Bloc B : Lycée',
      icon: <School size={28} />,
      color: 'green',
      description: 'Le second bâtiment est également composé de deux étages et est entièrement dédié aux élèves du Lycée.',
      details: [
        'Classes dédiées aux cycles secondaires',
        'Préparation aux examens nationaux',
        'Salles de cours spécialisées',
        'Espace de travail et de recherche'
      ],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80'
    },
    {
      id: 'centre-informatique',
      title: 'Centre Informatique',
      icon: <Monitor size={28} />,
      color: 'purple',
      description: 'Un espace dédié à l’apprentissage technologique, à la bureautique, à la recherche d’information et à l’initiation aux outils numériques modernes.',
      details: [
        'Ordinateurs mis à disposition pour les élèves',
        'Apprentissage de la bureautique et du numérique',
        'Initiation aux outils technologiques et à la recherche en ligne',
        'Développement des compétences numériques essentielles'
      ],
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80'
    },
    {
      id: 'sport',
      title: 'Terrain Multisports',
      icon: <Dumbbell size={28} />,
      color: 'orange',
      description: 'L\'établissement dispose d\'un terrain sportif polyvalent permettant la pratique de plusieurs disciplines.',
      details: [
        'Basketball',
        'Football',
        'Athlétisme',
        'Éducation physique et sportive'
      ],
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80'
    },
    {
      id: 'sanitaires',
      title: 'Installations Sanitaires',
      icon: <Droplet size={28} />,
      color: 'purple',
      description: 'Des installations sanitaires adaptées pour toute la communauté éducative.',
      details: [
        'Toilettes réservées aux élèves',
        'Toilettes pour l\'administration et le personnel',
        'Entretien régulier',
        'Hygiène et confort garantis'
      ],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80'
    },
    {
      id: 'eau',
      title: 'Approvisionnement en Eau',
      icon: <Droplet size={28} />,
      color: 'blue',
      description: 'L\'école bénéficie d\'un système d\'approvisionnement en eau potable provenant de la Société des Eaux de Guinée (SEG).',
      details: [
        'Eau potable disponible en continu',
        'Points d\'eau dans tout l\'établissement',
        'Hygiène et santé assurées',
        'Confort des élèves et du personnel'
      ],
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80'
    },
    {
      id: 'electricite',
      title: 'Électrification des Locaux',
      icon: <Zap size={28} />,
      color: 'yellow',
      description: 'Toutes les salles de classe ainsi que les bureaux administratifs sont alimentés en électricité grâce au réseau de l\'Électricité de Guinée (EDG).',
      details: [
        'Électricité disponible en continu',
        'Éclairage moderne dans toutes les salles',
        'Équipements électriques fonctionnels',
        'Environnement moderne et efficace'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background image carousel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30" />
          <AnimatePresence mode="wait">
            <motion.img
              key={infrastructureSlides[activeSlide].src}
              src={infrastructureSlides[activeSlide].src}
              alt={infrastructureSlides[activeSlide].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover opacity-40"
            />
          </AnimatePresence>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent z-0" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Présentation de l'École
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Découvrez notre histoire, notre vision et nos valeurs qui font la fierté du GS_IBK.
            </p>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 pt-4">
              {infrastructureSlides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  aria-label={`Afficher ${slide.title}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PRÉSENTATION DÉTAILLÉE ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Groupe Scolaire Ibrahima Baba Kaké (GS_IBK)
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-800">Créé en 2001</strong>, le Groupe Scolaire Ibrahima Baba Kaké est un établissement
                d'enseignement général situé au cœur de la <strong>Commune de Dixinn</strong>, à Conakry.
                Depuis plus de deux décennies, nous formons des générations d'élèves aux valeurs
                d'excellence, de rigueur et de responsabilité.
              </p>
            </div>

            

            {/* Héritage du fondateur */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Heart className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">L'Héritage d'un Visionnaire</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Groupe Scolaire porte fièrement le nom de son fondateur, <strong>Feu Ibrahima Baba Kaké</strong>,
                un homme profondément attaché à l'éducation et à la transmission du savoir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Convaincu que l'éducation constitue le fondement du développement, il a consacré sa vie
                à la création d'un cadre d'apprentissage capable de former des citoyens compétents et
                responsables pour l'avenir de la Guinée.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-800">Son héritage perdure.</span> Les valeurs qu'il
                  a incarnées restent profondément ancrées dans la culture de l'établissement, inspirant la
                  direction, les enseignants, les élèves et les parents dans la poursuite de l'excellence.
                </p>
              </div>
            </div>

            {/* Mission et Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-bold text-blue-900">Notre Mission</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>Offrir un <strong>enseignement de qualité</strong> répondant aux exigences du système éducatif guinéen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>Favoriser l'acquisition de <strong>connaissances solides</strong> et durables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>Développer l'<strong>esprit critique</strong>, la créativité et l'autonomie des élèves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>Encourager le <strong>respect des valeurs citoyennes</strong> et républicaines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span>Préparer les apprenants à la <strong>réussite académique</strong> et professionnelle</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-purple-600" size={28} />
                  <h3 className="text-2xl font-bold text-blue-900">Notre Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bâtir une institution éducative moderne capable de former des <strong>leaders</strong>,
                  des <strong>professionnels compétents</strong> et des <strong>citoyens responsables</strong>,
                  prêts à contribuer activement au développement de la Guinée et du monde.
                </p>
                <div className="bg-white/70 rounded-xl p-6 border border-indigo-200">
                  <Quote className="text-indigo-400 mb-2" size={24} />
                  <p className="text-blue-800 font-semibold italic text-center">
                    "Devenir un modèle d'excellence éducative reconnu pour la qualité de son enseignement
                    et son innovation pédagogique."
                  </p>
                </div>
              </div>
            </div>

            {/* Cycles d'enseignement */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
                Une Formation Complète du Primaire au Lycée
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-500 hover:shadow-lg transition">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Enseignement Primaire</h4>
                  <p className="text-gray-600">La base de l'apprentissage : connaissances fondamentales, curiosité intellectuelle et compétences essentielles pour la réussite future.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500 hover:shadow-lg transition">
                  <div className="text-3xl mb-3">🎓</div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Enseignement Collégial</h4>
                  <p className="text-gray-600">Consolidation des acquis, développement des capacités d'analyse, de réflexion et d'autonomie des élèves.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-purple-500 hover:shadow-lg transition">
                  <div className="text-3xl mb-3">⭐</div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Enseignement Lycéen</h4>
                  <p className="text-gray-600">Préparation aux examens nationaux et aux études supérieures, accompagnement dans la construction du projet académique.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== INFRASTRUCTURES ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-3">
              INFRASTRUCTURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nos Infrastructures
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Le Groupe Scolaire Ibrahima Baba Kaké dispose d'infrastructures modernes et adaptées aux besoins
              des élèves afin de garantir un environnement d'apprentissage sécurisé, confortable et favorable
              à la réussite scolaire.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Depuis sa création en 2001, l'établissement ne cesse d'améliorer ses équipements pour offrir
              aux apprenants les meilleures conditions d'étude possibles.
            </p>
          </motion.div>

          {/* Grille des infrastructures */}
          <div className="space-y-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {infrastructures.slice(0, 3).map((infra, index) => {
                const colorMap = {
                  blue: 'from-blue-500 to-blue-600',
                  green: 'from-green-500 to-green-600',
                  orange: 'from-orange-500 to-orange-600',
                  purple: 'from-purple-500 to-purple-600',
                  yellow: 'from-yellow-500 to-amber-500'
                };
                const bgColorMap = {
                  blue: 'bg-blue-50 border-blue-200',
                  green: 'bg-green-50 border-green-200',
                  orange: 'bg-orange-50 border-orange-200',
                  purple: 'bg-purple-50 border-purple-200',
                  yellow: 'bg-yellow-50 border-yellow-200'
                };

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className={`rounded-2xl border ${bgColorMap[infra.color]} p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveInfrastructure(activeInfrastructure === infra.id ? null : infra.id)}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${colorMap[infra.color]} flex items-center justify-center text-white mb-4`}>
                      {infra.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{infra.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{infra.description}</p>

                    <AnimatePresence>
                      {activeInfrastructure === infra.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                            {infra.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className={`${infra.color === 'yellow' ? 'text-amber-500' : `text-${infra.color}-500`}`} size={16} />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      className={`mt-4 text-sm font-semibold ${infra.color === 'yellow' ? 'text-amber-600' : `text-${infra.color}-600`} hover:opacity-70 transition flex items-center gap-1`}
                      onClick={() => setActiveInfrastructure(activeInfrastructure === infra.id ? null : infra.id)}
                    >
                      {activeInfrastructure === infra.id ? 'Voir moins' : 'Voir les détails'}
                      <ChevronRight size={16} className={`transition-transform ${activeInfrastructure === infra.id ? 'rotate-90' : ''}`} />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {infrastructures.slice(3).map((infra, index) => {
                const colorMap = {
                  blue: 'from-blue-500 to-blue-600',
                  green: 'from-green-500 to-green-600',
                  orange: 'from-orange-500 to-orange-600',
                  purple: 'from-purple-500 to-purple-600',
                  yellow: 'from-yellow-500 to-amber-500'
                };
                const bgColorMap = {
                  blue: 'bg-blue-50 border-blue-200',
                  green: 'bg-green-50 border-green-200',
                  orange: 'bg-orange-50 border-orange-200',
                  purple: 'bg-purple-50 border-purple-200',
                  yellow: 'bg-yellow-50 border-yellow-200'
                };

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className={`rounded-2xl border ${bgColorMap[infra.color]} p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveInfrastructure(activeInfrastructure === infra.id ? null : infra.id)}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${colorMap[infra.color]} flex items-center justify-center text-white mb-4`}>
                      {infra.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{infra.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{infra.description}</p>

                    <AnimatePresence>
                      {activeInfrastructure === infra.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                            {infra.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className={`${infra.color === 'yellow' ? 'text-amber-500' : `text-${infra.color}-500`}`} size={16} />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      className={`mt-4 text-sm font-semibold ${infra.color === 'yellow' ? 'text-amber-600' : `text-${infra.color}-600`} hover:opacity-70 transition flex items-center gap-1`}
                      onClick={() => setActiveInfrastructure(activeInfrastructure === infra.id ? null : infra.id)}
                    >
                      {activeInfrastructure === infra.id ? 'Voir moins' : 'Voir les détails'}
                      <ChevronRight size={16} className={`transition-transform ${activeInfrastructure === infra.id ? 'rotate-90' : ''}`} />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Infrastructures supplémentaires */}
         

          {/* Un cadre propice à la réussite */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-yellow-300" size={28} />
              <h3 className="text-2xl md:text-3xl font-bold">Un Cadre Propice à la Réussite</h3>
            </div>
            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Grâce à ses infrastructures adaptées, ses bâtiments sécurisés, ses espaces sportifs et ses
              équipements essentiels, le Groupe Scolaire Ibrahima Baba Kaké offre à ses élèves un cadre
              d'apprentissage favorable à leur épanouissement intellectuel, physique et moral.
            </p>
            <p className="text-blue-200 mt-4 text-sm">
              L'établissement poursuit continuellement ses efforts pour maintenir un environnement éducatif
              de qualité répondant aux exigences de l'enseignement moderne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== VALEURS ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-3">
                NOS VALEURS
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Nos Valeurs Fondamentales
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-gray-100 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {value.icon}
                    </div>
                    <h4 className="font-bold text-blue-900">{value.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== HISTORIQUE & CHIFFRES ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <History className="text-blue-600" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">Notre Histoire</h2>
              </div>

              <div className="space-y-6 relative before:absolute before:left-[18px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-blue-300 before:to-transparent">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg z-10">
                      {event.icon}
                    </div>
                    <div className="bg-gray-50 hover:bg-blue-50 transition-colors rounded-xl p-5 border border-gray-100">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-2">
                        {event.year}
                      </span>
                      <h4 className="text-lg font-bold text-blue-900 mb-1">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Chiffres Clés */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Chiffres Clés</h2>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-center text-blue-500 mb-2">{stat.icon}</div>
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Localisation */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Notre Localisation</h4>
                    <p className="text-gray-700">
                      Commune de Dixinn, Quartier Dixinn-Centre 1, Conakry, République de Guinée
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
  <div className="grid md:grid-cols-2 gap-8">

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h3 className="text-2xl font-bold text-primary">
        📄 Document Important
      </h3>

      <p className="text-gray-700 leading-8">
        La fiche de renseignement est un document indispensable pour
        l'inscription des élèves. Elle contient toutes les informations
        nécessaires concernant l'apprenant et doit être remplie avec soin.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 justify-center"
    >
      {/* Bouton Télécharger */}
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = ficheRenseignement;
          link.download = "fiche-renseignement.pdf";
          link.click();
        }}
        className="group flex items-center justify-center gap-3
        bg-yellow-400 hover:bg-yellow-500
        text-gray-900 font-bold
        px-6 py-4 rounded-xl
        transition-all duration-300
        shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Download
          size={20}
          className="group-hover:-translate-y-1 transition-transform"
        />
        <span>Télécharger la fiche</span>
      </button>

      {/* Bouton Visualiser */}
      <button
        onClick={() => window.open(ficheRenseignement, "_blank")}
        className="group flex items-center justify-center gap-3
        bg-blue-700 hover:bg-blue-800
        text-white font-bold
        px-6 py-4 rounded-xl
        transition-all duration-300
        shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Eye size={20} />
        <span>Visualiser le PDF</span>
      </button>

      <p className="text-sm text-gray-500 text-center">
        📑 Format PDF — Peut être rempli numériquement ou imprimé.
      </p>
    </motion.div>

  </div>
</div>

      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <School className="mx-auto text-blue-300 mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez la Famille du GS_IBK
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
              Découvrez un environnement d'apprentissage d'excellence pour la réussite de vos enfants
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/inscription"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:shadow-2xl transition-all"
              >
                Inscrire maintenant
                <ChevronRight size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APropos;