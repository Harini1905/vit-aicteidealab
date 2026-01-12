import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import vitclogo from '../assets/vitclogo.ico';

const scrollLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

const pageLinks = [
  { name: 'Gallery', href: '/gallery' },
  
  { name: 'Events', href: '/events' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = scrollLinks.map(link => link.href.slice(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return;
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center gap-2">
              <img src={image1} alt="Logo 1" className="h-10 w-auto" />
              <img src={image2} alt="Logo 2" className="h-10 w-auto" />
              <img src={vitclogo} alt="VITC Logo" className="h-10 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}>VIT Chennai - IdeaLab</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {scrollLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => handleScrollClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1) && isHomePage
                    ? 'text-primary'
                    : isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white hover:text-gray-300'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && isHomePage && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  />
                )}
              </a>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white hover:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-2 pt-4">
                {scrollLinks.map((link) => (
                  <a
                    key={link.name}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={(e) => handleScrollClick(e, link.href)}
                    className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-border my-2" />
                {pageLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
