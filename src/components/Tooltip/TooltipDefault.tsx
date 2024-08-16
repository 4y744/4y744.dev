import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  text: string;
};

export const TooltipDefault = ({ children, text }: Props) => {
  return (
    <div className="relative group/tooltip">
      <div
        className="absolute -top-full left-1/2
        -translate-y-1/2 -translate-x-1/2 z-50
        hidden group-hover/tooltip:block
        bg-dark-800 text-dark-400 text-xs font-medium
        shadow-md rounded-lg whitespace-nowrap
        animation-slide-up px-2 py-1"
      >
        {text}
      </div>
      {children}
    </div>
  );
};
