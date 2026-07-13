import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaRobot, FaHeadset, FaCloud, FaCheck } from 'react-icons/fa';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaCloud className="text-4xl text-primary" />,
      title: "Collaborative Applications",
      description: "Google Workspace & Microsoft 365 setup, migration, and administration",
      link: "/services/collaborative-applications",
      color: "from-blue-500"
    },
    {
      icon: <FaShieldAlt  className="text-4xl text-secondary" />,
      title: "Security & Audit",
      description: "ISO compliance, data security audits, and regulatory compliance",
      link: "/services/security-audit",
      color: "from-green-500"
    },
    {
      icon: <FaRobot className="text-4xl text-accent" />,
      title: "Development & AI",
      description: "Custom applications, AI solutions, and intelligent automation",
      link: "/services/development-ai",
      color: "from-yellow-500"
    },
    {
      icon: <FaHeadset className="text-4xl text-red-500" />,
      title: "IT Helpdesk 24/7",
      description: "Round-the-clock technical support and issue resolution",
      link: "/it-helpdesk",
      color: "from-red-500"
    }
  ];

  const whyChooseUs = [
    { title: "Certified Specialists", description: "Deep expertise across cloud ecosystems" },
    { title: "Security-First Approach", description: "Strict data governance and cybersecurity" },
    { title: "Zero-Downtime Guarantee", description: "Plan and execute complex migrations flawlessly" },
    { title: "24/7 Support", description: "Always available when you need us" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark via-dark to-dark text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="gradient-text"> Intelligent IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From cloud collaboration to AI-powered automation, we empower enterprises to innovate, secure, and scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center transition hover-lift"
              >
                Start Your Transformation <FaArrowRight className="ml-2" />
              </Link>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to drive growth, security, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover-lift group"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-bold hover:text-blue-700 transition"
                >
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Why Choose Qubnix?</h2>
            <p className="text-xl text-gray-300">
              Industry-leading expertise meets your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <FaCheck className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600">
              Built with modern, industry-leading technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['React.js', 'Node.js', 'AWS', 'Google Cloud', 'Python', 'Docker', 'Kubernetes', 'TailwindCSS', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover-lift"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              >
                <p className="font-bold text-gray-800">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Qubnix can help you achieve your IT goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;