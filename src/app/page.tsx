import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { frontendFrameworkSkillIcons, frontendStyleSkillIcons } from "@/utils/skills";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <section className="max-w-3xl mx-auto space-y-8">
        {/* 自我介紹 */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Hi👋</h1>
          <p className="text-muted-foreground text-lg">
            我是一位熱愛前端的開發者，擅長 React、Next.js、和資料視覺化，喜歡打造漂亮又實用的產品。
          </p>
        </div>

        {/* 技能區塊 */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">技能 Skillset</h2>

            <h3 className="text-xl font-semibold mb-4">前端框架 Frontend Framework</h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              {frontendFrameworkSkillIcons.map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div>
                      <Image
                        src={skill.src}
                        alt={skill.alt}
                        width={45}
                        height={45}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="bg-black text-white rounded px-3 py-1 text-sm"
                  >
                    <p>{skill.alt}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">UI框架 UI Framework</h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              {frontendStyleSkillIcons.map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div>
                      <Image
                        src={skill.src}
                        alt={skill.alt}
                        width={45}
                        height={45}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="bg-black text-white rounded px-3 py-1 text-sm"
                  >
                    <p>{skill.alt}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
