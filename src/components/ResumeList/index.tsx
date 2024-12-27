import { SKILLS } from "@/constants/skills";
import { ResumeCard } from "../ResumeCard";

const ResumeList = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      {SKILLS.map((skill, index) => (
        <ResumeCard key={index} {...skill} />
      ))}
    </div>
  );
};

export { ResumeList };
