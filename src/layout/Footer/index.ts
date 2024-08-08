import { FooterDefault } from "./FooterDefault"
import { FooterSection } from "./FooterSection"
import { FooterHeading } from "./FooterHeading"
import { FooterLink } from "./FooterLink"

const index = Object.assign(FooterDefault, {
  Section: FooterSection,
  Heading: FooterHeading,
  Link: FooterLink
});

export { index as Footer }