"use client";

import { PersonalInfo } from "@/components/PersonalInfo";
import { DownloadCv } from "@/components/DownloadCv";
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
        <Image
          className="rounded-t-[15px] absolute left-[40px] -bottom-[40px]"
          alt={translation("profileImageAlt")}
          src="/images/profileImage.jpg"
          height={275}
          width={275}
        />
      </div>
      <div className="pt-[60px] shadow rounded-b-[15px] p-[40px]">
        <div className="flex justify-between mb-[40px]">
          <AboutMe />
          <PersonalInfo />
        </div>
        <Hobby />
        <DownloadCv />
      </div>
    </Container>
  );
};

export default Home;
