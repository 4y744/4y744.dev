import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type Props = {
  children: ReactNode,
  to: string
}

export const NavbarLink = ({ children, to } : Props) => {

  return (
    <NavLink
    className={({isActive}) => `px-4 py-2
    flex items-center gap-2
    text-sm font-medium
    text-dark-400 hover:text-dark-300
    rounded-lg shadow-md select-none
    hover:bg-dark-700
    ${isActive && "bg-dark-800 text-zinc-300"}`}
    draggable={false}
    to={to}>
      {children}
    </NavLink>
  )
}