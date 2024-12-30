"use client";

import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { ResumeList } from "@/components/ResumeList";
import { Achievements } from "@/components/Achievements";

const Resume: React.FC = () => {
  const commonTranslation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <Banner classname="!h-[138px]" title={commonTranslation("resume")} />
      <div className="pt-[30px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF] flex flex-col gap-[50px]">
        <ResumeList />
        <Achievements />
      </div>
    </Container>
  );
};

export default Resume;
