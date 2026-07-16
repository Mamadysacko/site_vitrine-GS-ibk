import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingFicheButton from './FloatingFicheButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingFicheButton />
      <Footer />
    </div>
  );
};

export default Layout;
