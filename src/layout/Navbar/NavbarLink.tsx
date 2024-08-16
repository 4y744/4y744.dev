//Import React
import { ReactNode } from "react";

//Import React Router
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
  to: string;
};

export const NavbarLink = ({ children, to }: Props) => {
  return (
    <NavLink
      className={({ isActive }) => `
      flex items-center gap-2 px-4 py-2
      rounded-lg select-none
      text-sm font-medium text-dark-400 
      hover:text-dark-300 hover:bg-dark-700
      ${isActive && "bg-dark-800 text-dark-300"}`}
      draggable={false}
      to={to}
    >
      {children}
    </NavLink>
  );
};
