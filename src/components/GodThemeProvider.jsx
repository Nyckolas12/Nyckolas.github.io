import { useEffect } from 'react';

export default function GodThemeProvider({ god, children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--god-primary', god.primary);
    root.style.setProperty('--god-secondary', god.secondary);
    root.style.setProperty('--god-gradient', god.gradient);
    root.style.setProperty('--god-primary-30', god.primary + '4D');
    document.body.style.background = god.bg;
  }, [god]);

  return children;
}
