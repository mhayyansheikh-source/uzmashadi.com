"use client";

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Modal, Accordion, Row, Col } from 'react-bootstrap';
import MultiStepForm from './MultiStepForm';
import UrgencyTimer from './UrgencyTimer';

export default function WhatsAppWidget() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    const openWidget = () => setShow(true);
    window.addEventListener('open-whatsapp-widget', openWidget);
    return () => window.removeEventListener('open-whatsapp-widget', openWidget);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleShow}
        className="position-fixed d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg border-0"
        style={{
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 1050,
          transition: 'transform 0.3s ease',
          transform: show ? 'scale(0)' : 'scale(1)',
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={35} />
      </button>

      {/* Full Modal Window */}
      <Modal 
        show={show} 
        onHide={handleClose} 
        size="xl" 
        centered
        contentClassName="bg-light border-0 shadow-lg"
      >
        <Modal.Header closeButton className="bg-success text-white border-0 py-3">
          <Modal.Title className="fw-bold d-flex align-items-center">
            <FaWhatsapp size={28} className="me-2" />
            Chat & Register on WhatsApp
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Row className="g-4">
            {/* Left Column: Form & Urgency */}
            <Col lg={7} xl={8}>
              <UrgencyTimer />
              <MultiStepForm />
            </Col>
            
            {/* Right Column: FAQs */}
            <Col lg={5} xl={4}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h5 className="fw-bold mb-4 text-primary d-flex align-items-center">
                  Frequently Asked Questions
                </h5>
                <Accordion flush defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="border-0 bg-transparent mb-3">
                    <Accordion.Header className="fw-bold">What is the registration fee?</Accordion.Header>
                    <Accordion.Body className="text-muted bg-light rounded mt-2">
                      Our registration fee is currently just 2500 PKR (a massive 75% off!). This filters out non-serious users and ensures only verified, genuine profiles are on our platform.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="border-0 bg-transparent mb-3">
                    <Accordion.Header className="fw-bold">How does the process work?</Accordion.Header>
                    <Accordion.Body className="text-muted bg-light rounded mt-2">
                      Simply complete the 5-step form on the left. Once submitted, your details will be perfectly formatted and sent directly to our secure WhatsApp line, where our matchmakers will take over.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="border-0 bg-transparent mb-3">
                    <Accordion.Header className="fw-bold">Is my data secure?</Accordion.Header>
                    <Accordion.Body className="text-muted bg-light rounded mt-2">
                      Yes, 100%. We comply strictly with the Prevention of Electronic Crimes Act (PECA) 2016. Your personal details and pictures are NEVER shared publicly.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="border-0 bg-transparent">
                    <Accordion.Header className="fw-bold">What if I have custom requirements?</Accordion.Header>
                    <Accordion.Body className="text-muted bg-light rounded mt-2">
                      Once your profile is registered via WhatsApp, you can chat directly with our matchmakers to discuss any specific preferences or strict requirements you have for a Rishta.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
