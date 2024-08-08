import { Navbar } from "."
import { NavbarSearch } from "./NavbarSearch"


export const NavbarDefault = () => {

  return (
    <nav
    className="bg-dark-950 h-16
    flex items-center gap-2 p-2
    border-b border-b-dark-800">
      <div
      className="flex-1">
        <Navbar.Title>
          4y744.dev
        </Navbar.Title>
      </div>

      <div
      className="flex justify-center flex-1">
        <NavbarSearch/>
      </div>

      <div
      className="flex items-center justify-end gap-2 flex-1">
        <Navbar.Link
        to="">
          Home
        </Navbar.Link>
        <Navbar.Link
        to="docs">
          Docs
        </Navbar.Link>
      </div>
    </nav>
  )
}