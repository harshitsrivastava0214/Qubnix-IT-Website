import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const BASE_URL = process.env.REACT_APP_API_URL
      const response = await axios.post(
        `${BASE_URL}/api/contact/send`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };  
  
  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition text-sm";

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeIn}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/5 border border-white/10 text-secondary mb-6">
              Let's Talk
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get In Touch</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question or ready to start your transformation? Our team is ready to discuss your needs and provide solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-28 relative z-10">
            <motion.div className="feature-card text-center" {...fadeIn}>
              <div className="icon-tile bg-blue-50 text-primary mx-auto mb-5"><FaEnvelope /></div>
              <h3 className="text-lg font-display font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-4">Send us a detailed message about your project</p>
              <a href="mailto:sales@qubnixitsolutions.com" className="text-primary font-bold text-sm hover:text-primary-dark transition">
                sales@qubnixitsolutions.com
              </a>
            </motion.div>

            <motion.div className="feature-card text-center" {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <div className="icon-tile bg-teal-50 text-secondary mx-auto mb-5"><FaPhone /></div>
              <h3 className="text-lg font-display font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-4">Speak directly with our team (24/7 support)</p>
              <a href="tel:+91XXXXXXXXXX" className="text-primary font-bold text-sm hover:text-primary-dark transition">
                +91 XXXXX XXXXX
              </a>
            </motion.div>

            <motion.div className="feature-card text-center" {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <div className="icon-tile bg-amber-50 text-accent mx-auto mb-5"><FaMapMarkerAlt /></div>
              <h3 className="text-lg font-display font-bold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">India</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto" {...fadeIn}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold mb-2">Send us a message</h2>
              <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Service Interested In</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a service</option>
                    <option value="Collaborative Applications">Collaborative Applications</option>
                    <option value="Security & Audit">Security & Audit</option>
                    <option value="Development & AI">Development & AI</option>
                    <option value="IT Helpdesk">IT Helpdesk 24/7</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Select budget</option>
                    <option value="Under 1 Lakh">Under ₹1 Lakh</option>
                    <option value="1 - 5 Lakh">₹1 - 5 Lakh</option>
                    <option value="5 - 10 Lakh">₹5 - 10 Lakh</option>
                    <option value="10+ Lakh">₹10+ Lakh</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-dark mb-2">Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass}>
                    <option value="">Select timeline</option>
                    <option value="Immediate (Next 2 weeks)">Immediate (Next 2 weeks)</option>
                    <option value="Short term (1-3 months)">Short term (1-3 months)</option>
                    <option value="Medium term (3-6 months)">Medium term (3-6 months)</option>
                    <option value="Long term (6+ months)">Long term (6+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Tell us about your project *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" className={`${inputClass} resize-none`} placeholder="Describe your project, challenges, and what you're looking to achieve..."></textarea>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shine bg-primary hover:bg-primary-dark text-white px-10 py-3.5 rounded-lg font-bold transition disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center shadow-glow"
                >
                  {loading ? 'Sending...' : 'Send Message'} {!loading && <FaArrowRight className="ml-2" />}
                </button>
                <p className="text-gray-500 text-xs mt-4">We'll respond within 24 hours. For urgent matters, please call us.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-300% animate-gradient-x text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-display font-bold mb-2">24 Hours</h3>
              <p className="text-blue-100 text-sm">Average Response Time</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <h3 className="text-4xl font-display font-bold mb-2">100%</h3>
              <p className="text-blue-100 text-sm">Client Satisfaction</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <h3 className="text-4xl font-display font-bold mb-2">10+</h3>
              <p className="text-blue-100 text-sm">Happy Clients</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
