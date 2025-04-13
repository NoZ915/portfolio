import { Card, CardContent } from "@/components/ui/card";
import SkillGroup from "./SkillGroup";
import { languageSkills, frontendSkills, devToolSkills, designToolSkills, backendSkills } from "@/data/skills";
import { useTranslations } from "next-intl";

export default function SkillSection() {
  const t = useTranslations("SkillSection");

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold px-4 mb-2">{t("title")}</h2>
      <Card>
        <CardContent>
          <SkillGroup title={t("language")} skills={languageSkills} />
          <SkillGroup title={t("frontend")} skills={frontendSkills} />
          <SkillGroup title={t("backend")} skills={backendSkills} />
          <SkillGroup title={t("devTool")} skills={devToolSkills} />
          <SkillGroup title={t("designTool")} skills={designToolSkills} />
        </CardContent>
      </Card>
    </div>
  );
}
