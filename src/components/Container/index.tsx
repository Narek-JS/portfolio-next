import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  classname?: string;
}

const Container: React.FC<Props> = ({ children, classname = "" }) => {
  return (
    <div className={classNames("max-w-[995px] w-full mx-auto", classname)}>
      {children}
    </div>
  );
};

export { Container };
