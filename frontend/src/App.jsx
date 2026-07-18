import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CollaborativeApplications from './pages/services/CollaborativeApplications';
import SecurityAudit from './pages/services/SecurityAudit';
import DevelopmentAI from './pages/services/DevelopmentAI';
import ITHelpdesk from './pages/services/ITHelpdesk';
import ServiceDetail from './pages/ServiceDetail';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/scroll_to_top';
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsOfService from './pages/termsOfService';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/collaborative-applications" element={<CollaborativeApplications />} />
            <Route path="/services/security-audit" element={<SecurityAudit />} />
            <Route path="/services/development-ai" element={<DevelopmentAI />} />
            <Route path="/services/:serviceKey/:serviceId" element={<ServiceDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/it-helpdesk" element={<ITHelpdesk />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;