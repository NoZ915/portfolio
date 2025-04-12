import ProjectCard, { ProjectGrid } from "./ProjectCard";
import {projects} from "../../utils/projects";

export const ProjectSection = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold px-4 mb-2">專案</h2>
      <ProjectGrid>
        {projects.map((project, index) => {
          return(
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              time={project.time}
              image = {project.image}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          )
        })}
      </ProjectGrid>
    </div>
  );
}