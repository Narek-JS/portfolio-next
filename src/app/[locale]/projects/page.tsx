"use client";

import { ProjectList } from "@/components/ProjectList";
import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
  const translation = useTranslations("projects");
  const commonTranslation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <Banner classname="!h-[138px]" title={commonTranslation("projects")} />
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
          <p className="text-[#49515d] text-[13px] leading-[22px] max-w-[590px]">
            {translation("description")}
          </p>
        </div>
        <ProjectList />
      </div>
    </Container>
  );
};

export default Projects;
