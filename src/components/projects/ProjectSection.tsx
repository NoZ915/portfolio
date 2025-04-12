import ProjectCard, { ProjectGrid } from "./ProjectCard";
import {projects} from "../../utils/projects";

export const ProjectSection = () => {
  return (
    <ProjectGrid>
      {projects.map((project, index) => {
        return(
          <ProjectCard
            key={index}
            title={project.title}
            image = {project.image}
            description={project.description}
            skills={project.skills}
            link={project.link}
          />
        )
      })}
    </ProjectGrid>
  );
}