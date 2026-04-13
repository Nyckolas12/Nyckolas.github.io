import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { gods } from './gods';
import GodThemeProvider from './components/GodThemeProvider';
import ParticleField from './components/ParticleField';
import VineOverlay from './components/VineOverlay';
import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const routeGodMap = {
  '/': gods.home,
  '/about': gods.about,
  '/projects': gods.projects,
  '/skills': gods.skills,
  '/contact': gods.contact,
};

function AppInner() {
  const location = useLocation();
  const activeGod = routeGodMap[location.pathname] ?? gods.home;

  return (
    <GodThemeProvider god={activeGod}>
      <ParticleField god={activeGod} />
      <VineOverlay god={activeGod} isHome={location.pathname === '/'} />
      <Nav activeGod={activeGod} />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </GodThemeProvider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
}
