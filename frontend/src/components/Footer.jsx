import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Qubnix</span> <span className="text-secondary">IT Solutions</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Transforming businesses through innovative IT solutions, cloud collaboration, and intelligent automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/services/collaborative-applications" className="hover:text-primary transition">Collaborative Apps</Link></li>
              <li><Link to="/services/security-audit" className="hover:text-primary transition">Security & Audit</Link></li>
              <li><Link to="/services/development-ai" className="hover:text-primary transition">Development & AI</Link></li>
              <li><Link to="/it-helpdesk" className="hover:text-primary transition">IT Helpdesk 24/7</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-primary" />
                <a href="mailto:sales@qubnixitsolutions.com" className="hover:text-primary transition">
                  sales@qubnixitsolutions.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-primary" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-primary mt-1" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; 2024 Qubnix IT Solutions. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {/*<a href="#" className="text-gray-400 hover:text-primary transition text-xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition text-xl"><FaFacebook /></a>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;