import { AchievementCard } from "@/components/AchievementCard";
import { EDUCATIONS } from "@/constants/educations";
import { useTranslations } from "next-intl";

const Educations = () => {
  const translation = useTranslations("educations");

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <h2 className="text-[18px] font-bold tracking-wide text-[#212121]">
        {translation("title")}
      </h2>
      <div className="w-full flex flex-col gap-[30px]">
        {EDUCATIONS.map((education, index) => (
          <AchievementCard
            description={translation(education.descriptionTranslation)}
            imageAlt={translation(education.logo.altTranslation)}
            title={translation(education.title)}
            imageSrc={education.logo.href}
            isReverse={index % 2 !== 0}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export { Educations };
