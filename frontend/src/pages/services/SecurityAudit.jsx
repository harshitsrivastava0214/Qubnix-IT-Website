import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SecurityAudit = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'ISO 27001 Implementation',
      icon: '🔐',
      subtitle: 'Information Security Management System',
      description: 'Establish a comprehensive ISMS to protect sensitive information.',
      details: 'Implement ISO 27001:2022 standards through gap analysis, documentation, risk assessment, and control implementation. We ensure your organization meets international information security requirements.',
      process: [
        'Current State Assessment & Gap Analysis',
        'Information Security Policy Development',
        'Risk Assessment & Treatment Planning',
        'Control Implementation & Documentation',
        'Internal Audits & Compliance Verification',
        'Certification Audit Support'
      ],
      benefits: [
        'Comprehensive data protection framework',
        'Reduced security incidents and breaches',
        'Enhanced customer trust and confidence',
        'Competitive advantage in the market',
        'Compliance with regulatory requirements',
        'International recognition of security standards'
      ]
    },
    {
      id: 2,
      title: 'ISO 42001 Implementation',
      icon: '🤖',
      subtitle: 'AI Management System',
      description: 'Navigate AI governance with responsible deployment practices.',
      details: 'Establish AI risk management frameworks, governance structures, and compliance protocols. We help you deploy AI responsibly while meeting regulatory requirements and ethical standards.',
      process: [
        'AI Use Case Assessment',
        'Risk & Impact Analysis',
        'AI Governance Framework Design',
        'Compliance & Ethics Policy Development',
        'AI Model Documentation & Testing',
        'Audit Trail & Monitoring Setup',
        'Certification Audit Support'
      ],
      benefits: [
        'Responsible AI deployment',
        'Reduced AI-related risks',
        'Ethical AI governance',
        'Regulatory compliance',
        'Stakeholder confidence',
        'Sustainable AI practices'
      ]
    },
    {
      id: 3,
      title: 'DPDP Act Implementation',
      icon: '📋',
      subtitle: 'Digital Personal Data Protection Act Compliance',
      description: "Ensure compliance with India's DPDP Act.",
      details: 'Data mapping, consent management, privacy by design implementation, and DPO responsibilities. We ensure your organization fully complies with India\'s new data protection legislation.',
      process: [
        'Complete Data Mapping & Audit',
        'Consent Management Framework',
        'Privacy By Design Implementation',
        'Data Subject Rights Management',
        'Data Protection Officer Setup',
        'Incident Response Plan',
        'Regular Compliance Audits'
      ],
      benefits: [
        'Full DPDP Act compliance',
        'Protection against penalties',
        'Enhanced data subject trust',
        'Clear data handling procedures',
        'Reduced legal risks',
        'Customer confidence in data safety'
      ]
    },
    {
      id: 4,
      title: 'ISO 9001 Implementation',
      icon: '🏆',
      subtitle: 'Quality Management System',
      description: 'Build a robust QMS demonstrating commitment to quality.',
      details: 'Implement ISO 9001:2015 processes, documentation, and controls. We help you establish a culture of continuous improvement and customer satisfaction.',
      process: [
        'Current Quality Assessment',
        'QMS Policy & Objective Setting',
        'Process Documentation & Mapping',
        'Control Plan & Risk Management',
        'Training & Competency Development',
        'Internal Audit Program',
        'Management Review & Certification'
      ],
      benefits: [
        'Improved product/service quality',
        'Enhanced customer satisfaction',
        'Reduced operational costs',
        'Better process efficiency',
        'Market credibility',
        'Continuous improvement culture'
      ]
    },
    {
      id: 5,
      title: 'Data Security Audits',
      icon: '🔍',
      subtitle: 'Comprehensive Security Assessment',
      description: 'Thorough security evaluation of your entire infrastructure.',
      details: 'Our experts conduct comprehensive audits covering network architecture, access controls, encryption, vulnerability management, and incident response capabilities.',
      process: [
        'Network Architecture Review',
        'Access Control Assessment',
        'Encryption Standards Verification',
        'Vulnerability Scanning & Testing',
        'Penetration Testing',
        'Incident Response Testing',
        'Detailed Report & Remediation Plan'
      ],
      benefits: [
        'Identify security vulnerabilities',
        'Prioritized remediation roadmap',
        'Enhanced security posture',
        'Reduced breach risk',
        'Compliance verification',
        'Peace of mind on security'
      ]
    },
    {
      id: 6,
      title: 'PCI DSS Implementation & Audits',
      icon: '💳',
      subtitle: 'Payment Card Industry Data Security Standard',
      description: 'Secure payment processing with PCI DSS compliance.',
      details: 'Implement cardholder data protection, network security controls, and conduct regular audits. We ensure secure payment processing and customer data protection.',
      process: [
        'Current PCI DSS Assessment',
        'Cardholder Data Protection Setup',
        'Network Segmentation',
        'Security Testing & Validation',
        'Access Control Implementation',
        'Incident Response Plan',
        'Annual Audit & Re-certification'
      ],
      benefits: [
        'Secure payment processing',
        'Customer data protection',
        'Reduced fraud risk',
        'Compliance with payment standards',
        'Customer confidence',
        'Merchant trust'
      ]
    },
    {
      id: 7,
      title: 'SOC 1, SOC 2 & SOC 3 Audit Support',
      icon: '📊',
      subtitle: 'Service Organization Control Audits',
      description: 'Prepare for SOC compliance with expert guidance.',
      details: 'Establish controls for security, availability, processing integrity, confidentiality, and privacy. We help you pass independent audits and demonstrate control effectiveness.',
      process: [
        'SOC Audit Type Selection & Planning',
        'Control Effectiveness Assessment',
        'Documentation & Evidence Collection',
        'System Security & Monitoring Setup',
        'Availability & Performance Monitoring',
        'Privacy Controls Implementation',
        'Independent Auditor Coordination'
      ],
      benefits: [
        'SOC compliance certification',
        'Enhanced customer trust',
        'Competitive advantage',
        'Risk visibility & management',
        'Control effectiveness assurance',
        'Market credibility'
      ]
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
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl font-bold mb-6">
              Security & Audit Solutions
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mb-8">
              Comprehensive compliance and security solutions to protect your data, meet regulatory requirements, and build stakeholder trust. From ISO certifications to security audits, we ensure your organization is secure and compliant.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition"
            >
              Start Your Security Journey <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Security & Audit Services</h2>
            <p className="text-xl text-gray-600">
              Click on any service to explore implementation details and benefits
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              >
                <div
                  className="p-8 cursor-pointer flex items-start justify-between hover:bg-gray-50 transition"
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-green-600 font-semibold mb-2">{service.subtitle}</p>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 text-green-600">
                    <FaArrowRight 
                      className={`text-2xl transform transition-transform duration-300 ${
                        expandedService === service.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 px-8 py-8 bg-gray-50"
                  >
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Implementation Overview</h4>
                      <p className="text-gray-700">{service.details}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-gray-900">Our Process</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start">
                            <FaCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-gray-900">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
                    >
                      Schedule Consultation <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Why Security & Compliance Matter</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Protect Your Assets',
                desc: 'Safeguard sensitive data and intellectual property from cyber threats'
              },
              {
                title: 'Regulatory Compliance',
                desc: 'Meet legal requirements and industry standards to avoid penalties'
              },
              {
                title: 'Build Trust',
                desc: 'Demonstrate commitment to security and earn customer confidence'
              },
              {
                title: 'Risk Mitigation',
                desc: 'Identify vulnerabilities before they become breaches'
              },
              {
                title: 'Competitive Advantage',
                desc: 'Attract customers and partners with proven security standards'
              },
              {
                title: 'Incident Response',
                desc: 'Be prepared with robust plans to handle security incidents'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              >
                <FaShieldAlt className="text-4xl text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack for Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Security Technologies We Use</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Encryption (AES-256)',
              'Multi-Factor Auth',
              'SIEM Solutions',
              'Vulnerability Scanners',
              'Intrusion Detection',
              'DLP Systems',
              'Security Auditing',
              'Penetration Testing',
              'Compliance Tools',
              'Incident Management'
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:scale-105 transition"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <p className="font-bold text-gray-800">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our security and audit services can protect your business and build trust.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition"
          >
            Schedule a Security Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityAudit;