import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  to: string;
};

export const OverviewSkip = ({ children, to }: Props) => {
  return (
    <a
      className="px-4 py-2
      text-sm text-dark-400
      hover:text-dark-300"
      href={`#${to}`}
      draggable={false}
    >
      {children}
    </a>
  );
};
