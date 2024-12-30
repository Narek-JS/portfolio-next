"use client";

import { AchievementCard } from "@/components/AchievementCard";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { useTranslations } from "next-intl";

const Achievements = () => {
  const translation = useTranslations("achievements");

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <h2 className="text-2xl font-bold text-[#212121]">
        {translation("title")}
      </h2>
      <div className="w-full flex flex-col gap-[30px]">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard
            description={translation(achievement.descriptionTranslation)}
            imageAlt={translation(achievement.logo.altTranslation)}
            imageSrc={achievement.logo.href}
            isReverse={index % 2 !== 0}
            title={achievement.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export { Achievements };
