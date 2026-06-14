"use client";

import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      className={`transition-all duration-300 py-3 ${scrolled ? 'glass-panel shadow-sm border-bottom-0' : 'bg-transparent'}`}
      style={{ transition: 'all 0.3s ease-in-out' }}
    >
      <Container>
        <Navbar.Brand href="/" onClick={(e) => scrollToSection(e, 'hero')} className="d-flex align-items-center cursor-pointer">
          <Image 
            src="/logo.png" 
            alt="uzmashadi.com Logo" 
            width={50} 
            height={50} 
            className="d-inline-block align-text-top rounded-circle me-3 border border-2" 
            style={{ borderColor: 'var(--secondary-color)', objectFit: 'cover' }} 
          />
          <span className="fw-bold fs-4" style={{ color: 'var(--primary-color)' }}>uzmashadi.com</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium gap-lg-4 align-items-center">
            <Nav.Link href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="text-dark hover-gold">Home</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-dark hover-gold">About</Nav.Link>
            <Nav.Link href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-dark hover-gold">Testimonials</Nav.Link>
            <Nav.Link href="#faqs" onClick={(e) => scrollToSection(e, 'faqs')} className="text-dark hover-gold">FAQs</Nav.Link>
            <Nav.Link 
              href="#register-form" 
              onClick={(e) => scrollToSection(e, 'register-form')} 
              className="btn btn-primary-custom text-white ms-lg-3 px-4 py-2 rounded-pill mb-3 mb-lg-0"
            >
              Register Now
            </Nav.Link>
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="btn btn-link text-dark ms-lg-2 p-2 border-0 rounded-circle"
                style={{ background: 'var(--border-color)' }}
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun size={20} className="text-warning" /> : <FaMoon size={20} />}
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style jsx global>{`
        .hover-gold:hover { color: var(--secondary-color) !important; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </Navbar>
  );
}
