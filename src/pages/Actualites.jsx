import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, User, ChevronLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
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

const Actualites = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [imgEcole1, imgEcole2, imgEcole3, imgEcole4, imgEcole5];

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    }
  };

  const articles = [
    {
      id: 1,
      title: "Cérémonie de remise des diplômes 2026",
      excerpt: "Rejoignez-nous pour célébrer la réussite de nos bacheliers lors de la grande cérémonie annuelle...",
      image: imgEcole1,
      date: "12 Octobre 2026",
      category: "Événement"
    },
    {
      id: 2,
      title: "Ouverture du nouveau laboratoire scientifique",
      excerpt: "Le bâtiment C accueille désormais un laboratoire ultra-moderne équipé pour les filières scientifiques...",
      image: imgEcole2,
      date: "05 Octobre 2026",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Résultats exceptionnels au Brevet des Collèges",
      excerpt: "Avec 98% de taux de réussite cette année, nos élèves du collège ont brillé lors des épreuves nationales...",
      image: imgEcole3,
      date: "28 Septembre 2026",
      category: "Résultats"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* ==================== HEADER & IMAGE BANNER ==================== */}
      <div className="relative h-[65vh] min-h-[500px] bg-slate-900 overflow-hidden group mb-16">
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
                  NOTRE ACTUALITÉ
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                Actualités & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  Communiqués
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-50/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
                Restez informés des derniers événements, résultats et de la vie de notre établissement.
              </p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Section Title */}
        <div className="mb-12 flex items-end justify-between border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Dernières Publications</h2>
            <p className="text-slate-500 font-light text-lg">Suivez la vie du Groupe Scolaire IBK</p>
          </div>
          {/* Optional filter could go here */}
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden group flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg border border-white/50">
                  {article.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative bg-white">
                {/* Floating Date Badge */}
                <div className="absolute -top-6 right-6 bg-blue-600 text-white shadow-lg shadow-blue-600/30 rounded-xl p-3 flex flex-col items-center justify-center min-w-[70px] transform group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-xs font-medium opacity-90 uppercase tracking-wide">{article.date.split(' ')[1].substring(0,3)}</span>
                  <span className="text-2xl font-black leading-none my-0.5">{article.date.split(' ')[0]}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4 font-medium mt-2">
                  <Calendar size={16} /> 
                  <span>{article.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-slate-600 mb-8 flex-grow font-light leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider hover:text-blue-700 transition-colors group/btn">
                    Lire la suite
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Actualites;
