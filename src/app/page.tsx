"use client";

import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import MultiStepForm from '@/components/MultiStepForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section py-5 position-relative" style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
              <div className="d-inline-flex align-items-center bg-white rounded-pill px-3 py-2 mb-4 shadow-sm border border-1 border-light">
                <img src="/logo.png" alt="Icon" width="24" height="24" className="rounded-circle me-2" />
                <span className="fw-semibold text-secondary">#1 Matchmaker in Multan</span>
              </div>
              
              <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                Find Your Perfect <br/><span className="text-gold">Rishta in Multan</span>
              </h1>
              
              <p className="lead text-secondary mb-5">
                Join thousands of Multani families who have found their perfect match through our secure, localized, and trusted platform.
              </p>
              
              <div className="d-flex align-items-center gap-4 mb-4">
                <div className="d-flex text-gold">
                  <FaStar size={24}/><FaStar size={24}/><FaStar size={24}/><FaStar size={24}/><FaStar size={24}/>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold">4.9/5 Rating</h5>
                  <span className="text-muted small">Based on 500+ happy couples</span>
                </div>
              </div>
              
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-3" size={20} />
                  <span className="fw-medium">100% Verified Local Profiles</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-3" size={20} />
                  <span className="fw-medium">Direct WhatsApp Connection</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaCheckCircle className="text-success me-3" size={20} />
                  <span className="fw-medium">Strict Privacy & Security</span>
                </li>
              </ul>
            </Col>
            
            <Col lg={6} id="register-form">
              <MultiStepForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trust / Testimonials Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Trusted by Families Across Pakistan</h2>
            <p className="text-muted">Over 100+ successful matches in Multan and beyond.</p>
          </div>
          <Row className="g-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm border-0 bg-light">
                  <Card.Body className="p-4">
                    <div className="d-flex text-gold mb-3">
                      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                    <p className="fst-italic text-secondary mb-4">"Alhamdulillah, through Uzma Shadi we found the perfect match for our daughter right here in Multan. The process was so easy and respectful."</p>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        A
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">Ali Family</h6>
                        <small className="text-muted">Gulgasht Colony, Multan</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <button className="btn-secondary-custom">View All 100+ Testimonials</button>
          </div>
        </Container>
      </section>

      {/* SEO / Content Section (Placeholder for 4500 words) */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="fw-bold mb-4">The Premier Matchmaker in Multan</h2>
              <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                <p className="mb-4">
                  Welcome to Uzma Shadi, the leading <strong>Rishta service in Multan</strong>. Finding a life partner is one of the most important decisions in life, and our localized approach ensures that you connect with families that share your cultural values, traditions, and background right here in the City of Saints.
                </p>
                <p className="mb-4">
                  Unlike generic matrimonial sites, we focus heavily on the Multan region, ensuring that every profile is verified and genuine. Our dedicated team works tirelessly to provide a safe, secure, and highly effective matchmaking experience. (Note: This section will be expanded to the full 4500-word GEO-optimized content structure).
                </p>
                {/* Simulated extensive content... */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <Row>
            <Col lg={8} className="mx-auto">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="mb-3 border rounded">
                  <Accordion.Header>How does Uzma Shadi work in Multan?</Accordion.Header>
                  <Accordion.Body>
                    Simply fill out our 5-step registration form above, attach your JazzCash registration receipt, and your details will be sent directly to our secure WhatsApp line. Our matchmakers will then contact you with suitable proposals from Multan.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-3 border rounded">
                  <Accordion.Header>Is my personal information secure?</Accordion.Header>
                  <Accordion.Body>
                    Yes, absolutely. We take privacy very seriously. Your details are strictly confidential and are only shared with verified families who match your criteria and with your explicit consent.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-3 border rounded">
                  <Accordion.Header>What is the registration fee?</Accordion.Header>
                  <Accordion.Body>
                    The initial registration fee is 2500 PKR, payable via JazzCash to +92 312 6327071. This fee ensures that only serious families are registered on our platform, maintaining the high quality of our service.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-3 border rounded">
                  <Accordion.Header>Do you cater to specific casts and sects?</Accordion.Header>
                  <Accordion.Body>
                    Yes, our database includes families from all major casts and sects in Pakistan, with a strong focus on the Multan area. We ensure matches respect your specific religious and cultural preferences.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-3 border rounded">
                  <Accordion.Header>Can overseas Pakistanis register?</Accordion.Header>
                  <Accordion.Body>
                    Yes! Many families in Multan are looking for matches for their children residing abroad. Overseas Pakistanis can easily register and communicate via WhatsApp.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-5 text-center">
        <Container>
          <div className="mb-4">
            <img src="/logo.png" alt="Uzma Shadi Logo" width="80" height="80" className="rounded-circle mb-3 border border-3" style={{ borderColor: 'var(--secondary-color)' }} />
            <h4 className="fw-bold text-gold">Uzma Shadi</h4>
          </div>
          <div className="mb-3 d-flex justify-content-center gap-3">
            <a href="/privacy-policy" className="text-white text-decoration-none small">Privacy Policy</a>
            <span className="text-muted">|</span>
            <a href="/terms-of-service" className="text-white text-decoration-none small">Terms of Service</a>
          </div>
          <p className="mb-1">&copy; {new Date().getFullYear()} Uzma Shadi Multan. All Rights Reserved.</p>
          <p className="small text-muted mb-0">Developed by <a href="https://seoustaad.com" target="_blank" rel="noopener noreferrer" className="text-gold text-decoration-none fw-bold">seoustaad.com</a></p>
        </Container>
      </footer>
    </>
  );
}
