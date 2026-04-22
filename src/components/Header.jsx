import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MotionLink = motion(Link);

export default function Header({ currentPage = '', initialDark = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!initialDark) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialDark]);

  const navItems = [
    { label: 'Home', to: '/', isLink: true },
    { label: 'About', to: '/about', isLink: true },
    { label: 'Services', href: '/#services', isLink: false },
  ];

  const pillClass = scrolled
    ? 'bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(10,22,40,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]'
    : 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]';

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-[420px] md:max-w-none">
      <motion.header
        className={`flex items-center gap-1 pl-2 pr-2 py-1.5 rounded-full transition-all duration-500 ${pillClass}`}
        initial={{ opacity: 0, y: -16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Logo */}
        <div className="px-3">
          <Link to="/">
            <img
              src="/new-GPP.svg"
              alt="Guided Peak Potential"
              className={`transition-all duration-300 w-auto object-contain ${scrolled ? 'h-8' : 'h-7'}`}
            />
          </Link>
        </div>

        {/* Divider */}
        <div className={`w-px h-4 flex-shrink-0 transition-colors duration-500 ${scrolled ? 'bg-brand-navy/15' : 'bg-white/25'}`} />

        {/* Nav — desktop only */}
        <nav className="hidden md:flex items-center px-2">
          {navItems.map(({ label, to, href, isLink }) => {
            const isActive = currentPage === label.toLowerCase();
            const baseClass = `px-4 py-2 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 rounded-full hover:bg-white/10`;
            const colorClass = isActive
              ? scrolled ? 'text-brand-navy' : 'text-white'
              : scrolled ? 'text-brand-navy/55 hover:text-brand-navy' : 'text-white/65 hover:text-white';

            return isLink ? (
              <MotionLink key={label} to={to} className={`${baseClass} ${colorClass}`}>
                {label}
              </MotionLink>
            ) : (
              <motion.a key={label} href={href} className={`${baseClass} ${colorClass}`}>
                {label}
              </motion.a>
            );
          })}
        </nav>

        {/* CTA — desktop */}
        <MotionLink
          to="/contact"
          className={`hidden md:block px-5 py-2 rounded-full text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
            scrolled
              ? 'bg-brand-blue text-white hover:bg-brand-navy'
              : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Book
        </MotionLink>

        {/* Mobile: Book + Hamburger */}
        <div className="flex md:hidden items-center gap-0.5 ml-auto">
          <MotionLink
            to="/contact"
            className={`px-4 py-2 rounded-full text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
              scrolled
                ? 'bg-brand-blue text-white'
                : 'bg-white/20 text-white border border-white/30'
            }`}
            whileTap={{ scale: 0.97 }}
          >
            Book
          </MotionLink>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className={`w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full transition-colors duration-300 ${
              scrolled ? 'text-brand-navy hover:bg-brand-navy/8' : 'text-white hover:bg-white/15'
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px transition-all duration-300 origin-center ${
                menuOpen ? 'w-4 rotate-45 translate-y-[6.5px] bg-current' : 'w-4 bg-current'
              }`}
            />
            <span
              className={`block h-px w-4 transition-all duration-300 bg-current ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px transition-all duration-300 origin-center ${
                menuOpen ? 'w-4 -rotate-45 -translate-y-[6.5px] bg-current' : 'w-4 bg-current'
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className={`mt-2 rounded-2xl overflow-hidden ${
              scrolled
                ? 'bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(10,22,40,0.12)]'
                : 'bg-brand-navy/85 backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3)]'
            }`}
          >
            {navItems.map(({ label, to, href, isLink }) => {
              const colorClass = scrolled
                ? 'text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5'
                : 'text-white/75 hover:text-white hover:bg-white/10';
              const cls = `block w-full text-left px-6 py-4 text-[10px] font-medium tracking-[0.22em] uppercase transition-colors duration-200 border-b last:border-0 ${
                scrolled ? 'border-brand-border/50' : 'border-white/10'
              } ${colorClass}`;
              return isLink ? (
                <Link key={label} to={to} className={cls} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} className={cls} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
