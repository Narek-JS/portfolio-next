"use client";

import { PERSONAL_INFO } from "@/constants/personalInfo";
import { LocationIcon } from "../Icons/LocationIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { MailIcon } from "../Icons/MailIcon";
import { useTranslations } from "next-intl";
import { AgeIcon } from "../Icons/AgeIcon";
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
          <div className="w-[100px] flex items-center gap-[5px]">
            <AgeIcon />
            <span>{translation("age")}</span>
          </div>
          <div className="w-[100px] flex items-center gap-[5px]">
            <LocationIcon />
            <span>{translation("address")}</span>
          </div>
          <div className="w-[100px] flex items-center gap-[5px]">
            <PhoneIcon />
            <span>{translation("phone")}</span>
          </div>
          <div className="w-[100px] flex items-center gap-[5px]">
            <MailIcon />
            <span>{translation("mail")}</span>
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
    </div>
  );
};

export { PersonalInfo };
