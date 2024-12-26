"use client";

import { MenuBurger } from "@/components/Header/MenuBurger";
import { HEADER_LINKS, ROUTES } from "@/constants/routes";
import { Container } from "@/components/Container";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import classNames from "classnames";

export type MenuStatus = "open" | "close";

const Header: React.FC = () => {
  const [menuStatus, setMenuStatus] = useState<MenuStatus>("close");
  const translation = useTranslations("common");
  const pathname = usePathname();

  return (
    <Fragment>
      <header className="w-full h-[60px] flex items-center fixed bg-[#FFFFFF] shadow z-10">
        <Container classname="flex items-center justify-between gap-[30px]">
          <p className="flex items-center gap-[5px]">
            <span className="text-[#212121] font-light tracking-wide">
              {translation("name")}
            </span>
            <span className="text-[#005900] font-light tracking-wide">
              {translation("lastName")}
            </span>
          </p>

          <div className="flex items-center gap-[20px]">
            <div className="hidden sm:flex items-center gap-[10px] ">
              {HEADER_LINKS.map(({ PAGE_LINK, TRANSLATION_TEXT }, index) => (
                <Link
                  key={index}
                  prefetch={true}
                  href={ROUTES.HOME}
                  className={classNames(
                    "text-[#212121] font-light tracking-wide",
                    {
                      "border-b-[2px] border-[#005900]": pathname === PAGE_LINK,
                    }
                  )}
                >
                  {translation(TRANSLATION_TEXT)}
                </Link>
              ))}
            </div>

            <MenuBurger menuStatus={menuStatus} setMenuStatus={setMenuStatus} />

            <button className="cursor-pointer">
              <svg width="24px" height="24px" stroke="#005900" fill="none">
                <title>{translation("language")}</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z" />
                <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
              </svg>
            </button>
          </div>
        </Container>
      </header>
      {menuStatus === "open" && <MobileMenu />}
      <div className="h-[60px] -z-50 opacity-0" />
    </Fragment>
  );
};

export { Header };
