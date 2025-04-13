import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import {projects as projectsZh} from "@/data/projects.zh";
import {projects as projectsEn} from "@/data/projects.en";
import { useLocale } from "next-intl";
import { getProjectByLink } from "@/lib/project";

export default function PahNiLamGuPage() {
  const locale = useLocale();
  const projects = locale === "zh" ? projectsZh : projectsEn;
  const project = getProjectByLink(projects, "/projects/pah-ni-lam-gu");

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

      <div>
        <h2 className="text-xl font-semibold mb-2">使用技術</h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">專案介紹</h2>
        <p className="leading-relaxed">
          「百年南遇」是一款互動式解謎遊戲，玩家透過 LINE Bot 接收任務，進入使用 PixiJS 製作的遊戲介面解開謎題。遊戲題材取自校園歷史與文化，藉由趣味機制讓玩家沉浸式學習。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">主要功能</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>使用 PixiJS 製作動態互動遊戲場景</li>
          <li>透過 LINE Bot 傳送關卡提示、接受玩家輸入</li>
          <li>使用 Express 架設後端 API 處理任務邏輯與資料儲存</li>
          <li>部署至 Heroku 以提供遊戲連線</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">開發心得</h2>
        <p className="leading-relaxed">
          這是我首次將 PixiJS 與 LINE Bot 結合開發互動式遊戲。從遊戲設計、美術製作到後端串接皆自行完成，過程中學會了如何規劃遊戲邏輯與處理跨平台資料互動，也更熟悉了 Express 與 Heroku 的部署流程。
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">專案連結</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://github.com/你的帳號/你的-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub 原始碼
            </a>
          </li>
          <li>
            <a
              href="https://你的-demo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              線上遊玩 Demo
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=你的影片ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              作品介紹影片
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
