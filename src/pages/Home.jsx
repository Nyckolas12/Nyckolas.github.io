import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gods } from '../gods';
import GodBadge from '../components/GodBadge';

const god = gods.home;

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6 text-center">
      <GodBadge god={god} />

      {/* Divider rune line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-32 h-px mb-10"
        style={{ background: god.gradient }}
      />

      {/* God lore line */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-cinzel text-xs tracking-[0.4em] uppercase mb-6"
        style={{ color: god.primary, opacity: 0.7 }}
      >
        {god.domain}
      </motion.p>

      {/* Main title — your name goes here */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-cinzel-decorative text-6xl md:text-8xl font-bold text-white mb-4 god-glow"
      >
        Nyckolas Mendez
      </motion.h1>

      {/* Role / tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-cinzel text-lg md:text-xl tracking-[0.15em] uppercase mb-4"
        style={{ color: god.primary }}
      >
        Game Developer  · Softweare Developer
      </motion.p>

      {/* Short bio line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 max-w-xl text-base leading-relaxed mb-10 font-light"
      >
        Software and Game Developer (with expertise in C++ | C#) who is passionate about making a difference in the world
      </motion.p>

      {/* Lore quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.0 }}
        className="font-cinzel text-xs italic tracking-widest mb-12 max-w-sm"
        style={{ color: god.primary }}
      >
        "{god.lore}"
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Link to="/projects">
          <button className="god-btn font-cinzel text-xs tracking-[0.25em] uppercase px-8 py-3 text-black font-bold rounded-sm">
            View My Work
          </button>
        </Link>
        <Link to="/contact">
          <button
            className="rune-border font-cinzel text-xs tracking-[0.25em] uppercase px-8 py-3 rounded-sm text-white transition-opacity hover:opacity-70"
          >
            Get In Touch
          </button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="w-32 h-px mt-10"
        style={{ background: god.gradient }}
      />
    </div>
  );
}
