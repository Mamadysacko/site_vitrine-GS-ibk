import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Upload, 
  User, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  ChevronRight,
  ChevronLeft,
  Shield,
  BookOpen,
  Users,
  FileCheck,
  Camera,
  IdCard,
  Receipt,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Check,
  X,
  Info,
  File,
  Eye
} from 'lucide-react';

const Inscription = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations élève (réduites)
    nom: '',
    prenom: '',
    dateNaissance: '',
    telephone: '',
    email: '',
    classeDemandee: '',
    // Informations parent (réduites)
    nomParent: '',
    telephoneParent: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState({});
  const [fileErrors, setFileErrors] = useState({});

  const niveaux = [
    'Maternelle (Petite Section)',
    'Maternelle (Moyenne Section)',
    'Maternelle (Grande Section)',
    'Primaire (CP1)',
    'Primaire (CP2)',
    'Primaire (CE1)',
    'Primaire (CE2)',
    'Primaire (CM1)',
    'Primaire (CM2)',
    'Collège (6ème)',
    'Collège (5ème)',
    'Collège (4ème)',
    'Collège (3ème)',
    'Lycée (2nde)',
    'Lycée (1ère)',
    'Lycée (Tle)'
  ];

  // Documents requis réduits et moins contraignants
  const documentsRequis = [
    { 
      id: 'acteNaissance',
      label: 'Extrait d\'acte de naissance',
      icon: FileCheck,
      required: false // Changé à false pour réduire les obligations
    },
    { 
      id: 'photos',
      label: 'Photos d\'identité',
      icon: Camera,
      required: false
    },
    
    { 
      id: 'certificardetransfert',
      label: 'Certificat de transfert',
      icon: Receipt,
      required: false
    },
    { 
      id: 'bulletins',
      label: 'Bulletins scolaires (si disponible)',
      icon: BookOpen,
      required: false
    },
  ];

  const handleFileUpload = (docId, file) => {
    // Validation simplifiée
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      setFileErrors(prev => ({ 
        ...prev, 
        [docId]: 'Format non accepté. Utilisez PDF, JPG ou PNG.' 
      }));
      return;
    }

    if (file.size > maxSize) {
      setFileErrors(prev => ({ 
        ...prev, 
        [docId]: 'Fichier trop volumineux (max 5MB).' 
      }));
      return;
    }

    setUploadedFiles(prev => ({ ...prev, [docId]: file }));
    setFileErrors(prev => ({ ...prev, [docId]: null }));
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.nom && formData.prenom && formData.telephone && formData.classeDemandee;
    }
    // Étape 2 moins contraignante : au moins 1 document suffit
    return Object.keys(uploadedFiles).length >= 1;
  };

  const renderInput = (label, name, type = 'text', options = {}) => (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">
        {label} <span className="text-red-500">{options.required ? '*' : ''}</span>
      </label>
      <input
        type={type}
        name={name}
        value={formData[name] || ''}
        onChange={(e) => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${options.className || ''}`}
        placeholder={options.placeholder || `Entrez ${label.toLowerCase()}`}
        {...options}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 rounded-full text-sm font-semibold text-blue-700 mb-3">
            <Shield size={16} />
            <span>INSCRIPTIONS 2026-2027</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Pré-inscription en ligne
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Inscrivez-vous en quelques étapes simples
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Progress Header */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 w-full h-1 bg-blue-800/50 -z-10 transform -translate-y-1/2" />
              <div 
                className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-blue-400 to-blue-500 -z-10 transform -translate-y-1/2 transition-all duration-500"
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              />

              {[
                { num: 1, label: 'Infos' },
                { num: 2, label: 'Documents' },
                { num: 3, label: 'Confirmation' }
              ].map((item) => (
                <div key={item.num} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                      ${step >= item.num 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50' 
                        : 'bg-blue-800/50 text-blue-300'
                      }`}
                  >
                    {step > item.num ? <Check size={18} /> : item.num}
                  </div>
                  <span className="text-xs mt-1 font-medium opacity-80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="space-y-6"
                >
                  {/* Infos Elève */}
                  <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <User className="text-blue-600" size={24} />
                      Informations de l'élève
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {renderInput('Nom de famille', 'nom', 'text', { required: true })}
                      {renderInput('Prénoms', 'prenom', 'text', { required: true })}
                      {renderInput('Date de naissance', 'dateNaissance', 'date', { required: true })}
                      {renderInput('Téléphone', 'telephone', 'tel', { required: true, placeholder: '+225 00 00 00 00 00' })}
                      {renderInput('Email', 'email', 'email', { placeholder: 'email@exemple.com' })}
                      <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-gray-700">Niveau demandé <span className="text-red-500">*</span></label>
                        <select
                          value={formData.classeDemandee}
                          onChange={(e) => setFormData(prev => ({ ...prev, classeDemandee: e.target.value }))}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Sélectionnez un niveau</option>
                          {niveaux.map((niveau) => (
                            <option key={niveau} value={niveau}>{niveau}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Infos Parent réduites */}
                  <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Users className="text-purple-600" size={24} />
                      Responsable légal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {renderInput('Nom du parent/tuteur', 'nomParent', 'text', { required: true })}
                      {renderInput('Téléphone du parent', 'telephoneParent', 'tel', { required: true, placeholder: '+225 00 00 00 00 00' })}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!isStepValid()}
                      className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all duration-300
                        ${isStepValid() 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-200' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      Étape suivante <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Upload className="text-blue-600" size={24} />
                      Documents (Optionnel)
                    </h2>
                    
                    {/* Info Alert simplifiée */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 mb-6 flex gap-3 items-start">
                      <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-blue-700">
                        Formats : PDF, JPG, PNG • Max 5MB • <span className="font-semibold">Au moins 1 document requis</span>
                      </p>
                    </div>

                    {/* Documents Grid simplifié */}
                    <div className="space-y-3">
                      {documentsRequis.map((doc) => {
                        const isUploaded = uploadedFiles[doc.id];
                        const error = fileErrors[doc.id];

                        return (
                          <div key={doc.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                            <div className={`p-4 flex items-center justify-between ${isUploaded ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                              <div className="flex items-center gap-3 flex-1">
                                <div className={`p-2 rounded-xl ${isUploaded ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                                  <doc.icon size={20} />
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-800 text-sm">
                                    {doc.label}
                                    <span className="text-gray-400 text-xs ml-1">(optionnel)</span>
                                  </p>
                                  {error && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
                                  {isUploaded && <p className="text-xs text-green-600 mt-1 flex items-center gap-1"><Check size={12} /> {uploadedFiles[doc.id].name}</p>}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                {isUploaded ? (
                                  <button
                                    onClick={() => setUploadedFiles(prev => {
                                      const newFiles = { ...prev };
                                      delete newFiles[doc.id];
                                      return newFiles;
                                    })}
                                    className="p-1.5 rounded-xl hover:bg-red-100 text-red-500 transition-colors"
                                  >
                                    <X size={18} />
                                  </button>
                                ) : (
                                  <label className="cursor-pointer">
                                    <div className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl font-medium text-xs transition-colors flex items-center gap-1.5">
                                      <Upload size={14} />
                                      Importer
                                    </div>
                                    <input
                                      type="file"
                                      className="hidden"
                                      accept=".pdf,.jpg,.jpeg,.png"
                                      onChange={(e) => {
                                        if (e.target.files?.[0]) {
                                          handleFileUpload(doc.id, e.target.files[0]);
                                        }
                                      }}
                                    />
                                  </label>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 text-sm text-gray-500 text-center">
                      {Object.keys(uploadedFiles).length === 0 && (
                        <p className="text-yellow-600">⚠️ Veuillez importer au moins un document pour continuer</p>
                      )}
                      {Object.keys(uploadedFiles).length > 0 && (
                        <p className="text-green-600">✅ {Object.keys(uploadedFiles).length} document(s) importé(s)</p>
                      )}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors text-sm"
                    >
                      <ChevronLeft size={18} /> Retour
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!isStepValid()}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 text-sm
                        ${isStepValid() 
                          ? 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg shadow-green-200' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      Valider <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Pré-inscription Enregistrée !</h2>
                  <p className="text-gray-600 mb-3 max-w-sm mx-auto text-sm">
                    Votre demande a bien été prise en compte.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 max-w-sm mx-auto flex gap-2 text-left">
                    <AlertCircle className="text-yellow-600 flex-shrink-0" size={16} />
                    <p className="text-xs text-yellow-800">
                      Rendez-vous à l'établissement avec les documents originaux.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => {
                        setStep(1);
                        setUploadedFiles({});
                        setFormData({
                          nom: '', prenom: '', dateNaissance: '', telephone: '',
                          email: '', classeDemandee: '', nomParent: '', telephoneParent: ''
                        });
                      }}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors text-sm shadow-lg shadow-blue-200"
                    >
                      Nouvelle inscription
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-xs text-gray-500"
        >
          <p>Contact : <span className="font-semibold text-gray-700">+224 624-24-56-24 / 624-39-68-84 </span> | <span className="font-semibold text-gray-700">gsibrahimababakake@gmail.com</span></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Inscription;