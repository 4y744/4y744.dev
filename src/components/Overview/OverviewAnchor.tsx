//Import components
import { Icon } from "../Icons";
import { Tooltip } from "../Tooltip";

type Props = any;

export const OverviewAnchor = ({ children }: Props) => {
  return (
    <>
      <span
        className="absolute -mt-24"
        id={children?.toString()}
      />
      <div className="flex items-center gap-2">
        <h1>{children}</h1>
        <Tooltip text="Page anchor">
          <div className="text-sm text-zinc-400">
            <Icon.Anchor />
          </div>
        </Tooltip>
      </div>
    </>
  );
};
