import { SidebarDefault } from "./SidebarDefault";
import { SidebarHeading } from "./SidebarHeading";
import { SidebarLink } from "./SidebarLink";

const index = Object.assign(SidebarDefault, {
  Heading: SidebarHeading,
  Link: SidebarLink
});

export { index as Sidebar }