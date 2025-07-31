"use client";

import { useTranslations } from "next-intl";

const AboutMe = () => {
  const translation = useTranslations("aboutMe");
  const handleClick = () => {
    fetch("/api/log", {
      method: "POST",
    });
  };

  return (
    <button onClick={handleClick} className="cursor-pointer">
      post request to server
    </button>
  );
  return (
    <div className="flex flex-col gap-[20px] max-w-[500px]">
      <h3 className="flex items-center gap-[5px]">
        <span className="text-[#212121] font-bold tracking-wide">
          {translation("title-slice-one")}
        </span>
        <span className="text-[#005900] font-bold tracking-wide">
          {translation("title-slice-two")}
        </span>
      </h3>

      <div className="flex flex-col gap-[10px]">
        <p className="text-[#49515d] text-[13px] leading-[22px]">
          {translation("description-slice-one")}
        </p>
        <p className="text-[#49515d] text-[13px] leading-[22px]">
          {translation("description-slice-two")}
        </p>
      </div>
    </div>
  );
};

export { AboutMe };
