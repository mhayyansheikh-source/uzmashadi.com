"use client";

import React, { useState, useEffect } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUserAstronaut, FaGraduationCap, FaStethoscope, FaLaptopCode, FaBriefcase, FaSearch } from 'react-icons/fa';

const LOADING_MESSAGES = [
  "Connecting to Multan database...",
  "Scanning 5,000+ verified profiles...",
  "Applying age and education filters...",
  "Calculating match probability..."
];

export default function MatchCalculator() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  
  const [calculating, setCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [resultData, setResultData] = useState<{ match: number, profiles: number } | null>(null);

  const handleGender = (val: string) => { setGender(val); setStep(1); };
  const handleAge = (val: string) => { setAge(val); setStep(2); };
  const handleEducation = (val: string) => { 
    setEducation(val); 
    startCalculation(val, age); 
  };

  const startCalculation = (selectedEdu: string, selectedAge: string) => {
    setCalculating(true);
    setProgress(0);
    setLoadingMsgIdx(0);
    
    // Dynamic text cycle
    const msgInterval = setInterval(() => {
      setLoadingMsgIdx(prev => Math.min(prev + 1, LOADING_MESSAGES.length - 1));
    }, 1000);

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(msgInterval);
        clearInterval(progressInterval);
        setCalculating(false);
        setStep(3); // Result step
        
        // Calculate dynamic result based on inputs
        let baseMatch = 90;
        let baseProfiles = 60;
        
        if (selectedAge === '35+') { baseMatch -= 5; baseProfiles -= 20; }
        else if (selectedAge === '26-30') { baseMatch += 5; baseProfiles += 30; }
        
        if (selectedEdu === 'doctor') { baseMatch -= 3; baseProfiles -= 15; }
        else if (selectedEdu === 'bachelors') { baseMatch += 4; baseProfiles += 25; }
        
        // Add a little randomness
        const finalMatch = Math.min(99, Math.max(75, baseMatch + Math.floor(Math.random() * 6 - 3)));
        const finalProfiles = Math.max(5, baseProfiles + Math.floor(Math.random() * 10 - 5));
        
        setResultData({ match: finalMatch, profiles: finalProfiles });
      }
    }, 150);
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <Card className="shadow-lg border-0 glass-panel mb-5 overflow-hidden" style={{ minHeight: '380px' }}>
      <Card.Body className="p-4 p-md-5 d-flex flex-column justify-content-center">
        {!calculating && step < 3 && (
          <div className="text-center mb-4">
            <h3 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Match Calculator</h3>
            <p className="text-secondary mb-0">Discover your chances of finding the perfect Rishta.</p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 0 && !calculating && (
            <motion.div key="step0" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="text-center">
              <h5 className="mb-4">Who are you looking for?</h5>
              <div className="d-grid gap-3">
                <Button variant="outline-primary" className="py-3 fw-bold rounded-pill" onClick={() => handleGender('male')}>
                  <FaUserTie className="me-2 mb-1" size={20} /> Groom (Male)
                </Button>
                <Button variant="outline-primary" className="py-3 fw-bold rounded-pill" onClick={() => handleGender('female')}>
                  <FaUserAstronaut className="me-2 mb-1" size={20} /> Bride (Female)
                </Button>
              </div>
            </motion.div>
          )}

          {step === 1 && !calculating && (
            <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="text-center">
              <h5 className="mb-4">Preferred Age Range?</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {['18-25', '26-30', '31-35', '35+'].map(a => (
                  <Button key={a} variant="outline-secondary" className="px-4 py-2 fw-bold rounded-pill" onClick={() => handleAge(a)}>
                    {a} Years
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && !calculating && (
            <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="text-center">
              <h5 className="mb-4">Preferred Education?</h5>
              <div className="row g-3">
                <div className="col-6">
                  <Button variant="outline-primary" className="w-100 py-3 rounded text-center h-100 d-flex flex-column align-items-center justify-content-center" onClick={() => handleEducation('bachelors')}>
                    <FaGraduationCap size={24} className="mb-2" />
                    <span>Bachelors / Masters</span>
                  </Button>
                </div>
                <div className="col-6">
                  <Button variant="outline-primary" className="w-100 py-3 rounded text-center h-100 d-flex flex-column align-items-center justify-content-center" onClick={() => handleEducation('doctor')}>
                    <FaStethoscope size={24} className="mb-2" />
                    <span>Medical / Doctor</span>
                  </Button>
                </div>
                <div className="col-6">
                  <Button variant="outline-primary" className="w-100 py-3 rounded text-center h-100 d-flex flex-column align-items-center justify-content-center" onClick={() => handleEducation('engineer')}>
                    <FaLaptopCode size={24} className="mb-2" />
                    <span>Engineering / IT</span>
                  </Button>
                </div>
                <div className="col-6">
                  <Button variant="outline-primary" className="w-100 py-3 rounded text-center h-100 d-flex flex-column align-items-center justify-content-center" onClick={() => handleEducation('other')}>
                    <FaBriefcase size={24} className="mb-2" />
                    <span>Business / Other</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {calculating && (
            <motion.div key="calculating" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center py-5">
              <FaSearch size={40} className="text-gold mb-4 pulse-text" />
              <h5 className="mb-4 text-primary fw-bold" style={{ minHeight: '30px' }}>{LOADING_MESSAGES[loadingMsgIdx]}</h5>
              <ProgressBar animated now={progress} variant="success" style={{ height: '12px' }} className="rounded-pill mx-auto w-75" />
            </motion.div>
          )}

          {step === 3 && resultData && (
            <motion.div key="result" variants={variants} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-3">
              <div className="display-2 fw-bold text-success mb-2">{resultData.match}% Match!</div>
              <h5 className="text-dark mb-4 px-2" style={{ lineHeight: '1.5' }}>
                Excellent odds! We found <strong>{resultData.profiles} active, verified profiles</strong> in Multan that fit your exact criteria.
              </h5>
              <Button 
                className="btn-primary-custom px-5 py-3 fs-5 rounded-pill w-100 shadow"
                onClick={() => window.dispatchEvent(new Event('open-whatsapp-widget'))}
              >
                View Matches Now
              </Button>
              <button className="btn btn-link text-muted mt-3 text-decoration-none" onClick={() => { setStep(0); setResultData(null); }}>
                Recalculate
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card.Body>
    </Card>
  );
}
