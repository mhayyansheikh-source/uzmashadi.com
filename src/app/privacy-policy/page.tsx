import React from 'react';
import { Container } from 'react-bootstrap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Uzma Shadi',
  description: 'Privacy Policy for Uzma Shadi in accordance with the laws of Pakistan (PECA 2016).',
};

export default function PrivacyPolicy() {
  return (
    <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
      <Container className="bg-white p-4 p-md-5 shadow-sm rounded">
        <h1 className="fw-bold mb-4 text-primary" style={{ color: 'var(--primary-color)' }}>Privacy Policy</h1>
        <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-4">
          <h4 className="fw-semibold">1. Introduction</h4>
          <p>Welcome to Uzma Shadi. We respect your privacy and are committed to protecting your personal data in compliance with the laws of the Islamic Republic of Pakistan, particularly the Prevention of Electronic Crimes Act (PECA), 2016.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">2. Data We Collect</h4>
          <p>We collect personal information necessary to facilitate matchmaking services, including but not limited to:</p>
          <ul>
            <li>Name, age, gender, and contact information.</li>
            <li>Educational and professional background.</li>
            <li>Family details, cast, and sect preferences.</li>
            <li>Financial verification documents (e.g., JazzCash transaction receipts).</li>
          </ul>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">3. How We Use Your Data</h4>
          <p>Your data is strictly used for matchmaking purposes. By submitting your information via our platform and communicating through WhatsApp, you consent to us using this data to find suitable matches. We do not sell your data to third-party marketing agencies.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">4. Compliance with PECA 2016</h4>
          <p>In adherence to PECA 2016, we take stringent measures against identity theft, unauthorized access, and cyber fraud. Any user found submitting fraudulent data or fake receipts will be reported to the Federal Investigation Agency (FIA) Cyber Crime Wing.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">5. Data Security</h4>
          <p>We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, protecting your personal data against accidental or unlawful destruction, loss, alteration, or unauthorized disclosure.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">6. Contact Us</h4>
          <p>If you have any questions about this Privacy Policy, please contact us via our official WhatsApp support channel.</p>
        </section>
      </Container>
    </div>
  );
}
