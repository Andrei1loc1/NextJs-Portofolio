"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

const categoryBadge: Record<string, { label: string; icon: string }> = {
  featured: { label: '★ Featured', icon: '★' },
  ai: { label: '✦ AI & Innovation', icon: '✦' },
  professional: { label: '⚡ Professional', icon: '⚡' },
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const badge = categoryBadge[project.category];

  return (
    <div
      className={`modal ${project ? 'open' : ''}`}
      aria-hidden={!project}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content glass-card glass-card--modal">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-visual">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              priority
            />
          </div>
          <div className="modal-content-pane">
            {badge && (
              <span className="glass-card__badge" style={{ position: 'static', marginBottom: '14px' }}>
                {badge.icon} {badge.label.replace(/^[^\s]+\s/, '')}
              </span>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="glass-card__tags" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
              {project.tags.map(tag => (
                <span key={tag} className="glass-card__tag">{tag}</span>
              ))}
            </div>
            <div className="modal-cta">
              {project.liveUrl && (
                <a
                  className="btn purple-btn large-btn"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}