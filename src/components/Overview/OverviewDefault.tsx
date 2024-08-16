import { Children } from "react";
import { Overview } from ".";

type Props = {
  children: any;
};

export const OverviewDefault = ({ children }: Props) => {
  //Get array of all Overview.Anchor components converted to Overview.Skip
  //Content is inside React.Fragment so map its "chilren" prop
  const skips = Children.map(children.props.children, (child) =>
    child.type?.name == "OverviewAnchor" ? (
      <Overview.Skip
        key={child}
        to={child.props.children}
      >
        {child.props.children}
      </Overview.Skip>
    ) : null
  );

  return (
    <div
      className="sticky top-24 self-start
      flex flex-col w-64 px-4 text-sm"
    >
      <span className="font-bold px-4 py-2">Overview</span>
      {skips}
    </div>
  );
};
