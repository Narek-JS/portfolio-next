"use client";

import { ProjectInfoIcon } from "../Icons/ProjectInfoIcon";
import { Project, ProjectDevice } from "@/types/project";
import { DesktopIcon } from "../Icons/DesktopIcon";
import { MobileIcon } from "../Icons/MobileIcon";
import { useTranslations } from "next-intl";
import { Tooltip } from "../Tooltip";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props extends Project {}

const ProjectCard: React.FC<Props> = (props) => {
  const [projectDevice, setProjectDevice] = useState<ProjectDevice>("desktop");
  const translation = useTranslations("projects");

  return (
    <div className="max-w-[290px] w-full p-[15px] flex flex-col justify-between gap-[15px] shadow-lg bg-[#FFFFFF] rounded-lg duration-200 hover:shadow-2xl">
      <div className="w-full max-h-[350px] overflow-hidden">
        <Image
          className={classNames(
            "w-full object-cover hover:animate-auto-scroll",
            {
              hidden: projectDevice === "desktop",
            }
          )}
          loading="eager"
          alt={translation(props.mobileImage.altTranslation)}
          src={props.mobileImage.href}
          height={345}
          width={260}
        />
        <Image
          loading="eager"
          className={classNames(
            "w-full object-cover hover:animate-auto-scroll",
            {
              hidden: projectDevice === "mobile",
            }
          )}
          alt={translation(props.desktopImage.altTranslation)}
          src={props.desktopImage.href}
          height={345}
          width={260}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <Tooltip content={translation(props.descriptionTranslation)}>
            <ProjectInfoIcon />
          </Tooltip>
          <DesktopIcon
            fill={projectDevice === "desktop" ? "#005900" : "#212121"}
            onClick={() => setProjectDevice("desktop")}
            className="cursor-pointer"
          />
          <MobileIcon
            fill={projectDevice === "mobile" ? "#005900" : "#212121"}
            onClick={() => setProjectDevice("mobile")}
            className="cursor-pointer"
          />
        </div>
        <Link
          className="underline text-[#005900] font-bold"
          href={props.link.href}
          target="_blank"
        >
          {props.link.text}
        </Link>
      </div>
    </div>
  );
};

export { ProjectCard };
