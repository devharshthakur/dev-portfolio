import projectsData from '@/data/projects.json';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
          />
        ))}
      </div>
    </section>
  );
}
