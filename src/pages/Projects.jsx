import { motion } from 'framer-motion';
import { gods } from '../gods';
import GodBadge from '../components/GodBadge';

const god = gods.projects;

const projects = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and why it matters. What problem does it solve?',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
    repo: '#',
    status: 'Live',
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and why it matters. What problem does it solve?',
    tech: ['Tech 1', 'Tech 2'],
    link: '#',
    repo: '#',
    status: 'In Progress',
  },
  {
    title: 'Project Three',
    description: 'A short description of what this project does and why it matters. What problem does it solve?',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: null,
    repo: '#',
    status: 'Live',
  },
  {
    title: 'Project Four',
    description: 'A short description of what this project does and why it matters. What problem does it solve?',
    tech: ['Tech 1', 'Tech 2'],
    link: '#',
    repo: '#',
    status: 'Archived',
  },
];

export default function Projects() {
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
        The Forge
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8 }}
        className="w-24 h-px mb-10 origin-left"
        style={{ background: god.gradient }}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="rune-border rounded-sm p-6 group hover:bg-white/5 transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-cinzel text-lg text-white group-hover:god-glow-sm transition-all">
                {project.title}
              </h3>
              <span
                className="font-cinzel text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm"
                style={{
                  color: god.primary,
                  border: `1px solid ${god.primary}40`,
                  fontSize: '0.6rem',
                }}
              >
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="font-cinzel text-xs px-2 py-0.5 rounded-sm"
                  style={{ background: god.primary + '20', color: god.primary }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  className="font-cinzel text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                  style={{ color: god.primary }}
                >
                  Live →
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="font-cinzel text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Source →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.8 }}
        className="font-cinzel text-xs italic tracking-widest mt-10 text-center"
        style={{ color: god.primary }}
      >
        "{god.lore}"
      </motion.p>
      </div>
    </div>
  );
}
