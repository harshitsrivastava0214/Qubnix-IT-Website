import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {
  const { serviceKey, serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [subService, setSubService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/services/${serviceKey}`
        );
        setService(response.data);
        const sub = response.data.subServices?.find(s => s.id === parseInt(serviceId));
        setSubService(sub);
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceKey, serviceId]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!subService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary font-bold hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-primary hover:text-blue-400 mb-6 transition"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
            <h1 className="text-5xl font-bold mb-4">{subService.title}</h1>
            <p className="text-xl text-gray-300">{subService.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {subService.features && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
              <div className="space-y-8">
                {subService.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-8 rounded-lg shadow-lg"
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {feature.heading}
                    </h3>
                    <p className="text-gray-700 text-lg">{feature.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {subService.benefits && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subService.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start"
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: idx * 0.05 }}
                  >
                    <FaCheck className="text-secondary text-2xl mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <motion.div
            className="bg-gradient-to-r from-primary to-blue-700 text-white p-12 rounded-lg text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can implement this service for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Schedule Consultation <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;