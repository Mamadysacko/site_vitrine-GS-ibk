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
  Sparkles,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    color: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/30'
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
    color: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/30'
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
    color: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/30'
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
    color: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/30'
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

const Equipe = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [imgEcole1, imgEcole2, imgEcole3, imgEcole4, imgEcole5];

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    }
  };
  
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
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* ==================== HEADER & IMAGE BANNER ==================== */}
      <div className="relative h-[65vh] min-h-[500px] bg-slate-900 overflow-hidden group">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={bannerImages[currentImageIndex]}
            alt="GS_IBK"
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
                  NOTRE ÉQUIPE PÉDAGOGIQUE
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                Une Équipe <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  d'Excellence
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-50/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
                Des professionnels passionnés, dévoués à la réussite et à l'épanouissement de chaque élève.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/galerie"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-4 font-bold shadow-xl shadow-white/10 transition-all hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1"
                >
                  Découvrir en images
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

      {/* ==================== MESSAGE & PRÉSENTATION ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-stretch">
            
            {/* Présentation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                  <Users size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Une Équipe Engagée</h2>
              </div>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light relative z-10">
                <p>
                  Le Groupe Scolaire Ibrahima Baba Kaké dispose d'une <strong className="text-slate-800 font-semibold">équipe pédagogique compétente, dynamique et dévouée</strong>, 
                  composée d'enseignants qualifiés et de professionnels de l'éducation partageant une même ambition : 
                  <strong className="text-blue-600 font-semibold"> accompagner chaque apprenant vers l'excellence</strong>.
                </p>
                <p>
                  Grâce à leur expertise, leur expérience et leur engagement quotidien, nos enseignants assurent 
                  un encadrement pédagogique de qualité dans les différents cycles d'enseignement : 
                  <strong className="text-slate-800 font-semibold"> Primaire, Collège et Lycée</strong>.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 flex items-start gap-4">
                  <Heart className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-blue-900 font-medium leading-relaxed text-base">
                    Fidèle à l'héritage de notre fondateur, notre équipe œuvre chaque jour pour transmettre le savoir, développer les 
                    compétences et inculquer les valeurs de <strong className="text-blue-700">Travail, Rigueur et Discipline</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Message Direction */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-indigo-300 border border-white/10">
                    <MessageCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Mot de la Direction</h3>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-indigo-500/30 w-16 h-16" />
                  <p className="text-xl text-blue-100/90 leading-relaxed font-light relative z-10 italic">
                    "Notre mission est d'offrir à chaque élève un environnement d'apprentissage stimulant 
                    où il peut développer pleinement ses capacités intellectuelles, morales et sociales. 
                    Nous croyons que la réussite est le fruit du travail, de la rigueur et de la discipline."
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-5 relative z-10 pt-8 border-t border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl border-2 border-white/20 shadow-lg">
                  KJ
                </div>
                <div>
                  <div className="font-bold text-white text-lg">M. Kouamé Jean</div>
                  <div className="text-indigo-300 font-medium">Directeur Général du GS_IBK</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== ORGANIGRAMME ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-widest mb-4 border border-blue-100 uppercase">
              Organigramme
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Direction & Encadrement
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organigrammeData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.photo}
                    alt={item.fullName}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300 mix-blend-multiply`} />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80`} />
                  
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                    {item.icon}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-extrabold text-2xl mb-1">{item.fullName}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30`}>
                      {item.role}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                  <div className="space-y-3 mb-6">
                    {item.tel && (
                      <div className="flex items-center gap-3 text-slate-600 font-medium">
                        <div className={`p-2 rounded-full bg-slate-50 ${item.color.replace('from-', 'text-').split(' ')[0]}`}>
                          <Phone size={16} />
                        </div>
                        {item.tel}
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-slate-600 font-medium">
                      <div className={`p-2 rounded-full bg-slate-50 text-amber-500`}>
                        <Award size={16} />
                      </div>
                      {item.experience}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedOrgMember(item)}
                    className={`mt-auto w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r ${item.color} ${item.shadow} shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    Voir le profil
                    <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENSEIGNANTS ==================== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-widest mb-4 border border-blue-200 uppercase">
              Nos Enseignants
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Une Équipe de Passionnés
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto">
              Des professionnels dévoués qui accompagnent chaque élève vers la réussite
            </p>
          </motion.div>

          {/* Barre de recherche et filtres */}
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-slate-100 mb-16 flex flex-col xl:flex-row gap-4 items-center">
            <div className="w-full xl:w-1/3 relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search size={20} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                id="teacher-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher (nom, matière...)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-700 font-medium"
              />
            </div>

            <div className="w-full xl:w-2/3 flex gap-2 overflow-x-auto pb-2 xl:pb-0 scrollbar-hide">
              {['all', 'Enseignants du Primaire', 'Enseignants du Collège', 'Enseignants du Lycée'].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setActiveCycle(cycle)}
                  className={`px-6 py-4 rounded-2xl text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 border ${
                    activeCycle === cycle
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {cycle === 'all' ? 'Tous les enseignants' : cycle.replace('Enseignants du ', '')}
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
                className="mb-20 last:mb-0"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg shadow-blue-500/20">
                    {cycle.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{cycle.cycle}</h3>
                  <div className="h-0.5 bg-slate-200 flex-grow rounded-full ml-4 hidden md:block" />
                  <span className="text-sm font-bold text-slate-500 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm ml-auto md:ml-4 whitespace-nowrap">
                    {cycle.members.length} membres
                  </span>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {cycle.members.map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInScale}
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="relative h-72 overflow-hidden bg-slate-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                          <button 
                            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 hover:scale-110 transition-all shadow-lg"
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              window.location.href = `mailto:${member.email}`; 
                            }}
                          >
                            <Mail size={20} />
                          </button>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/50">
                          {member.experience}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                            {member.matiere}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h4>
                        <p className="text-slate-500 font-medium text-sm mb-4">{member.fonction}</p>
                        
                        <p className="text-slate-600 text-sm font-light leading-relaxed line-clamp-2 mb-6">
                          {member.specialite}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <div className="flex items-start gap-3 text-xs text-slate-500 font-medium">
                            <GraduationCap size={16} className="text-slate-400 shrink-0" />
                            <span className="leading-tight">{member.diplome}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 bg-white rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-slate-300" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Aucun enseignant trouvé</h3>
              <p className="text-slate-500 font-light text-lg">Essayez de modifier vos critères de recherche.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCycle('all');}}
                className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors"
              >
                Réinitialiser la recherche
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ==================== ENGAGEMENT DE L'ÉQUIPE ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-5 bg-white/10 rounded-3xl backdrop-blur-md mb-8 border border-white/10 shadow-xl">
                <Sparkles className="text-amber-400 w-12 h-12" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Notre Engagement</h2>
              
              <div className="space-y-6 text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light text-xl">
                <p>
                  Au Groupe Scolaire Ibrahima Baba Kaké, chaque membre de l'équipe pédagogique s'engage à 
                  accompagner les élèves avec <strong className="text-white font-semibold">professionnalisme, équité et bienveillance</strong> 
                  afin de leur permettre d'atteindre leur plein potentiel.
                </p>
                <p>
                  Notre priorité absolue est de créer un climat scolaire propice à l'apprentissage, à l'épanouissement 
                  intellectuel et à la réussite de tous.
                </p>
              </div>

              <div className="mt-12 flex justify-center gap-4">
                <Link
                  to="/niveaux"
                  className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Découvrir nos niveaux
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals for full profiles (keep simple for now, or add if needed, but the original didn't implement them fully beyond setting state, so they are omitted for brevity as in original) */}
    </div>
  );
};

export default Equipe;