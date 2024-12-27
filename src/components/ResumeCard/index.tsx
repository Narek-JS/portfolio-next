import { Resume } from "@/types/resume";

interface Props extends Resume {}

const ResumeCard: React.FC<Props> = ({ percent, title }) => {
  return (
    <div className="w-full flex flex-col gap-[3px]">
      <p className="text-[#212121] text-[12px] font-bold tracking-wide">
        {title}
      </p>
      <div className="w-full h-[10px] bg-[#FFFFFF] shadow">
        <div
          className="h-[10px] bg-gradient-to-r from-black to-[#005900]"
          style={{ width: percent + "%" }}
        />
      </div>
    </div>
  );
};

export { ResumeCard };
