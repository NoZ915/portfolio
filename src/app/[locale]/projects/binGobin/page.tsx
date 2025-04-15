import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaCalendarAlt } from "react-icons/fa";

import { projects as projectsZh } from "@/data/projects.zh";
import { projects as projectsEn } from "@/data/projects.en";
import { binGobin as binGobinZh } from "@/data/binGobin.zh";
import { binGobin as binGobinEn } from "@/data/binGobin.en";
import { useLocale } from "next-intl";
import { getProjectByLink } from "@/lib/project";

export default function BinGoBinPage() {
  const locale = useLocale();
  const projects = locale === "zh" ? projectsZh : projectsEn;
  const project = getProjectByLink(projects, "/projects/binGobin");
  const binGobin = locale === "zh" ? binGobinZh : binGobinEn;

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
        <h2 className="text-xl font-semibold">{binGobin.sections.technologies}</h2>
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
        <h2 className="text-xl font-semibold">{binGobin.sections.introduction}</h2>
        <p className="leading-relaxed">
          {binGobin.content.intro1}
        </p>
        <p className="leading-relaxed">
          {binGobin.content.intro2}
        </p>
      </div>

      {/* 專案連結 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{binGobin.sections.links}</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              // href="https://bayesian-student-mistake-finder.zeabur.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline cursor-not-allowed"
            >
              {binGobin.content.linkSite}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/NoZ915/database-final-project?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {binGobin.content.linkSource}
            </a>
          </li>
        </ul>
      </div>

      {/* 主要功能 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{binGobin.sections.features}</h2>
        <ul className="list-disc list-inside space-y-1">
          {binGobin.content.features.map((feature, index) => (
            <li key={index} className="leading-relaxed">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* 其他補充 */}
      <div className="mt-6 space-y-6">
        <h2 className="text-xl font-semibold mb-2">{binGobin.sections.others}</h2>

        <div>
          <strong>{binGobin.content.slides}</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://drive.google.com/file/d/1YqOZp7A9HebdqtgIxa24_bmjaVz50abO/preview"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div>
          <strong>{binGobin.content.finalVideo}</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://www.youtube.com/embed/wkv-owmVaQA"
              title="成果發表影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
