import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center font-bold text-2xl">
            <span className="text-primary">Qubnix</span>
            <span className="text-secondary ml-1">IT Solutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-primary transition flex items-center">
                Services <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 top-full w-64 bg-dark border border-primary rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                <Link 
                  to="/services/collaborative-applications" 
                  className="block px-4 py-3 hover:bg-primary hover:bg-opacity-20 border-b"
                >
                  <div className="font-semibold">Collaborative Applications</div>
                  <div className="text-sm text-gray-400">Google Workspace & Microsoft 365</div>
                </Link>
                <Link 
                  to="/services/security-audit" 
                  className="block px-4 py-3 hover:bg-primary hover:bg-opacity-20 border-b"
                >
                  <div className="font-semibold">Security & Audit</div>
                  <div className="text-sm text-gray-400">ISO Compliance & Audits</div>
                </Link>
                <Link 
                  to="/services/development-ai" 
                  className="block px-4 py-3 hover:bg-primary hover:bg-opacity-20"
                >
                  <div className="font-semibold">Development & AI</div>
                  <div className="text-sm text-gray-400">Custom Apps & AI Solutions</div>
                </Link>
              </div>
            </div>

            <Link to="/it-helpdesk" className="hover:text-primary transition">IT Helpdesk 24/7</Link>
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-primary">Home</Link>
            <Link to="/services/collaborative-applications" className="block py-2 hover:text-primary">
              Collaborative Applications
            </Link>
            <Link to="/services/security-audit" className="block py-2 hover:text-primary">
              Security & Audit
            </Link>
            <Link to="/services/development-ai" className="block py-2 hover:text-primary">
              Development & AI
            </Link>
            <Link to="/it-helpdesk" className="block py-2 hover:text-primary">IT Helpdesk 24/7</Link>
            <Link 
              to="/contact" 
              className="block mt-2 bg-primary hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;