"use client";

import { useTranslations } from "next-intl";
import classNames from "classnames";

interface Props {
  classname?: string;
  title?: string;
}

const Banner: React.FC<Props> = ({ classname, title }) => {
  const translation = useTranslations("common");

  return (
    <div
      title={translation("bannerImageAlt")}
      className={classNames(
        "bg-[url('/images/banner.webp')] w-full h-[292px] rounded-t-[15px] bg-[#2eca7f] bg-cover bg-center bg-blend-color-burn flex items-center justify-center",
        classname
      )}
    >
      {title && (
        <h1 className="text-[#FFFFFF] text-[32px] tracking-wide font-bold">
          {title}
        </h1>
      )}
    </div>
  );
};

export { Banner };
