import { Card, CardContent } from "@/components/ui/card";
import SkillGroup from "./SkillGroup";
import { languageSkills, frontendSkills, devToolSkills, designToolSkills, backendSkills } from "@/utils/skills";

export default function SkillSection() {
  return (
    <Card>
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">技能 Skillset</h2>
        <SkillGroup title="語言" skills={languageSkills} />
        <SkillGroup title="前端" skills={frontendSkills} />
        <SkillGroup title="後端" skills={backendSkills} />
        <SkillGroup title="開發/部署工具" skills={devToolSkills} />
        <SkillGroup title="設計工具" skills={designToolSkills} />
      </CardContent>
    </Card>
  );
}
