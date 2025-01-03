"use client";

import { ProjectInfoIcon } from "@/components/Icons/ProjectInfoIcon";
import { DesktopIcon } from "@/components/Icons/DesktopIcon";
import { MobileIcon } from "@/components/Icons/MobileIcon";
import { Project, ProjectDevice } from "@/types/project";
import { Tooltip } from "@/components/Tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props extends Project {}

const ProjectCard: React.FC<Props> = (props) => {
  const [projectDevice, setProjectDevice] = useState<ProjectDevice>("desktop");
  const translation = useTranslations("projects");

  return (
    <div className="max-w-[290px] w-full p-[15px] flex flex-col justify-between gap-[15px] shadow-lg bg-[#FFFFFF] rounded-lg duration-200 hover:shadow-2xl">
      <div className="w-full max-h-[350px] overflow-y-scroll sm:overflow-hidden scrollbar-hide">
        <Image
          className={classNames(
            "w-full object-cover sm:hover:animate-auto-scroll",
            {
              hidden: projectDevice === "desktop",
            }
          )}
          title={translation(props.mobileImage.altTranslation)}
          alt={translation(props.mobileImage.altTranslation)}
          src={props.mobileImage.href}
          loading="eager"
          height={345}
          width={260}
        />
        <Image
          loading="eager"
          className={classNames(
            "w-full object-cover sm:hover:animate-auto-scroll",
            {
              hidden: projectDevice === "mobile",
            }
          )}
          title={translation(props.desktopImage.altTranslation)}
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
