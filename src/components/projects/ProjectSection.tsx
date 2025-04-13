import { useLocale } from "next-intl";
import {projects as projectsZh} from "@/data/projects.zh";
import {projects as projectsEn} from "@/data/projects.en";
import ProjectCard, { ProjectGrid } from "./ProjectCard";


export const ProjectSection = () => {
  const locale = useLocale();
  const projects = locale === "zh" ? projectsZh : projectsEn;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold px-4 mb-2">
        { locale === "zh" ? "專案" : "Projects" }
      </h2>
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