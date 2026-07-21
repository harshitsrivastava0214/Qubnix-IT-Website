import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaPhone, FaEnvelope, FaClock, FaHeadset, FaShieldAlt, FaDatabase, FaUsers, FaTools, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ITHelpdesk = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const services = [
    { icon: <FaHeadset />, title: 'Technical Support', description: 'Expert assistance for all your IT issues', items: ['Hardware & Software troubleshooting', 'Network connectivity issues', 'Email configuration support', 'System performance optimization', 'Software installation & configuration'] },
    { icon: <FaShieldAlt />, title: 'Security & Monitoring', description: 'Proactive protection for your systems', items: ['24/7 system monitoring', 'Antivirus & malware protection', 'Firewall management', 'Intrusion detection', 'Security incident response'] },
    { icon: <FaDatabase />, title: 'Data Management', description: 'Secure backup and recovery solutions', items: ['Automated backup solutions', 'Data recovery services', 'Disaster recovery planning', 'Cloud storage management', 'Database maintenance'] },
    { icon: <FaUsers />, title: 'User Support', description: 'Help for your team members', items: ['Password reset assistance', 'Account management', 'Access control & permissions', 'Training & documentation', 'User onboarding support'] },
    { icon: <FaTools />, title: 'Maintenance & Updates', description: 'Keep systems running smoothly', items: ['Patch management', 'System updates & upgrades', 'Performance tuning', 'Infrastructure maintenance', 'Preventive maintenance'] },
    { icon: <FaChartBar />, title: 'Reporting & Analytics', description: 'Insights into your IT operations', items: ['Performance reports', 'Usage analytics', 'Incident reports', 'Cost analysis', 'Capacity planning'] }
  ];

  const supportTiers = [
    { name: 'Basic', response: '4 Hours', uptime: '99%', features: ['Business hours support (9 AM - 6 PM)', 'Email & phone support', 'Hardware troubleshooting', 'Software support', 'Monthly reporting'] },
    { name: 'Professional', response: '2 Hours', uptime: '99.5%', features: ['Extended hours (7 AM - 9 PM)', 'Priority email & phone support', 'Remote desktop access', 'System monitoring', 'Quarterly business reviews', 'Monthly patching'], highlighted: true },
    { name: 'Enterprise', response: '1 Hour', uptime: '99.9%', features: ['24/7/365 support', 'Dedicated support team', 'On-site visits available', 'Comprehensive monitoring', 'Weekly business reviews', 'Emergency response team'] }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/5 border border-white/10 text-rose-400 mb-6">
              Always On
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">IT Helpdesk 24/7</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
              Round-the-clock technical support and issue resolution. Our dedicated team keeps your systems running smoothly, whether it's 9 AM or 3 AM.
            </p>
            <Link to="/contact" className="btn-shine inline-flex items-center bg-rose-600 hover:bg-rose-700 text-white px-7 py-3 rounded-lg font-bold transition shadow-lg">
              Get Support Now <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-10 bg-dark-card border-y border-dark-border text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="flex items-center gap-4" {...fadeIn}>
              <div className="icon-tile bg-rose-500/10 text-rose-400 flex-shrink-0"><FaPhone /></div>
              <div><p className="text-xs text-gray-400">Call for immediate support</p><p className="text-xl font-bold">+91 XXXXX XXXXX</p></div>
            </motion.div>
            <motion.div className="flex items-center gap-4" {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <div className="icon-tile bg-rose-500/10 text-rose-400 flex-shrink-0"><FaEnvelope /></div>
              <div><p className="text-xs text-gray-400">Email support</p><p className="text-xl font-bold break-all">support@qubnixitsolutions.com</p></div>
            </motion.div>
            <motion.div className="flex items-center gap-4" {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <div className="icon-tile bg-rose-500/10 text-rose-400 flex-shrink-0"><FaClock /></div>
              <div><p className="text-xs text-gray-400">Always available</p><p className="text-xl font-bold">24/7/365</p></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-sm font-bold tracking-widest uppercase text-rose-500">Support Scope</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Our Support Services</h2>
            <p className="text-lg text-gray-600">Comprehensive IT support covering all aspects of your technology needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} className="feature-card" {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.05 }}>
                <div className="icon-tile bg-rose-50 text-rose-500 mb-5">{service.icon}</div>
                <h3 className="text-lg font-display font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-5">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <FaCheck className="text-rose-500 mr-2.5 mt-1 flex-shrink-0 text-xs" />
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
            <span className="text-sm font-bold tracking-widest uppercase text-rose-500">Plans</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Support Tiers</h2>
            <p className="text-lg text-gray-600">Choose the support level that matches your business needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                  tier.highlighted ? 'ring-2 ring-rose-500 shadow-card-hover md:scale-105' : 'border border-gray-100 shadow-card hover:shadow-card-hover'
                }`}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              >
                <div className={`p-8 ${tier.highlighted ? 'bg-rose-600 text-white' : 'bg-surface'}`}>
                  {tier.highlighted && <span className="inline-block mb-3 text-[11px] font-bold uppercase tracking-wide bg-white/20 px-2.5 py-1 rounded-full">Most popular</span>}
                  <h3 className="text-2xl font-display font-bold mb-3">{tier.name}</h3>
                  <div className={`text-sm space-y-1 ${tier.highlighted ? 'text-rose-100' : 'text-gray-600'}`}>
                    <p>Response time: <span className="font-bold">{tier.response}</span></p>
                    <p>Uptime SLA: <span className="font-bold">{tier.uptime}</span></p>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <FaCheck className={`${tier.highlighted ? 'text-rose-500' : 'text-secondary'} mr-2.5 mt-1 flex-shrink-0 text-xs`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-lg font-bold transition text-sm ${
                      tier.highlighted ? 'bg-rose-600 text-white hover:bg-rose-700' : 'bg-gray-100 text-dark hover:bg-gray-200'
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
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-sm font-bold tracking-widest uppercase text-rose-500">SLA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Our Response Commitments</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { issue: 'Critical Outage', time: '15 minutes', color: 'text-red-600', bg: 'bg-red-50' },
              { issue: 'Major Issue', time: '1 hour', color: 'text-orange-600', bg: 'bg-orange-50' },
              { issue: 'Moderate Issue', time: '4 hours', color: 'text-amber-600', bg: 'bg-amber-50' },
              { issue: 'Minor Issue', time: '24 hours', color: 'text-emerald-600', bg: 'bg-emerald-50' }
            ].map((item, idx) => (
              <motion.div key={idx} className="feature-card text-center" {...fadeIn} transition={{ ...fadeIn.transition, delay: idx * 0.1 }}>
                <div className={`w-3 h-3 rounded-full ${item.bg} ${item.color.replace('text', 'border')} border-4 mx-auto mb-5`}></div>
                <h4 className="text-base font-bold mb-2 text-dark">{item.issue}</h4>
                <p className={`text-2xl font-display font-bold ${item.color}`}>{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: 'How do I submit a support ticket?', a: 'You can submit tickets through our website, email, or phone. Enterprise clients have access to our dedicated support portal for ticket tracking and status updates.' },
              { q: 'Is there emergency after-hours support?', a: 'Yes. All our support tiers include 24/7 availability. Enterprise clients have a dedicated on-call team for urgent issues.' },
              { q: 'What is your average resolution time?', a: 'Response times vary by issue severity and support tier. Critical issues are responded to within 15-60 minutes, while moderate issues typically take 2-4 hours.' },
              { q: 'Do you provide on-site support?', a: 'Enterprise tier clients have access to on-site support for critical infrastructure issues. Other tiers receive remote support.' },
              { q: 'Can you help with cloud migrations?', a: 'Yes, our helpdesk can assist with cloud-related issues. For major migrations, we recommend our Collaborative Applications or Development teams.' },
              { q: 'What is included in preventive maintenance?', a: 'Preventive maintenance includes regular system updates, security patches, performance monitoring, and optimization recommendations.' }
            ].map((item, idx) => (
              <motion.div key={idx} className="bg-surface rounded-xl p-6 border border-gray-100" {...fadeIn} transition={{ ...fadeIn.transition, delay: idx * 0.05 }}>
                <h4 className="text-base font-bold text-rose-600 mb-2">{item.q}</h4>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 bg-300% animate-gradient-x text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" {...fadeIn}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Need support right now?</h2>
          <p className="text-lg mb-9 opacity-90">Our support team is available 24/7 to help you with any IT issues.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+91XXXXXXXXXX" className="inline-block bg-white text-rose-600 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl">Call Now</a>
            <Link to="/contact" className="inline-block border-2 border-white/70 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition">Submit Ticket</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ITHelpdesk;
