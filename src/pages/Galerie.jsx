import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import imgEcole1 from '../assets/image ecole/image_1.png';
import imgEcole2 from '../assets/image ecole/image_2.png';
import imgEcole3 from '../assets/image ecole/image_3.png';
import imgEcole4 from '../assets/image ecole/image_4.png';
import imgEcole5 from '../assets/image ecole/image_5.png';

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('tous');

  const categories = ['tous', 'campus', 'evenements', 'activites'];

  const images = [
    { id: 1, src: imgEcole1, category: 'campus', title: 'Bâtiment Principal' },
    { id: 2, src: imgEcole2, category: 'campus', title: 'Campus' },
    { id: 3, src: imgEcole3, category: 'activites', title: 'Terrain Sportif' },
    { id: 4, src: imgEcole4, category: 'activites', title: 'Activités Étudiantes' },
    { id: 5, src: imgEcole5, category: 'campus', title: 'Vue de l\'école' }
  ];

  const filteredImages = filter === 'tous' ? images : images.filter(img => img.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* ==================== HEADER & IMAGE BANNER ==================== */}
      <div className="relative h-[65vh] min-h-[500px] bg-slate-900 overflow-hidden group mb-16">
        <img
          src={imgEcole2}
          alt="Galerie GS_IBK"
          className="absolute inset-0 w-full h-full object-cover"
        />
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
                  EN IMAGES
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Galerie</span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-50/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
                Découvrez la vie au GS_IBK, nos infrastructures, nos événements et le quotidien de nos élèves à travers notre objectif.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-sm ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border-blue-600'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-blue-600 border border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg border border-slate-100 aspect-[4/3] bg-slate-200"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-full mb-4 shadow-xl border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ZoomIn size={32} className="text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
                    <span className="block font-bold text-lg text-white mb-1">{img.title}</span>
                    <span className="block text-xs font-semibold text-blue-300 uppercase tracking-wider">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-slate-900/95 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all hover:scale-110 hover:rotate-90 duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 shadow-2xl flex items-center gap-4"
                >
                  <span className="font-bold text-white text-lg">{selectedImage.title}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">{selectedImage.category}</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Galerie;
