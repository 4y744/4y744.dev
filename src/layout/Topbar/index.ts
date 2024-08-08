import { TopbarDefault } from "./TopbarDefault";
import { TopbarLink } from "./TopbarLink";

const index = Object.assign(TopbarDefault, {
  Link: TopbarLink
});

export { index as Topbar }