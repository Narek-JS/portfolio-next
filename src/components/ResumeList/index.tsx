import { ResumeCard } from "@/components/ResumeCard";
import { SKILLS } from "@/constants/skills";
import { useTranslations } from "next-intl";

const ResumeList = () => {
  const translation = useTranslations("resume");

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[15px]">
        <h1 className="text-[18px] font-bold tracking-wide flex items-center gap-[5px]">
          <span className="text-[#212121]">
            {translation("title_slice_one")}
          </span>
          <span className="text-[#005900]">
            {translation("title_slice_two")}
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-[15px]">
        {SKILLS.map((skill, index) => (
          <ResumeCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export { ResumeList };
