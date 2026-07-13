const express = require('express');
const router = express.Router();

const services = {
  collaborativeApplications: {
    title: 'Collaborative Application Setup',
    description: 'Transform your workplace with enterprise-grade cloud collaboration',
    subServices: [
      {
        id: 1,
        title: 'Advanced DNS Configuration & Authentication',
        description: 'Ensuring absolute domain integrity, reliable email delivery, and airtight security',
        features: [
          {
            heading: 'Domain Verification & Setup',
            content: 'Seamless integration of your domain with Google Workspace or Microsoft 365.'
          },
          {
            heading: 'Email Deliverability Optimization',
            content: 'Precise implementation of SPF, DKIM, and DMARC records to stop email spoofing and phishing.'
          },
          {
            heading: 'DNS Record Management',
            content: 'Expert management of MX, TXT, CNAME, A, and SRV records with major registrars to guarantee zero downtime.'
          }
        ]
      },
      {
        id: 2,
        title: 'Seamless Cloud Migration Services',
        description: 'End-to-end migration with meticulous planning and zero data loss',
        features: [
          {
            heading: 'Platform-to-Platform Migrations',
            content: 'Smooth transitions between Google Workspace and Microsoft 365, or from legacy servers.'
          },
          {
            heading: 'Comprehensive Data Transfer',
            content: 'Secure migration of emails, calendars, contacts, and cloud storage with complete integrity.'
          },
          {
            heading: 'Post-Migration Validation',
            content: 'Thorough delta-migrations and testing to ensure every byte of data is accounted for.'
          }
        ]
      },
      {
        id: 3,
        title: 'Comprehensive Google Workspace Administration',
        description: 'Expert management of your Google cloud ecosystem',
        features: [
          {
            heading: 'User & Lifecycle Management',
            content: 'Automated onboarding/offboarding, secure provisioning, and custom organizational units.'
          },
          {
            heading: 'Enterprise Security & Access Controls',
            content: 'Implementation of MFA, Context-Aware Access, and robust password policies.'
          },
          {
            heading: 'Data Governance & Compliance',
            content: 'Designing data retention rules, DLP policies, and alignment with ISO 27001 standards.'
          }
        ]
      },
      {
        id: 4,
        title: 'Enterprise Microsoft 365 Administration',
        description: 'Maximize your Microsoft ecosystem investment',
        features: [
          {
            heading: 'Microsoft 365 Tenant Management',
            content: 'Complete control over user licensing, Teams governance, and SharePoint infrastructure.'
          },
          {
            heading: 'Identity & Access Management',
            content: 'Configuring Microsoft Entra ID, SSO, and Conditional Access policies.'
          },
          {
            heading: 'Advanced Threat Protection & Security',
            content: 'Setting up Defender, anti-phishing policies, and advanced information protection.'
          }
        ]
      }
    ]
  },
  securityAudit: {
    title: 'Security & Audit',
    description: 'Comprehensive compliance and security solutions',
    subServices: [
      {
        id: 1,
        title: 'ISO 27001 Implementation',
        description: 'Information Security Management System',
        details: 'Establish a comprehensive ISMS to protect sensitive information. We guide you through gap analysis, documentation, risk assessment, and implementation of controls aligned with ISO 27001:2022 standards.'
      },
      {
        id: 2,
        title: 'ISO 42001 Implementation',
        description: 'AI Management System',
        details: 'Navigate AI governance with our ISO 42001 implementation service. We help establish AI risk management frameworks, governance structures, and compliance protocols for responsible AI deployment.'
      },
      {
        id: 3,
        title: 'DPDP Act Implementation',
        description: 'Digital Personal Data Protection Act Compliance',
        details: 'Ensure compliance with India\'s DPDP Act. Our service includes data mapping, consent management, privacy by design implementation, and establishing data protection officer responsibilities.'
      },
      {
        id: 4,
        title: 'ISO 9001 Implementation',
        description: 'Quality Management System',
        details: 'Build a robust QMS that demonstrates commitment to customer satisfaction and continuous improvement. We implement processes, documentation, and controls aligned with ISO 9001:2015.'
      },
      {
        id: 5,
        title: 'Data Security Audits',
        description: 'Comprehensive Security Assessment',
        details: 'Our experts conduct thorough security audits covering network architecture, access controls, data encryption, vulnerability management, and incident response capabilities.'
      },
      {
        id: 6,
        title: 'PCI DSS Implementation & Audits',
        description: 'Payment Card Industry Data Security Standard',
        details: 'Secure payment processing with PCI DSS compliance. We implement cardholder data protection measures, network security controls, and conduct regular audits and assessments.'
      },
      {
        id: 7,
        title: 'SOC 1, SOC 2 & SOC 3 Audit Support',
        description: 'Service Organization Control Audits',
        details: 'Prepare for SOC compliance with our expert guidance. We help establish controls for security, availability, processing integrity, confidentiality, and privacy to pass independent audits.'
      }
    ]
  },
  developmentAI: {
    title: 'Development & AI Implementation',
    description: 'Modern software solutions powered by intelligent automation',
    subServices: [
      {
        id: 1,
        title: 'Next-Gen Web & Mobile Application Development',
        description: 'Build scalable, modern applications',
        features: [
          {
            heading: 'Cloud-Native & Microservices Architecture',
            content: 'Building highly scalable software optimized for AWS, Azure, or Google Cloud using Docker and Kubernetes.'
          },
          {
            heading: 'Progressive Web Applications (PWAs)',
            content: 'High-performance web apps that operate like native mobile apps with offline capabilities.'
          },
          {
            heading: 'Cross-Platform Mobile Engineering',
            content: 'Single-codebase mobile apps using Flutter or React Native for optimal time-to-market.'
          }
        ]
      },
      {
        id: 2,
        title: 'Custom AI & Intelligent Automation',
        description: 'Leverage AI for business transformation',
        features: [
          {
            heading: 'Multi-Agent Workflow Systems',
            content: 'Deploy autonomous AI agents capable of executing multi-step business operations with minimal human oversight.'
          },
          {
            heading: 'Retrieval-Augmented Generation (RAG) Solutions',
            content: 'Develop secure, custom internal knowledge bases using LLMs while keeping your data private and compliant.'
          },
          {
            heading: 'Predictive Analytics & Computer Vision',
            content: 'Integrate ML models for automated quality control, demand forecasting, and real-time sentiment analysis.'
          }
        ]
      },
      {
        id: 3,
        title: 'Application Modernization & Support',
        description: 'Transform legacy systems into modern solutions',
        features: [
          {
            heading: 'Legacy System Modernization',
            content: 'Refactor old tech stacks into secure, modern frameworks without disrupting business operations.'
          },
          {
            heading: 'Proactive Maintenance & SLA Support',
            content: 'Dedicated technical support tiers for preventive, adaptive, and corrective maintenance.'
          },
          {
            heading: 'DevOps & Hyperautomation',
            content: 'Implementing automated CI/CD pipelines to lower deployment failure rates and optimize costs.'
          }
        ]
      }
    ]
  }
};

// Get all services
router.get('/', (req, res) => {
  res.json(services);
});

// Get specific service
router.get('/:serviceKey', (req, res) => {
  const { serviceKey } = req.params;
  const service = services[serviceKey];
  
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }
  
  res.json(service);
});

module.exports = router;