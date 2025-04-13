import { useLocale } from "next-intl";
import { experience as experienceZh } from "@/data/experience.zh";
import { experience as experienceEn } from "@/data/experience.en";
import { Timeline, TimelineItem } from "./Timeline";

export function ExperienceSection() {
  const locale = useLocale();
  const experience = locale === "zh" ? experienceZh : experienceEn;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold px-4 mb-2">
        {locale === "zh" ? "經驗" : "Experience"}
      </h2>
      <Timeline >
      {experience.map((item, index) => (
        <TimelineItem
          key={index}
          time={item.time}
          title={item.title}
          description={item.description}
        />
      ))}
    </Timeline>
    </div>
  )
}