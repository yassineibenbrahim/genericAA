import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="dark:bg-black bg-white"
        >
          <CustomCursor />
          <Navbar />
          <Hero />
          <Services />
          <Work />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;