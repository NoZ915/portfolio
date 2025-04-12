import { experience } from "@/utils/experience";
import { Timeline, TimelineItem } from "./Timeline";

export function ExperienceSection() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold px-4 mb-2">經驗</h2>
      <Timeline >
      {experience.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </Timeline>
    </div>
  )
}