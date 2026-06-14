import type { Metadata } from 'next';
import './globals.css';
import FomoBar from '@/components/FomoBar';
import FloatingButtons from '@/components/FloatingButtons';
import LegalAlert from '@/components/LegalAlert';
import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Providers } from './Providers';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'uzmashadi.com | Find Your Perfect Match in Multan',
  description: 'The premier matchmaking service for Multan, Pakistan. Find genuine, verified rishtas in Multan today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "uzmashadi.com",
        "image": "https://uzmashadi.com/logo.png",
        "description": "The premier matchmaking and Rishta service for Multan, Pakistan. Find genuine, verified rishtas today.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Multan",
          "addressCountry": "PK"
        },
        "telephone": "+923126327071",
        "priceRange": "PKR 2500"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does uzmashadi.com work in Multan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply fill out our 5-step registration form, attach your JazzCash registration receipt, and your details will be sent directly to our secure WhatsApp line."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <FomoBar />
          <Header />
          <main>
            {children}
          </main>
          <FloatingButtons />
          <WhatsAppWidget />
          <LegalAlert />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
