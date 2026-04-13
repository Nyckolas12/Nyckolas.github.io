import { motion } from 'framer-motion';
import { gods } from '../gods';
import GodBadge from '../components/GodBadge';

const god = gods.about;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function About() {
  return (
    <div className="relative min-h-screen z-10 w-full">
      <div className="max-w-4xl mx-auto px-10 pt-28 pb-20">
      <GodBadge god={god} />

      {/* Page header */}
      <motion.p {...fadeUp(0)} className="font-cinzel text-xs tracking-[0.4em] uppercase mb-2" style={{ color: god.primary, opacity: 0.7 }}>
        {god.symbol} {god.domain}
      </motion.p>
      <motion.h2 {...fadeUp(0.1)} className="font-cinzel-decorative text-5xl text-white god-glow mb-2">
        About Me
      </motion.h2>
      <motion.div
        {...fadeUp(0.15)}
        className="w-24 h-px mb-10"
        style={{ background: god.gradient }}
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: bio */}
        <div>
          <motion.p {...fadeUp(0.2)} className="font-cinzel text-sm tracking-[0.2em] uppercase mb-4" style={{ color: god.primary }}>
            The Chronicle
          </motion.p>
          <motion.p {...fadeUp(0.3)} className="text-gray-300 leading-relaxed mb-4 font-light">
            What is something I can say about myself to be more intreasting AHHH.
          </motion.p>
          <motion.p {...fadeUp(0.4)} className="text-gray-400 leading-relaxed font-light">
            A second paragraph. Maybe where you're from, what you're currently working on, or what excites you about your craft.
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="font-cinzel text-xs italic tracking-widest mt-8 opacity-40"
            style={{ color: god.primary }}
          >
            "{god.lore}"
          </motion.p>
        </div>

        {/* Right: quick facts */}
        <div>
          <motion.p {...fadeUp(0.2)} className="font-cinzel text-sm tracking-[0.2em] uppercase mb-4" style={{ color: god.primary }}>
            The Record
          </motion.p>

          {[
            { label: 'Based In', value: 'Salt Lake City, UT' },
            { label: 'Currently', value: 'Indie Developer' },
            { label: 'Education', value: 'Graduated from Neumont University with a Software & Game Development degree' },
            { label: 'Interests', value: 'Game Development · Adventure · Storytelling' },
          ].map(({ label, value }, i) => (
            <motion.div
              key={label}
              {...fadeUp(0.3 + i * 0.1)}
              className="rune-border rounded-sm px-5 py-3 mb-3"
            >
              <p className="font-cinzel text-xs tracking-widest uppercase mb-1" style={{ color: god.primary, opacity: 0.6 }}>
                {label}
              </p>
              <p className="text-white font-light text-sm">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
