import type { Metadata } from 'next';
import './globals.css';

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
        <div className="fomo-bar">
          🔥 <strong>5 New Matches</strong> Found in Multan Today! Register now before slots fill up.
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
