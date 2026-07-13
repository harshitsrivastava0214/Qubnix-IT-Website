import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DevelopmentAI = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Next-Gen Web & Mobile Application Development',
      icon: '💻',
      subtitle: 'Build Scalable, Modern Applications',
      description: 'Enterprise-grade applications built with cutting-edge technologies.',
      details: 'We develop high-performance web and mobile applications optimized for scale, security, and user experience. Our approach combines modern architecture patterns with proven development practices.',
      features: [
        {
          heading: 'Cloud-Native & Microservices Architecture',
          content: 'Building highly scalable software optimized for AWS, Azure, or Google Cloud using containerization (Docker, Kubernetes).'
        },
        {
          heading: 'Progressive Web Applications (PWAs)',
          content: 'High-performance web apps that feel and operate like native mobile apps, with offline capabilities and instant loading.'
        },
        {
          heading: 'Cross-Platform Mobile Engineering',
          content: 'Single-codebase mobile apps using Flutter or React Native to optimize development time and budget while maintaining quality.'
        },
        {
          heading: 'Responsive UI/UX Design',
          content: 'Beautiful, intuitive interfaces designed with user research and modern design principles for optimal user engagement.'
        },
        {
          heading: 'API-First Development',
          content: 'RESTful and GraphQL APIs designed for scalability, security, and seamless integration with third-party services.'
        }
      ],
      benefits: [
        'Faster time-to-market',
        'Cost-effective development',
        'Highly scalable architecture',
        'Superior user experience',
        'Easy maintenance and updates',
        'Cross-platform compatibility'
      ],
      technologies: ['React.js', 'Next.js', 'Flutter', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      id: 2,
      title: 'Custom AI & Intelligent Automation',
      icon: '🤖',
      subtitle: 'Leverage AI for Business Transformation',
      description: 'Deploy intelligent systems that learn, adapt, and automate complex business processes.',
      details: 'Transform your business with custom AI solutions designed specifically for your use cases. From autonomous agents to intelligent chatbots, we build AI systems that deliver measurable business value.',
      features: [
        {
          heading: 'Multi-Agent Workflow Systems',
          content: 'Deploy autonomous AI agents capable of executing multi-step business operations with minimal human oversight, improving efficiency and reducing errors.'
        },
        {
          heading: 'Retrieval-Augmented Generation (RAG) Solutions',
          content: 'Develop secure, custom internal knowledge bases using LLMs while keeping your data private and compliant. Build intelligent search and Q&A systems powered by your proprietary data.'
        },
        {
          heading: 'Predictive Analytics & Machine Learning',
          content: 'Integrate tailored ML models for demand forecasting, customer behavior prediction, and data-driven decision making.'
        },
        {
          heading: 'Computer Vision Solutions',
          content: 'Implement automated quality control, object detection, and image analysis for manufacturing, retail, and logistics industries.'
        },
        {
          heading: 'Natural Language Processing',
          content: 'Sentiment analysis, text classification, named entity recognition, and advanced chatbots for customer engagement.'
        },
        {
          heading: 'Intelligent Automation (RPA)',
          content: 'Automate repetitive business processes like data entry, invoice processing, and report generation with intelligent automation.'
        }
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual errors',
        'Faster decision-making',
        'Cost savings through automation',
        'Enhanced customer insights',
        'Competitive advantage',
        'Scalable solutions'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Hugging Face', 'Pinecone', 'ChromaDB']
    },
    {
      id: 3,
      title: 'Application Modernization & Support',
      icon: '🔄',
      subtitle: 'Transform Legacy Systems into Modern Solutions',
      description: 'Breathe new life into legacy applications with modern architecture.',
      details: 'Refactor outdated systems into secure, scalable, modern applications without disrupting ongoing business operations. We specialize in smooth transitions and minimal downtime.',
      features: [
        {
          heading: 'Legacy System Assessment',
          content: 'Comprehensive analysis of existing systems to identify modernization opportunities, risks, and ROI.'
        },
        {
          heading: 'System Refactoring & Re-architecting',
          content: 'Transform monolithic applications into microservices-based architectures using modern frameworks and design patterns.'
        },
        {
          heading: 'Database Migration & Optimization',
          content: 'Upgrade legacy databases to modern solutions like PostgreSQL, MongoDB, or managed cloud databases with zero downtime.'
        },
        {
          heading: 'UI/UX Modernization',
          content: 'Replace outdated user interfaces with modern, responsive designs built with React, Vue, or Angular.'
        },
        {
          heading: 'Proactive Maintenance & SLA Support',
          content: 'Dedicated technical support tiers (preventive, adaptive, corrective) to manage updates, patches, and downtime mitigation.'
        },
        {
          heading: 'DevOps & Hyperautomation',
          content: 'Implementing automated CI/CD pipelines to lower deployment failure rates and optimize infrastructure costs.'
        }
      ],
      benefits: [
        'Reduced operational costs',
        'Improved system performance',
        'Enhanced security posture',
        'Better scalability',
        'Easier maintenance',
        'Improved developer productivity',
        'Reduced technical debt'
      ],
      technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'AWS', 'GCP', 'Azure']
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl font-bold mb-6">
              Development & AI Implementation
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mb-8">
              Build the future of your business with intelligent applications powered by AI. From cloud-native architecture to autonomous agents, we create solutions that drive innovation and growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition"
            >
              Start Your Digital Transformation <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Delivery Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Development Framework</h2>
            <p className="text-xl text-gray-600">
              From concept to production, we follow a proven delivery process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Discovery & Assessment',
                duration: 'Week 1',
                description: 'Map business bottlenecks, identify data assets, and evaluate ROI opportunities for AI and automation.',
                icon: '🔍'
              },
              {
                phase: 'Rapid Prototyping & PoC',
                duration: 'Weeks 2-3',
                description: 'Design wireframes and functional prototypes to validate architecture and user experience.',
                icon: '⚡'
              },
              {
                phase: 'Agile MVP Development',
                duration: 'Varies',
                description: 'Build the Minimum Viable Product with security-first defaults and scalable architecture.',
                icon: '🛠️'
              },
              {
                phase: 'Cloud Deployment & Support',
                duration: 'Post-Launch',
                description: 'Deploy to secure cloud, setup CI/CD pipelines, and transition to proactive support.',
                icon: '🚀'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-purple-600">{item.phase}</h4>
                <p className="text-sm text-secondary font-bold mb-3">{item.duration}</p>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600">
              Click on any service to explore detailed features and technologies
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover-lift"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div
                  className="p-8 cursor-pointer flex items-start justify-between"
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <div className="flex-1">
                    <div className="text-5xl mb-3">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-dark">{service.title}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{service.subtitle}</p>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 text-purple-600">
                    <FaArrowRight className={`text-2xl transform transition ${expandedService === service.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t-2 border-gray-200 px-8 py-8 bg-gray-50"
                  >
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-3 text-dark">Overview</h4>
                      <p className="text-gray-700">{service.details}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-dark">Key Features</h4>
                      <div className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx}>
                            <h5 className="font-bold text-lg text-purple-600 mb-2">{feature.heading}</h5>
                            <p className="text-gray-700">{feature.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-dark">Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <FaCheck className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-dark">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
                    >
                      Get Started <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Best Practices */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Security & Development Best Practices</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Confidential Computing & Privacy',
                desc: 'Client data used in AI models is isolated, compliant with DPDP Act, and never leaks into public LLM training sets.'
              },
              {
                title: 'Security-First Development (Shift-Left)',
                desc: 'Automated vulnerability scans, linting rules, and strict dependency checks built into build pipelines from day one.'
              },
              {
                title: 'Data Encryption',
                desc: 'End-to-end encryption for data in transit and at rest using industry-standard protocols like AES-256 and TLS.'
              },
              {
                title: 'Compliance by Design',
                desc: 'Built-in compliance with GDPR, DPDP Act, ISO 27001, and other regulatory requirements from the start.'
              },
              {
                title: 'Regular Security Audits',
                desc: 'Penetration testing, code reviews, and security assessments conducted regularly throughout development.'
              },
              {
                title: 'Automated Testing',
                desc: 'Comprehensive unit, integration, and end-to-end tests to catch issues early and ensure quality code.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 p-8 rounded-lg"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <h4 className="text-xl font-bold text-purple-400 mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Technology Ecosystem</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { category: 'Frontend', techs: ['React.js', 'Next.js', 'Vue.js', 'TailwindCSS'] },
              { category: 'Mobile', techs: ['Flutter', 'React Native', 'Kotlin', 'Swift'] },
              { category: 'Backend', techs: ['Node.js', 'Python', 'Go', 'Java'] },
              { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
              { category: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI'] },
              { category: 'Cloud/DevOps', techs: ['AWS', 'GCP', 'Azure', 'Docker'] }
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <h4 className="font-bold text-purple-600 mb-4">{stack.category}</h4>
                <ul className="space-y-2">
                  {stack.techs.map((tech, tidx) => (
                    <li key={tidx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Success Metrics We Focus On</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: '99.9%', label: 'Uptime SLA' },
              { metric: '<100ms', label: 'Response Time' },
              { metric: '10x', label: 'Faster to Market' },
              { metric: '40%', label: 'Cost Reduction' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{item.metric}</div>
                <p className="text-purple-100">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Innovation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how AI and modern development can transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentAI;