import { motion } from 'framer-motion';
import { Calendar, ChevronRight, User } from 'lucide-react';

const Actualites = () => {
  const articles = [
    {
      id: 1,
      title: "Cérémonie de remise des diplômes 2026",
      excerpt: "Rejoignez-nous pour célébrer la réussite de nos bacheliers lors de la grande cérémonie annuelle...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
      date: "12 Octobre 2026",
      category: "Événement"
    },
    {
      id: 2,
      title: "Ouverture du nouveau laboratoire scientifique",
      excerpt: "Le bâtiment C accueille désormais un laboratoire ultra-moderne équipé pour les filières scientifiques...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
      date: "05 Octobre 2026",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Résultats exceptionnels au Brevet des Collèges",
      excerpt: "Avec 98% de taux de réussite cette année, nos élèves du collège ont brillé lors des épreuves nationales...",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      date: "28 Septembre 2026",
      category: "Résultats"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-900 py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white font-heading mb-4"
        >
          Actualités & Communiqués
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-200 max-w-2xl mx-auto"
        >
          Restez informés des derniers événements et de la vie de notre établissement.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1"><Calendar size={16} /> {article.date}</span>
                </div>

                <h2 className="text-xl font-bold    mb-3 font-heading group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {article.excerpt}
                </p>

            
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / Notifications CTA */}
      
      </div>
    </div>
  );
};

export default Actualites;
