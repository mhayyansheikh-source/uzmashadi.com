"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rawTestimonials } from './TestimonialMarquee';

const actions = [
  "just registered looking for a match",
  "found a perfect match today",
  "started chatting with a verified profile",
  "just joined the premium registry",
  "uploaded their verification receipt",
  "got engaged this week through uzmashadi.com",
  "is currently viewing profiles",
];

// Generate messages based on the massive real testimonial data
const generateMessages = () => {
  const msgs: string[] = [];
  msgs.push("🔥 <strong>5 New Matches</strong> Found in Multan Today! Register now before slots fill up.");
  msgs.push("⚡ <strong>High Demand:</strong> 12 families from Multan Cantt registered today.");
  msgs.push("💍 <strong>Success:</strong> A family from Gulgasht Colony finalized their Rishta yesterday!");
  
  // Create messages using the consistent dummy data
  rawTestimonials.forEach((testimonial) => {
    const action = actions[Math.floor(Math.random() * actions.length)];
    msgs.push(`👤 <strong>${testimonial.name}</strong> from ${testimonial.loc} ${action}.`);
  });

  // Shuffle the messages so they don't appear in the exact same order as the marquee
  return msgs.sort(() => Math.random() - 0.5);
};

const messages = generateMessages();

export default function FomoBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4500); // Change message every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fomo-bar">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: messages[currentIndex] }}
        />
      </AnimatePresence>
    </div>
  );
}
