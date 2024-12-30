import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Container } from "@/components/Container";
import { HEADER_LINKS } from "@/constants/routes";
import { Dispatch, SetStateAction } from "react";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { MailIcon } from "../Icons/MailIcon";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { MenuStatus } from ".";
import Image from "next/image";

interface Props {
  setMenuStatus: Dispatch<SetStateAction<MenuStatus>>;
}

const MobileMenu: React.FC<Props> = ({ setMenuStatus }) => {
  const translation = useTranslations("common");
  const personalInfoTranslation = useTranslations("personalInfo");

  return (
    <div className="h-[100vh] bg-gradient-to-br from-[#444444] via-[#005900] to-[#444444] w-full pt-[120px] turnoff-body-scroll block sm:hidden">
      <Container>
        <div className="flex flex-col gap-[60px]">
          <div className="flex items-center gap-[20px]">
            <Image
              src="/images/favicon.png"
              className="invert"
              loading="eager"
              alt="favicon"
              height={100}
              width={100}
            />
            <p className="flex flex-col gap-[15px] font-light tracking-widest text-[22px]">
              <span className="text-[#FFFFFF] font-bold">
                {translation("name")}
              </span>
              <span className="text-[#FFFFFF] font-bold">
                {translation("lastName")}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[15px]">
              <p className="text-[18px] text-[#FFFFFF] tracking-wide font-bold">
                {translation("contacts")}
              </p>
              <div className="flex flex-col gap-[10px] pl-[20px]">
                <div className="flex items-center">
                  <p className="flex items-center gap-[5px] max-w-[110px] w-full text-[#FFFFFF] font-bold">
                    <PhoneIcon />
                    {personalInfoTranslation("phone")}:
                  </p>
                  <Link
                    href={"tel:" + PERSONAL_INFO.phone.link}
                    className="tracking-wide text-[13px] text-[#FFFFFF] font-bold underline"
                  >
                    {PERSONAL_INFO.phone.text}
                  </Link>
                </div>
                <div className="flex items-center">
                  <p className="flex items-center gap-[5px] max-w-[110px] w-full text-[#FFFFFF] font-bold">
                    <MailIcon />
                    {personalInfoTranslation("mail")}:
                  </p>
                  <Link
                    href={"mailto:" + PERSONAL_INFO.email.link}
                    className="tracking-wide text-[13px] text-[#FFFFFF] font-bold underline"
                  >
                    {PERSONAL_INFO.email.text}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <p className="text-[18px] text-[#FFFFFF] tracking-wider font-bold">
                {translation("pages")}
              </p>
              <div className="flex flex-col gap-[10px] pl-[20px]">
                {HEADER_LINKS.map(({ PAGE_LINK, TRANSLATION_TEXT }, index) => (
                  <Link
                    key={index}
                    prefetch={true}
                    href={PAGE_LINK}
                    onClick={() => setMenuStatus("close")}
                    className="tracking-widest text-[13px] max-w-[120px] w-full text-[#FFFFFF] font-bold underline"
                  >
                    {translation(TRANSLATION_TEXT)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { MobileMenu };
