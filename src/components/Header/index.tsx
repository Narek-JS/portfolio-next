"use client";

import { MenuBurger } from "@/components/Header/MenuBurger";
import { HEADER_LINKS, ROUTES } from "@/constants/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
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
      <header className="w-full h-[60px] flex items-center fixed bg-[#FFFFFF] shadow z-50">
        <Container classname="flex items-center justify-between gap-[30px]">
          <Link
            prefetch={true}
            href={ROUTES.HOME}
            onClick={() => setMenuStatus("close")}
            className="flex items-center gap-[5px]"
          >
            <span className="text-[#212121] font-light tracking-wide">
              {translation("name")}
            </span>
            <span className="text-[#005900] font-light tracking-wide">
              {translation("lastName")}
            </span>
          </Link>

          <div className="flex items-center gap-[20px]">
            <div className="hidden sm:flex items-center gap-[10px] ">
              {HEADER_LINKS.map(({ PAGE_LINK, TRANSLATION_TEXT }, index) => (
                <Link
                  key={index}
                  prefetch={true}
                  href={PAGE_LINK}
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

            <LanguageSwitcher />
          </div>
        </Container>
      </header>
      {menuStatus === "open" && <MobileMenu setMenuStatus={setMenuStatus} />}
      <div className="h-[60px] -z-50 opacity-0" />
    </Fragment>
  );
};

export { Header };
