//Import Components
import { Navbar } from ".";

export const NavbarDefault = () => {
  return (
    <nav
      className="sticky top-0 h-16 z-50
      bg-dark-950/90 backdrop-blur
      flex items-center gap-2 p-2
      border-b border-b-dark-700"
    >
      <div className="flex-1">
        <Navbar.Title>
          <span className="text-dark-400">{"<"}</span>
          <span>4y744</span>
          <span className="text-dark-400">.</span>
          <span>dev</span>
          <span className="text-dark-400">{"/>"}</span>
        </Navbar.Title>
      </div>
      <div
        className="flex-1
        flex justify-center"
      >
        <Navbar.Search />
      </div>
      <div
        className="flex-1
        flex items-center justify-end gap-2"
      >
        <Navbar.Link to="">Home</Navbar.Link>
        <Navbar.Link to="docs">Docs</Navbar.Link>
      </div>
    </nav>
  );
};
