"use client";

import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Card, Form, Button, Accordion } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const phoneNumber = '+923126327071';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry from Widget*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}

*Message:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    setIsOpen(false);
    setFormData({ name: '', phone: '', message: '' }); // Reset
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="position-fixed d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg border-0"
        style={{
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 1050,
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'scale(0)' : 'scale(1)',
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={35} />
      </button>

      {/* Interactive Chat Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '350px',
              zIndex: 1050,
              maxWidth: 'calc(100vw - 40px)'
            }}
          >
            <Card className="shadow-lg border-0 overflow-hidden" style={{ borderRadius: '16px' }}>
              {/* Header */}
              <div className="bg-success text-white p-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaWhatsapp size={24} className="me-2" />
                  <span className="fw-bold">Chat with uzmashadi.com</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="btn btn-sm text-white p-0 border-0">
                  <FaTimes size={20} />
                </button>
              </div>

              <Card.Body className="p-0 bg-light" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {/* FAQs Section */}
                <div className="p-3 bg-white border-bottom">
                  <h6 className="fw-bold mb-2 text-primary" style={{ fontSize: '0.9rem' }}>Frequently Asked Questions</h6>
                  <Accordion flush>
                    <Accordion.Item eventKey="0" className="border-0 bg-transparent">
                      <Accordion.Header style={{ padding: '0.5rem 0' }} className="py-0 px-1 small">What is the registration fee?</Accordion.Header>
                      <Accordion.Body className="small text-muted py-2 px-1">
                        Our registration fee is just 2500 PKR (50% off right now). This filters out non-serious users and ensures only verified profiles are on our platform.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="border-0 bg-transparent">
                      <Accordion.Header style={{ padding: '0.5rem 0' }} className="py-0 px-1 small">How does the process work?</Accordion.Header>
                      <Accordion.Body className="small text-muted py-2 px-1">
                        Fill out the main registration form on our website with your receipt. Our matchmakers will personally review your profile and contact you with suitable proposals.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="border-0 bg-transparent">
                      <Accordion.Header style={{ padding: '0.5rem 0' }} className="py-0 px-1 small">Is my data secure?</Accordion.Header>
                      <Accordion.Body className="small text-muted py-2 px-1">
                        Yes, 100%. We comply strictly with PECA 2016. Your personal details and pictures are NEVER shared publicly.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                {/* Contact Form Section */}
                <div className="p-3">
                  <h6 className="fw-bold mb-3 text-primary" style={{ fontSize: '0.9rem' }}>Still have questions? Ask us directly!</h6>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                        style={{ resize: 'none' }}
                      />
                    </Form.Group>
                    <Button type="submit" className="w-100 btn-success fw-bold btn-sm py-2 d-flex justify-content-center align-items-center gap-2">
                      <FaWhatsapp size={18} /> Send via WhatsApp
                    </Button>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
