import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Briefcase,
  Award,
  Users,
  GraduationCap,
  BookOpen,
  Heart,
  Star,
  Quote,
  ChevronRight,
  Phone,
  X,
  Search,
  MessageCircle,
  School,
  Shield,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
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

// Données de l'organigramme
const organigrammeData = [
  {
    role: 'Directeur Général',
    prenom: 'Léonard',
    nom: 'Soumah',
    fullName: 'Léonard Soumah',
    tel: '+224 624 24 56 24',
    email: 'leonard.soumah@gsibk.edu',
    experience: '15 ans d’expérience',
    presentation: 'Directeur général de l’établissement, il pilote la vision stratégique et assure la bonne coordination entre les équipes académiques, administratives et pédagogiques.',
    professionalExperiences: [
      'Directeur général du Groupe Scolaire IBK depuis 2018',
      'Responsable de la mise en place de la politique d’excellence académique',
      'Coordinateur de projets institutionnels et de développement de l’établissement'
    ],
    diplomas: [
      'Master en Management Éducatif',
      'Diplôme de gestion de structures scolaires'
    ],
    missions: [
      'Orienter la stratégie globale de l’établissement',
      'Assurer le suivi de la qualité pédagogique et administrative',
      'Renforcer la cohésion entre les différents services'
    ],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    icon: <Briefcase size={24} />,
    color: 'from-blue-600 to-blue-800'
  },
  {
    role: 'Directrice des Études',
    prenom: 'Awa',
    nom: 'Bamba',
    fullName: 'Awa Bamba',
    tel: '+224 620 123 450',
    email: 'awa.bamba@gsibk.edu',
    experience: '12 ans d’expérience',
    presentation: 'Directrice des études, elle supervise le pilotage pédagogique des cycles primaire, collège et lycée avec une forte attention à l’accompagnement des élèves.',
    professionalExperiences: [
      'Directrice des études au GS_IBK depuis 2016',
      'Responsable des programmes pédagogiques et des évaluations',
      'Formatrice des enseignants sur les méthodes d’enseignement innovantes'
    ],
    diplomas: [
      'Master en Sciences de l’Éducation',
      'Certificat en supervision pédagogique'
    ],
    missions: [
      'Veiller à la qualité pédagogique des parcours scolaires',
      'Coordonner les actions de suivi des apprentissages',
      'Accompagner l’innovation pédagogique'
    ],
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    icon: <GraduationCap size={24} />,
    color: 'from-purple-600 to-purple-800'
  },
  {
    role: 'Surveillant Général',
    prenom: 'Marc',
    nom: 'Soro',
    fullName: 'Marc Soro',
    tel: '+224 621 123 451',
    email: 'marc.soro@gsibk.edu',
    experience: '10 ans d’expérience',
    presentation: 'Surveillant général, il veille au bon fonctionnement de la discipline, de la sécurité et de l’organisation du cadre scolaire au quotidien.',
    professionalExperiences: [
      'Surveillant général depuis 2017',
      'Coordinateur de la sécurité et de la discipline scolaire',
      'Responsable de l’accompagnement des élèves dans l’encadrement quotidien'
    ],
    diplomas: [
      'Licence en Administration Éducative',
      'Formation en gestion de la discipline scolaire'
    ],
    missions: [
      'Veiller au respect des règles de vie',
      'Assurer la sécurité et la discipline au sein de l’établissement',
      'Appuyer la coordination avec les familles et les enseignants'
    ],
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    icon: <Shield size={24} />,
    color: 'from-green-600 to-green-800'
  },
  {
    role: 'Responsable Pédagogique',
    prenom: 'Sarah',
    nom: 'Touré',
    fullName: 'Sarah Touré',
    tel: '+224 622 123 452',
    email: 'sarah.toure@gsibk.edu',
    experience: '9 ans d’expérience',
    presentation: 'Responsable pédagogique, elle accompagne les enseignants dans l’amélioration des pratiques et la mise en œuvre d’un enseignement de qualité.',
    professionalExperiences: [
      'Responsable pédagogique depuis 2019',
      'Conseillère en développement des compétences pédagogiques',
      'Mise en place de projets de renforcement des apprentissages'
    ],
    diplomas: [
      'Master en Pédagogie',
      'Formation en ingénierie pédagogique'
    ],
    missions: [
      'Accompagner les enseignants dans leurs pratiques',
      'Concevoir et suivre les actions pédagogiques',
      'Favoriser l’amélioration continue des apprentissages'
    ],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    icon: <BookOpen size={24} />,
    color: 'from-orange-600 to-orange-800'
  }
];

// Données des enseignants par cycle
const enseignantsData = [
  {
    cycle: 'Enseignants du Primaire',
    icon: <BookOpen size={20} />,
    members: [
      { 
        name: 'Mme. Yao Marie', 
        fonction: 'Institutrice Principale',
        matiere: 'Tronc Commun',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&q=80', 
        diplome: 'Licence en Éducation Préscolaire',
        experience: '8 ans',
        phone: '+224 620 123 461',
        email: 'maternelle@gsibk.edu',
        specialite: 'Spécialiste du développement cognitif chez les jeunes enfants'
      },
      { 
        name: 'M. Koffi Eric', 
        fonction: 'Instituteur',
        matiere: 'Tronc Commun',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80', 
        diplome: 'Licence en Enseignement Primaire',
        experience: '5 ans',
        phone: '+224 620 123 467',
        email: 'primaire@gsibk.edu',
        specialite: 'Pédagogie active et apprentissage par projet'
      },
      { 
        name: 'Mme. Diallo Aminata', 
        fonction: 'Institutrice',
        matiere: 'Tronc Commun',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80', 
        diplome: 'Licence en Éducation de Base',
        experience: '6 ans',
        phone: '+224 620 123 468',
        email: 'primaire2@gsibk.edu',
        specialite: 'Remédiation scolaire et soutien personnalisé'
      }
    ]
  },
  {
    cycle: 'Enseignants du Collège',
    icon: <School size={20} />,
    members: [
      { 
        name: 'M. Koné Ali', 
        fonction: 'Professeur Principal',
        matiere: 'Mathématiques',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80', 
        diplome: 'Maîtrise en Mathématiques',
        experience: '12 ans',
        phone: '+224 620 123 458',
        email: 'maths@gsibk.edu',
        specialite: 'Responsable du cycle Collège'
      },
      { 
        name: 'Mme. Touré Sarah', 
        fonction: 'Professeur',
        matiere: 'Français / Lettres',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80', 
        diplome: 'Master en Lettres Modernes',
        experience: '10 ans',
        phone: '+224 620 123 459',
        email: 'lettres@gsibk.edu',
        specialite: 'Passionnée de littérature classique et contemporaine'
      },
      { 
        name: 'M. Camara Ousmane', 
        fonction: 'Professeur',
        matiere: 'Histoire-Géographie',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80', 
        diplome: 'Master en Histoire',
        experience: '11 ans',
        phone: '+224 620 123 462',
        email: 'histoire@gsibk.edu',
        specialite: 'Passionné d\'histoire africaine et de géopolitique'
      },
      { 
        name: 'M. Diabaté Youssef', 
        fonction: 'Professeur',
        matiere: 'Sciences de la Vie',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80', 
        diplome: 'Doctorat en Sciences',
        experience: '14 ans',
        phone: '+224 620 123 460',
        email: 'sciences@gsibk.edu',
        specialite: 'Ancien chercheur, rend les sciences accessibles'
      }
    ]
  },
  {
    cycle: 'Enseignants du Lycée',
    icon: <GraduationCap size={20} />,
    members: [
      { 
        name: 'M. Koné Ali', 
        fonction: 'Professeur Principal',
        matiere: 'Mathématiques',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80', 
        diplome: 'Agrégation de Mathématiques',
        experience: '12 ans',
        phone: '+224 620 123 458',
        email: 'mathslycee@gsibk.edu',
        specialite: 'Préparation aux concours et examens nationaux'
      },
      { 
        name: 'M. Diabaté Youssef', 
        fonction: 'Professeur',
        matiere: 'Physique-Chimie',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80', 
        diplome: 'Doctorat en Physique',
        experience: '14 ans',
        phone: '+224 620 123 460',
        email: 'physique@gsibk.edu',
        specialite: 'Laboratoire et expériences pratiques'
      },
      { 
        name: 'M. Camara Ousmane', 
        fonction: 'Professeur',
        matiere: 'Sciences Sociales',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80', 
        diplome: 'Master en Sciences Sociales',
        experience: '11 ans',
        phone: '+224 620 123 462',
        email: 'sociales@gsibk.edu',
        specialite: 'Éducation civique et citoyenne'
      },
      { 
        name: 'M. Kouamé Philippe', 
        fonction: 'Professeur',
        matiere: 'Philosophie',
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80', 
        diplome: 'Master en Philosophie',
        experience: '9 ans',
        phone: '+224 620 123 469',
        email: 'philo@gsibk.edu',
        specialite: 'Esprit critique et éthique'
      },
      { 
        name: 'Mme. Diallo Aïssatou', 
        fonction: 'Professeur',
        matiere: 'Anglais',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80', 
        diplome: 'Master en Linguistique Anglaise',
        experience: '9 ans',
        phone: '+224 620 123 463',
        email: 'anglais@gsibk.edu',
        specialite: 'Bilingue avec expérience internationale'
      }
    ]
  }
];

// Statistiques de l'équipe
const teamStats = [
  { icon: Users, value: '30+', label: 'Enseignants' },
  { icon: GraduationCap, value: '100%', label: 'Qualifiés' },
  { icon: BookOpen, value: '20+', label: 'Matières enseignées' },
  { icon: School, value: '3', label: 'Cycles d\'enseignement' },
  { icon: Star, value: '25+', label: 'Années d\'excellence' }
];

// Valeurs pédagogiques


const Equipe = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedOrgMember, setSelectedOrgMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCycle, setActiveCycle] = useState('all');

  // Filtrer par recherche
  const filterMembers = (members) => {
    return members.filter(member => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.matiere.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.fonction.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialite.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Filtrer par cycle
  const getFilteredData = () => {
    if (activeCycle === 'all') {
      return enseignantsData.map(cycle => ({
        ...cycle,
        members: filterMembers(cycle.members)
      })).filter(cycle => cycle.members.length > 0);
    }
    return enseignantsData
      .filter(cycle => cycle.cycle === activeCycle)
      .map(cycle => ({
        ...cycle,
        members: filterMembers(cycle.members)
      }))
      .filter(cycle => cycle.members.length > 0);
  };

  const filteredData = getFilteredData();

  return (
    <div className="bg-white min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&q=80" 
            alt="Équipe pédagogique" 
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
              NOTRE ÉQUIPE PÉDAGOGIQUE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Une Équipe d'Excellence
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Des professionnels passionnés, dévoués à la réussite et à l'épanouissement de chaque élève.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/galerie"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-800 shadow-lg transition hover:bg-blue-50"
              >
                Voir plus
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PRÉSENTATION GÉNÉRALE ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl text-white">
                <Users size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Présentation Générale</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le Groupe Scolaire Ibrahima Baba Kaké dispose d'une <strong>équipe pédagogique compétente, dynamique et dévouée</strong>, 
                composée d'enseignants qualifiés et de professionnels de l'éducation partageant une même ambition : 
                <strong> accompagner chaque apprenant vers l'excellence</strong>.
              </p>
              <p>
                Grâce à leur expertise, leur expérience et leur engagement quotidien, nos enseignants assurent 
                un encadrement pédagogique de qualité dans les différents cycles d'enseignement : 
                <strong> Primaire, Collège et Lycée</strong>.
              </p>
              <p>
                Notre équipe veille non seulement à la transmission des connaissances académiques, mais également 
                au développement des valeurs humaines, de la discipline, de l'autonomie et du sens des responsabilités.
              </p>
            </div>

            {/* Section héritage */}
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <Heart className="text-yellow-400 flex-shrink-0 mt-1" size={28} />
                <p className="text-lg font-medium leading-relaxed">
                  <span className="text-yellow-300">Fidèle à l'héritage de Feu Ibrahima Baba Kaké</span>, 
                  notre équipe pédagogique œuvre chaque jour pour transmettre le savoir, développer les 
                  compétences et inculquer les valeurs de <strong>Travail, Rigueur et Discipline</strong> 
                  qui constituent le fondement de notre établissement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== MESSAGE DE LA DIRECTION ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-600 rounded-xl text-white">
                <MessageCircle size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Message de la Direction Pédagogique</h2>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 text-purple-200 opacity-50" size={48} />
              <p className="text-lg text-gray-700 leading-relaxed pl-8">
                Notre mission est d'offrir à chaque élève un environnement d'apprentissage stimulant 
                où il peut développer pleinement ses capacités intellectuelles, morales et sociales. 
                Nous croyons que la <strong>réussite est le fruit du travail, de la rigueur et de la discipline</strong>.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  KJ
                </div>
                <div>
                  <div className="font-bold text-gray-800">M. Kouamé Jean</div>
                  <div className="text-sm text-gray-500">Directeur Général du GS_IBK</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== ORGANIGRAMME ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-3">
              ORGANIGRAMME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Direction et Encadrement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organigrammeData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={item.photo}
                    alt={item.fullName}
                    className="h-full w-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent opacity-80`} />
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 p-2 text-blue-700 shadow">
                    {item.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="font-bold text-lg text-gray-800">{item.fullName}</div>
                  <div className="text-sm font-semibold text-blue-600 mt-1">{item.role}</div>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    {item.tel && (
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-blue-600" />
                        <span>{item.tel}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-amber-500" />
                      <span>{item.experience}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedOrgMember(item);
                    }}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    Voir profil
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     


      {/* ==================== ENSEIGNANTS ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wider mb-3">
              NOS ENSEIGNANTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Une Équipe de Passionnés
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des professionnels dévoués qui accompagnent chaque élève vers la réussite
            </p>
          </motion.div>

          {/* Barre de recherche et filtres */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            <div className="flex-1">
              <label className="sr-only" htmlFor="teacher-search">
                Rechercher un enseignant
              </label>
              <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <Search size={18} className="text-blue-600" />
                <input
                  id="teacher-search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher par nom, matière ou spécialité..."
                  className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {['all', 'Enseignants du Primaire', 'Enseignants du Collège', 'Enseignants du Lycée'].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setActiveCycle(cycle)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                    activeCycle === cycle
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cycle === 'all' ? 'Tous les cycles' : cycle.replace('Enseignants du ', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Liste des enseignants */}
          {filteredData.length > 0 ? (
            filteredData.map((cycle, cycleIdx) => (
              <motion.div
                key={cycleIdx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                    {cycle.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{cycle.cycle}</h3>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    {cycle.members.length} enseignants
                  </span>
                  <div className="h-px bg-gray-300 flex-grow" />
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {cycle.members.map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInScale}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                          <button 
                            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition"
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              window.location.href = `mailto:${member.email}`; 
                            }}
                          >
                            <Mail size={18} />
                          </button>
                        </div>
                        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {member.experience}
                        </div>
                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {member.matiere}
                        </div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                        <p className="text-blue-600 font-medium text-sm mb-2">{member.fonction}</p>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{member.specialite}</p>
                        
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <GraduationCap size={14} className="text-blue-500" />
                            <span>{member.diplome}</span>
                          </div>
                        </div>

                        <button 
                          className="mt-4 w-full py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-xl hover:bg-blue-100 transition-colors text-sm flex items-center justify-center gap-2"
                          onClick={() => setSelectedMember(member)}
                        >
                          Voir le profil complet
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
              <Users className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600">Aucun enseignant trouvé</h3>
              <p className="text-gray-400">Essayez de modifier votre recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== ENGAGEMENT DE L'ÉQUIPE ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Engagement de l'Équipe</h2>
            </div>
            
            <div className="space-y-4 text-blue-100 leading-relaxed">
              <p className="text-lg">
                Au Groupe Scolaire Ibrahima Baba Kaké, chaque membre de l'équipe pédagogique s'engage à 
                accompagner les élèves avec <strong className="text-white">professionnalisme, équité et bienveillance</strong> 
                afin de leur permettre d'atteindre leur plein potentiel académique et personnel.
              </p>
              <p>
                Notre priorité est de créer un climat scolaire propice à l'apprentissage, à l'épanouissement 
                et à la réussite de tous.
              </p>
            </div>

         
          </motion.div>
        </div>
      </section>
     

      {/* ==================== MODAL PROFIL ==================== */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  onClick={() => setSelectedMember(null)}
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-72 object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h3>
                    <p className="text-blue-600 font-medium">{selectedMember.fonction}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedMember.experience}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Matière</div>
                    <div className="font-semibold text-gray-800">{selectedMember.matiere}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Diplôme</div>
                    <div className="font-semibold text-gray-800 text-sm">{selectedMember.diplome}</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="text-xs text-gray-500 mb-1">Spécialité</div>
                  <div className="text-gray-700">{selectedMember.specialite}</div>
                </div>

                <div className="space-y-3">
                  <a 
                    href={`mailto:${selectedMember.email}`} 
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
                  >
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="font-medium text-gray-800">{selectedMember.email}</div>
                    </div>
                  </a>
                  {selectedMember.phone && (
                    <a 
                      href={`tel:${selectedMember.phone}`} 
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition"
                    >
                      <Phone className="text-green-600" size={20} />
                      <div>
                        <div className="text-xs text-gray-500">Téléphone</div>
                        <div className="font-medium text-gray-800">{selectedMember.phone}</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedOrgMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedOrgMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  onClick={() => setSelectedOrgMember(null)}
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedOrgMember.photo}
                  alt={selectedOrgMember.fullName}
                  className="w-full h-72 object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedOrgMember.fullName}</h3>
                    <p className="text-blue-600 font-medium">{selectedOrgMember.role}</p>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {selectedOrgMember.experience}
                  </span>
                </div>

                <div className="space-y-6">
                  <section className="rounded-2xl bg-blue-50 p-5">
                    <h4 className="mb-3 text-lg font-semibold text-blue-900">Présentation</h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-500">Prénom</div>
                        <div className="font-medium text-gray-800">{selectedOrgMember.prenom}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-500">Nom</div>
                        <div className="font-medium text-gray-800">{selectedOrgMember.nom}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-500">Téléphone</div>
                        <div className="font-medium text-gray-800">{selectedOrgMember.tel}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-500">Email</div>
                        <div className="font-medium text-gray-800">{selectedOrgMember.email}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">{selectedOrgMember.presentation}</p>
                  </section>

                  <section className="rounded-2xl border border-gray-200 p-5">
                    <h4 className="mb-3 text-lg font-semibold text-gray-800">Expériences professionnelles</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {selectedOrgMember.professionalExperiences.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-gray-200 p-5">
                    <h4 className="mb-3 text-lg font-semibold text-gray-800">Diplômes</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {selectedOrgMember.diplomas.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <GraduationCap size={16} className="mt-0.5 text-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-gray-200 p-5">
                    <h4 className="mb-3 text-lg font-semibold text-gray-800">Missions principales</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {selectedOrgMember.missions.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-gray-200 p-5">
                    <h4 className="mb-3 text-lg font-semibold text-gray-800">Expérience</h4>
                    <p className="text-sm leading-relaxed text-gray-700">{selectedOrgMember.experience}</p>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Equipe;