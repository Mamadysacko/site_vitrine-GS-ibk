import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import dgPhoto from '../assets/image ecole/image_1.png'; // Using a placeholder for the DG, ideally this should be a portrait

const DirectorMessage = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="director-message">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden group"
        >
          {/* Subtle gradient overlay on card */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="grid md:grid-cols-5 gap-0">
            {/* Image side */}
            <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
              <img
                src={dgPhoto}
                alt="Directeur Général"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 text-white md:hidden">
                <p className="font-extrabold text-xl">Léonard Soumah</p>
                <p className="text-blue-200 text-sm font-medium">Directeur Général</p>
              </div>
            </div>

            {/* Content side */}
            <div className="md:col-span-3 p-10 md:p-14 relative z-10 flex flex-col justify-center">
              <Quote className="text-blue-500/20 w-24 h-24 absolute top-6 right-8" />
              
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Mot de la Direction</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              </div>

              <div className="relative">
                <p className="text-xl text-slate-700 leading-relaxed font-light italic relative z-10 mb-8">
                  "Notre école incarne l'excellence pédagogique, la rigueur et la discipline. 
                  Chaque élève bénéficie d'un accompagnement personnalisé pour développer son 
                  potentiel et devenir un citoyen éclairé, prêt à relever les défis de demain. 
                  Nous nous engageons quotidiennement à offrir un environnement sûr, 
                  stimulant et profondément ancré dans des valeurs humaines."
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 hidden md:block">
                <p className="font-extrabold text-2xl text-slate-900">Léonard Soumah</p>
                <p className="text-blue-600 font-medium">Directeur Général du GS_IBK</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectorMessage;
