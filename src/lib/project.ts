import type { Project } from "@/types/project";

export function getProjectByLink(projects: Project[], link: string): Project {
  const project = projects.find(p => p.link.indexOf(link) !== -1);
  if (!project) throw new Error(`Project with link ${link} not found.`);
  return project;
}
