//Import React
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const NavbarTitle = ({ children }: Props) => {
  return (
    <span
      className="select-none
      font-bold text-xl px-2"
    >
      {children}
    </span>
  );
};
