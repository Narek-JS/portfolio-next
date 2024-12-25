"use client";

import { ProjectInfoIcon } from "../Icons/ProjectInfoIcon";
import { Project, ProjectDevice } from "@/types/project";
import { DesktopIcon } from "../Icons/DesktopIcon";
import { MobileIcon } from "../Icons/MobileIcon";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props extends Project {}

const ProjectCard: React.FC<Props> = (props) => {
  const [projectDevice, setProjectDevice] = useState<ProjectDevice>("desktop");
  const translation = useTranslations("projects");

  const altTranslation =
    projectDevice === "desktop"
      ? props.desktopImage.altTranslation
      : props.mobileImage.altTranslation;

  const src =
    projectDevice === "desktop"
      ? props.desktopImage.href
      : props.mobileImage.href;

  return (
    <div className="max-w-[290px] w-full p-[15px] flex flex-col justify-between gap-[15px] shadow-lg bg-[#FFFFFF] rounded-lg duration-200 hover:shadow-2xl">
      <div className="w-full max-h-[350px] overflow-hidden">
        <Image
          className="w-full object-cover hover:animate-auto-scroll"
          alt={translation(altTranslation)}
          height={345}
          width={260}
          src={src}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <Tooltip
            className="bg-[#FFFFFF] shadow-lg rounded p-[10px] max-w-[400px] max-h-[320px] overflow-auto custom-scrollbar"
            content={translation(props.descriptionTranslation)}
            placement="top-start"
          >
            <ProjectInfoIcon />
          </Tooltip>
          <DesktopIcon
            fill={projectDevice === "desktop" ? "#005900" : "#212121"}
            onClick={() => setProjectDevice("desktop")}
          />
          <MobileIcon
            fill={projectDevice === "mobile" ? "#005900" : "#212121"}
            onClick={() => setProjectDevice("mobile")}
          />
        </div>
        <Link
          className="underline text-[#005900] font-bold"
          href={props.link.href}
        >
          {props.link.text}
        </Link>
      </div>
    </div>
  );
};

export { ProjectCard };
