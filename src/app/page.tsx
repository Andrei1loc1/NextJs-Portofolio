"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/files/cv_engleza.pdf';
    link.download = 'cv_engleza.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    let isMounted = true;
    import('scrollreveal').then((ScrollReveal) => {
      if (!isMounted) return;
      const sr = ScrollReveal.default({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true,
      });
      sr.reveal('.featured-text-card', {});
      sr.reveal('.featured-name', { delay: 100 });
      sr.reveal('.featured-text-info', { delay: 200 });
      sr.reveal('.featured-text-btn', { delay: 200 });
      sr.reveal('.social_icons', { delay: 200 });
      sr.reveal('.featured-image', { delay: 300 });
      sr.reveal('.project-group', { delay: 100 });
      sr.reveal('.top-header', {});

      const srLeft = ScrollReveal.default({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true,
      });
      srLeft.reveal('.glass-about-card', { delay: 100 });
      srLeft.reveal('.about-intro-text', { delay: 50 });
      srLeft.reveal('.contact-info', { delay: 100 });

      const srRight = ScrollReveal.default({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true,
      });
      srRight.reveal('.glass-skill-card', { delay: 100 });
      srRight.reveal('.glass-card', { delay: 80 });
      srRight.reveal('.form-control', { delay: 100 });
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container">
      <Navbar activeSection={activeSection} scrolled={scrolled} onDownloadCV={handleDownloadCV} />
      <main className="wrapper">
        <Hero onDownloadCV={handleDownloadCV} />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
