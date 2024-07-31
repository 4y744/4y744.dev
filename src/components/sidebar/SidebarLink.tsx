//React Router
import { NavLink } from "react-router-dom"

export const SidebarLink = ({ icon, text, url } : { icon: JSX.Element, text: string, url: string }) => {

  return (
    <NavLink
    className={({isActive}) => `flex items-center text-xl
    hover:bg-white hover:text-primary
    transition-btn duration-100
    ${isActive ? "bg-white text-primary" : "bg-primary text-white"}`}
    draggable={false}
    to={url}>
      <div
      className="flex justify-center items-center
      min-w-16 max-w-16 min-h-10 max-h-10
      active:bg-white">
        {icon}
      </div>
      <span
      className="font-bold text-base">
        {text}
      </span>
    </NavLink>
  )
}