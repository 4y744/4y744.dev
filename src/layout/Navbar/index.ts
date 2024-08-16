import { NavbarDefault } from "./NavbarDefault";
import { NavbarTitle } from "./NavbarTitle";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarLink } from "./NavbarLink";

const index = Object.assign(NavbarDefault, {
  Title: NavbarTitle,
  Link: NavbarLink,
  Search: NavbarSearch
});

export { index as Navbar }