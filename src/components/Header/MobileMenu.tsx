import { PERSONAL_INFO } from "@/constants/personalInfo";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import { MailIcon } from "@/components/Icons/MailIcon";
import { Container } from "@/components/Container";
import { HEADER_LINKS } from "@/constants/routes";
import { Dispatch, SetStateAction } from "react";
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
    <div className="fixed inset-0 top-[60px] bg-gradient-to-br from-[#444444] via-[#005900] to-[#444444] w-full overflow-y-auto turnoff-body-scroll block sm:hidden z-40">
      <Container>
        <div className="flex flex-col gap-[40px] sm:gap-[60px] pt-[40px] pb-[40px]">
          <div className="flex items-center gap-[15px] sm:gap-[20px]">
            <Image
              title="Favicon"
              src="/images/favicon.png"
              className="invert"
              loading="eager"
              alt="Favicon"
              height={80}
              width={80}
            />
            <p className="flex flex-col gap-[10px] sm:gap-[15px] font-light tracking-widest text-[18px] sm:text-[22px]">
              <span className="text-[#FFFFFF] font-bold">
                {translation("name")}
              </span>
              <span className="text-[#FFFFFF] font-bold">
                {translation("lastName")}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-[30px] sm:gap-[40px]">
            <div className="flex flex-col gap-[12px] sm:gap-[15px]">
              <p className="text-[16px] sm:text-[18px] text-[#FFFFFF] tracking-wide font-bold">
                {translation("contacts")}
              </p>
              <div className="flex flex-col gap-[8px] sm:gap-[10px] pl-[15px] sm:pl-[20px]">
                <div className="flex items-center flex-wrap gap-[5px]">
                  <p className="flex items-center gap-[5px] text-[#FFFFFF] font-bold text-[13px] sm:text-[14px]">
                    <PhoneIcon />
                    {personalInfoTranslation("phone")}:
                  </p>
                  <Link
                    href={"tel:" + PERSONAL_INFO.phone.link}
                    className="tracking-wide text-[12px] sm:text-[13px] text-[#FFFFFF] font-bold underline break-all"
                  >
                    {PERSONAL_INFO.phone.text}
                  </Link>
                </div>
                <div className="flex items-center flex-wrap gap-[5px]">
                  <p className="flex items-center gap-[5px] text-[#FFFFFF] font-bold text-[13px] sm:text-[14px]">
                    <MailIcon />
                    {personalInfoTranslation("mail")}:
                  </p>
                  <Link
                    href={"mailto:" + PERSONAL_INFO.email.link}
                    className="tracking-wide text-[12px] sm:text-[13px] text-[#FFFFFF] font-bold underline break-all"
                  >
                    {PERSONAL_INFO.email.text}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] sm:gap-[15px] pb-[20px]">
              <p className="text-[16px] sm:text-[18px] text-[#FFFFFF] tracking-wider font-bold">
                {translation("pages")}
              </p>
              <div className="flex flex-col gap-[8px] sm:gap-[10px] pl-[15px] sm:pl-[20px]">
                {HEADER_LINKS.map(({ PAGE_LINK, TRANSLATION_TEXT }, index) => (
                  <Link
                    key={index}
                    prefetch={true}
                    href={PAGE_LINK}
                    onClick={() => setMenuStatus("close")}
                    className="tracking-widest text-[13px] sm:text-[14px] text-[#FFFFFF] font-bold underline"
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
