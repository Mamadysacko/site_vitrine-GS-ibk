// src/components/DirectorMessage.jsx
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react'; // placeholder icon

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DirectorMessage = () => (
  <section className="py-20 bg-white" id="director-message">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-gray-50 rounded-2xl p-8 shadow-md"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
            <Camera size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Message du Directeur</h2>
        </div>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          "Notre école incarne l'excellence pédagogique, la rigueur et la discipline. Chaque élève bénéficie d'un accompagnement personnalisé pour développer son potentiel et devenir un citoyen éclairé. Nous nous engageons à offrir un environnement sûr, stimulant et empreint de valeurs humaines."
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-700">M. Ibrahima Baba Kaké – Directeur Général</p>
      </motion.div>
    </div>
  </section>
);

export default DirectorMessage;
