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

export type ProjectDevice = "desktop" | "mobile";
