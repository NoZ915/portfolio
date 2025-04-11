import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  description: string;
  skills: string[];
  link: string;
};

export function ProjectGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}

export default function ProjectCard({ title, image, description, skills, link }: Props) {
  return (
    <Link href={link}>
      <div className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
        <Image src={image} alt={title} width={400} height={200} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
