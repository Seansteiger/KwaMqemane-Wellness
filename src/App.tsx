import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Footer, MobileBottomNav } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Wisdom } from './pages/Wisdom';
import { Contact } from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        } />
        <Route path="/wisdom" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Wisdom />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        } />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
}
