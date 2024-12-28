import { useLocale } from "next-intl";
import { AchievementCard } from "@/components/AchievementCard";
import { ACHIEVEMENTS, pageTitleLanguages } from "@/constants/achievements";

type Locale = "en" | "hy" | "ru";

const Achievements = () => {
  const locale = useLocale() as Locale;

  return (
    <div className="relative w-full mt-[30px] px-4 sm:px-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        {pageTitleLanguages[locale]}
      </h2>
      <div className="relative w-full">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard
            key={index}
            companyName={achievement.title}
            description={achievement.translations[locale]}
            logo={achievement.logo}
            isReverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export { Achievements };
