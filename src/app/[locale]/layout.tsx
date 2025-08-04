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

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

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
