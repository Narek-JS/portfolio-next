import { ReactNode, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  content: string;
}

const Tooltip: React.FC<Props> = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  const tooltipWrapperRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  const onMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setVisible(true);
  };

  const onMouseLeave = () => {
    if (isMobile) {
      setVisible(false);
    } else {
      timeoutId.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  };

  return (
    <div
      className="relative inline-block w-[18px] h-[24px]"
      onClick={() => setVisible((prev) => !prev)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={tooltipWrapperRef}
    >
      {children}
      <div
        className={classNames(
          "absolute -top-[270px] sm:-top-[330px] w-[280px] sm:w-[320px] h-[260px] sm:h-[320px] overflow-auto bg-[#FFFFFF] shadow-lg rounded p-[10px] custom-scrollbar transition-all duration-300 ease-in-out",
          {
            "opacity-100 scale-100": visible,
            "opacity-0 scale-95 pointer-events-none": !visible,
          }
        )}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};

export { Tooltip };
