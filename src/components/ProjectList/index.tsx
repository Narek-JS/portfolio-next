import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";

const ProjectList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-[20px] justify-center">
      {PROJECTS.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </div>
  );
};

export { ProjectList };
