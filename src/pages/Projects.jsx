import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gods } from '../gods';
import GodBadge from '../components/GodBadge';

const god = gods.projects;

const projects = [
  {
    title: 'Worlds Beyond Us',
    description: 'Worlds Beyond Us is an open-world fantasy RPG that involes duel protagonists, a rich narrative, and a vast world to explore. Players will embark on an epic journey through diverse landscapes, from enchanted forests to ancient ruins, uncovering hidden secrets and forging their own destiny in a realm teeming with magic and mystery.',
    tech: ['Unreal Engine', 'C++', 'Metahuman'],
    link: '#',
    repo: '#',
    status: 'In Progress',
    media: '/Nyckolas.github.io/videos/Worlds-Beyond-Us.mp4',
    mediaType: 'video',
  },
  {
    title: 'Light Souls',
    description: 'My first attempt at a soulslike game. Light Souls is a 3D action RPG that combines fast-paced combat, intricate level design, and a dark, atmospheric world. Players will face challenging enemies, uncover hidden lore, and master precise timing to survive in a realm where light and shadow collide.',
    tech: ['Unreal Engine', 'C++'],
    link: '#',
    repo: '#',
    status: 'In Progress',
    media: '/Nyckolas.github.io/videos/Light-Souls.mp4',
    mediaType: 'video',
  },
  {
    title: 'Run from the Beast',
    description: 'Run from the Beast is a First Person Horror game where you are trapped inside a nightmare house where a terrifying beast is hunting you down. You must explore the house, solve puzzles, and find a way to escape while avoiding the relentless pursuit of the beast. With its eerie atmosphere, suspenseful gameplay, and heart-pounding chases, Run from the Beast delivers a thrilling horror experience that will keep players on the edge of their seats.',
    tech: ['Unreal Engine', 'C++', 'Metahuman'],
    link: null,
    repo: '#',
    status: 'Live',
    media: '/Nyckolas.github.io/videos/Run-From-The-Beasts.mp4',
    mediaType: 'video',
  },
  {
    title: 'Turbo Cart Chaos',
    description: 'Where 2nd place is just the first loser! Compete against AI drivers to be the best! Experience the thrilling agony of near-victory and the pure bliss of being the only one who matters. Enjoy the ride( to first place or obscurity)!',
    tech: ['Unity', 'C#'],
    link: 'https://hawkeye007.itch.io/turbo-cart-chaos',
    repo: 'https://github.com/Hawkeye9157/Game-Jam',
    status: 'Archived',
    media: '/Nyckolas.github.io/images/turbo-cart-chaos.png',
    mediaType: 'image',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMedia, setShowMedia] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowMedia(false);
    setVideoError(false);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowMedia(false);
    setVideoError(false);
  };

  const currentProject = projects[currentIndex];

  const handleVideoError = () => {
    setVideoError(true);
  };

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: god.primary + '40' }}
            aria-label="Previous project"
          >
            <span className="text-2xl" style={{ color: god.primary }}>‹</span>
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: god.primary + '40' }}
            aria-label="Next project"
          >
            <span className="text-2xl" style={{ color: god.primary }}>›</span>
          </button>

          {/* Project Card */}
          <div className="rune-border rounded-sm p-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Media Toggle & Display */}
                <div className="relative">
                  {showMedia && currentProject.media ? (
                    <div className="relative aspect-video rounded-sm overflow-hidden mb-6 bg-black">
                      {currentProject.mediaType === 'video' ? (
                        videoError ? (
                          <div className="w-full h-full flex items-center justify-center bg-black/80">
                            <div className="text-center">
                              <div className="text-3xl mb-2" style={{ color: god.primary }}>⚠</div>
                              <span className="font-cinzel text-xs tracking-widest uppercase" style={{ color: god.primary }}>
                                Video unavailable
                              </span>
                            </div>
                          </div>
                        ) : (
                          <video
                            src={currentProject.media}
                            title={currentProject.title}
                            className="w-full h-full object-contain"
                            controls
                            autoPlay
                            onError={handleVideoError}
                          />
                        )
                      ) : (
                        <img
                          src={currentProject.media}
                          alt={currentProject.title}
                          className="w-full h-full object-contain"
                        />
                      )}
                      <button
                        onClick={() => {
                          setShowMedia(false);
                          setVideoError(false);
                        }}
                        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-white text-sm hover:bg-black/90 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowMedia(true)}
                      className="w-full aspect-video rounded-sm flex items-center justify-center border-2 border-dashed transition-all duration-300 hover:border-solid group"
                      style={{ borderColor: god.primary + '40' }}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform" style={{ color: god.primary }}>
                          {currentProject.mediaType === 'video' ? '▶' : '🖼'}
                        </div>
                        <span className="font-cinzel text-xs tracking-widest uppercase" style={{ color: god.primary }}>
                          {currentProject.mediaType === 'video' ? 'Play Trailer' : 'View Image'}
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-cinzel text-2xl text-white god-glow-sm mb-2">
                      {currentProject.title}
                    </h3>
                    <span
                      className="font-cinzel text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm"
                      style={{
                        color: god.primary,
                        border: `1px solid ${god.primary}40`,
                      }}
                    >
                      {currentProject.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {currentProject.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map(t => (
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
                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      className="font-cinzel text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                      style={{ color: god.primary }}
                    >
                      Live →
                    </a>
                  )}
                  {currentProject.repo && (
                    <a
                      href={currentProject.repo}
                      className="font-cinzel text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      Source →
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setShowMedia(false);
                }}
                className="transition-all duration-300"
                aria-label={`Go to project ${i + 1}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? '24px' : '8px',
                    height: '8px',
                    background: i === currentIndex ? god.primary : god.primary + '40',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="font-cinzel text-xs tracking-widest" style={{ color: god.primary }}>
              {currentIndex + 1} / {projects.length}
            </span>
          </div>
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
