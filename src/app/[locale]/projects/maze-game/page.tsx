import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaCalendarAlt } from "react-icons/fa";

import { projects as projectsZh } from "@/data/projects.zh";
import { projects as projectsEn } from "@/data/projects.en";
import { mazeGame as mazeGameZh } from "@/data/mazeGame.zh";
import { mazeGame as mazeGameEn } from "@/data/mazeGame.en";
import { useLocale } from "next-intl";
import { getProjectByLink } from "@/lib/project";

export default function MazeGamePage() {
  const locale = useLocale();
  const projects = locale === "zh" ? projectsZh : projectsEn;
  const project = getProjectByLink(projects, "/projects/maze-game");
  const mazeGame = locale === "zh" ? mazeGameZh : mazeGameEn;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <FaCalendarAlt className="w-4 h-4" />
          {project.time}
        </span>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <div className="rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} image`}
          width={800}
          height={400}
          className="w-full object-cover rounded-lg shadow"
        />
      </div>

      {/* 使用技術 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{mazeGame.sections.technologies}</h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* 專案介紹 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{mazeGame.sections.introduction}</h2>
        <p className="leading-relaxed">
          {mazeGame.content.intro1}
        </p>
        <p className="leading-relaxed">
          {mazeGame.content.intro2}
        </p>
      </div>

      {/* 主要功能 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{mazeGame.sections.features}</h2>
        <ul className="list-disc list-inside space-y-1">
          {mazeGame.content.features.map((feature, index) => (
            <li key={index} className="leading-relaxed">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* 其他補充 */}
      <div className="mt-6 space-y-6">
        <h2 className="text-xl font-semibold mb-2">{mazeGame.sections.others}</h2>

        <div>
          <strong>{mazeGame.content.slides}</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://docs.google.com/presentation/d/19oxFqIIRv1VIN8XqiyKrUpMD-GsO4Q9D1P5RSfEuszk/preview"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div>
          <strong>{mazeGame.content.finalVideo}</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://www.youtube.com/embed/dunxL9OHSIQ"
              title="Demo影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div>
          <strong>{mazeGame.content.report}</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://drive.google.com/file/d/1C1mgqY0aik1d-6eFSMGPB43M3amIENKI/preview"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
