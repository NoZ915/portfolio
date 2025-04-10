import { experience } from "@/utils/experience";
import { Timeline, TimelineItem } from "./Timeline";

export function ExperienceSection() {
  return (
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

  )
}