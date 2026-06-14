"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import { FaWhatsapp, FaArrowRight, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

type FormData = {
  gender: string;
  maritalStatus: string;
  age: string;
  height: string;
  education: string;
  profession: string;
  cast: string;
  sect: string;
  fatherDetails: string;
  motherDetails: string;
  brothers: string;
  sisters: string;
  homeAddress: string;
  receipt: FileList;
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['gender', 'maritalStatus', 'age', 'height'];
    if (step === 2) fieldsToValidate = ['education', 'profession'];
    if (step === 3) fieldsToValidate = ['cast', 'sect'];
    if (step === 4) fieldsToValidate = ['fatherDetails', 'motherDetails', 'brothers', 'sisters'];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: FormData) => {
    if (!receiptFile) {
      alert("Please upload the JazzCash receipt to proceed.");
      return;
    }

    const message = `*New Registration - uzmashadi.com Multan*
    
*Basic Info*
Gender: ${data.gender}
Marital Status: ${data.maritalStatus}
Age: ${data.age}
Height: ${data.height}

*Education & Career*
Education: ${data.education}
Profession: ${data.profession}

*Background*
Cast: ${data.cast}
Sect: ${data.sect}

*Family Details*
Father: ${data.fatherDetails}
Mother: ${data.motherDetails}
Brothers: ${data.brothers}
Sisters: ${data.sisters}

*Location*
Address: ${data.homeAddress}

*(Note: Receipt image is attached manually by the user)*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923126327071?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    
    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  if (isSubmitted) {
    return (
      <div className="glass-panel p-5 text-center">
        <FaCheckCircle size={60} className="text-success mb-3" />
        <h3 className="mb-3 text-gold">Thank You!</h3>
        <p>Your information has been verified. Redirecting to WhatsApp to send your details...</p>
        <p className="small text-muted">Please don't forget to manually attach your JazzCash receipt image in the WhatsApp chat!</p>
        <Button variant="success" className="btn-whatsapp mt-3" onClick={() => window.open('https://wa.me/923126327071', '_blank')}>
          <FaWhatsapp className="me-2" /> Open WhatsApp Manually
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-4 p-md-5">
      <h3 className="mb-4 text-center">Register Now</h3>
      <ProgressBar now={(step / 5) * 100} variant="success" className="mb-4" style={{ height: '8px' }} />
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="step-container">
              <h5 className="mb-3">Step 1: Basic Information</h5>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select {...register('gender', { required: true })} isInvalid={!!errors.gender}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Marital Status & Kids</Form.Label>
                <Form.Control type="text" placeholder="e.g., Single, Divorced - 1 kid" {...register('maritalStatus', { required: true })} isInvalid={!!errors.maritalStatus} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="e.g., 28" {...register('age', { required: true })} isInvalid={!!errors.age} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" placeholder="e.g., 5.8" {...register('height', { required: true })} isInvalid={!!errors.height} />
              </Form.Group>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="step-container">
              <h5 className="mb-3">Step 2: Education & Career</h5>
              <Form.Group className="mb-3">
                <Form.Label>Education</Form.Label>
                <Form.Control type="text" placeholder="e.g., BS Maths / MBA" {...register('education', { required: true })} isInvalid={!!errors.education} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" placeholder="e.g., Digital Marketer, Doctor" {...register('profession', { required: true })} isInvalid={!!errors.profession} />
              </Form.Group>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="step-container">
              <h5 className="mb-3">Step 3: Background</h5>
              <Form.Group className="mb-3">
                <Form.Label>Cast</Form.Label>
                <Form.Control type="text" placeholder="e.g., Ansari, Rajput" {...register('cast', { required: true })} isInvalid={!!errors.cast} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sect</Form.Label>
                <Form.Select {...register('sect', { required: true })} isInvalid={!!errors.sect}>
                  <option value="">Select Sect</option>
                  <option value="Sunni">Sunni</option>
                  <option value="Shia">Shia</option>
                  <option value="Ahl-e-Hadith">Ahl-e-Hadith</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="step-container">
              <h5 className="mb-3">Step 4: Family Details</h5>
              <Form.Group className="mb-3">
                <Form.Label>Father's Details</Form.Label>
                <Form.Control type="text" placeholder="e.g., Car Mechanic Workshop / Deceased" {...register('fatherDetails', { required: true })} isInvalid={!!errors.fatherDetails} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mother's Details</Form.Label>
                <Form.Control type="text" placeholder="e.g., Housewife / Deceased" {...register('motherDetails', { required: true })} isInvalid={!!errors.motherDetails} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Brothers</Form.Label>
                <Form.Control type="text" placeholder="e.g., 2 Brothers (1 Married)" {...register('brothers', { required: true })} isInvalid={!!errors.brothers} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sisters</Form.Label>
                <Form.Control type="text" placeholder="e.g., 1 Doctor histopathologist" {...register('sisters', { required: true })} isInvalid={!!errors.sisters} />
              </Form.Group>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="step-container">
              <h5 className="mb-3">Step 5: Payment & Finalize</h5>
              <Form.Group className="mb-3">
                <Form.Label>Home Address</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="e.g., near Rehmat Center Kachery, Multan City" {...register('homeAddress', { required: true })} isInvalid={!!errors.homeAddress} />
              </Form.Group>
              
              <div className="alert alert-warning mt-4">
                <strong>Registration Fee:</strong> 2500 PKR<br/>
                <strong>JazzCash Number:</strong> +92 312 6327071
                <p className="mt-2 mb-0 small text-dark">Please send the fee via JazzCash and upload the receipt screenshot below to complete registration.</p>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Upload Receipt Screenshot</Form.Label>
                <Form.Control 
                  type="file" 
                  accept="image/*" 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setReceiptFile(e.target.files[0]);
                    }
                  }} 
                  required 
                />
              </Form.Group>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="d-flex justify-content-between mt-4">
          {step > 1 && (
            <Button variant="outline-secondary" onClick={prevStep}>
              <FaArrowLeft className="me-2" /> Back
            </Button>
          )}
          {step < 5 ? (
            <Button className="btn-primary-custom ms-auto" onClick={nextStep}>
              Next <FaArrowRight className="ms-2" />
            </Button>
          ) : (
            <Button type="submit" className="btn-whatsapp ms-auto">
              <FaWhatsapp className="me-2" /> Submit & Continue to WhatsApp
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
