// src/components/KeyStats.jsx
import { motion } from 'framer-motion';
import { Users, BookOpen, CheckCircle2, Clock } from 'lucide-react';

const stats = [
  { icon: Users, label: "Étudiants", value: "1,200+" },
  { icon: BookOpen, label: "Enseignants qualifiés", value: "85" },
  { icon: CheckCircle2, label: "Taux de réussite", value: "98%" },
  { icon: Clock, label: "Années d'expérience", value: "15" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const KeyStats = () => (
  <section className="py-16 bg-gray-50" id="stats">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={{}}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {stats.map((item, idx) => (
          <motion.div key={idx} variants={cardVariant} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <item.icon className="mx-auto text-primary mb-3" size={32} />
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            <p className="mt-2 text-gray-600 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default KeyStats;
