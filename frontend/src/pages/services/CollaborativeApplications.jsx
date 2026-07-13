import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CollaborativeApplications = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Advanced DNS Configuration & Authentication',
      icon: '🔐',
      description: 'Ensuring absolute domain integrity, reliable email delivery, and airtight security across all platforms.',
      features: [
        {
          heading: 'Domain Verification & Setup',
          content: 'Seamless integration of your domain with Google Workspace or Microsoft 365. We handle all technical requirements including MX record configuration, domain ownership verification, and SPF setup.'
        },
        {
          heading: 'Email Deliverability Optimization',
          content: 'Precise implementation of SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication) records to stop email spoofing and phishing attacks.'
        },
        {
          heading: 'DNS Record Management',
          content: 'Expert management of MX, TXT, CNAME, A, and SRV records with major registrars like GoDaddy, Namecheap, and Route 53 to guarantee zero downtime during configurations.'
        },
        {
          heading: 'DNSSEC Implementation',
          content: 'Implement DNSSEC to protect your domain from DNS spoofing and cache poisoning attacks.'
        }
      ],
      benefits: [
        'Guaranteed email inbox delivery',
        'Protection against phishing attacks',
        'Reduced spam and bounce rates',
        'Enhanced domain security'
      ]
    },
    {
      id: 2,
      title: 'Seamless Cloud Migration Services',
      icon: '☁️',
      description: 'Migrating to a new productivity suite can be daunting. We manage end-to-end transitions with zero data loss.',
      features: [
        {
          heading: 'Platform-to-Platform Migrations',
          content: 'Smooth transitions between Google Workspace and Microsoft 365, or from legacy on-premise servers (Exchange, IMAP) to the cloud with zero downtime.'
        },
        {
          heading: 'Comprehensive Email Migration',
          content: 'Complete historical archives, folders, and labels migration with full data integrity verification.'
        },
        {
          heading: 'Calendar & Contact Migration',
          content: 'Secure migration of shared schedules, recurring meetings, resource rooms, global address lists, and personal contact books.'
        },
        {
          heading: 'Cloud Storage Migration',
          content: 'Deep data migration from Google Drive to OneDrive/SharePoint (or vice versa), maintaining folder structures and permissions.'
        },
        {
          heading: 'Post-Migration Validation',
          content: 'Thorough delta-migrations and testing to ensure every single byte of data is accounted for before you go live.'
        }
      ],
      benefits: [
        'Zero data loss guarantee',
        'Minimal business disruption',
        'Complete audit trail',
        'Verified successful migration'
      ]
    },
    {
      id: 3,
      title: 'Comprehensive Google Workspace Administration',
      icon: '🔵',
      description: 'Expert management of your Google cloud ecosystem to optimize collaboration and enforce compliance.',
      features: [
        {
          heading: 'User & Lifecycle Management',
          content: 'Automated onboarding/offboarding, secure provisioning, custom organizational units (OUs), and smart distribution list creation.'
        },
        {
          heading: 'Enterprise Security & Access Controls',
          content: 'Implementation of Multi-Factor Authentication (MFA/2SV), Context-Aware Access, and robust password policies.'
        },
        {
          heading: 'Data Governance & Compliance',
          content: 'Designing data retention rules via Google Vault, DLP policies, and alignment with ISO 27001 and DPDP Act standards.'
        },
        {
          heading: 'Custom Automation',
          content: 'Deploying custom Apps Script solutions to automate repetitive admin tasks, user management, and reporting.'
        },
        {
          heading: 'Mobile Device Management',
          content: 'Secure management of mobile devices accessing Google Workspace with comprehensive security policies.'
        }
      ],
      benefits: [
        'Optimized collaboration',
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced manual tasks'
      ]
    },
    {
      id: 4,
      title: 'Enterprise Microsoft 365 Administration',
      icon: '📊',
      description: 'Maximizing your Microsoft ecosystem investment through advanced security and proactive management.',
      features: [
        {
          heading: 'Microsoft 365 Tenant Management',
          content: 'Complete control over user licensing, shared mailboxes, Microsoft Teams governance, and SharePoint/OneDrive infrastructure.'
        },
        {
          heading: 'Identity & Access Management',
          content: 'Configuring Microsoft Entra ID (formerly Azure AD), Single Sign-On (SSO), and Conditional Access policies.'
        },
        {
          heading: 'Advanced Threat Protection',
          content: 'Setting up Microsoft Defender, anti-phishing/anti-spam policies, and advanced information protection (sensitivity labels).'
        },
        {
          heading: 'Compliance & eDiscovery',
          content: 'Setting up retention policies, audit logs, and content searches to keep your company fully compliant.'
        },
        {
          heading: 'Teams & SharePoint Governance',
          content: 'Implement governance policies for Teams channels, messaging, and SharePoint site management.'
        }
      ],
      benefits: [
        'Maximized ROI on Microsoft investment',
        'Enterprise-grade security',
        'Full regulatory compliance',
        'Optimized user experience'
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl font-bold mb-6">
              Collaborative Application Setup
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              Transform your workplace with enterprise-grade cloud collaboration. From DNS configuration to advanced administration, we handle every aspect of your Google Workspace and Microsoft 365 deployment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Get Started <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Click on any service to explore detailed features and benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-dark">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-bold">
                    {selectedService === service.id ? 'Hide Details' : 'View Details'} <FaArrowRight className="ml-2" />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 px-8 py-8 bg-gray-50"
                  >
                    <h4 className="text-xl font-bold mb-6 text-dark">Key Features</h4>
                    <div className="space-y-6 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx}>
                          <h5 className="font-bold text-lg text-primary mb-2">{feature.heading}</h5>
                          <p className="text-gray-700">{feature.content}</p>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold mb-4 text-dark">Benefits</h4>
                    <ul className="space-y-3 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-secondary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Learn More & Contact <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Collaborative Solutions?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Certified Specialists', desc: 'Deep expertise in both Google and Microsoft ecosystems' },
              { title: 'Zero-Downtime Guarantee', desc: 'Execute migrations after-hours with no business impact' },
              { title: 'Security-First Approach', desc: 'Every action follows strict data governance practices' },
              { title: '24/7 Support', desc: 'Continuous monitoring and support for your infrastructure' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              >
                <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Implementation Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Assessment', desc: 'Evaluate current infrastructure and requirements' },
              { step: 2, title: 'Planning', desc: 'Create detailed migration and setup roadmap' },
              { step: 3, title: 'Implementation', desc: 'Execute setup and migration with precision' },
              { step: 4, title: 'Support', desc: 'Ongoing management and 24/7 support' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-primary transform translate-x-4"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Collaboration?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can set up your collaborative infrastructure for success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Schedule Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CollaborativeApplications;