"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const phoneNumber = '+923126327071';
  const message = encodeURIComponent('Hello! I need help with uzmashadi.com matchmaking.');
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg"
      style={{
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  );
}
