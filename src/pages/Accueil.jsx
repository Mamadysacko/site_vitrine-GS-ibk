import { useState } from 'react';
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
} from 'lucide-react';
// ========================
// COMPOSANT HERO SECTION
// ========================
const HeroSection = () => {
  const decorativeDots = Array.from({ length: 20 }, (_, i) => ({
    x: (i % 5) * 20 + 5,
    y: (i % 4) * 20 + 5,
    duration: 10 + (i % 5) * 2,
    delay: (i % 6) * 1.2,
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
          alt="Groupe Scolaire Ibrahima Baba Kaké"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent z-10" />
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Établissement d'excellence depuis 2001
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
            >
              Groupe Scolaire
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-3">
            MOT DE BIENVENUE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Bienvenue au GS_IBK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-blue-800">Créé en 2001</strong>, le Groupe Scolaire Ibrahima Baba Kaké
              est un établissement d'enseignement général situé au cœur de la <strong>Commune de Dixinn</strong>,
              à Conakry, en République de Guinée.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Depuis plusieurs années, notre établissement œuvre avec détermination pour offrir
              aux enfants et aux jeunes une éducation de qualité fondée sur les valeurs du travail,
              de la rigueur et de la discipline.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Notre ambition est de préparer chaque apprenant à relever les défis académiques,
              professionnels et sociaux du monde moderne tout en développant son sens de la
              responsabilité et de la citoyenneté.
            </p>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group"
            >
              En savoir plus sur notre histoire
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Notre Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Assurer une formation complète et équilibrée qui favorise la réussite académique
                ainsi que le développement moral, intellectuel, culturel et social de chaque apprenant.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Notre Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Bâtir une institution éducative moderne capable de former des leaders, des professionnels
                compétents et des citoyens responsables, prêts à contribuer activement au développement
                de la Guinée et du monde.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
  { icon: Heart, label: 'TRAVAIL', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: BookOpen, label: 'RIGUEUR', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Award, label: 'DISCIPLINE', color: 'text-amber-500', bg: 'bg-amber-50' },
].map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -4, scale: 1.02 }}
    className={`${item.bg} rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 hover:shadow-md border border-transparent hover:border-${item.color.replace('text-', '')}`}
  >
    <div className={`${item.color} flex items-center justify-center mx-auto mb-2`}>
      <item.icon size={24} strokeWidth={1.5} />
    </div>
    <span className="text-sm font-bold text-gray-700 tracking-wider">{item.label}</span>
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
      statLabel: 'Taux de réussite'
    },
    { 
      icon: Shield, 
      title: 'Sécurité et Surveillance', 
      description: 'Un établissement entièrement sécurisé avec un système de vidéosurveillance 24h/24 et un personnel dédié à la protection des élèves.', 
      color: 'red',
      stat: '24/7',
      statLabel: 'Surveillance continue'
    },
    { 
      icon: Users, 
      title: 'Encadrement Qualifié', 
      description: 'Une équipe pédagogique expérimentée et dévouée, composée de professeurs hautement qualifiés et passionnés par la transmission du savoir.', 
      color: 'blue',
      stat: '100%',
      statLabel: 'Enseignants diplômés'
    },
    { 
      icon: Monitor, 
      title: 'Centre d\'Information et de Formation', 
      description: 'Un centre informatique moderne dédié aux élèves et au personnel, offrant une formation technologique de pointe pour maîtriser les outils numériques.', 
      color: 'cyan',
      stat: '200+',
      statLabel: 'Postes informatiques'
    },
    { 
      icon: Dumbbell, 
      title: 'Activités Sportives', 
      description: 'Des infrastructures sportives de qualité et des compétitions régulières pour développer l\'esprit d\'équipe et la santé physique.', 
      color: 'green',
      stat: '15+',
      statLabel: 'Disciplines sportives'
    },
    { 
      icon: Palette, 
      title: 'Activités Culturelles et Artistiques', 
      description: 'Des clubs artistiques et culturels variés pour révéler les talents créatifs et favoriser l\'épanouissement personnel des élèves.', 
      color: 'purple',
      stat: '20+',
      statLabel: 'Activités culturelles'
    }
  ];

  const colorClasses = {
    gold: 'from-yellow-400 to-amber-500',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-400 to-green-500',
    red: 'from-red-500 to-red-600',
    cyan: 'from-cyan-500 to-sky-600',
    indigo: 'from-indigo-500 to-indigo-600',
    orange: 'from-orange-400 to-orange-500',
    purple: 'from-purple-500 to-purple-600'
  };

  const bgColors = {
    gold: 'bg-yellow-100 text-yellow-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  const borderColors = {
    gold: 'border-yellow-200',
    blue: 'border-blue-200',
    green: 'border-green-200',
    red: 'border-red-200',
    cyan: 'border-cyan-200',
    indigo: 'border-indigo-200',
    orange: 'border-orange-200',
    purple: 'border-purple-200'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 rounded-full text-sm font-semibold text-blue-700 mb-4">
            <Sparkles size={16} />
            <span>POURQUOI NOUS CHOISIR</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Les Atouts du <span className="text-blue-600">GS_IBK</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
            <div className="h-1 w-4 bg-blue-400 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" />
          </div>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Découvrez les atouts qui font du GS_IBK un établissement d'excellence, 
            alliant sécurité, innovation technologique et formation de qualité.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[reason.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px' }}>
                <div className="absolute inset-0 bg-white rounded-2xl" />
              </div>
              
              {/* Left Accent Bar */}
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${colorClasses[reason.color]} rounded-l-2xl group-hover:w-2 transition-all duration-300`} />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className={`p-3 rounded-2xl ${bgColors[reason.color]} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                    <reason.icon size={24} strokeWidth={1.8} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                {/* Stats Badge */}
                <div className={`mt-4 flex items-center justify-between pt-4 border-t ${borderColors[reason.color]}`}>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {reason.statLabel}
                  </span>
                  <span className={`text-sm font-extrabold bg-gradient-to-r ${colorClasses[reason.color]} bg-clip-text text-transparent`}>
                    {reason.stat}
                  </span>
                </div>
              </div>
              
              {/* Background Glow Effect */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-r ${colorClasses[reason.color]} rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="text-green-500" size={20} />
              <span className="font-medium">Sécurité garantie</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Monitor className="text-cyan-500" size={20} />
              <span className="font-medium">Technologie de pointe</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="text-blue-500" size={20} />
              <span className="font-medium">Encadrement personnalisé</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="text-amber-500" size={20} />
              <span className="font-medium">Excellence académique</span>
            </div>
          </div>
          
          {/* Additional Info */}
          <p className="mt-6 text-sm text-gray-500 max-w-2xl mx-auto">
            Rejoignez une communauté éducative d'excellence où chaque élève est accompagné 
            vers la réussite dans un environnement sécurisé et moderne.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
// ========================
// COMPOSANT NOS CYCLES
// ========================
const NosCycles = () => {
  const cycles = [
    { icon: BookOpen, title: 'Primaire', subtitle: 'Cycle Fondamental', description: 'Développement des bases fondamentales en lecture, écriture, calcul et éveil intellectuel.',classes: 'Maternelle - 6ème', color: 'green' },
    { icon: School, title: 'Collège', subtitle: 'Cycle Moyen', description: 'Renforcement des connaissances et développement des capacités d\'analyse et de réflexion.', classes: '7ème - 10ème', color: 'blue' },
    { icon: GraduationCap, title: 'Lycée', subtitle: 'Cycle Supérieur', description: 'Préparation aux examens nationaux et aux études supérieures avec un accompagnement personnalisé.', classes: '11ème - Terminale', color: 'purple' }
  ];

  const colorClasses = {
    green: 'from-green-400 to-green-600',
    blue: 'from-blue-500 to-blue-700',
    purple: 'from-purple-500 to-purple-700'
  };

  const bgColors = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <section className="py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-3">
            FORMATION COMPLÈTE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Nos Cycles d'Enseignement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Un parcours éducatif continu du primaire au lycée pour former les leaders de demain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cycles.map((cycle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`bg-gradient-to-r ${colorClasses[cycle.color]} p-6 text-white relative`}>
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute -bottom-6 left-6">
                    <div className={`p-3 rounded-xl ${bgColors[cycle.color]} shadow-lg`}>
                      <cycle.icon size={28} />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">{cycle.subtitle}</div>
                    <div className="text-2xl font-bold">{cycle.title}</div>
                  </div>
                </div>
                <div className="p-6 pt-8 space-y-4">
                  <p className="text-gray-600 leading-relaxed">{cycle.description}</p>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">

                    <div>
                      <div className="text-xs text-gray-500">Classes</div>
                      <div className="font-semibold text-gray-800">{cycle.classes}</div>
                    </div>
                  </div>
                  <Link to="/niveaux" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
                    En savoir plus
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
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
  const founderDots = Array.from({ length: 30 }, (_, i) => ({
    x: (i % 10) * 10,
    y: (i % 6) * 16,
    duration: 15 + (i % 6) * 2,
    delay: (i % 8) * 1.2,
  }));

  return (
    <section className="py-14 md:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {founderDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{ x: dot.x, y: dot.y }}
            animate={{ y: [null, -200, null], opacity: [0, 1, 0] }}
            transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider border border-white/20">
            HOMMAGE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Mot du Fondateur</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 blur-2xl" />
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Feu Ibrahima Baba Kaké" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                <span className="text-sm font-semibold">2001 - 2025</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 space-y-6"
          >
            <div className="flex items-start gap-4">
              <Quote className="text-blue-300/50 flex-shrink-0" size={40} />
              <p className="text-xl leading-relaxed text-blue-100 italic">
                "L'éducation est le fondement du développement d'une nation. Chaque enfant mérite
                une chance de réaliser son plein potentiel."
              </p>
            </div>
            <div className="space-y-4 text-blue-200">
              <p>
                <strong className="text-white">Feu Ibrahima Baba Kaké</strong>, fondateur du Groupe Scolaire,
                a consacré sa vie à la création d'un cadre d'apprentissage capable de former des
                générations de citoyens compétents, responsables et engagés pour l'avenir de la Guinée.
              </p>
              <p>
                Son engagement, sa vision et son amour pour la jeunesse ont permis la naissance
                d'une institution qui continue aujourd'hui à transmettre les mêmes idéaux d'excellence
                et de persévérance.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
              {[
                { icon: Heart, label: 'Amour du Savoir' },
                { icon: Award, label: 'Excellence' },
                { icon: Target, label: 'Vision' },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                  <item.icon className="mx-auto mb-1 text-blue-300" size={20} />
                  <span className="text-xs font-semibold text-blue-200">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-blue-300 mt-4">
              <strong>Son héritage perdure.</strong> Les valeurs qu'il a incarnées restent profondément
              ancrées dans la culture de l'établissement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ========================
// COMPOSANT GALERIE PHOTOS
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