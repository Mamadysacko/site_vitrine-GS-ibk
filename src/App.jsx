import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Niveaux from './pages/Niveaux';
import Equipe from './pages/Equipe';
import Inscription from './pages/inscription';
import Actualites from './pages/Actualites';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import './App.css'; // Maintient les styles de base s'il y en a

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="a-propos" element={<APropos />} />
          <Route path="niveaux" element={<Niveaux />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
