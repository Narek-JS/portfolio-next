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

export interface Achievement {
  title: string;
  logo: Image;
  descriptionTranslation: string;
}

export type ProjectDevice = "desktop" | "mobile";
