import { OverviewAnchor } from "./OverviewAnchor";
import { OverviewDefault } from "./OverviewDefault";
import { OverviewSkip } from "./OverviewSkip";
import { OverviewWrapper } from "./OverviewWrapper";

const index = Object.assign(OverviewDefault, {
  Wrapper: OverviewWrapper,
  Anchor: OverviewAnchor,
  Skip: OverviewSkip,
});

export { index as Overview };
