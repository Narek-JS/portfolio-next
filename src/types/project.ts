interface Link {
  href: string;
  text: string;
}

interface Image {
  href: string;
  altTranslation: string;
}

export interface Project {
  descriptionTranslation: string;
  desktopImage: Image;
  mobileImage: Image;
  link: Link;
}

interface Translation {
  en: string;
  hy: string;
  ru: string;
}

export interface Achievement {
  title: string;
  logo: string;
  translations: Translation;
}

export type ProjectDevice = "desktop" | "mobile";
