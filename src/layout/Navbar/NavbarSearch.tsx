//Import components
import { Icon } from "../../components/Icons";

export const NavbarSearch = () => {
  return (
    <button
      className="flex items-center
      bg-dark-800 rounded-lg 
      text-dark-400 w-64 h-10
      hover:bg-dark-700 hover:text-dark-300"
    >
      <div className="text-sm px-3">
        <Icon.Search />
      </div>
      <div className="text-sm">Search...</div>
    </button>
  );
};
