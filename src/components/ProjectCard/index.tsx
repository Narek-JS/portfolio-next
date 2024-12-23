"use client";

import { ProjectInfoIcon } from "../Icons/ProjectInfoIcon";
import { Project, ProjectDevice } from "@/types/project";
import { DesktopIcon } from "../Icons/DesktopIcon";
import { MobileIcon } from "../Icons/MobileIcon";
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
    <div className="max-w-[290px] w-full p-[15px] flex flex-col gap-[15px] shadow-lg bg-[#FFFFFF] rounded-lg duration-200 hover:shadow-2xl">
      <div className="w-full max-h-[350px] overflow-hidden">
        <Image
          alt={translation(altTranslation)}
          src={src}
          width={260}
          height={345}
          className="w-full object-cover hover:animate-auto-scroll"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <ProjectInfoIcon />
          <DesktopIcon
            onClick={() => setProjectDevice("desktop")}
            fill={projectDevice === "desktop" ? "#005900" : "#212121"}
          />
          <MobileIcon
            onClick={() => setProjectDevice("mobile")}
            fill={projectDevice === "mobile" ? "#005900" : "#212121"}
          />
        </div>
        <Link href={props.link.href}>{props.link.text}</Link>
      </div>
    </div>
  );
};

export { ProjectCard };
