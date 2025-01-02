"use client";

import { PERSONAL_INFO } from "@/constants/personalInfo";
import { PersonalInfo } from "@/components/PersonalInfo";
import { Container } from "@/components/Container";
import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { Hobby } from "@/components/Hobby";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const translation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <div className="relative">
        <Banner classname="!h-[492px] sm:!h-[292px]" />
        <div className="absolute px-[40px] top-[40px] sm:top-auto sm:-bottom-[40px] w-full flex flex-col justify-center items-center sm:justify-between sm:flex-row sm:items-start">
          <div className="relative rounded-[15px] w-[275px] h-[275px] border-[0.1px] border-[#FFFFFF] ">
            <div className="absolute inset-0 rounded-t-[15px] bg-gradient-to-br from-[#00a000] via-[#005900] to-[#444444] filter grayscale-[40%] blur-[3px] opacity-80" />
            <Image
              alt={translation("profileImageAlt")}
              src="/images/profileImage.png"
              width={275}
              height={275}
              className="relative object-cover"
            />
          </div>
          <div className="pt-[20px] flex flex-col items-center">
            <p className="text-[26px] sm:text-[32px] font-bold text-[#FFFFFF] tracking-wide">
              {translation("name")} {translation("lastName")}
            </p>
            <p className="text-[#FFFFFF] text-[18px] tracking-wide">
              {translation("position")}
            </p>
            <div className="flex items-center justify-center">
              <Link href={PERSONAL_INFO.linkedin.link} target="_blank">
                <Image
                  alt={translation("linkedinImageAlt")}
                  src="/images/linkedin.png"
                  className="invert"
                  height={50}
                  width={50}
                />
              </Link>
              <Link href={PERSONAL_INFO.github.link} target="_blank">
                <Image
                  alt={translation("githubImageAlt")}
                  src="/images/github.png"
                  className="invert"
                  height={70}
                  width={70}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[60px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF]">
        <div className="flex flex-col-reverse sm:flex-row gap-[40px] sm:gap-[15px] justify-between mb-[40px]">
          <AboutMe />
          <PersonalInfo />
        </div>
        <Hobby />
      </div>
    </Container>
  );
};

export default Home;
