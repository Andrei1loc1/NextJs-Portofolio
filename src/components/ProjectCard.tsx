import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="project-box" data-image={project.image}>
      <div className="project-logo">
        <img src={project.logo} alt={`${project.title} logo`} />
      </div>
      <h3>{project.title}</h3>
      <button className="project-toggle-btn" onClick={() => onSelect(project)}>
        View Details
      </button>
      <div className="project-details" aria-hidden="true">
        <p>{project.description}</p>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Open Project
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-btn">
            Repository
          </a>
        )}
      </div>
    </div>
  );
}
