"use client";

import { useEffect } from 'react';
import toast from 'react-hot-toast';

const NAMES = ['Ali', 'Fatima', 'Usman', 'Ayesha', 'Bilal', 'Zainab', 'Omar', 'Khadija'];
const LOCATIONS = ['Gulgasht', 'Cantt', 'Shah Rukn-e-Alam', 'Wapda Town', 'Bosan Road', 'Mumtazabad'];

export default function SocialProofToast() {
  useEffect(() => {
    // Wait a few seconds before showing the first toast
    const initialTimeout = setTimeout(() => {
      showRandomToast();
    }, 5000);

    // Then show one randomly every 15-30 seconds
    const interval = setInterval(() => {
      showRandomToast();
    }, Math.random() * 15000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const showRandomToast = () => {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    
    toast.success(`${name} from ${location} just registered!`, {
      duration: 4000,
      position: 'bottom-left',
      style: {
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(10px)',
        color: 'var(--primary-color)',
        border: '1px solid var(--glass-border)',
        fontWeight: '500'
      },
      iconTheme: {
        primary: 'var(--success-color)',
        secondary: '#fff',
      },
    });
  };

  return null;
}
