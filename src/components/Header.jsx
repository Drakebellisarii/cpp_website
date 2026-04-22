import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Header({ currentPage = '', initialDark = true }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!initialDark) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialDark]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const navItems = [
    { label: 'Home', to: '/', isLink: true },
    { label: 'About', to: '/about', isLink: true },
    { label: 'Services', onClick: handleServicesClick, isLink: false },
  ];

  const pillClass = scrolled
    ? 'bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(10,22,40,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]'
    : 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]';

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-[520px] md:max-w-none">
      <motion.header
        className={`flex items-center gap-0.5 pl-2 pr-2 py-1.5 rounded-full transition-all duration-500 ${pillClass}`}
        initial={{ opacity: 0, y: -16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Logo */}
        <div className="px-2 md:px-3 flex-shrink-0">
          <Link to="/">
            <img
              src="/new-GPP.svg"
              alt="Guided Peak Potential"
              className={`transition-all duration-300 w-auto object-contain ${scrolled ? 'h-7 md:h-8' : 'h-6 md:h-7'}`}
            />
          </Link>
        </div>

        {/* Divider */}
        <div className={`w-px h-4 flex-shrink-0 transition-colors duration-500 ${scrolled ? 'bg-brand-navy/15' : 'bg-white/25'}`} />

        {/* Nav — always visible, centered between logo and CTA */}
        <nav className="flex-1 flex items-center justify-center px-1 md:px-2">
          {navItems.map(({ label, to, onClick, isLink }) => {
            const isActive = currentPage === label.toLowerCase();
            const baseClass = `px-2 md:px-4 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.12em] md:tracking-[0.18em] uppercase transition-colors duration-300 rounded-full hover:bg-white/10`;
            const colorClass = isActive
              ? scrolled ? 'text-brand-navy' : 'text-white'
              : scrolled ? 'text-brand-navy/55 hover:text-brand-navy' : 'text-white/65 hover:text-white';

            return isLink ? (
              <MotionLink key={label} to={to} className={`${baseClass} ${colorClass}`}>
                {label}
              </MotionLink>
            ) : (
              <motion.button key={label} onClick={onClick} className={`${baseClass} ${colorClass} cursor-pointer`}>
                {label}
              </motion.button>
            );
          })}
        </nav>

        {/* CTA */}
        <MotionLink
          to="/contact"
          className={`flex-shrink-0 px-3 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] font-medium tracking-[0.12em] md:tracking-[0.15em] uppercase transition-all duration-300 ${
            scrolled
              ? 'bg-brand-blue text-white hover:bg-brand-navy'
              : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Book
        </MotionLink>
      </motion.header>
    </div>
  );
}
