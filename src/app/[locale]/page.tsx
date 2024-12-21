"use client";

import { PersonalInfo } from "@/components/PersonalInfo";
import { Container } from "@/components/Container";
import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { Hobby } from "@/components/Hobby";

const Home = () => {
  const translation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <div className="relative">
        <Banner />
        <div
          className="bg-[#2eca7f] bg-cover bg-center bg-blend-multiply rounded-t-[15px] absolute left-[40px] -bottom-[40px] w-[275px] h-[275px] bg-[url('/images/profileImage.jpg')]"
          title={translation("profileImageAlt")}
        />
      </div>
      <div className="pt-[60px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF]">
        <div className="flex justify-between mb-[40px]">
          <AboutMe />
          <PersonalInfo />
        </div>
        <Hobby />
      </div>
    </Container>
  );
};

export default Home;
