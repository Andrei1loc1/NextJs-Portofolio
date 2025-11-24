"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

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

  if (!project) return null;

  return (
    <div
      id="projectModal"
      className={`modal ${project ? 'open' : ''}`}
      aria-hidden={!project}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
              {project.repoUrl && (
                <a
                  className="repo-btn large-btn"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
