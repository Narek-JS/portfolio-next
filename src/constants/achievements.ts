import { Achievement } from '@/types/project';

type Locale = "en" | "hy" | "ru";
export const pageTitleLanguages: Record<Locale, string> = {
  en: "Achievements",
  hy: "Ձեռքբերումներ",
  ru: "Достижения",
};

export const ACHIEVEMENTS: Achievement[] = [
{
  title: "Soft Construct",
  logo: "/images/soft-logo.png",
  translations: {
    en: "As a Next.js and React.js developer at Soft Construct, I actively contributed to designing and developing a variety of innovative and impactful projects. My responsibilities included creating dynamic, high-performance web applications and ensuring seamless user experiences. Leveraging the powerful features of Next.js, such as server-side rendering (SSR), static site generation (SSG), and API integration, I built scalable and efficient solutions tailored to diverse client needs.",
    hy: "Որպես Next.js և React.js ծրագրավորող Soft Construct-ում, ես ակտիվորեն մասնակցել եմ տարբեր նորարարական և ազդեցիկ նախագծերի նախագծմանը և զարգացմանը։",
    ru: "Как разработчик Next.js и React.js в Soft Construct, я активно участвовал в проектировании и разработке различных инновационных и значимых проектов.",
  },
},
{
  title: "Logix Software",
  logo: "/images/logix-logo.png",
  translations: {
    en: "At Logix Software, I actively contribute to various projects, including the production-ready ifta.online. I adhere to software engineering principles such as the Single Responsibility Principle, Open-Closed Principle, and Liskov Substitution Principle. I prioritize writing clean code and participate in code reviews to ensure code quality and best practices. My work primarily involves using Javascript, React/Next.js.",
    hy: "Լոգիքս Սոֆտվերում ես ակտիվ մասնակցում եմ տարբեր նախագծերին, ներառյալ արտադրանքի պատրաստ ifta.online-ը։",
    ru: "В Logix Software я активно участвовал в различных проектах, включая готовый к производству ifta.online.",
  },
},
{
  title: "Iguan Systems",
  logo: "/images/iguan-logo.png",
  translations: {
    en: "At Iguan System, I served as a React.js Developer and played a pivotal role in developing an online tree shop. The project involved creating websites such as descamps.com, jalla.com, and hypsi.waveum.io. My responsibilities included using Javascript, React, Redux, Saga, and SCSS with BEM Methodology.",
    hy: "Իգուան Սիստեմսում աշխատել եմ որպես React.js ծրագրավորող և առանցքային դեր խաղացել առցանց ծառերի խանութի մշակման գործում։",
    ru: "В Игуан Системс я работал React.js разработчиком и сыграл ключевую роль в разработке интернет-магазина деревьев.",
  },
},
{
  title: "Code Time",
  logo: "/images/codetime-logo.png",
  translations: {
    en: "At Code Time, I worked as a Javascript Developer, collaborating with my team to develop a constructor for creating landing pages, similar to Canva. My responsibilities included using Javascript, Next.js, Redux Toolkit, RTK Query, and Tailwind CSS.",
    hy: "Կոդ Թայմում աշխատել եմ որպես Javascript ծրագրավորող՝ համագործակցելով թիմի հետ ստեղծելու Canva-ի նման վայրէջքի էջերի կոնստրուկտոր։",
    ru: "В Code Time я работал разработчиком Javascript, сотрудничая с командой для разработки конструктора для создания посадочных страниц, аналогичного Canva.",
  },
},
{
  title: "University",
  logo: "/images/university-logo.png",
  translations: {
    en: "Bachelor of Science in the Faculty of Radiophysic, Yerevan State University.",
    hy: "Բակալավրի աստիճան ռադիոֆիզիկայի ֆակուլտետում, Երևանի պետական համալսարան:",
    ru: "Бакалавр наук на факультете радиофизики, Ереванский государственный университет.",
  },
 },
];
