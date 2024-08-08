import { SearchIcon } from "../../components/Icons/SearchIcon"

export const NavbarSearch = () => {

  return (
    <button
    className="flex items-center
    border border-dark-800 hover:border-dark-700
    hover:bg-dark-900
    rounded-lg shadow-md
    min-w-64 h-10
    text-dark-400">
      <div
      className="text-sm px-3">
        <SearchIcon/>
      </div>
      <div
      className="text-sm">
        Search...
      </div>
    </button>
  )
}