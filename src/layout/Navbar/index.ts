import { NavbarDefault } from "./NavbarDefault";
import { NavbarLink } from "./NavbarLink";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarTitle } from "./NavbarTitle";

const index = Object.assign(NavbarDefault, {
  Title: NavbarTitle,
  Link: NavbarLink,
  Search: NavbarSearch
});

export { index as Navbar }