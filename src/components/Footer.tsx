import { Link } from 'react-router-dom';
import { Zap, ArrowUpRight } from 'lucide-react';
import vitclogo from '@/assets/vitclogo.ico';

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Research', href: '#research' },
  ],
  explore: [
    { name: 'Gallery', href: '/gallery' },
    
    { name: 'Events', href: '/events' },
  ],
  resources: [
    { name: 'VIT Chennai', href: 'https://chennai.vit.ac.in/', external: true },
    { name: 'Research Portal', href: '#' },
    { name: 'Student Login', href: '#' },
    { name: 'Faculty Portal', href: '#' },
  ],
};

export const Footer = () => {
  const handleScrollClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative pt-16 pb-8 border-t border-border bg-gray-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={vitclogo} alt="VITC Logo" className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">VIT Chennai</span>
                <span className="text-xs text-gray-300">Innovation Hub</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Empowering the next generation of innovators and entrepreneurs through world-class research facilities and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleScrollClick(link.href)}
                      className="text-sm text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:innovation@vit.ac.in" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  innovation@vit.ac.in
                </a>
              </li>
              <li>
                <a href="tel:+914427175000" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  +91 44 2717 5000
                </a>
              </li>
              <li className="text-sm text-gray-300">
                VIT Chennai, Vandalur-Kelambakkam Road,
                <br />
                Chennai - 600127
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300 text-center md:text-left">
            © 2026 VIT Chennai Innovation Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
