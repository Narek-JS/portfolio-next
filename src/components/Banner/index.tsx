"use client";

import { useTranslations } from "next-intl";

const Banner = () => {
  const translation = useTranslations("common");

  return (
    <div
      title={translation("bannerImageAlt")}
      className="bg-[url('/images/banner.webp')] w-full h-[292px] rounded-t-[15px] bg-[#2eca7f] bg-cover bg-center bg-blend-color-burn"
    />
  );
};

export { Banner };
