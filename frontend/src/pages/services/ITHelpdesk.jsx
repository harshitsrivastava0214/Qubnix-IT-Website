import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ITHelpdesk = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: '📞',
      title: 'Technical Support',
      description: 'Expert assistance for all your IT issues',
      items: [
        'Hardware & Software troubleshooting',
        'Network connectivity issues',
        'Email configuration support',
        'System performance optimization',
        'Software installation & configuration'
      ]
    },
    {
      icon: '🛡️',
      title: 'Security & Monitoring',
      description: 'Proactive protection for your systems',
      items: [
        '24/7 system monitoring',
        'Antivirus & malware protection',
        'Firewall management',
        'Intrusion detection',
        'Security incident response'
      ]
    },
    {
      icon: '💾',
      title: 'Data Management',
      description: 'Secure backup and recovery solutions',
      items: [
        'Automated backup solutions',
        'Data recovery services',
        'Disaster recovery planning',
        'Cloud storage management',
        'Database maintenance'
      ]
    },
    {
      icon: '👥',
      title: 'User Support',
      description: 'Help for your team members',
      items: [
        'Password reset assistance',
        'Account management',
        'Access control & permissions',
        'Training & documentation',
        'User onboarding support'
      ]
    },
    {
      icon: '🔧',
      title: 'Maintenance & Updates',
      description: 'Keep systems running smoothly',
      items: [
        'Patch management',
        'System updates & upgrades',
        'Performance tuning',
        'Infrastructure maintenance',
        'Preventive maintenance'
      ]
    },
    {
      icon: '📊',
      title: 'Reporting & Analytics',
      description: 'Insights into your IT operations',
      items: [
        'Performance reports',
        'Usage analytics',
        'Incident reports',
        'Cost analysis',
        'Capacity planning'
      ]
    }
  ];

  const supportTiers = [
    {
      name: 'Basic',
      response: '4 Hours',
      uptime: '99%',
      features: [
        'Business hours support (9 AM - 6 PM)',
        'Email & phone support',
        'Hardware troubleshooting',
        'Software support',
        'Monthly reporting'
      ]
    },
    {
      name: 'Professional',
      response: '2 Hours',
      uptime: '99.5%',
      features: [
        'Extended hours (7 AM - 9 PM)',
        'Priority email & phone support',
        'Remote desktop access',
        'System monitoring',
        'Quarterly business reviews',
        'Monthly patching'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      response: '1 Hour',
      uptime: '99.9%',
      features: [
        '24/7/365 support',
        'Dedicated support team',
        'On-site visits available',
        'Comprehensive monitoring',
        'Weekly business reviews',
        'Emergency response team'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl font-bold mb-6">
              IT Helpdesk 24/7
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mb-8">
              Round-the-clock technical support and issue resolution. Our dedicated team is always ready to keep your systems running smoothly, whether it's 9 AM or 3 AM.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition"
            >
              Get Support Now <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-10 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="flex items-center" {...fadeIn}>
              <FaPhone className="text-4xl text-red-500 mr-4" />
              <div>
                <p className="text-sm text-gray-400">Call for Immediate Support</p>
                <p className="text-2xl font-bold">+91 XXXXX XXXXX</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center" {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <FaEnvelope className="text-4xl text-red-500 mr-4" />
              <div>
                <p className="text-sm text-gray-400">Email Support</p>
                <p className="text-2xl font-bold">support@qubnixitsolutions.com</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center" {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <FaClock className="text-4xl text-red-500 mr-4" />
              <div>
                <p className="text-sm text-gray-400">Always Available</p>
                <p className="text-2xl font-bold">24/7/365</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Support Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT support covering all aspects of your technology needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover-lift"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-dark">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Support Tiers</h2>
            <p className="text-xl text-gray-600">
              Choose the support level that matches your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg hover-lift ${
                  tier.highlighted ? 'ring-2 ring-red-500 transform scale-105' : ''
                }`}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div className={`p-8 ${tier.highlighted ? 'bg-red-600' : 'bg-gray-50'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-dark'}`}>
                    {tier.name}
                  </h3>
                  <div className={`text-sm mb-4 ${tier.highlighted ? 'text-red-100' : 'text-gray-600'}`}>
                    <p>Response Time: <span className="font-bold">{tier.response}</span></p>
                    <p>Uptime SLA: <span className="font-bold">{tier.uptime}</span></p>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className={`${tier.highlighted ? 'text-red-500' : 'text-secondary'} mr-3 mt-1 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-lg font-bold transition ${
                      tier.highlighted
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-dark hover:bg-gray-200'
                    }`}
                  >
                    Choose {tier.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Response Commitments</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { issue: 'Critical Outage', time: '15 minutes', icon: '🔴' },
              { issue: 'Major Issue', time: '1 hour', icon: '🟠' },
              { issue: 'Moderate Issue', time: '4 hours', icon: '🟡' },
              { issue: 'Minor Issue', time: '24 hours', icon: '🟢' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md text-center hover-lift"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-dark">{item.issue}</h4>
                <p className="text-2xl font-bold text-red-600">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How do I submit a support ticket?',
                a: 'You can submit tickets through our website, email, or phone. Enterprise clients have access to our dedicated support portal for ticket tracking and status updates.'
              },
              {
                q: 'Is there an emergency after-hours support?',
                a: 'Yes! All our support tiers include 24/7 availability. Enterprise clients have a dedicated on-call team for urgent issues.'
              },
              {
                q: 'What is your average resolution time?',
                a: 'Response times vary by issue severity and support tier. Critical issues are responded to within 15-60 minutes, while moderate issues typically take 2-4 hours.'
              },
              {
                q: 'Do you provide on-site support?',
                a: 'Enterprise tier clients have access to on-site support for critical infrastructure issues. Other tiers receive remote support.'
              },
              {
                q: 'Can you help with cloud migrations?',
                a: 'Yes, our helpdesk can assist with cloud-related issues. For major migrations, we recommend our Collaborative Applications or Development teams.'
              },
              {
                q: 'What is included in preventive maintenance?',
                a: 'Preventive maintenance includes regular system updates, security patches, performance monitoring, and optimization recommendations.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
              >
                <h4 className="text-lg font-bold text-red-600 mb-3">{item.q}</h4>
                <p className="text-gray-700">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Support Right Now?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is available 24/7 to help you with any IT issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition"
            >
              Submit Ticket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITHelpdesk;
