import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { projects as projectsZh } from "@/data/projects.zh";
import { projects as projectsEn } from "@/data/projects.en";
import { pahNiLamGu as pahNiLamGuZh } from "@/data/pah-ni-lam-gu.zh";
import { pahNiLamGu as pahNiLamGuEn } from "@/data/pah-ni-lam-gu.en";
import { useLocale } from "next-intl";
import { getProjectByLink } from "@/lib/project";

export default function PahNiLamGuPage() {
  const locale = useLocale();
  const projects = locale === "zh" ? projectsZh : projectsEn;
  const project = getProjectByLink(projects, "/projects/pah-ni-lam-gu");
  const pahNiLamGu = locale === "zh" ? pahNiLamGuZh : pahNiLamGuEn;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.description}</p>
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
      <div>
        <h2 className="text-xl font-semibold mb-2">{pahNiLamGu.sections.technologies}</h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* 專案介紹 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{pahNiLamGu.sections.introduction}</h2>
        <p className="leading-relaxed space-y-2">
          {pahNiLamGu.content.intro1}
        </p>
        <p className="leading-relaxed mt-2">
          {pahNiLamGu.content.intro2}
        </p>
      </div>

      {/* 專案連結 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{pahNiLamGu.sections.links}</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://noz915.github.io/pah-ni-lam-gu/main.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {pahNiLamGu.content.linkGame}
            </a>
          </li>
          <li>
            <a
              href="https://noz915.github.io/pah-ni-lam-gu/main.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {pahNiLamGu.content.linkSource}
            </a>
          </li>
        </ul>
      </div>

      {/* 主要功能 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{pahNiLamGu.sections.features}</h2>
        <ul className="list-disc list-inside space-y-1">
          {pahNiLamGu.content.features.map((feature) => {
            return (
              <li>{feature}</li>
            )
          })}
        </ul>
      </div>

      {/* 設計說明 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{pahNiLamGu.sections.design}</h2>
        {/* 1. 故事背景 */}
        <div className="space-y-2">
          <strong>{pahNiLamGu.content.storyBackground.title}</strong>
          <p>
            {pahNiLamGu.content.storyBackground.content1}
          </p>
          <p>
            {pahNiLamGu.content.storyBackground.content2}
          </p>
        </div>
        
        {/* 2. 場景說明 */}
        <div>
          <strong>{pahNiLamGu.content.sceneDesign.title}</strong>
          <p>
            {pahNiLamGu.content.sceneDesign.content}
          </p>
        </div>

        {/* 3. 操作方式 */}
        <p className="leading-relaxed">
          <strong>{pahNiLamGu.sections.operation}</strong>
            {pahNiLamGu.content.controls.map((control) => {
              return (
                <>
                  <br />{control}
                </>
              )
            })}
        </p>
      </div>

      {/* 其他補充 */}
      <div className="mt-6 space-y-6">
        <h2 className="text-xl font-semibold mb-2">其他</h2>
        <div>
          <strong>遊戲前導預告影片</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://www.youtube.com/embed/Qwqrl_vaZo0"
              title="遊戲前導預告影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div>
          <strong>成果發表影片</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://www.youtube.com/embed/lX4oTrl02nE"
              title="成果發表影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div>
          <strong>投影片簡報</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://docs.google.com/presentation/d/1IXXf0MIS3k_l0Jnd580INA85UtnBAWc_ZGxwA0tmMuw/embed?start=false&loop=false&delayms=3000"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div>
          <strong>書面報告</strong>
          <div className="relative w-full pb-[56.25%] mt-2">
            <iframe
              src="https://docs.google.com/document/d/1b_VGhIp5eUpohtB7jNVG5N_HoHWSJN9VmPhkHtEM24c/preview"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
