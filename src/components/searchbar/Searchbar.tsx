import { SearchIcon } from "../icons/SearchIcon"

export const SearchBar = () => {

  return (
    <>
      <div className="relative left-8
      text-zinc-300 text-sm">
        <SearchIcon/>
      </div>
      <input
      className="bg-secondary
      border border-zinc-900
      focus:border-zinc-800
      rounded-lg shadow-md
      text-zinc-300
      h-10 w-72 pl-12
      outline-none"
      placeholder="Search..."
      type="text"/>
    </>
  )
}