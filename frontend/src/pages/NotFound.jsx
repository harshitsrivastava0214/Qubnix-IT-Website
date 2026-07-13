import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-dark to-dark">
      <motion.div
        className="text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-9xl font-bold mb-4 opacity-30">404</div>
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition"
        >
          Return to Home <FaArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;