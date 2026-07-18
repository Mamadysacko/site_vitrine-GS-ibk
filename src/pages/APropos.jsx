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
import imgEcole1 from '../assets/image ecole/image_1.png';
import imgEcole2 from '../assets/image ecole/image_2.png';
import imgEcole3 from '../assets/image ecole/image_3.png';
import imgEcole4 from '../assets/image ecole/image_4.png';
import imgEcole5 from '../assets/image ecole/image_5.png';

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
    { value: '+600', label: 'Élèves Inscrits', color: 'text-blue-600', icon: <Users size={28} /> },
    { value: '+30', label: 'Enseignants Qualifiés', color: 'text-amber-500', icon: <GraduationCap size={28} /> }
  ];

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
    { icon: <Target size={28} />, title: 'Travail', desc: 'L\'effort, la persévérance et le dépassement de soi.', color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/20' },
    { icon: <Shield size={28} />, title: 'Rigueur', desc: 'L\'exigence académique et la recherche de qualité.', color: 'from-indigo-500 to-purple-500', shadow: 'shadow-indigo-500/20' },
    { icon: <CheckCircle size={28} />, title: 'Discipline', desc: 'Le respect des règles et de l\'autorité.', color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/20' }
  ];

  const infrastructureSlides = [
    {
      src: imgEcole1,
      alt: 'Bloc A du groupe scolaire',
      title: 'Bloc A : Primaire et Collège'
    },
    {
      src: imgEcole2,
      alt: 'Bloc B du lycée',
      title: 'Bloc B : Lycée'
    },
    {
      src: imgEcole3,
      alt: 'Centre informatique',
      title: 'Centre Informatique'
    },
    {
      src: imgEcole4,
      alt: 'Terrain multisports',
      title: 'Terrain Multisports'
    },
    {
      src: imgEcole5,
      alt: 'Installations sanitaires',
      title: 'Installations Sanitaires'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % infrastructureSlides.length);
    }, 4500);

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
      image: imgEcole1
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
      image: imgEcole2
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
      image: imgEcole3
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
      image: imgEcole4
    },
    {
      id: 'sanitaires',
      title: 'Installations Sanitaires',
      icon: <Droplet size={28} />,
      color: 'pink',
      description: 'Des installations sanitaires adaptées pour toute la communauté éducative.',
      details: [
        'Toilettes réservées aux élèves',
        'Toilettes pour l\'administration et le personnel',
        'Entretien régulier',
        'Hygiène et confort garantis'
      ],
      image: imgEcole5
    },
    {
      id: 'eau',
      title: 'Approvisionnement en Eau',
      icon: <Droplet size={28} />,
      color: 'cyan',
      description: 'L\'école bénéficie d\'un système d\'approvisionnement en eau potable provenant de la Société des Eaux de Guinée (SEG).',
      details: [
        'Eau potable disponible en continu',
        'Points d\'eau dans tout l\'établissement',
        'Hygiène et santé assurées',
        'Confort des élèves et du personnel'
      ],
      image: imgEcole3
    },
    {
      id: 'electricite',
      title: 'Électrification des Locaux',
      icon: <Zap size={28} />,
      color: 'amber',
      description: 'Toutes les salles de classe ainsi que les bureaux administratifs sont alimentés en électricité grâce au réseau de l\'Électricité de Guinée (EDG).',
      details: [
        'Électricité disponible en continu',
        'Éclairage moderne dans toutes les salles',
        'Équipements électriques fonctionnels',
        'Environnement moderne et efficace'
      ],
      image: imgEcole5
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ==================== HEADER & IMAGE BANNER ==================== */}
      <div className="relative h-[65vh] min-h-[500px] bg-slate-900 overflow-hidden group">
        <AnimatePresence initial={false}>
          <motion.img
            key={infrastructureSlides[activeSlide].src}
            src={infrastructureSlides[activeSlide].src}
            alt={infrastructureSlides[activeSlide].alt}
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
                  PRÉSENTATION DE L'ÉCOLE
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                Notre Histoire & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  Nos Valeurs
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-50/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
                Découvrez l'histoire, la vision et les valeurs qui font la fierté du Groupe Scolaire Ibrahima Baba Kaké.
              </p>

              {/* Navigation dots */}
              <div className="flex gap-3 pt-4">
                {infrastructureSlides.map((slide, index) => (
                  <button
                    key={slide.alt}
                    type="button"
                    aria-label={`Afficher ${slide.title}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                      activeSlide === index ? 'w-10 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==================== PRÉSENTATION DÉTAILLÉE ==================== */}
      <section className="py-24 relative overflow-hidden">
        {/* Cercles de fond */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-20"
          >
            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Groupe Scolaire Ibrahima Baba Kaké
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                <strong className="text-slate-800 font-semibold">Créé en 2001</strong>, le Groupe Scolaire Ibrahima Baba Kaké est un établissement
                d'enseignement général situé au cœur de la <strong className="text-slate-800 font-semibold">Commune de Dixinn</strong>, à Conakry.
                Depuis plus de deux décennies, nous formons des générations d'élèves aux valeurs
                d'excellence, de rigueur et de responsabilité.
              </p>
            </div>

            {/* Héritage du fondateur */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-1 scale-[1.02] opacity-20 group-hover:rotate-2 transition-transform duration-500 blur-sm"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-14 border border-white">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center border-8 border-white shadow-2xl">
                      <Heart className="text-blue-600 w-20 h-20" />
                      <div className="absolute -bottom-4 bg-white px-6 py-2 rounded-full shadow-lg border border-slate-100 font-bold text-slate-800 whitespace-nowrap">
                        Feu Ibrahima Baba Kaké
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Sparkles className="text-amber-500" />
                      L'Héritage d'un Visionnaire
                    </h3>
                    <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-light">
                      <p>
                        Le Groupe Scolaire porte fièrement le nom de son fondateur, un homme profondément attaché à l'éducation et à la transmission du savoir.
                      </p>
                      <p>
                        Convaincu que l'éducation constitue le fondement du développement, il a consacré sa vie
                        à la création d'un cadre d'apprentissage capable de former des citoyens compétents et
                        responsables pour l'avenir de la Guinée.
                      </p>
                      <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-2xl border-l-4 border-blue-500">
                        <p className="text-slate-700 italic">
                          <span className="font-semibold text-blue-800 not-italic">Son héritage perdure.</span> Les valeurs qu'il
                          a incarnées restent profondément ancrées dans la culture de l'établissement, inspirant la
                          direction, les enseignants, les élèves et les parents dans la poursuite de l'excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission et Vision */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Notre Mission</h3>
                </div>
                <ul className="space-y-5 text-lg text-slate-600 relative z-10 font-light">
                  {[
                    "Offrir un enseignement de qualité répondant aux exigences du système éducatif guinéen",
                    "Favoriser l'acquisition de connaissances solides et durables",
                    "Développer l'esprit critique, la créativité et l'autonomie des élèves",
                    "Encourager le respect des valeurs citoyennes et républicaines",
                    "Préparer les apprenants à la réussite académique et professionnelle"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-blue-100 rounded-full text-blue-600 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span className="leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vision */}
              <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl text-white shadow-lg shadow-indigo-500/30">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Notre Vision</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 relative z-10 font-light">
                  Bâtir une institution éducative moderne capable de former des <strong className="font-semibold text-slate-800">leaders</strong>,
                  des <strong className="font-semibold text-slate-800">professionnels compétents</strong> et des <strong className="font-semibold text-slate-800">citoyens responsables</strong>,
                  prêts à contribuer activement au développement de la Guinée et du monde.
                </p>
                <div className="relative bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-2xl p-8 border border-indigo-100/50 z-10">
                  <Quote className="absolute top-4 left-4 text-indigo-200/50 w-12 h-12" />
                  <p className="text-indigo-900 font-medium italic text-center relative z-10 text-xl leading-relaxed">
                    "Devenir un modèle d'excellence éducative reconnu pour la qualité de son enseignement
                    et son innovation pédagogique."
                  </p>
                </div>
              </div>
            </div>

            {/* Cycles d'enseignement */}
            <div className="pt-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  Une Formation Complète du Primaire au Lycée
                </h3>
                <div className="w-16 h-1 bg-slate-300 mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Enseignement Primaire", icon: "📚", color: "emerald", desc: "La base de l'apprentissage : connaissances fondamentales, curiosité intellectuelle et compétences essentielles pour la réussite future." },
                  { title: "Enseignement Collégial", icon: "🎓", color: "blue", desc: "Consolidation des acquis, développement des capacités d'analyse, de réflexion et d'autonomie des élèves." },
                  { title: "Enseignement Lycéen", icon: "⭐", color: "purple", desc: "Préparation aux examens nationaux et aux études supérieures, accompagnement dans la construction du projet académique." }
                ].map((cycle, idx) => (
                  <div key={idx} className={`bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}>
                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-${cycle.color}-400 to-${cycle.color}-600`}></div>
                    <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-bottom-left">{cycle.icon}</div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">{cycle.title}</h4>
                    <p className="text-slate-600 font-light leading-relaxed">{cycle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== INFRASTRUCTURES ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-widest mb-4 border border-blue-100 uppercase">
              Infrastructures
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Nos Installations
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-8" />
            <p className="text-slate-600 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              Le Groupe Scolaire Ibrahima Baba Kaké dispose d'infrastructures modernes et adaptées pour garantir un environnement d'apprentissage sécurisé, confortable et favorable à la réussite.
            </p>
          </motion.div>

          {/* Grille des infrastructures */}
          <div className="space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {infrastructures.slice(0, 3).map((infra, index) => {
                const colors = {
                  blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-100',
                  green: 'from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-100',
                  orange: 'from-amber-500 to-orange-600 text-amber-600 bg-amber-50 border-amber-100',
                  purple: 'from-indigo-500 to-purple-600 text-indigo-600 bg-indigo-50 border-indigo-100',
                  pink: 'from-pink-500 to-rose-600 text-pink-600 bg-pink-50 border-pink-100',
                  cyan: 'from-cyan-500 to-blue-600 text-cyan-600 bg-cyan-50 border-cyan-100',
                  amber: 'from-yellow-500 to-amber-600 text-yellow-600 bg-yellow-50 border-yellow-100'
                }[infra.color];

                const [gradClass, textClass, bgClass, borderClass] = colors.split(' ');

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className={`rounded-3xl border border-slate-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                    onClick={() => setActiveInfrastructure(activeInfrastructure === infra.id ? null : infra.id)}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradClass} flex items-center justify-center text-white mb-6 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {infra.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{infra.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed font-light">{infra.description}</p>

                    <AnimatePresence>
                      {activeInfrastructure === infra.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className={`mt-6 pt-6 border-t ${borderClass} space-y-3`}>
                            {infra.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle className={`${textClass} shrink-0 mt-0.5`} size={18} />
                                <span className="leading-snug">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-6 flex items-center justify-between">
                      <span className={`text-sm font-bold ${textClass} group-hover:underline`}>
                        {activeInfrastructure === infra.id ? 'Masquer les détails' : 'En savoir plus'}
                      </span>
                      <div className={`p-2 rounded-full ${bgClass} ${textClass} transition-transform duration-300 ${activeInfrastructure === infra.id ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {infrastructures.slice(3).map((infra, index) => {
                const colors = {
                  blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-100',
                  green: 'from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-100',
                  orange: 'from-amber-500 to-orange-600 text-amber-600 bg-amber-50 border-amber-100',
                  purple: 'from-indigo-500 to-purple-600 text-indigo-600 bg-indigo-50 border-indigo-100',
                  pink: 'from-pink-500 to-rose-600 text-pink-600 bg-pink-50 border-pink-100',
                  cyan: 'from-cyan-500 to-blue-600 text-cyan-600 bg-cyan-50 border-cyan-100',
                  amber: 'from-yellow-400 to-amber-500 text-amber-600 bg-amber-50 border-amber-100'
                }[infra.color];

                const [gradClass, textClass, bgClass, borderClass] = colors.split(' ');

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className={`rounded-3xl border border-slate-100 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                    onClick={() => setActiveInfrastructure(activeInfrastructure === infra.id ? null : infra.id)}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradClass} flex items-center justify-center text-white mb-5 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {infra.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{infra.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all">{infra.description}</p>

                    <AnimatePresence>
                      {activeInfrastructure === infra.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className={`mt-5 pt-5 border-t ${borderClass} space-y-2`}>
                            {infra.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle className={`${textClass} shrink-0 mt-0.5`} size={16} />
                                <span className="leading-tight">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className={`mt-5 flex items-center gap-1 text-sm font-bold ${textClass}`}>
                      {activeInfrastructure === infra.id ? 'Fermer' : 'Détails'}
                      <ChevronRight size={16} className={`transition-transform duration-300 ${activeInfrastructure === infra.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Un cadre propice à la réussite */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-md mb-8 border border-white/10 shadow-xl">
                <Sparkles className="text-amber-400 w-10 h-10" />
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Un Cadre Propice à la Réussite</h3>
              <p className="text-blue-100/90 max-w-4xl mx-auto text-xl leading-relaxed font-light mb-8">
                Grâce à ses infrastructures adaptées, ses bâtiments sécurisés, ses espaces sportifs et ses
                équipements de qualité, le Groupe Scolaire Ibrahima Baba Kaké offre à ses élèves un environnement
                idéal pour leur épanouissement intellectuel, physique et moral.
              </p>
              <div className="inline-block px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-200 text-sm">
                Une amélioration continue au service de l'excellence
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== VALEURS ==================== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-widest mb-4 border border-blue-200 uppercase">
                Nos Piliers
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Valeurs Fondamentales
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`bg-white rounded-[2rem] p-10 shadow-xl ${value.shadow} border border-slate-100 group relative overflow-hidden transition-all duration-300`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${value.color} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} p-0.5 mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <div className={`bg-clip-text text-transparent bg-gradient-to-br ${value.color}`}>
                          {value.icon}
                        </div>
                      </div>
                    </div>
                    <h4 className="text-3xl font-extrabold text-slate-900 mb-4">{value.title}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed font-light">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== HISTORIQUE & CHIFFRES ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                  <History size={36} />
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Notre Histoire</h2>
              </div>

              <div className="space-y-8 relative before:absolute before:left-[27px] before:top-4 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-transparent before:rounded-full">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-20 group"
                  >
                    <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-inner">
                        {event.icon}
                      </div>
                    </div>
                    <div className="bg-slate-50 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-slate-100">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold mb-4 shadow-md">
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h4>
                      <p className="text-slate-600 leading-relaxed font-light">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Chiffres Clés & Localisation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">Le Groupe en Chiffres</h2>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-center mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">
                      {stat.icon}
                    </div>
                    <div className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-600 mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-500 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Localisation */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 shrink-0">
                    <MapPin className="text-cyan-400" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-white">Notre Localisation</h4>
                    <p className="text-blue-100/80 leading-relaxed text-lg font-light">
                      Commune de Dixinn,<br />
                      Quartier Dixinn-Centre 1,<br />
                      Conakry, République de Guinée
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL & DOCUMENT ==================== */}
      <section className="py-0">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2">
              
              {/* Document Section */}
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-bold mb-6 border border-white/20 backdrop-blur-sm">
                    <FileText size={16} />
                    Document Important
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                    Fiche de Renseignement
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed font-light mb-10 max-w-lg">
                    La fiche de renseignement est un document indispensable pour l'inscription des élèves. Elle contient toutes les informations nécessaires et doit être remplie avec soin.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = ficheRenseignement;
                        link.download = "fiche-renseignement.pdf";
                        link.click();
                      }}
                      className="group flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                      <span>Télécharger (PDF)</span>
                    </button>
                    <button
                      onClick={() => window.open(ficheRenseignement, "_blank")}
                      className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      <Eye size={20} />
                      <span>Visualiser en ligne</span>
                    </button>
                  </div>
                  <p className="text-sm text-blue-200 mt-6 font-light opacity-80">
                    Peut être rempli numériquement ou imprimé.
                  </p>
                </motion.div>
              </div>

              {/* CTA Section */}
              <div className="p-12 md:p-20 bg-slate-900/40 backdrop-blur-sm flex flex-col justify-center text-center lg:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <School className="w-16 h-16 text-cyan-400 mb-8 mx-auto lg:mx-0 opacity-80" />
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                    Rejoignez la Famille<br />du <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">GS_IBK</span>
                  </h2>
                  <p className="text-blue-100/90 text-xl font-light mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Découvrez un environnement d'apprentissage d'excellence pour la réussite de vos enfants.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="/inscription"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all hover:-translate-y-1"
                    >
                      Inscrire maintenant
                      <ChevronRight size={20} className="text-blue-600" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                      Nous contacter
                    </a>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;