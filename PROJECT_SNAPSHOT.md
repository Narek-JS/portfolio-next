# PROJECT SNAPSHOT — portfolio-next

> Generated: 2026-05-07  
> Purpose: Complete reference snapshot for review and planning by another assistant.

---

## 1. PROJECT OVERVIEW

### Framework & Language
- **Framework:** Next.js 15.0.7 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Runtime:** React 19, Node.js

### Key Dependencies
| Package | Version | Purpose |
|---|---|---|
| next | 15.0.7 | Framework |
| react / react-dom | ^19.0.0 | UI |
| next-intl | ^3.26.0 | i18n (en / hy / ru) |
| tailwindcss | ^3.4.1 | Styling |
| classnames | ^2.5.1 | Conditional class names |
| react-tooltip | ^5.28.0 | Tooltips on project cards |
| rc-dropdown | ^4.2.1 | Dropdown (language switcher) |
| ua-parser-js | ^2.0.4 | User-agent parsing (analytics) |
| nodemailer | ^7.0.5 | Email (unused in active pages, present as dep) |

### Folder Structure
```
portfolio-next/
├── messages/          i18n translation files (en, hy, ru)
├── public/            Static assets (images, CV PDF, SVGs)
├── src/
│   ├── app/           Next.js App Router pages & API routes
│   │   ├── [locale]/  Localized pages (home, resume, projects)
│   │   └── api/       Server-side API routes (analytics, cv-download, social-click)
│   ├── components/    UI components (one folder per component)
│   ├── constants/     Data files (projects, skills, achievements, educations, personalInfo, routes)
│   ├── hooks/         Custom React hooks
│   ├── i18n/          next-intl routing & request config
│   ├── navigation.ts  Re-exported next-intl navigation helpers
│   ├── middleware.tsx  next-intl middleware (locale detection)
│   ├── styles/        globals.css (Tailwind base)
│   ├── types/         TypeScript interfaces
│   └── utils/         Utility helpers (languages)
├── next.config.mjs    Next.js config (next-intl plugin)
├── tailwind.config.ts Tailwind config
├── tsconfig.json      TypeScript config
└── package.json
```

---

## 2. FILE TREE

```
.eslintrc.json
.gitignore
.vscode/settings.json
messages/
  en.json
  hy.json
  ru.json
next.config.mjs
next.config.ts
next-env.d.ts
package.json
package-lock.json
postcss.config.mjs
public/
  cv/
    resume.pdf
  file.svg
  globe.svg
  images/
    2290Desktop.png
    2290Mobile.png
    banner.webp
    codetime-logo.png
    descampsDesktop.png
    descampsMobile.png
    digitain-logo.png
    fastmediaDesktop.png
    fastmediaMobile.png
    fastnewsDesktop.png
    fastnewsMobile.png
    fasttvDesktop.svg
    fasttvDesktop.webp
    fasttvMobile.svg
    fasttvMobile.webp
    favicon.png
    github.png
    iftaDrsktop.png
    iftaMobile.png
    iguanDesktop.png
    iguan-logo.png
    iguanMobile.png
    irpDesktop.png
    irpMobile.png
    linkedin.png
    logix-logo.png
    noahDesktop.png
    noahMobile.png
    ortakDesktop.png
    ortakMobile.png
    profileImage.jpg
    profileImage.png
    sideDesktop.png
    sideMobile.png
    soft-logo.png
    tourvangoDesktop.png
    tourvangoMobile.png
    tripsandfuelDesktop.png
    tripsandfuelMobile.png
    university.png
    weddingDesktop.png
    weddingMobile.png
  next.svg
  vercel.svg
  window.svg
README.md
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      projects/
        page.tsx
      resume/
        page.tsx
    api/
      analytics/
        route.ts
      cv-download/
        route.ts
      social-click/
        route.ts
    favicon.ico
  components/
    AboutMe/index.tsx
    AchievementCard/index.tsx
    Achievements/index.tsx
    Analytics/index.tsx
    Banner/index.tsx
    Container/index.tsx
    DownloadCv/index.tsx
    Educations/index.tsx
    Footer/index.tsx
    Header/index.tsx
    Header/LanguageSwitcher.tsx
    Header/MenuBurger.tsx
    Header/MobileMenu.tsx
    Hobby/index.tsx
    Icons/AgeIcon.tsx
    Icons/DesktopIcon.tsx
    Icons/LocationIcon.tsx
    Icons/MailIcon.tsx
    Icons/MobileIcon.tsx
    Icons/PhoneIcon.tsx
    Icons/ProjectInfoIcon.tsx
    PersonalInfo/index.tsx
    ProjectCard/index.tsx
    ProjectList/index.tsx
    ResumeCard/index.tsx
    ResumeList/index.tsx
    Tooltip/index.tsx
  constants/
    achievements.ts
    educations.ts
    personalInfo.ts
    projects.ts
    routes.ts
    skills.ts
  hooks/
    useIsMobile.tsx
  i18n/
    request.ts
    routing.ts
  middleware.tsx
  navigation.ts
  styles/
    globals.css
  types/
    achievement.ts
    education.ts
    project.ts
    resume.ts
  utils/
    languages.ts
tailwind.config.ts
tsconfig.json
```

---

## 3. CONTENT FILES

### 3.1 `src/constants/personalInfo.ts`

```ts
const PERSONAL_INFO = {
  email: {
    link: "narek.petrosyan.005@gmail.com",
    text: "narek.petrosyan.005@gmail.com",
  },
  phone: {
    link: "+37498738617",
    text: "(+374) 98 738617",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/narek-petrosyan-dev",
  },
  github: {
    link: "https://github.com/Narek-JS",
  },
};

export { PERSONAL_INFO };
```

---

### 3.2 `src/constants/skills.ts`

```ts
const SKILLS = [
  { title: "JavaScript / TS", percent: 98 },
  { title: "Next.js", percent: 96 },
  { title: "React.js", percent: 96 },
  { title: "Rest API / GraphQL / Axios", percent: 94 },
  { title: "Test (Jest, Mocha)", percent: 93 },
  { title: "Web Socket / Socket.io", percent: 91 },
  { title: "Redux / Saga / thunk / Toolkit / RTK Quer", percent: 89 },
  { title: "CSS/SASS / Tailwind CSS / Styled Components / MUI", percent: 87 },
  { title: "Performance Optimization (Lighthouse, Webpack, Bundling/Minification)", percent: 85 },
  { title: "Core web / how the browser parses and constructs a web page", percent: 85 },
  { title: "Algorithms / Data Structures / Design Patterns", percent: 86 },
  { title: "Problem-Solving Skills", percent: 84 },
  { title: "Code Review", percent: 85 },
  { title: "PixiJS", percent: 88 },
  { title: "Module Federation / Microfrontend Architecture", percent: 87 },
];

export { SKILLS };
```

---

### 3.3 `src/constants/achievements.ts`
(Work experience entries — descriptions come from i18n translations)

```ts
import { Achievement } from "@/types/achievement";

export const ACHIEVEMENTS: Array<Achievement> = [
  {
    title: "Digitain",
    logo: { altTranslation: "digitainImageAlt", href: "/images/digitain-logo.png" },
    descriptionTranslation: "digitainDescription",
    dateTranslation: "digitainDate",
  },
  {
    title: "Soft Construct",
    logo: { altTranslation: "softImageAlt", href: "/images/soft-logo.png" },
    descriptionTranslation: "softDescription",
    dateTranslation: "softDate",
  },
  {
    title: "Logix Software",
    logo: { altTranslation: "logixImageAlt", href: "/images/logix-logo.png" },
    descriptionTranslation: "logixDescription",
    dateTranslation: "logixDate",
  },
  {
    title: "Iguan Systems",
    logo: { altTranslation: "iguanImageAlt", href: "/images/iguan-logo.png" },
    descriptionTranslation: "iguanDescription",
    dateTranslation: "iguanDate",
  },
  {
    title: "Code Time",
    logo: { altTranslation: "codetimeImageAlt", href: "/images/codetime-logo.png" },
    descriptionTranslation: "codetimeDescription",
    dateTranslation: "codetimeDate",
  },
];
```

**Resolved English text for achievements:**

| Company | Date | Description summary |
|---|---|---|
| Digitain (Galaxsys team) | Oct 2024 – Present | Senior SWE; PixiJS, Module Federation, microfrontend; NOAH football club platform |
| Soft Construct (Media Lab) | Feb 2024 – Oct 2024 | Senior SWE; FastTV (live sports streaming + VOD); React Native, design patterns |
| Logix Software | Mar 2023 – Feb 2024 | Middle SWE; IFTA & IRP projects; Next.js, Redux Toolkit, RTK Query, Tailwind |
| Iguan Systems | Jan 2022 – Mar 2023 | React.js Developer; e-commerce (Descamps, Jalla, Hypsi); React, Redux, Saga, SCSS/BEM |
| Code Time | May 2021 – Jan 2022 | JS Developer; landing-page constructor (Canva-like); HTML/CSS/JS/jQuery/Gulp |

---

### 3.4 `src/constants/educations.ts`

```ts
import { Education } from "@/types/education";

export const EDUCATIONS: Array<Education> = [
  {
    title: "universityTitle",
    descriptionTranslation: "universityDescription",
    dateTranslation: "universityDate",
    logo: {
      altTranslation: "universityImageAlt",
      href: "/images/university.png",
    },
  },
];
```

**Resolved English text:**
- **Institution:** Yerevan State University, Faculty of Radiophysics
- **Degree:** Bachelor of Science
- **Date:** May 2018 – Jan 2023

---

### 3.5 `src/constants/projects.ts`

```ts
import { Project } from "@/types/project";

const PROJECTS: Array<Project> = [
  {
    desktopImage: { href: "/images/noahDesktop.png", altTranslation: "noahImageAlt" },
    mobileImage:  { href: "/images/noahMobile.png",  altTranslation: "noahImageAlt" },
    link: { href: "https://noah.am", text: "NOAH" },
    descriptionTranslation: "noahDescription",
  },
  {
    desktopImage: { href: "/images/ortakDesktop.png", altTranslation: "ortakImageAlt" },
    mobileImage:  { href: "/images/ortakMobile.png",  altTranslation: "ortakImageAlt" },
    link: { href: "https://ortak.me", text: "Ortak" },
    descriptionTranslation: "ortakDescription",
  },
  {
    desktopImage: { href: "/images/sideDesktop.png", altTranslation: "sideImageAlt" },
    mobileImage:  { href: "/images/sideMobile.png",  altTranslation: "sideImageAlt" },
    link: { href: "https://side.xyz", text: "Side" },
    descriptionTranslation: "sideDescription",
  },
  {
    desktopImage: { href: "/images/tourvangoDesktop.png", altTranslation: "tourvangoImageAlt" },
    mobileImage:  { href: "/images/tourvangoMobile.png",  altTranslation: "tourvangoImageAlt" },
    link: { href: "https://tourvango.com", text: "Tourvango" },
    descriptionTranslation: "tourvangoDescription",
  },
  {
    desktopImage: { href: "/images/fasttvDesktop.svg", altTranslation: "fastTvImageAlt" },
    mobileImage:  { href: "/images/fasttvMobile.svg",  altTranslation: "fastTvImageAlt" },
    link: { href: "https://fasttv.am", text: "Fast TV" },
    descriptionTranslation: "fastTvDescription",
  },
  {
    desktopImage: { href: "/images/weddingDesktop.png", altTranslation: "weddingImageAlt" },
    mobileImage:  { href: "/images/weddingMobile.png",  altTranslation: "weddingImageAlt" },
    link: { href: "https://wed-invite.vercel.app", text: "Wed Invite" },
    descriptionTranslation: "weddingDescription",
  },
  {
    desktopImage: { href: "/images/iftaDrsktop.png", altTranslation: "iftaImageAlt" },
    mobileImage:  { href: "/images/iftaMobile.png",  altTranslation: "iftaImageAlt" },
    link: { href: "https://ifta.online", text: "IFTA Online" },
    descriptionTranslation: "iftaDescription",
  },
  {
    desktopImage: { href: "/images/fastnewsDesktop.png", altTranslation: "fastnewsImageAlt" },
    mobileImage:  { href: "/images/fastnewsMobile.png",  altTranslation: "fastnewsImageAlt" },
    link: { href: "https://www.fastnews.am", text: "Fastnews" },
    descriptionTranslation: "fastnewsDescription",
  },
  {
    desktopImage: { href: "/images/fastmediaDesktop.png", altTranslation: "fastmediaImageAlt" },
    mobileImage:  { href: "/images/fastmediaMobile.png",  altTranslation: "fastmediaImageAlt" },
    link: { href: "https://fastmedia.am", text: "Fastmedia" },
    descriptionTranslation: "fastmediaDescription",
  },
  {
    desktopImage: { href: "/images/irpDesktop.png", altTranslation: "irpImageAlt" },
    mobileImage:  { href: "/images/irpMobile.png",  altTranslation: "irpImageAlt" },
    link: { href: "https://irpregistrationservices.com", text: "IRP" },
    descriptionTranslation: "irpDescription",
  },
  {
    desktopImage: { href: "/images/2290Desktop.png", altTranslation: "2290ImageAlt" },
    mobileImage:  { href: "/images/2290Mobile.png",  altTranslation: "2290ImageAlt" },
    link: { href: "https://2290onlineform.com", text: "2290 Online" },
    descriptionTranslation: "2290Description",
  },
  {
    desktopImage: { href: "/images/tripsandfuelDesktop.png", altTranslation: "tripsandfuelImageAlt" },
    mobileImage:  { href: "/images/tripsandfuelMobile.png",  altTranslation: "tripsandfuelImageAlt" },
    link: { href: "https://tripsandfuel.com", text: "Trips and Fuel" },
    descriptionTranslation: "tripsandfuelDescription",
  },
  {
    desktopImage: { href: "/images/descampsDesktop.png", altTranslation: "descampsImageAlt" },
    mobileImage:  { href: "/images/descampsMobile.png",  altTranslation: "descampsImageAlt" },
    link: { href: "https://www.descamps.com", text: "Descamps" },
    descriptionTranslation: "descampsDescription",
  },
  {
    desktopImage: { href: "/images/iguanDesktop.png", altTranslation: "iguanImageAlt" },
    mobileImage:  { href: "/images/iguanMobile.png",  altTranslation: "iguanImageAlt" },
    link: { href: "https://www.iguansystems.com", text: "Iguan Systems" },
    descriptionTranslation: "iguanDescription",
  },
];

export { PROJECTS };
```

---

### 3.6 `src/constants/routes.ts`

```ts
const ROUTES = {
  HOME: "/",
  RESUME: "/resume",
  PROJECTS: "/projects",
};

const HEADER_LINKS = [
  { TRANSLATION_TEXT: "home",     PAGE_LINK: "/" },
  { TRANSLATION_TEXT: "resume",   PAGE_LINK: "/resume" },
  { TRANSLATION_TEXT: "projects", PAGE_LINK: "/projects" },
];

export { ROUTES, HEADER_LINKS };
```

---

### 3.7 `messages/en.json` (English — full)

```json
{
  "common": {
    "name": "Narek",
    "lastName": "Petrosyan",
    "home": "Home",
    "resume": "Resume",
    "projects": "Projects",
    "contacts": "Contacts",
    "position": "Senior Software Engineer",
    "pages": "Pages",
    "language": "Language",
    "bannerImageAlt": "Banner Image",
    "profileImageAlt": "Profile Image",
    "linkedinImageAlt": "Linkedin Image",
    "githubImageAlt": "Github Image",
    "en": "English",
    "hy": "Հայերեն",
    "ru": "Русский"
  },
  "aboutMe": {
    "title-slice-one": "About",
    "title-slice-two": "Me",
    "description-slice-one": "Hello! I'm Narek Petrosyan, a passionate JavaScript Software Developer with a strong affinity for front-end development. I have a deep interest in building intuitive, dynamic, and user-friendly web and mobile applications. My professional journey has been fueled by a love for creating impactful digital experiences and continuously exploring new technologies.",
    "description-slice-two": "Beyond my technical pursuits, I enjoy swimming and snowboarding, two activities that help me refresh my mind and think from new perspectives. These hobbies bring balance to my life and inspire creativity, whether I'm riding the slopes or diving into new projects."
  },
  "personalInfo": {
    "title-slice-one": "Personal",
    "title-slice-two": "Information",
    "age": "Age",
    "address": "Address",
    "phone": "Phone",
    "mail": "Email",
    "city": "Yerevan, Armenia"
  },
  "hobby": {
    "title-slice-one": "What I Love",
    "title-slice-two": "To Do",
    "description-slice-one": "In addition to my career, I thrive on solving complex problems and creating seamless digital experiences. I love staying ahead of the curve in front-end development by learning and applying the latest tools and technologies.",
    "description-slice-two": "Outside of coding, swimming and snowboarding are my go-to activities for relaxation and inspiration. These hobbies allow me to clear my mind, explore fresh perspectives, and maintain a balance between work and personal life. Whether it's riding waves or carving snow, these experiences enrich my creativity and keep me motivated."
  },
  "downloadCv": {
    "resumeName": "Narek Petrosyan Resume",
    "buttonText-slice-one": "Download",
    "buttonText-slice-two": "CV"
  },
  "projects": {
    "title_slice_one": "My",
    "title_slice_two": "Projects",
    "description": "Welcome to my projects page! Here, you can explore my works displayed as cards. Each card includes the project's title, description, and switchable images for mobile and desktop devices.",
    "fastTvImageAlt": "fast TV project image",
    "fastTvDescription": "Fast TV is the most unique platform in Armenia. It allows you to watch Fast Sports LIVE sports TV channel on any smart device or gadget.Fast TV broadcasts UEFA LEAGUES, LA LIGA, Serie A, Ligue 1, German Bundesliga, NBA, FORMULA 1, NHL, ATP Masters 1000, MARTIAL ARTS, BOXING, and other exclusive tournaments. Moreover, its own TV shows, high-ranking sports TV series, popular movies, and documentaries are shown on Fast TV channels. The media platform highlights the most important local and international events in sports, analyzing the process and results of the games and tournaments. Fast TV is accessible to everyone and everywhere with its most exclusive sports content.  Have questions about Fast TV services? Explore FAQs here. ",
    "weddingImageAlt": "Wed invite project image",
    "weddingDescription": "Welcome to our website. Our platform offers a wide range of customizable templates that cater to different wedding themes and styles. With our easy-to-use website, couples can create their own personalized wedding invitation website with a unique URL and share it with their friends.Our mobile-friendly platform has a beautiful UI that ensures a well-rounded user experience. Our platform is designed to be simple and easy to use, allowing users to add essential information about the bride, groom, wedding day, wedding place, pictures, and more.We understand that planning a wedding can be stressful, which is why we offer a range of features that help to create excitement and anticipation for the big day. Our free features include a countdown timer, animated elements, a virtual tour of the wedding venue, weather forecast for the wedding day, the ability to write messages, a map that shows the location of wedding events, customizable templates, and personalized URLs that make it easier for guests to access and remember.At our platform, we prioritize providing a seamless and user-friendly experience, which is why we offer a range of features that are designed to make the process of creating a wedding invitation website as easy as possible. With our platform, you can create a beautiful and unique wedding invitation website that your guests will love. So why wait? Visit our website today and create your dream wedding invitation website.",
    "iftaImageAlt": "IFTA Online project image",
    "iftaDescription": "IFTA.Online was created by professionals in the trucking industry who know all about the regulations that truckers need to follow. We realized years ago that truckers have it tough. Regulations are rarely consistent across the country, and they can change in a heartbeat. That's why we created our site: to help truckers get their filings done quickly so they can stay out on the road! The IFTA is an important filing for any interstate trucker. It's the best way to ensure that you'll always be able to keep track of your fuel taxes while you're out on the roads. We recognize that the regulations around the IFTA are confusing. So, we decided to help truckers make their lives a lot easier!",
    "ortakImageAlt": "Ortak project image",
    "ortakDescription": "Founded in 2024, Ortak is an NFT platform that includes a marketplace and two phygital stores. We operate within an ecosystem designed to enhance transparency in business collaboration. As an NFT marketplace, we have created a transparent environment for users to buy and sell NFTs. All the activities encouraged on the marketplace are powered by blockchain technology.",
    "sideImageAlt": "Side project image",
    "sideDescription": "Side.xyz is a Web3 growth protocol that helps blockchain projects enhance user engagement and adoption. It operates using its native cryptocurrency, the $SIDE token, and provides marketing and staking solutions. Key features include MarketingFi, which combines marketing strategies with decentralized finance to promote projects, and tools like Rise (ambassador program), Tribe (analytics and automation), and staking solutions.",
    "fastnewsImageAlt": "FastNews project image",
    "fastnewsDescription": "FastNews.am is an Armenian platform providing the latest sports news, articles, and analyses from Armenia and worldwide. It covers sports such as football, wrestling, weightlifting, chess, boxing, and basketball, offering up-to-date information, videos, and photo galleries. The platform is developed by Softconstruct, and all rights are reserved to it.",
    "fastmediaImageAlt": "FastMedia project image",
    "fastmediaDescription": "FastMedia.am is an Armenian media holding company established in December 2020, formerly known as Vivaro Media. It encompasses several platforms, including Fast TV (a sports streaming service), FastNews.am (a sports news website), Fast Media Production, and the Fast Sports TV channel family. In 2023, the company rebranded to Fast Media to emphasize its commitment to rapid media development and the evolving needs of a diverse audience. Fast Media serves as Armenia's national sports broadcaster through the Fast Sports TV channel and has secured exclusive contracts with organizations such as UEFA, Setanta Sports, and Volleyball World SA to deliver high-quality sports and entertainment content.",
    "irpImageAlt": "IRP project image",
    "irpDescription": "IRPRegistrationServices.com is a platform that assists commercial vehicle operators in obtaining International Registration Plan (IRP) apportioned plates, enabling legal interstate travel across the 48 contiguous U.S. states, the District of Columbia, and Canadian provinces. The website offers an online application process, guidance from industry experts, and services related to the International Fuel Tax Agreement (IFTA).",
    "2290ImageAlt": "2290Online project image",
    "2290Description": "2290OnlineForm.com is an IRS-authorized e-filing provider that assists owners of heavy vehicles in electronically filing Form 2290, the Heavy Highway Vehicle Use Tax Return. The platform offers a streamlined process to ensure quick approval, often within minutes, and provides support throughout the filing process. Services include business registration, vehicle information submission, and multiple payment options. The company is based in Burbank, California, and can be contacted at (800) 530-6774 or info@2290onlineform.com.",
    "tripsandfuelImageAlt": "TripsandFuel project image",
    "tripsandfuelDescription": "TripsandFuel.com is an online platform that assists commercial truck operators in obtaining necessary trip and fuel permits for interstate travel across various U.S. jurisdictions. The website simplifies the permitting process by offering services such as business registration, vehicle information submission, and multiple payment options. Their goal is to help truckers comply with state-specific regulations efficiently, ensuring uninterrupted operations.",
    "tourvangoImageAlt": "TourVanGo project image",
    "tourvangoDescription": "TourVanGo is a luxury passenger vehicle rental service based in Burbank, California, offering chauffeured transportation for various group excursions, including family getaways, corporate travel, touring bands, and other events. Their fleet includes high-end vehicles equipped with amenities such as televisions, LED interior lighting, comfortable seating, and more. They provide services across the United States, accommodating both short and long-distance trips. For reservations or inquiries, they can be contacted at (818) 566-0005 or via email at [email protected].",
    "descampsImageAlt": "Descamps project image",
    "descampsDescription": "Descamps is a luxury French brand specializing in high-quality home textiles, including bedding, bath linens, and home décor items. Established in 1802, the company is renowned for its timeless elegance and refined craftsmanship. Descamps offers a diverse product range, such as blankets, cushions, candles, and home fragrances, catering to customers seeking sophisticated home essentials. In 2022, Descamps was acquired by the Zucchi Group, further expanding its presence in the luxury home textile market.",
    "iguanImageAlt": "Iguan Systems project image",
    "iguanDescription": "Iguan Systems is a software development company based in Yerevan, Armenia, specializing in custom software solutions for clients in Europe and the United States. Established in 2009, the company offers a wide range of services, including web and mobile development, product engineering, design, testing, quality analysis, and technical support. Their portfolio spans various industries such as management, travel, health, and entertainment. Iguan Systems emphasizes transforming client ideas into fully realized products, providing end-to-end solutions tailored to specific needs.",
    "noahImageAlt": "NOAH project image",
    "noahDescription": "NOAH (ՆՈԱ) is the official website for FC Noah, a professional football club based in Yerevan, Armenia. The platform provides comprehensive information about the club, including team news, match schedules, results, league standings, player information, and media content. The website features a modern, responsive design with multilingual support (Armenian, English, Russian) and includes sections for matches, team roster, academy information, media gallery, and ticket purchasing. As part of the Galaxsys team at Digitain, I contributed to developing this platform using modern web technologies, ensuring optimal performance and user experience for football fans and club supporters."
  },
  "resume": {
    "title_slice_one": "Coding",
    "title_slice_two": "Skills"
  },
  "achievements": {
    "title": "Achievements",
    "digitainDescription": "As a Senior Software Engineer at Digitain, I am part of the Galaxsys team, which is part of the Digitain group. Digitain is a leading iGaming software provider, offering modular sportsbook and casino solutions to over 180 partners in more than 100 countries. My role involves developing innovative gaming solutions using modern technologies including PixiJS for high-performance graphics rendering, Module Federation for microfrontend architecture, and other cutting-edge technologies. I contributed to the NOAH project, a comprehensive football club platform, and currently work on game development projects. My responsibilities include building scalable microfrontend applications, optimizing performance for complex gaming interfaces, and implementing modern architectural patterns to ensure maintainable and efficient codebases.",
    "digitainImageAlt": "Digitain company logo",
    "digitainDate": "Oct 2024 - Present",
    "softDescription": "As a Senior Software Engineer in the Media Lab team at SoftConstruct, I work on FastTV, a platform offering live streaming for sports events (e.g., football, basketball) and a wide range of on-demand content, similar to Netflix. The product supports web applications, mobile apps (Android and iOS), and TV applications across various operating systems. Responsibilities include building mobile applications using React Native, developing and optimizing the FastTV web application using the technology stack, designing scalable and maintainable codebases adhering to clean architecture principles, and optimizing video streaming performance to ensure a seamless user experience. Key achievements include implementing design patterns like Atomic Design, Adapter, Observer, Singleton, Proxy, and Strategy to streamline development and maintain resource efficiency, with a focus on creating a user-friendly, resource-conscious system, especially for video-related functionality.",
    "softImageAlt": "Soft Construct company logo",
    "softDate": "Feb 2024 - Oct 2024",
    "logixDescription": "During my tenure as a Middle Software Engineer at Logix Software (March 2023 - February 2024), I contributed to projects such as IFTA and IRP. I focused on adhering to core software engineering principles, including the Single Responsibility Principle, Open-Closed Principle, and Liskov Substitution Principle. My responsibilities included writing clean and maintainable code and participating in code reviews to ensure high-quality and efficient development processes. The technology stack I utilized included JavaScript, Next.js, Redux Toolkit, RTK Query, and Tailwind CSS.",
    "logixImageAlt": "Logix Software company logo",
    "logixDate": "Mar 2023 - Feb 2024",
    "iguanDescription": "As a React.js Developer at Iguan System (January 2022 - March 2023), I played a key role in developing an online tree shop. The project involved building and maintaining an e-commerce platform, with notable examples including Descamps, Jalla, Hypsi. I utilized a technology stack comprising JavaScript, React, Redux, Saga, and SCSS with the BEM Methodology to ensure efficient, scalable, and maintainable solutions.",
    "iguanImageAlt": "Iguan Systems company logo",
    "iguanDate": "Jan 2022 - Mar 2023",
    "codetimeDescription": "As a JavaScript Developer at Code Time (May 2021 - January 2022), I collaborated with my team to develop a landing page constructor, similar to Canva. The project involved designing and implementing a flexible and user-friendly tool for creating customizable landing pages. The technology stack included HTML, CSS, JavaScript, jQuery, and Gulp to ensure efficient and responsive solutions.",
    "codetimeImageAlt": "Codetime company logo",
    "codetimeDate": "May 2021 - Jan 2022"
  },
  "educations": {
    "title": "Education",
    "universityTitle": "Yerevan State University",
    "universityDescription": "I earned a Bachelor of Science degree from the Faculty of Radiophysics at Yerevan State University (2018–2023). My academic journey focused on understanding the principles of radiophysics, including wave propagation, signal processing, and advanced mathematical techniques. During my studies, I developed strong analytical and problem-solving skills, which have been instrumental in my career as a software engineer. This foundation also helped me bridge the gap between technical concepts and practical applications in software development.",
    "universityImageAlt": "Yerevan State University Logo",
    "universityDate": "May 2018 - Jan 2023"
  },
  "footer": {
    "text-one": "You have any questions? Contact with",
    "text-two": "Copyright © {year}, Portfolio, all rights reserved"
  }
}
```

---

### 3.8 `messages/hy.json` (Armenian — full)

```json
{
  "common": {
    "name": "Նարեկ",
    "lastName": "Պետրոսյան",
    "home": "Գլխավոր",
    "resume": "Կենսագրություն",
    "projects": "Նախագծեր",
    "contacts": "Կոնտակտներ",
    "position": "Ավագ Ծրագրային Ապահովման Ինժեներ",
    "pages": "Էջեր",
    "language": "Լեզու",
    "bannerImageAlt": "Պրոֆիլի Նկար",
    "profileImageAlt": "Պրոֆիլի Նկար",
    "linkedinImageAlt": "Linkedin Նկար",
    "githubImageAlt": "Github Նկար",
    "en": "Անգլերեն",
    "hy": "Հայերեն",
    "ru": "Ռուսերեն"
  },
  "aboutMe": {
    "title-slice-one": "Իմ",
    "title-slice-two": "Մասին",
    "description-slice-one": "Ողջույն! Ես Նարեկ Պետրոսյանն եմ, ջավասկրիպտ ծրագրավորող, ով սիրում է ճակատային ծրագրավորումը։",
    "description-slice-two": "Տեխնիկական զբաղմունքներից զատ, ես սիրում եմ լողալ և սահնակ քշել։"
  },
  "personalInfo": {
    "title-slice-one": "Անձնական",
    "title-slice-two": "Տեղեկություններ",
    "age": "Տարիք",
    "address": "Հասցե",
    "phone": "Հեռախոս",
    "mail": "Էլ. փոստ",
    "city": "Երևան, Հայաստան"
  },
  "hobby": {
    "title-slice-one": "Ինչ Եմ Ես",
    "title-slice-two": "Սիրում Անել"
  },
  "downloadCv": {
    "resumeName": "Նարեկ Պետրոսյան Ռեզյումե",
    "buttonText-slice-one": "Ներբեռնել",
    "buttonText-slice-two": "Ռեզյումեն"
  },
  "resume": {
    "title_slice_one": "Ծրագրավորման",
    "title_slice_two": "Հմտություններ"
  },
  "achievements": {
    "title": "Ձեռքբերումներ",
    "digitainDate": "Հոկտեմբեր 2024 - մինչ օրս",
    "softDate": "Փետրվար 2024 - Հոկտեմբեր 2024",
    "logixDate": "Մարտ 2023 - Փետրվար 2024",
    "iguanDate": "Հունվար 2022 - Մարտ 2023",
    "codetimeDate": "Մայիս 2021 - Հունվար 2022"
  },
  "educations": {
    "title": "Կրթություն",
    "universityTitle": "Երևանի Պետական Համալսարան",
    "universityDate": "Մայիս 2018 - Հունվար 2023"
  },
  "footer": {
    "text-one": "Ունե՞ք հարցեր: Կապվեք մեզ հետ՝",
    "text-two": "Հեղինակային իրավունք © {year}, Portfolio, բոլոր իրավունքները պաշտպանված են"
  }
}
```

*(Full hy.json is in messages/hy.json — contains complete Armenian translations for all projects and achievement descriptions.)*

---

### 3.9 `messages/ru.json` (Russian — key entries)

```json
{
  "common": {
    "name": "Нарек",
    "lastName": "Петросян",
    "position": "Старший Инженер-Программист"
  },
  "personalInfo": { "city": "Ереван, Армения" },
  "achievements": {
    "title": "Достижения",
    "digitainDate": "Октябрь 2024 - По настоящее",
    "softDate": "Февраль 2024 - Октябрь 2024",
    "logixDate": "Март 2023 - Февраль 2024",
    "iguanDate": "Январь 2022 - Март 2023",
    "codetimeDate": "Май 2021 - Январь 2022"
  },
  "educations": {
    "title": "Образование",
    "universityTitle": "Ереванский Государственный Университет",
    "universityDate": "Май 2018 - Январь 2023"
  }
}
```

*(Full ru.json is in messages/ru.json — contains complete Russian translations.)*

---

### 3.10 Page Components

#### `src/app/[locale]/page.tsx` — Home Page

```tsx
"use client";

import { PERSONAL_INFO } from "@/constants/personalInfo";
import { PersonalInfo } from "@/components/PersonalInfo";
import { Container } from "@/components/Container";
import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";
import { Hobby } from "@/components/Hobby";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const translation = useTranslations("common");

  const notifySocialClick = (platform: "linkedin" | "github") => {
    fetch("/api/social-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform }),
    }).catch((err) => {
      console.error("Failed to log social link click", err);
    });
  };

  return (
    <Container classname="my-[20px]">
      <div className="relative">
        <Banner classname="!h-[492px] sm:!h-[292px]" />
        <div className="absolute px-[40px] top-[40px] sm:top-auto sm:-bottom-[40px] w-full flex flex-col justify-center items-center sm:justify-between sm:flex-row sm:items-start">
          <div className="relative rounded-[15px] w-[275px] h-[275px] border-[0.1px] border-[#FFFFFF] ">
            <div className="absolute inset-0 rounded-t-[15px] bg-gradient-to-br from-[#00a000] via-[#005900] to-[#444444] filter grayscale-[40%] blur-[3px] opacity-80" />
            <Image
              title={translation("profileImageAlt")}
              alt={translation("profileImageAlt")}
              className="relative object-cover"
              src="/images/profileImage.png"
              width={275}
              height={275}
            />
          </div>
          <div className="pt-[20px] flex flex-col items-center">
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#FFFFFF] tracking-wide">
              {translation("name")} {translation("lastName")}
            </p>
            <p className="text-[#FFFFFF] text-[18px] tracking-wide">
              {translation("position")}
            </p>
            <div className="flex items-center justify-center">
              <Link href={PERSONAL_INFO.linkedin.link} target="_blank" rel="noopener noreferrer"
                onClick={() => notifySocialClick("linkedin")}>
                <Image title={translation("linkedinImageAlt")} alt={translation("linkedinImageAlt")}
                  src="/images/linkedin.png" className="invert" height={50} width={50} />
              </Link>
              <Link href={PERSONAL_INFO.github.link} target="_blank" rel="noopener noreferrer"
                onClick={() => notifySocialClick("github")}>
                <Image title={translation("githubImageAlt")} alt={translation("githubImageAlt")}
                  src="/images/github.png" className="invert" height={70} width={70} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[60px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF]">
        <div className="flex flex-col-reverse sm:flex-row gap-[40px] sm:gap-[15px] justify-between mb-[40px]">
          <AboutMe />
          <PersonalInfo />
        </div>
        <Hobby />
      </div>
    </Container>
  );
};

export default Home;
```

---

#### `src/app/[locale]/resume/page.tsx` — Resume Page

```tsx
"use client";

import { Achievements } from "@/components/Achievements";
import { ResumeList } from "@/components/ResumeList";
import { Educations } from "@/components/Educations";
import { DownloadCv } from "@/components/DownloadCv";
import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";

const Resume: React.FC = () => {
  const commonTranslation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <Banner classname="!h-[138px]" title={commonTranslation("resume")} />
      <div className="shadow rounded-b-[15px] p-[30px] bg-[#FFFFFF] flex flex-col gap-[50px]">
        <Achievements />
        <ResumeList />
        <Educations />
        <div className="w-full flex justify-center">
          <DownloadCv />
        </div>
      </div>
    </Container>
  );
};

export default Resume;
```

---

#### `src/app/[locale]/projects/page.tsx` — Projects Page

```tsx
"use client";

import { ProjectList } from "@/components/ProjectList";
import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
  const translation = useTranslations("projects");
  const commonTranslation = useTranslations("common");

  return (
    <Container classname="my-[20px]">
      <Banner classname="!h-[138px]" title={commonTranslation("projects")} />
      <div className="pt-[30px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[15px]">
          <h1 className="font-bold tracking-wide flex items-center gap-[5px]">
            <span className="text-[#212121] ">{translation("title_slice_one")}</span>
            <span className="text-[#005900]">{translation("title_slice_two")}</span>
          </h1>
          <p className="text-[#49515d] text-[13px] leading-[22px] max-w-[590px]">
            {translation("description")}
          </p>
        </div>
        <ProjectList />
      </div>
    </Container>
  );
};

export default Projects;
```

---

#### `src/app/[locale]/layout.tsx` — Root Layout

```tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { Analytics } from "@/components/Analytics";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  const { locale } = await Promise.resolve(params);
  if (!routing.locales.includes(locale as any)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-[#f5f5f5] pb-[10px]">
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
```

---

### 3.11 Key UI Components

#### `src/components/AboutMe/index.tsx`

```tsx
"use client";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const translation = useTranslations("aboutMe");
  return (
    <div className="flex flex-col gap-[20px] max-w-[500px]">
      <h3 className="flex items-center gap-[5px]">
        <span className="text-[#212121] font-bold tracking-wide">{translation("title-slice-one")}</span>
        <span className="text-[#005900] font-bold tracking-wide">{translation("title-slice-two")}</span>
      </h3>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#49515d] text-[13px] leading-[22px]">{translation("description-slice-one")}</p>
        <p className="text-[#49515d] text-[13px] leading-[22px]">{translation("description-slice-two")}</p>
      </div>
    </div>
  );
};

export { AboutMe };
```

---

#### `src/components/PersonalInfo/index.tsx`

```tsx
"use client";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { useTranslations } from "next-intl";
import Link from "next/link";

const PersonalInfo: React.FC = () => {
  const translation = useTranslations("personalInfo");
  return (
    <div className="flex flex-col gap-[20px] max-w-[500px]">
      {/* Title */}
      {/* Labels: Age, Address, Phone, Email */}
      {/* Values: computed age (currentYear - 2000), city from i18n, phone/email from PERSONAL_INFO */}
      <p>{new Date().getFullYear() - 2000}</p>   {/* Age: computed dynamically */}
      <p>{translation("city")}</p>               {/* "Yerevan, Armenia" */}
      <Link href={"tel:" + PERSONAL_INFO.phone.link}>{PERSONAL_INFO.phone.text}</Link>
      <Link href={"mailto:" + PERSONAL_INFO.email.link}>{PERSONAL_INFO.email.text}</Link>
    </div>
  );
};

export { PersonalInfo };
```

> **Note:** Age is computed at render time as `new Date().getFullYear() - 2000` (i.e., born year 2000). No hardcoded age value.

---

#### `src/components/Achievements/index.tsx`

Renders each entry from `ACHIEVEMENTS` constant via `AchievementCard`, translating description and date from i18n.

#### `src/components/Educations/index.tsx`

Renders each entry from `EDUCATIONS` constant via `AchievementCard` (reused component).

#### `src/components/ResumeList/index.tsx`

Renders a skill bar for each entry in `SKILLS` using `ResumeCard`.

#### `src/components/ResumeCard/index.tsx`

```tsx
const ResumeCard: React.FC<{ percent: number; title: string }> = ({ percent, title }) => (
  <div className="w-full flex flex-col gap-[3px]">
    <p className="text-[#212121] text-[12px] font-bold tracking-wide">{title}</p>
    <div className="w-full h-[10px] bg-[#FFFFFF] shadow">
      <div className="h-[10px] bg-gradient-to-r from-black to-[#005900]" style={{ width: percent + "%" }} />
    </div>
  </div>
);
```

#### `src/components/ProjectCard/index.tsx`

Displays project with switchable desktop/mobile screenshot, a tooltip with the description, and a link to the live site.

#### `src/components/DownloadCv/index.tsx`

```tsx
// Links to /cv/resume.pdf with download attribute using translated resume name.
// Also POSTs to /api/cv-download for analytics.
href="/cv/resume.pdf"
download={translation("resumeName")}  // "Narek Petrosyan Resume"
```

#### `src/components/Banner/index.tsx`

Background image: `/images/banner.webp`. Optional title prop rendered as centered white `<h1>`.

#### `src/components/Header/index.tsx`

Fixed top header; renders nav links from `HEADER_LINKS`, language switcher, and mobile burger menu.

#### `src/components/Footer/index.tsx`

Contact email link + copyright with dynamic year.

---

## 4. STATIC ASSETS (`/public`)

### Resume
| Path | Description |
|---|---|
| `/cv/resume.pdf` | Downloadable resume PDF |

### Profile & Banner
| Path | Description |
|---|---|
| `/images/profileImage.png` | Main profile photo (275×275) |
| `/images/profileImage.jpg` | Profile photo (JPG variant) |
| `/images/banner.webp` | Hero banner background |
| `/images/favicon.png` | Site favicon |

### Social Icons
| Path | Description |
|---|---|
| `/images/linkedin.png` | LinkedIn icon (used with `invert` CSS) |
| `/images/github.png` | GitHub icon (used with `invert` CSS) |

### Company Logos (Achievements)
| Path | Company |
|---|---|
| `/images/digitain-logo.png` | Digitain |
| `/images/soft-logo.png` | Soft Construct |
| `/images/logix-logo.png` | Logix Software |
| `/images/iguan-logo.png` | Iguan Systems |
| `/images/codetime-logo.png` | Code Time |

### Education Logo
| Path | Institution |
|---|---|
| `/images/university.png` | Yerevan State University |

### Project Screenshots (desktop + mobile pairs)
| Project | Desktop | Mobile |
|---|---|---|
| NOAH | noahDesktop.png | noahMobile.png |
| Ortak | ortakDesktop.png | ortakMobile.png |
| Side | sideDesktop.png | sideMobile.png |
| TourVanGo | tourvangoDesktop.png | tourvangoMobile.png |
| Fast TV | fasttvDesktop.svg / .webp | fasttvMobile.svg / .webp |
| Wed Invite | weddingDesktop.png | weddingMobile.png |
| IFTA Online | iftaDrsktop.png *(typo in filename)* | iftaMobile.png |
| FastNews | fastnewsDesktop.png | fastnewsMobile.png |
| FastMedia | fastmediaDesktop.png | fastmediaMobile.png |
| IRP | irpDesktop.png | irpMobile.png |
| 2290 Online | 2290Desktop.png | 2290Mobile.png |
| Trips and Fuel | tripsandfuelDesktop.png | tripsandfuelMobile.png |
| Descamps | descampsDesktop.png | descampsMobile.png |
| Iguan Systems | iguanDesktop.png | iguanMobile.png |

---

## 5. ROUTING

### i18n Configuration (`src/i18n/routing.ts`)

```ts
export const routing = defineRouting({
  locales: ["en", "hy", "ru"],
  defaultLocale: "en",
});
```

All pages are under `src/app/[locale]/`. next-intl middleware handles locale detection and prefix routing.

### Pages & Routes

| Route | File | Description |
|---|---|---|
| `/{locale}` | `src/app/[locale]/page.tsx` | Home — profile, About Me, Personal Info, Hobby sections |
| `/{locale}/resume` | `src/app/[locale]/resume/page.tsx` | Resume — Work Experience (Achievements), Skills, Education, Download CV |
| `/{locale}/projects` | `src/app/[locale]/projects/page.tsx` | Projects — grid of 14 project cards |
| `/api/analytics` | `src/app/api/analytics/route.ts` | Server: page-view analytics tracking |
| `/api/cv-download` | `src/app/api/cv-download/route.ts` | Server: CV download event tracking |
| `/api/social-click` | `src/app/api/social-click/route.ts` | Server: social link click tracking |

### URL Examples
- English home: `/en` or `/` (redirects to default locale)
- Armenian resume: `/hy/resume`
- Russian projects: `/ru/projects`

### Navigation Flow
```
Header (fixed)
  ├── Logo → /
  ├── Home  → /
  ├── Resume → /resume
  ├── Projects → /projects
  └── LanguageSwitcher → switches locale prefix, preserves path
```

---

## 6. TYPES

### `src/types/project.ts`
```ts
interface Link { href: string; text: string; }
interface Image { href: string; altTranslation: string; }
export interface Project {
  descriptionTranslation: string;
  desktopImage: Image;
  mobileImage: Image;
  link: Link;
}
export type ProjectDevice = "desktop" | "mobile";
```

### `src/types/achievement.ts`
```ts
interface Image { href: string; altTranslation: string; }
export interface Achievement {
  title: string;
  logo: Image;
  descriptionTranslation: string;
  dateTranslation: string;
}
```

### `src/types/education.ts`
```ts
interface Image { href: string; altTranslation: string; }
export interface Education {
  title: string;
  logo: Image;
  descriptionTranslation: string;
  dateTranslation: string;
}
```

---

## 7. QUICK REFERENCE — KEY FACTS

| Fact | Value |
|---|---|
| Owner | Narek Petrosyan |
| Position | Senior Software Engineer |
| Location | Yerevan, Armenia |
| Email | narek.petrosyan.005@gmail.com |
| Phone | (+374) 98 738617 |
| LinkedIn | https://www.linkedin.com/in/narek-petrosyan-dev |
| GitHub | https://github.com/Narek-JS |
| Resume PDF | /cv/resume.pdf |
| Born year (derived) | 2000 (age = currentYear - 2000) |
| Languages supported | English (en), Armenian (hy), Russian (ru) |
| Total projects shown | 14 |
| Work experience entries | 5 (Digitain, Soft Construct, Logix, Iguan, Code Time) |
| Education entries | 1 (Yerevan State University, BSc Radiophysics, 2018–2023) |
| Total skills listed | 15 |
| Color scheme | Dark green #005900, near-black #212121, grey #49515d, white bg |
