import { Dispatch, SetStateAction } from "react";
import { MenuStatus } from ".";
import classNames from "classnames";

interface Props {
  menuStatus: MenuStatus;
  setMenuStatus: Dispatch<SetStateAction<MenuStatus>>;
}

const MenuBurger: React.FC<Props> = ({ menuStatus, setMenuStatus }) => {
  return (
    <div
      className="flex sm:hidden flex-col justify-center items-center gap-[6px] h-[30px] w-[30px] cursor-pointer"
      onClick={() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
        setMenuStatus(menuStatus === "open" ? "close" : "open");
      }}
    >
      <div
        className={classNames(
          "h-[2px] bg-[#005900] w-full transition-transform duration-300",
          {
            "rotate-[50deg] translate-y-[8px] !w-[75%]": menuStatus === "open",
          }
        )}
      />
      <div
        className={classNames(
          "h-[2px] bg-[#005900] w-full transition-opacity duration-300",
          {
            "opacity-0": menuStatus === "open",
          }
        )}
      />
      <div
        className={classNames(
          "h-[2px] bg-[#005900] w-full transition-transform duration-300",
          {
            "-rotate-[50deg] -translate-y-[8px] !w-[75%]":
              menuStatus === "open",
          }
        )}
      />
    </div>
  );
};

export { MenuBurger };
