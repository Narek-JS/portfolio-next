"use client";

import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { ResumeList } from "@/components/ResumeList";

const Resume: React.FC = () => {
  const translation = useTranslations("resume");
  const commonTranslation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <Banner classname="!h-[138px]" title={commonTranslation("resume")} />
      <div className="pt-[30px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[15px]">
          <h1 className="font-bold tracking-wide flex items-center gap-[5px]">
            <span className="text-[#212121] ">
              {translation("title_slice_one")}
            </span>
            <span className="text-[#005900]">
              {translation("title_slice_two")}
            </span>
          </h1>
        </div>

        <ResumeList />
      </div>
    </Container>
  );
};

export default Resume;
