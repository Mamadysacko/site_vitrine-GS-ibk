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
  Award,
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
  File
} from 'lucide-react';

const Inscription = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations élève
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    genre: '',
    nationalite: '',
    // Informations parent
    nomParent: '',
    prenomParent: '',
    telephone: '',
    email: '',
    adresse: '',
    profession: '',
    // Scolarité
    niveau: '',
    classeDemandee: '',
    ancienEtablissement: '',
    anneeScolaire: '2026-2027',
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

  const documentsRequis = [
    { 
      id: 'acteNaissance',
      label: 'Extrait d\'acte de naissance',
      description: 'Original ou copie légalisée',
      icon: FileCheck,
      required: true,
      allLevels: true
    },
    { 
      id: 'transfert',
      label: 'Certificat de transfert',
      description: 'Pour un élève venant d\'une autre école',
      icon: FileText,
      required: true,
      allLevels: false,
      niveaux: ['Primaire', 'Collège', 'Lycée']
    },
    { 
      id: 'scolarite',
      label: 'Certificat de scolarité',
      description: 'De l\'établissement précédent',
      icon: BookOpen,
      required: true,
      allLevels: false,
      niveaux: ['Primaire', 'Collège', 'Lycée']
    },
    { 
      id: 'bulletins',
      label: 'Bulletins ou relevés de notes',
      description: 'De l\'année précédente',
      icon: Award,
      required: true,
      allLevels: false,
      niveaux: ['Primaire', 'Collège', 'Lycée']
    },
    { 
      id: 'attestationReussite',
      label: 'Attestation de réussite',
      description: 'Si exigée pour le passage en classe supérieure',
      icon: GraduationCap,
      required: false,
      allLevels: false,
      niveaux: ['Collège', 'Lycée']
    },
    { 
      id: 'photos',
      label: 'Photos d\'identité',
      description: '4 photos récentes de l\'élève',
      icon: Camera,
      required: true,
      allLevels: true
    },
    { 
      id: 'cniParent',
      label: 'CNI ou Passeport du parent',
      description: 'Photocopie de la carte nationale d\'identité ou passeport',
      icon: IdCard,
      required: true,
      allLevels: true
    },
    { 
      id: 'recuPaiement',
      label: 'Reçu de paiement',
      description: 'Des frais d\'inscription',
      icon: Receipt,
      required: true,
      allLevels: true
    },
    { 
      id: 'carnetVaccination',
      label: 'Carnet de vaccination',
      description: 'Si demandé par l\'établissement',
      icon: Stethoscope,
      required: false,
      allLevels: false,
      niveaux: ['Maternelle']
    },
  ];

  const handleFileUpload = (docId, file) => {
    // Validation du fichier
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

  const handleDownload = (fileName) => {
    // Simuler le téléchargement du fichier
    const link = document.createElement('a');
    link.href = `/assets/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.nom && formData.prenom && formData.dateNaissance && formData.classeDemandee;
    }
    if (step === 2) {
      return Object.keys(uploadedFiles).length >= 4;
    }
    return true;
  };

  const getLevel = (niveau) => {
    if (niveau.includes('Maternelle')) return 'Maternelle';
    if (niveau.includes('Primaire')) return 'Primaire';
    if (niveau.includes('Collège')) return 'Collège';
    if (niveau.includes('Lycée')) return 'Lycée';
    return '';
  };

  const renderInput = (label, name, type = 'text', options = {}) => (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">
        {label} <span className="text-red-500">{options.required ? '*' : ''}</span>
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={(e) => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${options.className || ''}`}
        placeholder={options.placeholder || `Entrez ${label.toLowerCase()}`}
        {...options}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 rounded-full text-sm font-semibold text-blue-700 mb-4">
            <Shield size={16} />
            <span>INSCRIPTIONS 2026-2027</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pré-inscription en ligne
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Complétez votre dossier d'inscription en quelques étapes simples et rapides.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Progress Header */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 md:p-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 w-full h-1 bg-blue-800/50 -z-10 transform -translate-y-1/2" />
              <div 
                className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-blue-400 to-blue-500 -z-10 transform -translate-y-1/2 transition-all duration-500"
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              />

              {[
                { num: 1, label: 'Informations' },
                { num: 2, label: 'Documents' },
                { num: 3, label: 'Confirmation' }
              ].map((item) => (
                <div key={item.num} className="flex flex-col items-center">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                      ${step >= item.num 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50' 
                        : 'bg-blue-800/50 text-blue-300'
                      }`}
                  >
                    {step > item.num ? <Check size={24} /> : item.num}
                  </div>
                  <span className="text-xs mt-2 font-medium opacity-80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="space-y-8"
                >
                  {/* Infos Elève */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <User className="text-blue-600" size={28} />
                      Informations de l'élève
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {renderInput('Nom de famille', 'nom', 'text', { required: true })}
                      {renderInput('Prénoms', 'prenom', 'text', { required: true })}
                      {renderInput('Date de naissance', 'dateNaissance', 'date', { required: true })}
                      {renderInput('Lieu de naissance', 'lieuNaissance', 'text', { required: true })}
                      <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-gray-700">Genre <span className="text-red-500">*</span></label>
                        <select
                          value={formData.genre}
                          onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="Masculin">Masculin</option>
                          <option value="Féminin">Féminin</option>
                        </select>
                      </div>
                      {renderInput('Nationalité', 'nationalite', 'text', { required: true })}
                    </div>
                  </div>

                  {/* Infos Scolarité */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <GraduationCap className="text-green-600" size={28} />
                      Informations scolaires
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-gray-700">Niveau demandé <span className="text-red-500">*</span></label>
                        <select
                          value={formData.classeDemandee}
                          onChange={(e) => setFormData(prev => ({ ...prev, classeDemandee: e.target.value, niveau: getLevel(e.target.value) }))}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Sélectionnez un niveau</option>
                          {niveaux.map((niveau) => (
                            <option key={niveau} value={niveau}>{niveau}</option>
                          ))}
                        </select>
                      </div>
                      {renderInput('Ancien établissement', 'ancienEtablissement', 'text')}
                      <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-gray-700">Année scolaire</label>
                        <input
                          type="text"
                          value="2026-2027"
                          disabled
                          className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-500 cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Infos Parent */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Users className="text-purple-600" size={28} />
                      Informations du responsable légal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {renderInput('Nom du parent/tuteur', 'nomParent', 'text', { required: true })}
                      {renderInput('Prénoms', 'prenomParent', 'text', { required: true })}
                      {renderInput('Téléphone', 'telephone', 'tel', { required: true, placeholder: '+225 00 00 00 00 00' })}
                      {renderInput('Email', 'email', 'email', { required: true, placeholder: 'parent@email.com' })}
                      {renderInput('Adresse', 'adresse', 'text')}
                      {renderInput('Profession', 'profession', 'text')}
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
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <Upload className="text-blue-600" size={28} />
                      Documents requis
                    </h2>
                    
                    {/* Info Alert */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8 flex gap-4 items-start">
                      <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-sm text-blue-800 font-medium">
                          Formats acceptés : PDF, JPG, PNG • Taille maximale : 5MB par fichier
                        </p>
                        <p className="text-sm text-blue-600 mt-1">
                          <span className="font-semibold">Documents obligatoires :</span> Tous les documents marqués d'un <span className="text-red-500">*</span> sont requis
                        </p>
                      </div>
                    </div>

                    {/* Documents Grid */}
                    <div className="space-y-4">
                      {documentsRequis.map((doc) => {
                        const level = getLevel(formData.niveau);
                        const isVisible = doc.allLevels || (level && doc.niveaux?.includes(level));
                        
                        if (!isVisible || !formData.niveau) return null;

                        const isUploaded = uploadedFiles[doc.id];
                        const error = fileErrors[doc.id];

                        return (
                          <div key={doc.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                            <div className={`p-5 flex items-center justify-between ${isUploaded ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                              <div className="flex items-center gap-4 flex-1">
                                <div className={`p-3 rounded-xl ${isUploaded ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                                  <doc.icon size={24} />
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-800">
                                    {doc.label}
                                    {doc.required && <span className="text-red-500 ml-1">*</span>}
                                  </p>
                                  <p className="text-sm text-gray-500">{doc.description}</p>
                                  {error && <p className="text-sm text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={14} /> {error}</p>}
                                  {isUploaded && <p className="text-sm text-green-600 mt-1 flex items-center gap-1"><Check size={14} /> {uploadedFiles[doc.id].name}</p>}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                {isUploaded ? (
                                  <button
                                    onClick={() => setUploadedFiles(prev => {
                                      const newFiles = { ...prev };
                                      delete newFiles[doc.id];
                                      return newFiles;
                                    })}
                                    className="p-2 rounded-xl hover:bg-red-100 text-red-500 transition-colors"
                                  >
                                    <X size={20} />
                                  </button>
                                ) : (
                                  <label className="cursor-pointer">
                                    <div className="px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl font-medium text-sm transition-colors flex items-center gap-2">
                                      <Upload size={16} />
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

                    {/* Téléchargement Fiche */}
                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <File className="text-blue-600" size={28} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">Fiche de renseignement</p>
                            <p className="text-sm text-gray-600">Téléchargez et imprimez pour avoir les informations nécessaires</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownload('fiche-renseignement.pdf')}
                          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 rounded-xl font-bold transition-all border-2 border-blue-200 hover:border-blue-400"
                        >
                          <Download size={18} />
                          Télécharger
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors"
                    >
                      <ChevronLeft size={20} /> Retour
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!isStepValid()}
                      className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all duration-300
                        ${isStepValid() 
                          ? 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg shadow-green-200' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      Valider l'inscription <ArrowRight size={20} />
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
                  className="text-center py-12"
                >
                  <div className="w-28 h-28 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                    <CheckCircle2 size={56} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Pré-inscription Enregistrée !</h2>
                  <p className="text-gray-600 mb-4 max-w-md mx-auto leading-relaxed">
                    Votre demande a bien été prise en compte. Vous allez recevoir un email de confirmation avec votre numéro de dossier.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 max-w-md mx-auto flex gap-3 text-left">
                    <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
                    <p className="text-sm text-yellow-800">
                      <span className="font-bold">Prochaine étape :</span> Rendez-vous à l'établissement avec l'ensemble des documents originaux pour finaliser votre inscription.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => handleDownload('recapitulatif-inscription.pdf')}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-200"
                    >
                      <Download size={18} />
                      Télécharger le récapitulatif
                    </button>
                    <button
                      onClick={() => {
                        setStep(1);
                        setUploadedFiles({});
                        setFormData({
                          nom: '', prenom: '', dateNaissance: '', lieuNaissance: '',
                          genre: '', nationalite: '', nomParent: '', prenomParent: '',
                          telephone: '', email: '', adresse: '', profession: '',
                          niveau: '', classeDemandee: '', ancienEtablissement: '',
                          anneeScolaire: '2026-2027'
                        });
                      }}
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors"
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
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>Une question ? Contactez notre service d'inscription au <span className="font-semibold text-gray-700">+225 XX XX XX XX</span></p>
          <p className="mt-1">Ou par email à <span className="font-semibold text-gray-700">inscriptions@gsibk.ci</span></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Inscription;