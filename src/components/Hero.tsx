"use client";

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

type HeroProps = {
  onDownloadCV: () => void;
};

export default function Hero({ onDownloadCV }: HeroProps) {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ['Developer', 'Developer', 'Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Andrei Chindris</span>
        </div>
        <div className="featured-name">
          <p>
            I&apos;m <span className="typedText" ref={typedRef}></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually stunning and
            user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href="#contact" className="btn blue-btn" style={{ textDecoration: 'none' }}>
            Hire Me
          </a>
          <button className="btn" onClick={onDownloadCV}>
            Download CV <i className="uil uil-file-alt" />
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/andreichindris17/" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/andrei-chindri%C8%99-97b931382/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://dribbble.com/andrei-chindris" target="_blank" rel="noreferrer">
              <i className="uil uil-dribbble"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Andrei1loc1" target="_blank" rel="noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src="/assets/images/avatar.png" alt="avatar" />
        </div>
      </div>

      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}
