import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const MobileIcon: React.FC<Props> = (props) => {
  const { fill = "#212121" } = props;

  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 1.5C17.3284 1.5 18 2.17157 18 3V21C18 21.8284 17.3284 22.5 16.5 22.5H7.5C6.67157 22.5 6 21.8284 6 21V3C6 2.17157 6.67157 1.5 7.5 1.5H16.5ZM7.5 0C5.84315 0 4.5 1.34315 4.5 3V21C4.5 22.6569 5.84315 24 7.5 24H16.5C18.1569 24 19.5 22.6569 19.5 21V3C19.5 1.34315 18.1569 0 16.5 0H7.5Z"
        fill={fill}
      />
      <path
        d="M12 21C12.8284 21 13.5 20.3284 13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21Z"
        fill={fill}
      />
    </svg>
  );
};

export { MobileIcon };
