"use client";

import { LocationIcon } from "@/components/Icons/LocationIcon";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import { MailIcon } from "@/components/Icons/MailIcon";
import { AgeIcon } from "@/components/Icons/AgeIcon";
import { DownloadCv } from "@/components/DownloadCv";
import { useTranslations } from "next-intl";
import Link from "next/link";

const PersonalInfo: React.FC = () => {
  const translation = useTranslations("personalInfo");

  return (
    <div className="flex flex-col gap-[20px] max-w-[500px] ">
      <h3 className="flex items-center gap-[5px]">
        <span className="text-[#212121] font-bold tracking-wide">
          {translation("title-slice-one")}
        </span>
        <span className="text-[#005900] font-bold tracking-wide">
          {translation("title-slice-two")}
        </span>
      </h3>

      <div className="flex text-[#49515d] text-[13px] leading-[22px]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-[85px] flex items-center gap-[5px]">
            <AgeIcon />
            <span className="whitespace-nowrap">{translation("age")}</span>
          </div>
          <div className="w-[85px] flex items-center gap-[5px]">
            <LocationIcon />
            <span className="whitespace-nowrap">{translation("address")}</span>
          </div>
          <div className="w-[85px] flex items-center gap-[5px]">
            <PhoneIcon />
            <span className="whitespace-nowrap">{translation("phone")}</span>
          </div>
          <div className="w-[85px] flex items-center gap-[5px]">
            <MailIcon />
            <span className="whitespace-nowrap">{translation("mail")}</span>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p>{new Date().getFullYear() - 2000}</p>
          <p>{translation("city")}</p>
          <Link className="underline" href={"tel:" + PERSONAL_INFO.phone.link}>
            {PERSONAL_INFO.phone.text}
          </Link>
          <Link
            className="underline"
            href={"mailto:" + PERSONAL_INFO.email.link}
          >
            {PERSONAL_INFO.email.text}
          </Link>
        </div>
      </div>
      <div className="hidden sm:block">
        <DownloadCv />
      </div>
    </div>
  );
};

export { PersonalInfo };
