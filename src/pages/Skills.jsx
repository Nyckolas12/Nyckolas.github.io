import { motion } from 'framer-motion';
import { gods } from '../gods';
import GodBadge from '../components/GodBadge';

const god = gods.skills;

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'C#', level: 80 },
      
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Unreal Engine', level: 80 },
      { name: 'Unity', level: 70 },
    ],
  }
];

export default function Skills() {
  return (
    <div className="relative min-h-screen z-10 w-full">
      <div className="max-w-5xl mx-auto px-10 pt-28 pb-20">
      <GodBadge god={god} />

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 0.5 }}
        className="font-cinzel text-xs tracking-[0.4em] uppercase mb-2"
        style={{ color: god.primary }}
      >
        {god.symbol} {god.domain}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="font-cinzel-decorative text-5xl text-white god-glow mb-2"
      >
        The Arsenal
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8 }}
        className="w-24 h-px mb-10 origin-left"
        style={{ background: god.gradient }}
      />

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + gi * 0.1 }}
          >
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase mb-4" style={{ color: god.primary, opacity: 0.8 }}>
              {group.category}
            </p>
            <div className="space-y-4">
              {group.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm font-light">{skill.name}</span>
                    <span className="font-cinzel text-xs" style={{ color: god.primary, opacity: 0.6 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-px w-full" style={{ background: '#ffffff15' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.4 + gi * 0.1 + si * 0.05, duration: 0.8, ease: 'easeOut' }}
                      className="h-full"
                      style={{
                        background: god.gradient,
                        boxShadow: `0 0 8px ${god.primary}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.0 }}
        className="font-cinzel text-xs italic tracking-widest mt-12 text-center"
        style={{ color: god.primary }}
      >
        "{god.lore}"
      </motion.p>
      </div>
    </div>
  );
}
