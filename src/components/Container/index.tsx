import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  classname?: string;
}

const Container: React.FC<Props> = ({ children, classname = "" }) => {
  return (
    <div
      className={classNames(
        "max-w-[1035px] w-full mx-auto px-[20px]",
        classname
      )}
    >
      {children}
    </div>
  );
};

export { Container };
