"use client";

import { useEffect, useState } from 'react';

type NavbarProps = {
  activeSection: string;
  scrolled: boolean;
  onDownloadCV: () => void;
};

const links = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

export default function Navbar({
  activeSection,
  scrolled,
  onDownloadCV,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      id="header"
      style={{
        boxShadow: scrolled ? '0 1px 6px rgba(0,0,0,0.1)' : 'none',
        height: scrolled ? '70px' : '90px',
        lineHeight: scrolled ? '70px' : '90px',
      }}
    >
      <div className="nav-logo">
        <p className="nav-name">Andrei</p>
        <span>.</span>
      </div>

      <div className={`nav-menu${isMenuOpen ? ' responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          {links.map((link) => (
            <li className="nav_list" key={link.id}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
              <div className="circle"></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-button">
        <button className="btn" onClick={onDownloadCV}>
          Download CV <i className="uil uil-file-alt" />
        </button>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={() => setIsMenuOpen((prev) => !prev)} />
      </div>
    </nav>
  );
}
