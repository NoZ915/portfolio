import { Card, CardContent } from "@/components/ui/card";
import SkillGroup from "./SkillGroup";
import { languageSkills, frontendAndUIFrameworkSkills, librarySkills, devToolSkills, designToolSkills, backendFrameworkSkills } from "@/utils/skills";

export default function SkillSection() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">技能 Skillset</h2>
        <SkillGroup title="語言" skills={languageSkills} />
        <SkillGroup title="前端/UI框架" skills={frontendAndUIFrameworkSkills} />
        <SkillGroup title="後端框架/資料庫/ORM" skills={backendFrameworkSkills} />
        <SkillGroup title="函式庫" skills={librarySkills} />
        <SkillGroup title="開發/部署工具" skills={devToolSkills} />
        <SkillGroup title="設計工具" skills={designToolSkills} />
      </CardContent>
    </Card>
  );
}
