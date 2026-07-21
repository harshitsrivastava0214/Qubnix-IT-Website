import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaRobot, FaHeadset, FaCloud, FaCheck } from 'react-icons/fa';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const services = [
    {
      icon: <FaCloud />,
      title: "Collaborative Applications",
      description: "Google Workspace & Microsoft 365 setup, migration, and administration",
      link: "/services/collaborative-applications",
      bg: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Audit",
      description: "ISO compliance, data security audits, and regulatory compliance",
      link: "/services/security-audit",
      bg: "bg-teal-50",
      iconColor: "text-secondary"
    },
    {
      icon: <FaRobot />,
      title: "Development & AI",
      description: "Custom applications, AI solutions, and intelligent automation",
      link: "/services/development-ai",
      bg: "bg-amber-50",
      iconColor: "text-accent"
    },
    {
      icon: <FaHeadset />,
      title: "IT Helpdesk 24/7",
      description: "Round-the-clock technical support and issue resolution",
      link: "/it-helpdesk",
      bg: "bg-rose-50",
      iconColor: "text-rose-500"
    }
  ];

  const whyChooseUs = [
    { title: "Certified Specialists", description: "Deep expertise across cloud ecosystems" },
    { title: "Security-First Approach", description: "Strict data governance and cybersecurity" },
    { title: "Zero-Downtime Guarantee", description: "Plan and execute complex migrations flawlessly" },
    { title: "24/7 Support", description: "Always available when you need us" }
  ];

  const stats = [
    { value: "10+", label: "Happy Clients" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support Availability" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const techStack = ['React.js', 'Node.js', 'AWS', 'Google Cloud', 'Python', 'Docker', 'Kubernetes', 'TailwindCSS', 'MongoDB', 'PostgreSQL'];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-dark text-white py-24 md:py-36">
        {/* Grid + glow backdrop */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-10 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/5 border border-white/10 text-secondary mb-6">
              Enterprise IT Consulting
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="gradient-text-animated block mt-1"> Intelligent IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              From cloud collaboration to AI-powered automation, we empower enterprises to innovate, secure, and scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="btn-shine bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-bold flex items-center justify-center transition shadow-glow"
              >
                Start Your Transformation <FaArrowRight className="ml-2" />
              </Link>
              <button className="border-2 border-white/20 text-white hover:border-primary hover:bg-primary/10 px-8 py-3.5 rounded-lg font-bold transition">
                Schedule Demo
              </button>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-sm font-bold tracking-widest uppercase text-primary">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to drive growth, security, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="feature-card group"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div className={`icon-tile ${service.bg} ${service.iconColor} mb-5`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-display font-bold mb-2.5">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 gap-1 transition-all"
                >
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-sm font-bold tracking-widest uppercase text-secondary">Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Why Choose Qubnix?</h2>
            <p className="text-lg text-gray-400">
              Industry-leading expertise meets your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5 p-6 rounded-xl bg-dark-card border border-dark-border hover:border-primary/40 transition-colors duration-300"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <FaCheck className="text-white text-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-sm font-bold tracking-widest uppercase text-primary">Our Toolkit</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Built with modern, industry-leading technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-card text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/30"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              >
                <p className="font-semibold text-gray-800 text-sm">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-300% animate-gradient-x text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-9 opacity-90">
            Let's discuss how Qubnix can help you achieve your IT goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
          >
            Get Started Today <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
