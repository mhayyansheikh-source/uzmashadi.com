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
        <main>
          {children}
        </main>
        <FloatingButtons />
        <LegalAlert />
      </body>
    </html>
  );
}
