import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesContainer from '../components/ParticlesContainer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ParticlesContainer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
