import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `relative transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
      isActive ? 'text-white after:w-full' : 'text-gray-300 hover:text-white after:w-0 hover:after:w-full'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-dark border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center font-display font-bold text-xl md:text-2xl">
            <span className="text-primary">Qubnix</span>
            <span className="text-secondary ml-1.5">IT Solutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition flex items-center gap-1">
                Services
                <span className="transition-transform duration-300 group-hover:rotate-180 text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full pt-3 w-72 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-hidden">
                  <Link
                    to="/services/collaborative-applications"
                    className="block px-5 py-3.5 hover:bg-primary/10 border-b border-dark-border transition"
                  >
                    <div className="font-semibold text-white">Collaborative Applications</div>
                    <div className="text-xs text-gray-400 mt-0.5">Google Workspace & Microsoft 365</div>
                  </Link>
                  <Link
                    to="/services/security-audit"
                    className="block px-5 py-3.5 hover:bg-primary/10 border-b border-dark-border transition"
                  >
                    <div className="font-semibold text-white">Security & Audit</div>
                    <div className="text-xs text-gray-400 mt-0.5">ISO Compliance & Audits</div>
                  </Link>
                  <Link
                    to="/services/development-ai"
                    className="block px-5 py-3.5 hover:bg-primary/10 transition"
                  >
                    <div className="font-semibold text-white">Development & AI</div>
                    <div className="text-xs text-gray-400 mt-0.5">Custom Apps & AI Solutions</div>
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/it-helpdesk" className={navLinkClass}>IT Helpdesk 24/7</NavLink>
            <Link
              to="/contact"
              className="btn-shine bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-glow"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-white" aria-label="Toggle menu">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-dark-border"
            >
              <div className="pb-4 pt-2 flex flex-col text-gray-300">
                <Link onClick={toggleMenu} to="/" className="py-2.5 hover:text-white transition">Home</Link>
                <Link onClick={toggleMenu} to="/services/collaborative-applications" className="py-2.5 hover:text-white transition">
                  Collaborative Applications
                </Link>
                <Link onClick={toggleMenu} to="/services/security-audit" className="py-2.5 hover:text-white transition">
                  Security & Audit
                </Link>
                <Link onClick={toggleMenu} to="/services/development-ai" className="py-2.5 hover:text-white transition">
                  Development & AI
                </Link>
                <Link onClick={toggleMenu} to="/it-helpdesk" className="py-2.5 hover:text-white transition">IT Helpdesk 24/7</Link>
                <Link
                  onClick={toggleMenu}
                  to="/contact"
                  className="mt-3 bg-primary hover:bg-primary-dark px-4 py-2.5 rounded-lg font-semibold text-center text-white transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
