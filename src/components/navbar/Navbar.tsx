import { SearchBar } from "./Searchbar"

export const Navbar = () => {

  return (
    <nav
    className="sticky top-0 left-0
    flex justify-center items-center
    bg-primary
    h-16 w-full">
      <SearchBar/>
    </nav>
  )
}