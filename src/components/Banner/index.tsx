"use client";

import { useTranslations } from "next-intl";
import classNames from "classnames";

interface Props {
  classname?: string;
}

const Banner: React.FC<Props> = ({ classname }) => {
  const translation = useTranslations("common");

  return (
    <div
      title={translation("bannerImageAlt")}
      className={classNames(
        "bg-[url('/images/banner.webp')] w-full h-[292px] rounded-t-[15px] bg-[#2eca7f] bg-cover bg-center bg-blend-color-burn",
        classname
      )}
    />
  );
};

export { Banner };
