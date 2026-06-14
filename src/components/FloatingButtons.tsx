"use client";

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp, FaWpforms } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('register-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Floating Button: Form */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        style={{
          position: 'fixed',
          left: '20px',
          bottom: '30px',
          zIndex: 1040,
        }}
      >
        <Button 
          className="btn-secondary-custom shadow-lg d-flex align-items-center gap-2 rounded-pill"
          onClick={scrollToForm}
          style={{ padding: '12px 20px' }}
        >
          <FaWpforms size={20} />
          <span className="d-none d-md-inline fw-bold">Register Now</span>
        </Button>
      </motion.div>

      {/* Right Floating Button: Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              position: 'fixed',
              right: '20px',
              bottom: '30px',
              zIndex: 1040,
            }}
          >
            <Button 
              className="btn-primary-custom shadow-lg rounded-circle d-flex align-items-center justify-content-center"
              onClick={scrollToTop}
              style={{ width: '55px', height: '55px', padding: 0 }}
            >
              <FaArrowUp size={22} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
