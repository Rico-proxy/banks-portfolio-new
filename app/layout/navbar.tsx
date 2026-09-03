import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useTheme } from '~/components/theme-provider';
import { Button } from '~/components/ui/button';
import { navItems, siteInfo } from '~/layout/data/site';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="fixed left-1/2 top-6 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
      <nav className="flex items-center justify-between rounded-full border border-ochre-gold/25 bg-studio-bg/85 px-4 py-3.5 shadow-2xl backdrop-blur-2xl sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 font-serif text-sm font-bold uppercase tracking-widest text-sandstone">
          <span className="h-2.5 w-2.5 rounded-full bg-ochre-gold motion-safe:animate-pulse" />
          {siteInfo.name}
        </Link>

        <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-slate-400 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.page}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `transition-colors hover:text-ochre-gold ${isActive ? 'font-bold text-ochre-gold' : ''}`
              }>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="unstyled"
            size="unstyled"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-ochre-gold/30 bg-studio-card/70 text-ochre-gold transition hover:bg-ochre-gold hover:text-black">
            <Sun
              className={`absolute h-4 w-4 transition duration-300 ${
                isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <Moon
              className={`absolute h-4 w-4 transition duration-300 ${
                isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`}
            />
          </Button>
          <Button
            type="button"
            variant="unstyled"
            size="unstyled"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex items-center gap-2 rounded-full border border-ochre-gold/30 px-4 py-2 font-mono text-xs uppercase tracking-wider text-sandstone transition hover:bg-ochre-gold hover:text-black xl:hidden">
            <Menu className="h-4 w-4" />
            Menu
          </Button>
          <Button
            asChild
            className="hidden h-auto rounded-full bg-ochre-gold px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-white sm:block">
            <Link to="/contact">Enquire</Link>
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="mt-3 space-y-4 rounded-2xl border border-ochre-gold/30 bg-studio-bg/95 p-6 font-mono text-xs uppercase tracking-widest shadow-2xl backdrop-blur-2xl xl:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.page}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full border-b border-ochre-gold/10 py-2 text-left transition-colors hover:text-ochre-gold ${
                  isActive ? 'font-bold text-ochre-gold' : 'text-sandstone'
                }`
              }>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
