import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import ficheRenseignement from '../assets/fiche-renseignement.pdf';

const FloatingFicheButton = () => {
  const handleOpenPdf = () => {
    window.open(ficheRenseignement, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <button
          onClick={handleOpenPdf}
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-yellow-300"
          title="Ouvrir la fiche de renseignement"
        >
          <FileText size={28} className="text-gray-900 group-hover:animate-bounce" />

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/50"
            animate={{
              scale: [1, 1.3],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-gray-900 text-accent font-semibold text-sm rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
          >
            Fiche Renseignement
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingFicheButton;
