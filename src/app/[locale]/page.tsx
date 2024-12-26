"use client";

import { PersonalInfo } from "@/components/PersonalInfo";
import { Container } from "@/components/Container";
import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { Hobby } from "@/components/Hobby";
import Image from "next/image";

const Home = () => {
  const translation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <div className="relative">
        <Banner />
        <div className="absolute left-[40px] -bottom-[40px] w-[275px] h-[275px] border-[0.1px] border-[#FFFFFF] rounded-t-[15px]">
          <div className="relative rounded-t-[15px] w-[275px] h-[275px]">
            <div className="absolute inset-0 rounded-t-[15px] bg-gradient-to-br from-[#00a000] via-[#005900] to-[#444444] filter grayscale-[40%] blur-[3px] opacity-80" />
            <Image
              alt={translation("profileImageAlt")}
              src="/images/profileImage.png"
              width={275}
              height={275}
              className="relative object-cover"
            />
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
