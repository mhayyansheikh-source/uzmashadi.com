"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = ["Ali", "Fatima", "Usman", "Ayesha", "Bilal", "Zainab", "Hamza", "Maryam", "Saad", "Hira", "Omer", "Sana", "Hassan", "Iqra", "Zeeshan"];
const areas = ["Gulgasht Colony", "Multan Cantt", "Bosan Road", "Shah Rukn-e-Alam", "Mumtazabad", "Nawan Shehr", "Tariqabad", "WAPDA Town", "MDA Chowk", "Chungi No 9", "Buch Villas", "Royal Orchard", "Shalimar Colony", "Peer Khurshid Colony"];
const actions = [
  "just registered looking for a match",
  "found a perfect match today",
  "started chatting with a verified profile",
  "just joined the premium registry",
  "uploaded their verification receipt",
  "got engaged this week through Uzma Shadi",
  "is currently viewing profiles",
];

// Generate 100 unique messages
const generateMessages = () => {
  const msgs: string[] = [];
  msgs.push("🔥 <strong>5 New Matches</strong> Found in Multan Today! Register now before slots fill up.");
  msgs.push("⚡ <strong>High Demand:</strong> 12 families from Multan Cantt registered today.");
  msgs.push("💍 <strong>Success:</strong> A family from Gulgasht Colony finalized their Rishta yesterday!");
  
  while (msgs.length < 100) {
    const name = names[Math.floor(Math.random() * names.length)];
    const area = areas[Math.floor(Math.random() * areas.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    msgs.push(`👤 <strong>${name}</strong> from ${area} ${action}.`);
  }
  return msgs;
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
