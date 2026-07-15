import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('tous');

  const categories = ['tous', 'campus', 'evenements', 'activites'];

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80', category: 'evenements', title: 'Remise des diplômes' },
    { id: 2, src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80', category: 'campus', title: 'Campus principal' },
    { id: 3, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80', category: 'activites', title: 'Cours en classe' },
    { id: 4, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80', category: 'campus', title: 'Bibliothèque' },
    { id: 5, src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80', category: 'campus', title: 'Laboratoire' },
    { id: 6, src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80', category: 'activites', title: 'Activités Maternelle' }
  ];

  const filteredImages = filter === 'tous' ? images : images.filter(img => img.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold    font-heading mb-4">Galerie Photos</h1>
          <p className="text-xl text-gray-600">Découvrez la vie à GS_IBK à travers notre objectif.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-colors ${filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm aspect-square bg-white"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <ZoomIn size={40} className="mb-2" />
                  <span className="font-bold text-lg font-heading">{img.title}</span>
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Galerie;
