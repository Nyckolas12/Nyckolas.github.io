import { NavLink } from 'react-router-dom';
import { gods } from '../gods';

const navItems = [
  { label: 'Origin', path: '/', god: gods.home },
  { label: 'Chronicle', path: '/about', god: gods.about },
  { label: 'Forge', path: '/projects', god: gods.projects },
  { label: 'Storm', path: '/skills', god: gods.skills },
  { label: 'Wayfind', path: '/contact', god: gods.contact },
];

export default function Nav({ activeGod }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Logo / current god */}
      <div className="flex items-center gap-3">
        <span
          className="text-2xl"
          style={{ color: activeGod.primary, filter: `drop-shadow(0 0 8px ${activeGod.primary})` }}
        >
          {activeGod.symbol}
        </span>
        <span
          className="font-cinzel text-sm tracking-[0.2em] uppercase"
          style={{ color: activeGod.primary }}
        >
          {activeGod.name}
        </span>
      </div>

      {/* Nav links */}
      <ul className="flex items-center gap-8">
        {navItems.map(({ label, path, god }) => (
          <li key={path}>
            <NavLink
              to={path}
              end
              className={({ isActive }) =>
                `font-cinzel text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? god.primary : '#fff',
                textShadow: isActive ? `0 0 12px ${god.primary}` : 'none',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
