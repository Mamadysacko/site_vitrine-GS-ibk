import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Users, GraduationCap, Lock, Mail, ArrowRight } from 'lucide-react';

const Portail = () => {
  const [role, setRole] = useState('eleve');

  const roles = [
    { id: 'eleve', label: 'Élève', icon: User, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-500' },
    { id: 'parent', label: 'Parent', icon: Users, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-500' },
    { id: 'enseignant', label: 'Enseignant', icon: GraduationCap, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-500' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">

        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200 transform rotate-12"
          >
            <Lock className="text-white transform -rotate-12" size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold    font-heading mb-2"
          >
            Espace Connecté
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Accédez à votre espace personnel sécurisé
          </motion.p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Role Selector */}
          <div className="flex border-b border-gray-100">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`flex-1 py-4 flex flex-col items-center gap-2 transition-all duration-300 relative ${role === r.id ? r.bg : 'hover:bg-gray-50'}`}
              >
                <r.icon className={role === r.id ? r.color : 'text-gray-400'} size={24} />
                <span className={`text-sm font-bold ${role === r.id ? '  ' : 'text-gray-500'}`}>
                  {r.label}
                </span>
                {role === r.id && (
                  <motion.div layoutId="activeRole" className={`absolute bottom-0 left-0 right-0 h-1 ${r.bg.replace('50', '500')}`} />
                )}
              </button>
            ))}
          </div>

          {/* Login Form */}
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Identifiant ou Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    placeholder="Entrez votre identifiant"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform transform hover:-translate-y-1"
              >
                Se connecter <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Features highlight based on role */}
          <div className="bg-gray-50 p-6 border-t border-gray-100 text-sm text-gray-600">
            {role === 'eleve' && <p>📚 <strong>Espace Élève:</strong> Consultez vos notes, cours, emplois du temps et communiqués importants.</p>}
            {role === 'parent' && <p>📊 <strong>Espace Parent:</strong> Suivez la scolarité de vos enfants, téléchargez les bulletins et contactez l'administration.</p>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portail;
