//Import components
import { Overview } from ".";

type Props = {
  children: any;
};

export const OverviewWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="w-full px-4">{children}</div>
      <Overview>{children}</Overview>
    </>
  );
};
