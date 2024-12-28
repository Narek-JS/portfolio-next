import { FC } from "react";
import Image from "next/image";

interface AchievementCardProps {
  companyName: string;
  description: string;
  logo: string;
  isReverse: boolean;
}

const AchievementCard: FC<AchievementCardProps> = ({
  companyName,
  description,
  logo,
  isReverse,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-normal mb-10 ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-16 h-16 mx-auto md:mx-6 mb-4 md:mb-0 border-2 border-gray-300 rounded-full flex items-center justify-center">
        <Image
          src={logo}
          alt={companyName}
          width={48}
          height={48}
          className="object-contain rounded-full"
          sizes="(max-width: 768px) 48px, 16vw" 
          style={{ width: "auto", height: "auto" }} 
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{companyName}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export { AchievementCard };
