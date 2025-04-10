import SkillSection from "@/components/skills/SkillSection";
import { ExperienceSection } from "@/components/timeline/ExperienceSection";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <section className="max-w-5xl mx-auto space-y-4">
        {/* 自我介紹 */}
        <div className="space-y-2 px-4">
          <h1 className="text-3xl font-bold">YuXuan Lin 林育瑄</h1>
          <p className="text-muted-foreground text-md">
            對於前後端開發，有極大的熱情與興趣，總是讓各種專題不再只是數據、想法，而是更具完整性的系統，另外也樂於分享學習新知，曾參與過工作室 JavaScript 讀書會並擔任導讀。
          </p>
          <Button variant="outline" asChild className="gap-2">
            <a href="https://github.com/NoZ915" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg" />
              NoZ915
            </a>
          </Button>
        </div>

        {/* 經驗時間軸 */}
        <ExperienceSection />

        {/* 技能區塊 */}
        <SkillSection />
      </section>
    </main>
  );
}
