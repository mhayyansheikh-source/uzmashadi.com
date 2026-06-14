"use client";

import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaGift } from 'react-icons/fa';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('uzma_exit_intent_seen');
    
    if (!hasSeenPopup) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setShow(true);
          localStorage.setItem('uzma_exit_intent_seen', 'true');
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0">
      </Modal.Header>
      <Modal.Body className="text-center pt-0 px-4 pb-4">
        <FaGift size={50} className="text-gold mb-3" />
        <h3 className="fw-bold text-primary mb-3">Wait! Don't Miss Out</h3>
        <p className="text-secondary mb-4">
          Finding the perfect match takes time, but starting the journey takes just 2 minutes. 
          Register now and get a <strong>free profile consultation</strong> via WhatsApp!
        </p>
        <Button 
          variant="primary" 
          className="btn-primary-custom w-100 mb-2"
          onClick={() => {
            handleClose();
            document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Claim My Free Consultation & Register
        </Button>
        <Button variant="link" className="text-muted text-decoration-none" onClick={handleClose}>
          No thanks, maybe later
        </Button>
      </Modal.Body>
    </Modal>
  );
}
