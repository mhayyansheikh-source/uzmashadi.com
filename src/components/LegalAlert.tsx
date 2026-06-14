"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

export default function LegalAlert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the legal notice
    const hasAccepted = localStorage.getItem('legalAlertAccepted');
    if (!hasAccepted) {
      // Small delay before showing the alert
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('legalAlertAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            zIndex: 1050,
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div className="glass-panel p-3 p-md-4 d-flex flex-column flex-md-row align-items-center justify-content-between shadow-lg" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <div className="d-flex align-items-center mb-3 mb-md-0">
              <FaInfoCircle size={24} className="text-primary me-3 flex-shrink-0" style={{ color: 'var(--primary-color)' }} />
              <p className="mb-0 small text-dark">
                <strong>Legal Notice:</strong> By using uzmashadi.com, you agree to our <a href="/terms-of-service" className="text-decoration-underline text-dark fw-bold">Terms of Service</a> and <a href="/privacy-policy" className="text-decoration-underline text-dark fw-bold">Privacy Policy</a>. We strictly comply with the Prevention of Electronic Crimes Act (PECA), 2016. All profiles must be authentic and lawful.
              </p>
            </div>
            <Button className="btn-primary-custom ms-md-3 flex-shrink-0" onClick={handleAccept} style={{ padding: '8px 20px' }}>
              I Understand & Agree
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
