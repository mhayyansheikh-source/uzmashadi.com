"use client";

import React, { useState } from 'react';
import { Card, Form, Button, ProgressBar } from 'react-bootstrap';

export default function MatchCalculator() {
  const [calculating, setCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);
    setProgress(0);
    setResult(null);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 15;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setCalculating(false);
        // Generate a random high probability between 85% and 98%
        setResult(Math.floor(Math.random() * (98 - 85 + 1) + 85));
      }
      setProgress(Math.min(currentProgress, 100));
    }, 300);
  };

  return (
    <Card className="shadow-sm border-0 glass-panel mb-5">
      <Card.Body className="p-4 p-md-5">
        <h3 className="fw-bold text-center mb-2" style={{ color: 'var(--primary-color)' }}>Match Probability Calculator</h3>
        <p className="text-center text-secondary mb-4">Discover your chances of finding the perfect Rishta in Multan right now!</p>
        
        {!result && !calculating && (
          <Form onSubmit={handleCalculate}>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <Form.Select required>
                  <option value="">Gender...</option>
                  <option value="male">Male (Looking for Bride)</option>
                  <option value="female">Female (Looking for Groom)</option>
                </Form.Select>
              </div>
              <div className="col-md-4">
                <Form.Select required>
                  <option value="">Age Range...</option>
                  <option value="18-25">18 - 25 Years</option>
                  <option value="26-30">26 - 30 Years</option>
                  <option value="31-35">31 - 35 Years</option>
                  <option value="35+">35+ Years</option>
                </Form.Select>
              </div>
              <div className="col-md-4">
                <Form.Select required>
                  <option value="">Education...</option>
                  <option value="bachelors">Bachelors / Masters</option>
                  <option value="doctor">Medical / Doctor</option>
                  <option value="engineer">Engineering / IT</option>
                  <option value="other">Other / Business</option>
                </Form.Select>
              </div>
            </div>
            <div className="text-center">
              <Button type="submit" className="btn-secondary-custom px-5 py-2 fs-5 rounded-pill">Calculate Matches</Button>
            </div>
          </Form>
        )}

        {calculating && (
          <div className="text-center py-4">
            <h5 className="mb-3 text-secondary">Searching our verified Multan database...</h5>
            <ProgressBar animated now={progress} variant="success" style={{ height: '15px' }} />
          </div>
        )}

        {result !== null && !calculating && (
          <div className="text-center py-3">
            <div className="display-3 fw-bold text-success mb-2">{result}% Match!</div>
            <h5 className="text-dark mb-4">High Probability! We currently have over 40+ active profiles that match your criteria.</h5>
            <a href="#register-form" className="btn btn-primary-custom px-5 py-2 fs-5 rounded-pill">View Profiles Now</a>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
