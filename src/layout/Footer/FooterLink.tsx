//Import React
import { ReactNode } from "react";

//Import React Router
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  to: string;
};

export const FooterLink = ({ children, to }: Props) => {
  return (
    <Link
      className="transition-text duration-100
      text-sm text-zinc-400 hover:text-zinc-300"
      to={to}
    >
      {children}
    </Link>
  );
};
