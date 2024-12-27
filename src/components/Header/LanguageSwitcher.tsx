"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { projectLanguages } from "@/utils/languages";
import { useState } from "react";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";

const LanguageSwitcher: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const translation = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    if (lang !== locale) {
      router.push(pathname, { locale: lang });
      setDropdownOpen(false);
    }
  };

  const DropdownLangList = () => (
    <div
      className="bg-gradient-to-br from-[#444444] via-[#005900] to-[#444444] shadow shadow-[#FFFFFF] p-2 rounded-xl flex flex-col gap-3"
      style={{ minWidth: "150px" }}
    >
      {projectLanguages
        .filter((l) => l !== locale)
        .map((lang) => (
          <div
            key={lang}
            className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#212121] cursor-pointer"
            onClick={() => changeLanguage(lang)}
          >
            <p className="text-[#FFFFFF] tracking-wide text-[16px]">
              {translation(lang)}
            </p>
          </div>
        ))}
    </div>
  );

  return (
    <Dropdown
      trigger={["click"]}
      animation="slide-up"
      placement="bottomRight"
      align={{ offset: [0, 8] }}
      overlay={<DropdownLangList />}
      visible={dropdownOpen}
      onVisibleChange={setDropdownOpen}
    >
      <button
        className="cursor-pointer flex items-center gap-2"
        aria-expanded={dropdownOpen}
        aria-haspopup="menu"
      >
        <svg width="24px" height="24px" stroke="#005900" fill="none">
          <title>{translation("language")}</title>
          <circle cx="12" cy="12" r="10" />
          <path d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z" />
          <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
        </svg>
      </button>
    </Dropdown>
  );
};

export { LanguageSwitcher };
