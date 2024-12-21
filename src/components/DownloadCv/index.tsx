import { useTranslations } from "next-intl";
import Link from "next/link";

const DownloadCv = () => {
  const translation = useTranslations("downloadCv");

  return (
    <Link
      className="min-w-[120px] flex items-center gap-[5px] w-max font-medium tracking-wide text-[14px] shadow-md px-[20px] py-[12px]"
      download={translation("resumeName")}
      href="/cv/resume.pdf"
      target="_blank"
    >
      <span className="text-[#212121]">{translation("buttonText-slice-one")}</span>
      <span className="text-[#005900]">{translation("buttonText-slice-two")}</span>
    </Link>
  );
};

export { DownloadCv };
