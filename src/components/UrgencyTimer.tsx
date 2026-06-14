"use client";

import React, { useState, useEffect } from 'react';

export default function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const savedTime = localStorage.getItem('uzma_urgency_timer');
    if (savedTime) {
      const remaining = parseInt(savedTime, 10) - Math.floor(Date.now() / 1000);
      if (remaining > 0) {
        setTimeLeft(remaining);
      }
    } else {
      localStorage.setItem('uzma_urgency_timer', (Math.floor(Date.now() / 1000) + timeLeft).toString());
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="bg-danger text-white p-3 rounded text-center shadow-sm mb-4">
      <h5 className="fw-bold mb-1">🔥 50% Off Registration Fee (Normally 10000 PKR)</h5>
      <p className="mb-0 fw-medium">Register for just 2500 PKR. Offer expires in: <span className="fs-5 fw-bold ms-2">{formatTime(timeLeft)}</span></p>
    </div>
  );
}
