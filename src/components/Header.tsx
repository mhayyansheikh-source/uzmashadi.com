"use client";

import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
    setShowMenu(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQs', id: 'faqs' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
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
        
        {/* Custom Animated Hamburger */}
        <button 
          className="d-lg-none border-0 bg-transparent custom-toggler"
          onClick={() => setShowMenu(true)}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${showMenu ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex w-100 justify-content-end align-items-center">
          <Nav className="fw-medium gap-4 align-items-center">
            {navLinks.map((link) => (
              <Nav.Link key={link.name} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className="text-dark hover-gold">{link.name}</Nav.Link>
            ))}
            <Nav.Link 
              href="#register-form" 
              onClick={(e) => scrollToSection(e, 'register-form')} 
              className="btn btn-primary-custom text-white ms-3 px-4 py-2 rounded-pill"
            >
              Register Now
            </Nav.Link>
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="btn btn-link text-dark ms-2 p-2 border-0 rounded-circle"
                style={{ background: 'var(--border-color)' }}
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun size={20} className="text-warning" /> : <FaMoon size={20} />}
              </button>
            )}
          </Nav>
        </div>

        {/* Mobile Offcanvas Menu */}
        <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end" className="d-lg-none border-0 shadow-lg" style={{ backgroundColor: 'var(--background-color)', width: '85%' }}>
          <Offcanvas.Header closeButton className="border-bottom py-4">
            <Offcanvas.Title className="fw-bold fs-3" style={{ color: 'var(--primary-color)' }}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column px-4">
            <motion.div variants={containerVariants} initial="hidden" animate="show" className="d-flex flex-column gap-3 fs-3 fw-bold mt-4">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Nav.Link 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)} 
                    className="text-dark py-3 border-bottom mobile-nav-link"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    {link.name}
                  </Nav.Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Sticky Bottom Actions */}
            <div className="mt-auto pb-4 pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
              <button 
                onClick={(e) => scrollToSection(e as any, 'register-form')} 
                className="btn btn-primary-custom text-white w-100 py-3 rounded-pill fs-5 shadow-sm mb-4"
              >
                Register Now
              </button>
              {mounted && (
                <div className="d-flex justify-content-between align-items-center px-2">
                  <span className="text-muted fw-bold">Dark Mode</span>
                  <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="btn btn-link text-dark p-3 border-0 rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                    style={{ background: 'var(--border-color)' }}
                    aria-label="Toggle Dark Mode"
                  >
                    {theme === 'dark' ? <FaSun size={22} className="text-warning" /> : <FaMoon size={22} />}
                  </button>
                </div>
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </Container>
      <style jsx global>{`
        .hover-gold:hover { color: var(--secondary-color) !important; }
        .cursor-pointer { cursor: pointer; }
        .mobile-nav-link { transition: color 0.2s ease; }
        .mobile-nav-link:active { color: var(--secondary-color) !important; }
        
        /* Custom Hamburger Animation */
        .custom-toggler { padding: 0.5rem; outline: none; }
        .hamburger { width: 28px; height: 20px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
        .hamburger span { display: block; height: 3px; width: 100%; background: var(--primary-color); border-radius: 3px; transition: all 0.3s ease-in-out; transform-origin: left center; }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg); width: 100%; }
        .hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg); width: 100%; }

        [data-theme='dark'] .hamburger span { background: var(--text-primary); }
      `}</style>
    </Navbar>
  );
}
