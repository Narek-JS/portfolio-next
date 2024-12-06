import { createNavigation } from "next-intl/navigation";
import { projectLanguages } from "./utils/languages";

export const locales = projectLanguages;
export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
});
