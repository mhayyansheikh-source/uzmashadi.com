import type { Metadata } from 'next';
import './globals.css';
import FomoBar from '@/components/FomoBar';
import FloatingButtons from '@/components/FloatingButtons';
import LegalAlert from '@/components/LegalAlert';

export const metadata: Metadata = {
  title: 'Uzma Shadi | Find Your Perfect Match in Multan',
  description: 'The premier matchmaking service for Multan, Pakistan. Find genuine, verified rishtas in Multan today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <FomoBar />
        <nav className="navbar navbar-light bg-white shadow-sm py-3 sticky-top">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src="/logo.png" alt="Uzma Shadi Logo" width="50" height="50" className="d-inline-block align-text-top rounded-circle me-3 border border-2" style={{ borderColor: 'var(--secondary-color)' }} />
              <span className="fw-bold fs-4" style={{ color: 'var(--primary-color)' }}>Uzma Shadi</span>
            </a>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <FloatingButtons />
        <LegalAlert />
      </body>
    </html>
  );
}
