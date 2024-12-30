"use client";

import classNames from "classnames";
import Image from "next/image";

interface Props {
  description: string;
  isReverse: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const AchievementCard: React.FC<Props> = (props) => {
  return (
    <div
      className={classNames("flex flex-col gap-[15px] md:flex-row", {
        "md:flex-row-reverse": props.isReverse,
      })}
    >
      <Image
        className="object-contain rounded-full w-[64px] h-[64px] border-[2px] border-[#d1d5db]"
        src={props.imageSrc}
        alt={props.imageAlt}
        height={64}
        width={64}
      />
      <div className="bg-[#FFFFFF] p-[16px] md:p-[24px] rounded-lg shadow-md w-full md:w-1/2 flex flex-col gap-[10px]">
        <h3 className="text-[18px] font-bold text-[#212121]">{props.title}</h3>
        <p className="text-[#49515d] text-[13px] leading-[22px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export { AchievementCard };
