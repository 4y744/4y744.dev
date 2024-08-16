//Import React
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FooterHeading = ({ children }: Props) => {
  return <span className="font-bold text-lg">{children}</span>;
};
