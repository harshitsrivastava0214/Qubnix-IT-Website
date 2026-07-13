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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
      const response = await axios.post(
        'http://localhost:5000/api/contact/send',
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeIn}>
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have a question or ready to start your transformation? We'd love to hear from you. Our team is ready to discuss your needs and provide solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover-lift"
              {...fadeIn}
            >
              <FaEnvelope className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us a detailed message about your project
              </p>
              <a
                href="mailto:sales@qubnixitsolutions.com"
                className="text-primary font-bold hover:text-blue-700 transition"
              >
                sales@qubnixitsolutions.com
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover-lift"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
            >
              <FaPhone className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team (24/7 Support)
              </p>
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-primary font-bold hover:text-blue-700 transition"
              >
                +91 XXXXX XXXXX
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover-lift"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              <FaMapMarkerAlt className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Location</h3>
              <p className="text-gray-600">
                India
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-12 max-w-4xl mx-auto"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-2 text-center">Send Us a Message</h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.4 }}>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.45 }}
                >
                  <label className="block text-sm font-bold text-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="john@example.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.5 }}
                >
                  <label className="block text-sm font-bold text-dark mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </motion.div>

                {/* Company */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.55 }}
                >
                  <label className="block text-sm font-bold text-dark mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="Your Company"
                  />
                </motion.div>

                {/* Service */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.6 }}
                >
                  <label className="block text-sm font-bold text-dark mb-2">
                    Service Interested In
                  </label>
                                    <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  >
                    <option value="">Select a service</option>
                    <option value="Collaborative Applications">Collaborative Applications</option>
                    <option value="Security & Audit">Security & Audit</option>
                    <option value="Development & AI">Development & AI</option>
                    <option value="IT Helpdesk">IT Helpdesk 24/7</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                {/* Budget */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.65 }}
                >
                  <label className="block text-sm font-bold text-dark mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  >
                    <option value="">Select budget</option>
                    <option value="Under 1 Lakh">Under ₹1 Lakh</option>
                    <option value="1 - 5 Lakh">₹1 - 5 Lakh</option>
                    <option value="5 - 10 Lakh">₹5 - 10 Lakh</option>
                    <option value="10+ Lakh">₹10+ Lakh</option>
                  </select>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.7 }}
                >
                  <label className="block text-sm font-bold text-dark mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate (Next 2 weeks)">Immediate (Next 2 weeks)</option>
                    <option value="Short term (1-3 months)">Short term (1-3 months)</option>
                    <option value="Medium term (3-6 months)">Medium term (3-6 months)</option>
                    <option value="Long term (6+ months)">Long term (6+ months)</option>
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.75 }}
              >
                <label className="block text-sm font-bold text-dark mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Describe your project, challenges, and what you're looking to achieve..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="text-center"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.8 }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                >
                  {loading ? 'Sending...' : 'Send Message'} {!loading && <FaArrowRight className="ml-2" />}
                </button>
                <p className="text-gray-600 text-sm mt-4">
                  We'll respond within 24 hours. For urgent matters, please call us.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-bold mb-2">24 Hours</h3>
              <p className="text-blue-100">Average Response Time</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-blue-100">Client Satisfaction</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Happy Clients</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;