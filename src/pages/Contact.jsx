import { motion } from 'framer-motion';
import { gods } from '../gods';
import GodBadge from '../components/GodBadge';

const god = gods.contact;

const socialLinks = [
  { label: 'GitHub', handle: '@Nyckolas12', url: 'https://github.com/Nyckolas12' },
  { label: 'LinkedIn', handle: 'Your Name', url: '#' },
  { label: 'Email', handle: 'your@email.com', url: 'mailto:your@email.com' },
];

export default function Contact() {
  return (
    <div className="relative min-h-screen z-10 w-full">
      <div className="max-w-3xl mx-auto px-10 pt-28 pb-20">
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
        Find Me
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8 }}
        className="w-24 h-px mb-8 origin-left"
        style={{ background: god.gradient }}
      />

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-gray-400 leading-relaxed mb-10 font-light"
      >
        Whether you have a project in mind, a question, or just want to say hello —
        all paths lead here. Fill out the form below or reach me directly.
      </motion.p>

      {/* Contact form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4 mb-12"
        onSubmit={e => e.preventDefault()}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-cinzel text-xs tracking-widest uppercase block mb-2" style={{ color: god.primary, opacity: 0.7 }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rune-border rounded-sm px-4 py-3 bg-transparent text-white placeholder-gray-600 text-sm font-light outline-none focus:bg-white/5 transition-colors"
            />
          </div>
          <div>
            <label className="font-cinzel text-xs tracking-widest uppercase block mb-2" style={{ color: god.primary, opacity: 0.7 }}>
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rune-border rounded-sm px-4 py-3 bg-transparent text-white placeholder-gray-600 text-sm font-light outline-none focus:bg-white/5 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="font-cinzel text-xs tracking-widest uppercase block mb-2" style={{ color: god.primary, opacity: 0.7 }}>
            Message
          </label>
          <textarea
            rows={5}
            placeholder="What would you like to discuss?"
            className="w-full rune-border rounded-sm px-4 py-3 bg-transparent text-white placeholder-gray-600 text-sm font-light outline-none focus:bg-white/5 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="god-btn font-cinzel text-xs tracking-[0.3em] uppercase px-10 py-3 text-black font-bold rounded-sm"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      >
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase mb-4" style={{ color: god.primary, opacity: 0.7 }}>
          Or find me at
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {socialLinks.map(({ label, handle, url }) => (
            <a
              key={label}
              href={url}
              className="rune-border rounded-sm px-4 py-3 text-center hover:bg-white/5 transition-colors group"
            >
              <p className="font-cinzel text-xs tracking-widest uppercase mb-1" style={{ color: god.primary, opacity: 0.6 }}>
                {label}
              </p>
              <p className="text-gray-400 text-xs group-hover:text-white transition-colors font-light">
                {handle}
              </p>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.9 }}
        className="font-cinzel text-xs italic tracking-widest mt-10 text-center"
        style={{ color: god.primary }}
      >
        "{god.lore}"
      </motion.p>
      </div>
    </div>
  );
}
