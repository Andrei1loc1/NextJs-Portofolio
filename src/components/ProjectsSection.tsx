"use client";

import { useState } from 'react';
import { projects, type Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const categoryMeta: Record<string, { label: string; icon: string }> = {
  featured: { label: 'Featured', icon: '★' },
  ai: { label: 'AI & Innovation', icon: '✦' },
  professional: { label: 'Professional', icon: '◆' },
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const order: Project['category'][] = ['featured', 'ai', 'professional'];
  const groupedProjects = order.map(cat => ({
    key: cat,
    items: projects.filter(p => p.category === cat),
  }));

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
        <p className="section-subtitle">A selection of work spanning architecture, AI, and full-stack engineering</p>
      </div>

      <div className="projects-showcase">
        {groupedProjects.map(group => (
          group.items.length > 0 && (
            <div key={group.key} className={`project-group project-group--${group.key}`}>
              <div className="project-group__header">
                <span className="project-group__icon">{categoryMeta[group.key]?.icon}</span>
                <h2 className="project-group__title">{categoryMeta[group.key]?.label}</h2>
                <div className="project-group__line" />

              </div>
              <div className={`project-group__grid ${group.key === 'featured' ? 'project-group__grid--featured' : ''}`}>
                {group.items.map(project => (
                  <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}