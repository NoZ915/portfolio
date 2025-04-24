import { useTranslations } from "next-intl";
import { Card, CardContent } from "./ui/card";

export default function EducationSection() {
  const t = useTranslations("EducationSection");

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 px-4">{t("title")}</h2>
      <Card>
        <CardContent className="py-2 px-4">
          <h3 className="text-xl font-semibold mb-1">{t("school")}  {t("degree")}</h3>
          <p className="text-muted-foreground text-sm">{t("date")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
