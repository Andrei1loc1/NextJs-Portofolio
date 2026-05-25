"use client";

import { useRef, type MouseEvent } from 'react';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

const categoryAccent: Record<string, string> = {
  featured: 'var(--accent-featured)',
  ai: 'var(--accent-ai)',
  professional: 'var(--accent-pro)',
};

const categoryLabel: Record<string, string> = {
  featured: '★ Featured',
  ai: '✦ AI & Innovation',
  professional: '◆ Professional',
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = 'none';
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (0.5 - y) * 18;
    const tiltY = (x - 0.5) * 18;
    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
    el.style.setProperty('--mouse-x', `${x * 100}%`);
    el.style.setProperty('--mouse-y', `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = 'transform 0.5s ease-out';
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.setProperty('--mouse-x', '50%');
    el.style.setProperty('--mouse-y', '50%');
  };

  const accent = categoryAccent[project.category] || 'var(--first-color)';

  return (
    <div
      ref={cardRef}
      className={`glass-card glass-card--${project.category}`}
      style={{
        '--accent': accent,
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
    >
      <div className="glass-card__glow" />
      <div className="glass-card__border-track" />

      <div className="glass-card__badge">{categoryLabel[project.category]}</div>

      <div className="glass-card__image-wrap">
        <img src={project.image} alt={project.title} className="glass-card__image" />
        <div className="glass-card__image-overlay" />
      </div>

      <div className="glass-card__body">
        <div className="glass-card__logo-row">
          <img src={project.logo} alt="" className="glass-card__logo" />
          <h3 className="glass-card__title">{project.title}</h3>
        </div>

        <div className="glass-card__tags">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="glass-card__tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="glass-card__tag glass-card__tag--more">+{project.tags.length - 4}</span>
          )}
        </div>

        <p className="glass-card__desc">{project.description.slice(0, 120)}...</p>

        <div className="glass-card__actions">
          <button className="glass-card__btn glass-card__btn--primary">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card__btn glass-card__btn--ghost"
              onClick={e => e.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}