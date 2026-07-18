import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Users,
  GraduationCap,
  Award,
  School,
  TrendingUp,
  Heart,
  Target,
  Eye,
  BookOpen,
  Shield,
  Dumbbell,
  Palette,
  Quote,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  CheckCircle,
  Monitor,
  Sparkles,
  Download,
  FileText,
} from 'lucide-react';
import fondateurImg from '../assets/fondateur.png';
import ficheRenseignement from '../assets/fiche-renseignement.pdf';
import imgEcole1 from '../assets/image ecole/image_1.png';
import imgEcole2 from '../assets/image ecole/image_2.png';
import imgEcole3 from '../assets/image ecole/image_3.png';
import imgEcole4 from '../assets/image ecole/image_4.png';
import imgEcole5 from '../assets/image ecole/image_5.png';
// ========================
// COMPOSANT HERO SECTION
// ========================
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [imgEcole1, imgEcole2, imgEcole3, imgEcole4, imgEcole5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const decorativeDots = Array.from({ length: 20 }, (_, i) => ({
    x: (i % 5) * 20 + 5,
    y: (i % 4) * 20 + 5,
    duration: 10 + (i % 5) * 2,
    delay: (i % 6) * 1.2,
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-black/40 z-10" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Groupe Scolaire Ibrahima Baba Kaké"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        {decorativeDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: dot.x,
              y: dot.y,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-1 bg-blue-500 rounded-full" />
              <span className="uppercase tracking-widest text-sm font-bold text-blue-200 drop-shadow-md flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Établissement d'excellence depuis 2001
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg"
            >
              Groupe Scolaire <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Ibrahima Baba Kaké
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              {['TRAVAIL', 'RIGUEUR', 'DISCIPLINE'].map((value, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-semibold tracking-wider"
                >
                  {value}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100/90 mb-8 leading-relaxed max-w-2xl"
            >
              Former aujourd'hui les leaders de demain grâce à une éducation d'excellence,
              alliant rigueur académique et développement personnel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
             
              <Link
                to="/a-propos"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Découvrir l'école
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20"
            >
              {[
                { value: '+7000', label: 'Élèves formés' },
                { value: '+30', label: 'Enseignants' },
                { value: '85%', label: 'Taux de réussite' },
                { value: '2001', label: 'Année de création' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ========================
// COMPOSANT STATS
// ========================
const KeyStats = () => {
  const examStats = [
    {
      exam: "CEE",
      icon: Award,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      stats: {
        inscrit: 285,
        filles: 138,
        admis: 274,
        fillesAdmises: 133,
        taux: 96,
      }
    },
    {
      exam: "BEPC",
      icon: BookOpen,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      stats: {
        inscrit: 260,
        filles: 120,
        admis: 245,
        fillesAdmises: 114,
        taux: 94,
      }
    },
    {
      exam: "BAC",
      icon: GraduationCap,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      items: [
        {
          title: "Sciences Mathématiques",
          inscrit: 180,
          filles: 82,
          admis: 171,
          fillesAdmises: 79,
          taux: 95,
        },
        {
          title: "Sciences Sociales",
          inscrit: 160,
          filles: 75,
          admis: 151,
          fillesAdmises: 71,
          taux: 94,
        },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const StatCard = ({ stat }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", damping: 15, stiffness: 300 }
      }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Gradient Background Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className={`inline-flex items-center gap-2 px-3 py-1 ${stat.bgColor} rounded-full text-xs font-semibold text-gray-700`}>
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.color}`} />
              {stat.exam}
            </span>
          </div>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
            <stat.icon size={22} />
          </div>
        </div>

        {stat.items ? (
          // BAC with specializations
          <div className="space-y-4">
            {stat.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl ${stat.bgColor} border ${stat.borderColor} p-5 hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-gray-800">{item.title}</h4>
                  <span className="text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">
                    {item.taux}%
                  </span>
                </div>
                
                <div className="grid grid-cols-4 gap-3">
                  <StatItem 
                    icon={<Users size={14} />} 
                    label="Inscrits" 
                    value={item.inscrit}
                    color="text-blue-600"
                  />
                  <StatItem 
                    icon={<CheckCircle size={14} />} 
                    label="Admis" 
                    value={item.admis}
                    color="text-green-600"
                  />
                  <StatItem 
                    icon={<User size={14} />} 
                    label="Filles insc." 
                    value={item.filles}
                    color="text-pink-600"
                  />
                  <StatItem 
                    icon={<User size={14} />} 
                    label="Filles adm." 
                    value={item.fillesAdmises}
                    color="text-purple-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // CEE & BEPC
          <>
            {/* Main Stat */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${stat.color} opacity-10 absolute -top-2 -left-2`} />
                <div className="relative flex items-center justify-center">
                  <span className="text-5xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-gray-900 to-gray-700">
                    {stat.stats.taux}%
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 mt-1">Taux de réussite</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <StatItem 
                icon={<Users size={16} />}
                label="Total inscrits"
                value={stat.stats.inscrit}
                color="text-blue-600"
              />
              <StatItem 
                icon={<CheckCircle size={16} />}
                label="Total admis"
                value={stat.stats.admis}
                color="text-green-600"
              />
              <StatItem 
                icon={<User size={16} />}
                label="Filles inscrites"
                value={stat.stats.filles}
                color="text-pink-600"
              />
              <StatItem 
                icon={<User size={16} />}
                label="Filles admises"
                value={stat.stats.fillesAdmises}
                color="text-purple-600"
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );

  const StatItem = ({ icon, label, value, color }) => (
    <div className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className={`flex items-center justify-center ${color} mb-1`}>
        {icon}
      </div>
      <p className="text-lg font-bold text-gray-800">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
        {label}
      </p>
    </div>
  );

  return (
    <section className="py-14 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 rounded-full text-sm font-semibold text-blue-700 mb-4">
            <TrendingUp size={16} />
            <span>STATISTIQUES D'EXAMEN</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Résultats aux examens
            <span className="block text-blue-600 mt-2">Nationaux</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
            <div className="h-1 w-4 bg-blue-400 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" />
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Découvrez nos performances exceptionnelles aux examens nationaux, 
            avec un accent particulier sur la réussite des filles.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {examStats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <span className="text-sm text-gray-600">
              🎯 Taux de réussite global : 
            </span>
            <span className="text-sm font-bold text-blue-600">95%</span>
            <span className="w-px h-4 bg-gray-200 mx-2" />
            <span className="text-sm text-gray-600">
              👩‍🎓 Réussite des filles : 
            </span>
            <span className="text-sm font-bold text-pink-600">92%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ========================
// COMPOSANT MOT DE BIENVENUE
// ========================
const MotDeBienvenue = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-1.5 bg-white border border-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-widest shadow-sm mb-4 uppercase">
            Mot de Bienvenue
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Bienvenue au <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">GS_IBK</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-slate-600">
              <p className="leading-relaxed">
                <strong className="text-blue-900 font-semibold">Créé en 2001</strong>, le Groupe Scolaire Ibrahima Baba Kaké
                est un établissement d'enseignement général de référence situé au cœur de la <strong className="text-slate-800">Commune de Dixinn</strong>,
                à Conakry, en République de Guinée.
              </p>
              <p className="leading-relaxed mt-4">
                Depuis plus de deux décennies, notre institution œuvre avec passion et détermination pour offrir
                aux enfants et aux jeunes une éducation d'excellence, solidement ancrée dans les valeurs du travail,
                de la rigueur et de la discipline.
              </p>
              <p className="leading-relaxed mt-4">
                Notre ambition primordiale est de préparer chaque apprenant à affronter avec succès les défis académiques,
                professionnels et sociaux du monde contemporain, tout en forgeant son sens de la responsabilité et son esprit citoyen.
              </p>
            </div>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl shadow-md shadow-blue-900/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-blue-50 group"
            >
              Découvrir notre histoire
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {/* Mission Card */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-2xl group-hover:w-2 transition-all duration-300" />
              <div className="flex items-start gap-5">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-inner">
                  <Target size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Notre Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Assurer une formation complète et équilibrée qui garantit la réussite académique
                    ainsi que l'épanouissement moral, intellectuel, culturel et social de chaque élève.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-l-2xl group-hover:w-2 transition-all duration-300" />
              <div className="flex items-start gap-5">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shadow-inner">
                  <Eye size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">Notre Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Bâtir une institution éducative d'avant-garde, formatrice de leaders, de professionnels
                    compétents et de citoyens éclairés, prêts à dynamiser le développement de la Guinée.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: Heart, label: 'TRAVAIL', color: 'text-rose-500', bg: 'bg-rose-50', hover: 'hover:border-rose-200 hover:shadow-rose-100' },
                { icon: BookOpen, label: 'RIGUEUR', color: 'text-blue-600', bg: 'bg-blue-50', hover: 'hover:border-blue-200 hover:shadow-blue-100' },
                { icon: Award, label: 'DISCIPLINE', color: 'text-amber-500', bg: 'bg-amber-50', hover: 'hover:border-amber-200 hover:shadow-amber-100' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`bg-white rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 shadow-md shadow-slate-200/50 border border-slate-100 ${item.hover} hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className={`${item.color} ${item.bg} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                    <item.icon size={26} strokeWidth={2} />
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 tracking-widest">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ========================
// COMPOSANT POURQUOI CHOISIR
// ========================
const PourquoiChoisir = () => {
  const reasons = [
    { 
      icon: Award, 
      title: 'Excellence Académique', 
      description: 'Des résultats exceptionnels aux examens nationaux avec un taux de réussite de 98%, plaçant nos élèves parmi les meilleurs.', 
      color: 'gold',
      stat: '98%',
      statLabel: 'Taux de réussite',
      gradient: 'from-amber-400 to-orange-500',
      iconBg: 'bg-amber-50 text-amber-600',
      shadow: 'shadow-amber-500/20'
    },
    { 
      icon: Shield, 
      title: 'Sécurité Maximale', 
      description: 'Un établissement entièrement sécurisé avec un système de vidéosurveillance 24h/24 et un personnel dédié à la protection.', 
      color: 'red',
      stat: '24/7',
      statLabel: 'Surveillance active',
      gradient: 'from-rose-400 to-red-500',
      iconBg: 'bg-rose-50 text-rose-600',
      shadow: 'shadow-rose-500/20'
    },
    { 
      icon: Users, 
      title: 'Encadrement Qualifié', 
      description: 'Une équipe pédagogique expérimentée et dévouée, composée de professeurs hautement qualifiés et passionnés.', 
      color: 'blue',
      stat: '100%',
      statLabel: 'Enseignants diplômés',
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-50 text-blue-600',
      shadow: 'shadow-blue-500/20'
    },
    { 
      icon: Monitor, 
      title: 'Pôle Technologique', 
      description: 'Un centre informatique moderne dédié aux élèves, offrant une formation de pointe pour maîtriser les outils de demain.', 
      color: 'cyan',
      stat: '200+',
      statLabel: 'Postes informatiques',
      gradient: 'from-cyan-400 to-blue-500',
      iconBg: 'bg-cyan-50 text-cyan-600',
      shadow: 'shadow-cyan-500/20'
    },
    { 
      icon: Dumbbell, 
      title: 'Activités Sportives', 
      description: 'Des infrastructures de qualité et des compétitions régulières pour développer le leadership, l\'esprit d\'équipe et la santé.', 
      color: 'green',
      stat: '15+',
      statLabel: 'Disciplines sportives',
      gradient: 'from-emerald-400 to-green-500',
      iconBg: 'bg-emerald-50 text-emerald-600',
      shadow: 'shadow-emerald-500/20'
    },
    { 
      icon: Palette, 
      title: 'Arts & Culture', 
      description: 'Des clubs artistiques et culturels variés pour révéler les talents créatifs et favoriser l\'épanouissement personnel de chacun.', 
      color: 'purple',
      stat: '20+',
      statLabel: 'Clubs et activités',
      gradient: 'from-purple-500 to-fuchsia-500',
      iconBg: 'bg-purple-50 text-purple-600',
      shadow: 'shadow-purple-500/20'
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-blue-700 mb-6 shadow-sm uppercase tracking-wide">
            <Sparkles size={18} className="text-blue-500" />
            <span>Pourquoi Nous Choisir</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Les Atouts de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">L'Excellence</span>
          </h2>
          
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Découvrez les avantages exclusifs qui font du GS_IBK un établissement de premier plan, 
            combinant un environnement sécurisé, une innovation pédagogique et un encadrement sur mesure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 border border-slate-100 hover:-translate-y-1.5"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gradient-to-r ${reason.gradient} rounded-b-full opacity-0 group-hover:opacity-100 group-hover:w-1/2 transition-all duration-500`} />
              
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${reason.iconBg} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner`}>
                    <reason.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <div className={`px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-center`}>
                    <span className={`block text-xl font-black bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                      {reason.stat}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5 block">
                      {reason.statLabel}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ========================
// COMPOSANT NOS CYCLES
// ========================
const NosCycles = () => {
  const cycles = [
    { 
      icon: BookOpen, 
      title: 'Primaire', 
      subtitle: 'Cycle Fondamental', 
      description: 'Développement des bases fondamentales en lecture, écriture, calcul et éveil intellectuel dans un cadre bienveillant.',
      classes: 'Maternelle - 6ème', 
      gradient: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50',
      textLight: 'text-emerald-700'
    },
    { 
      icon: School, 
      title: 'Collège', 
      subtitle: 'Cycle Moyen', 
      description: 'Renforcement des connaissances, développement de l\'esprit critique et des capacités d\'analyse scientifique et littéraire.', 
      classes: '7ème - 10ème', 
      gradient: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50',
      textLight: 'text-blue-700'
    },
    { 
      icon: GraduationCap, 
      title: 'Lycée', 
      subtitle: 'Cycle Supérieur', 
      description: 'Préparation intensive aux examens nationaux et orientation vers les études supérieures avec un tutorat personnalisé.', 
      classes: '11ème - Terminale', 
      gradient: 'from-purple-500 to-fuchsia-600',
      bgLight: 'bg-purple-50',
      textLight: 'text-purple-700'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-bl-[100%] z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 rounded-tr-[100%] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-widest shadow-sm mb-4 uppercase">
            Formation Complète
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Nos Cycles d'Enseignement
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Un parcours éducatif d'excellence, pensé pour accompagner l'évolution intellectuelle 
            et personnelle de votre enfant, de la maternelle jusqu'au baccalauréat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cycles.map((cycle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative h-full"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full group-hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${cycle.gradient} p-8 text-white relative overflow-hidden`}>
                  {/* Background circles */}
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black/10 rounded-full blur-xl" />
                  
                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <cycle.icon size={32} className="text-white" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-white/20">
                        {cycle.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-extrabold mb-1">{cycle.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                    {cycle.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Niveaux</div>
                      <div className={`font-bold ${cycle.textLight} bg-opacity-20 px-4 py-1.5 rounded-lg ${cycle.bgLight}`}>
                        {cycle.classes}
                      </div>
                    </div>
                    <Link to="/niveaux" className={`w-12 h-12 rounded-full ${cycle.bgLight} flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300`}>
                      <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========================
// COMPOSANT MOT DU FONDATEUR
// ========================
const MotFondateur = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={imgEcole2} alt="GS IBK Campus" className="w-full h-full object-cover opacity-20 filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/90" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] z-0" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:w-2/5"
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-40 animate-pulse" />
              
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-blue-500 via-indigo-400 to-white/20">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-slate-900 bg-slate-800">
                  <img src={fondateurImg} alt="Feu Ibrahima Baba Kaké" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-slate-700 px-8 py-3 rounded-full shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-bold tracking-widest text-slate-200">1940 - 2015</span>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold tracking-widest text-blue-300 uppercase mb-6">
                <Award size={14} /> Hommage au Fondateur
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Feu Ibrahima Baba Kaké
              </h2>
              <div className="text-xl text-blue-400 font-medium">Visionnaire & Éducateur</div>
            </div>

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <Quote className="absolute top-6 right-8 text-white/10" size={80} />
              <p className="text-xl md:text-2xl leading-relaxed text-slate-300 italic font-medium relative z-10">
                "L'éducation n'est pas seulement l'apprentissage de faits, mais la formation de l'esprit à penser. Chaque enfant qui franchit nos portes porte en lui l'avenir de notre nation."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-slate-300 leading-relaxed">
              <p>
                En 2001, animé par une passion inébranlable pour la jeunesse et l'éducation, 
                <strong className="text-white font-bold"> Elhadj Ibrahima Baba Kaké</strong> a fondé cet établissement avec un objectif clair : 
                offrir un cadre d'excellence accessible.
              </p>
              <p>
                Aujourd'hui, son héritage continue de rayonner. Les valeurs de <span className="text-blue-400 font-semibold">rigueur</span>, de <span className="text-blue-400 font-semibold">travail</span> et 
                de <span className="text-blue-400 font-semibold">discipline</span> qu'il a insufflées restent le socle de notre projet éducatif.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 font-medium">
                <Heart size={16} className="text-rose-500" /> Passion
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 font-medium">
                <Target size={16} className="text-indigo-400" /> Vision
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 font-medium">
                <Award size={16} className="text-amber-400" /> Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ========================
// COMPOSANT FICHE RENSEIGNEMENT
// ========================


// ========================
// COMPOSANT PRINCIPAL ACCUEIL
// ========================
const Accueil = () => {
  return (
    <>
      <HeroSection />
      <KeyStats />
      <MotDeBienvenue />
      <PourquoiChoisir />
      <NosCycles />
      <MotFondateur />
     
    </>
  );
};

export default Accueil;