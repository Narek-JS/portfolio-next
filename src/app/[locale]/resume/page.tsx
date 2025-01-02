"use client";

import { Achievements } from "@/components/Achievements";
import { ResumeList } from "@/components/ResumeList";
import { Educations } from "@/components/Educations";
import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { DownloadCv } from "@/components/DownloadCv";

const Resume: React.FC = () => {
  const commonTranslation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <Banner classname="!h-[138px]" title={commonTranslation("resume")} />
      <div className="pt-[30px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF] flex flex-col gap-[50px]">
        <Achievements />
        <ResumeList />
        <Educations />
        <div className="w-full flex justify-center">
          <DownloadCv />
        </div>
      </div>
    </Container>
  );
};

export default Resume;
