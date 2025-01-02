"use client";

import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const translation = useTranslations("footer");

  return (
    <footer className="w-full">
      <Container classname="flex flex-col items-center justify-center">
        <p className="text-[13px] text-[#49515d] text-center tracking-wide">
          {translation("text-one")}{" "}
          <Link
            href={"mailto:" + PERSONAL_INFO.phone.link}
            className="underline"
          >
            {PERSONAL_INFO.email.text}
          </Link>
        </p>
        <p className="text-[11px] text-[#49515d] text-center tracking-wide">
          {translation("text-two", { year: new Date().getFullYear() })}
        </p>
      </Container>
    </footer>
  );
};

export { Footer };
