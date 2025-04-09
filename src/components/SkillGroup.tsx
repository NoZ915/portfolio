import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface Skill {
  src: string;
  alt: string;
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {skills.map((skill, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div>
                <Image src={skill.src} alt={skill.alt} width={45} height={45} />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
            >
              <p>{skill.alt}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
