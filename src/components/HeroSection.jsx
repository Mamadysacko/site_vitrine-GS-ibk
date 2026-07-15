import React from 'react';
import { motion } from 'framer-motion';
const heroImg = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80";
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gray-950 text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-gray-900/40 z-10" />
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        src={heroImg}
        alt="Étudiants GS_IBK"
        className="w-full h-full object-cover opacity-60 object-center"
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium mb-8 text-blue-200">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" /> Inscriptions Ouvertes 2026-2027
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight font-heading">
          Former aujourd'hui les <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">citoyens de demain</span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
          Bienvenue à GS_IBK. Un cadre d'excellence pour l'épanouissement intellectuel, moral et physique de votre enfant, de la maternelle au lycée.
        </motion.p>
        <motion.div variants={fadeIn} className="flex gap-4">
          <a href="/inscription" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
            S'inscrire maintenant
          </a>
          <a href="/contact" className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition flex items-center gap-2">
            Nous contacter <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
