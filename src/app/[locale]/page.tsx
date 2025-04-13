import {useTranslations} from 'next-intl';
import { ProjectSection } from "@/components/projects/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";
import { ExperienceSection } from "@/components/timeline/ExperienceSection";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen p-8">
      <section className="max-w-5xl mx-auto space-y-4">
        {/* 自我介紹 */}
        <div className="space-y-2 px-4">
          <h1 className="text-3xl font-bold">{t("name")}</h1>
          <p className="text-muted-foreground text-md">{t("description")}</p>
          <Button variant="outline" asChild className="gap-2">
            <a href="https://github.com/NoZ915" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg" />
              NoZ915
            </a>
          </Button>
        </div>

        {/* 經驗 */}
        <ExperienceSection />

        {/* 專案區塊 */}
        <ProjectSection />

        {/* 技能區塊 */}
        <SkillSection />
      </section>
    </main>
  );
}
