import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingFicheButton from './FloatingFicheButton';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <FloatingFicheButton />
      <Footer />
    </div>
  );
};

export default Layout;
