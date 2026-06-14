import React from 'react';
import { Container } from 'react-bootstrap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | uzmashadi.com',
  description: 'Terms of Service for uzmashadi.com platform.',
};

export default function TermsOfService() {
  return (
    <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
      <Container className="bg-white p-4 p-md-5 shadow-sm rounded">
        <h1 className="fw-bold mb-4 text-primary" style={{ color: 'var(--primary-color)' }}>Terms of Service</h1>
        <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-4">
          <h4 className="fw-semibold">1. Acceptance of Terms</h4>
          <p>By accessing and using uzmashadi.com, you agree to comply with and be bound by the following Terms of Service. These terms are governed by the laws of Pakistan. If you disagree with any part of these terms, please do not use our website.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">2. Eligibility</h4>
          <p>You must be at least 18 years of age (or the legal age of marriage in Pakistan) to use this service. By using this service, you warrant that you possess the legal authority to enter into these Terms of Service.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">3. User Conduct and PECA 2016 Compliance</h4>
          <p>As a user, you agree to comply with the Prevention of Electronic Crimes Act (PECA), 2016. Specifically, you agree NOT to:</p>
          <ul>
            <li>Provide false, deceptive, or misleading information about yourself or your family.</li>
            <li>Submit counterfeit payment receipts (e.g., edited JazzCash screenshots). This constitutes electronic fraud.</li>
            <li>Harass, abuse, or engage in any indecent communication with staff or other users.</li>
            <li>Upload any content that is against the "glory of Islam," the integrity, security, or defense of Pakistan, public order, decency, or morality (Section 37 of PECA).</li>
          </ul>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">4. Fees and Refunds</h4>
          <p>The registration fee for processing profiles is non-refundable. By completing the JazzCash transaction, you acknowledge that you are paying for the service of profiling and matchmaking initiation, which is rendered immediately upon receipt validation.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">5. Limitation of Liability</h4>
          <p>uzmashadi.com acts as a facilitator for matchmaking. While we strive to verify profiles to the best of our ability, we are not liable for any discrepancies, disputes, or outcomes arising from marriages arranged through this platform. Users are advised to conduct their own independent verification before finalizing any proposals.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">6. Governing Law</h4>
          <p>These terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Multan, Pakistan.</p>
        </section>
      </Container>
    </div>
  );
}
