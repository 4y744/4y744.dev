import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type Props = {
  children: ReactNode,
  to: string
}

export const SidebarLink = ({ children, to } : Props) => {

  return (
    <NavLink
    className={({isActive}) =>`
    px-4 py-2 rounded-lg
    text-sm text-dark-400
    hover:text-dark-300
    ${isActive && "bg-dark-800 text-dark-300 font-medium"}`}
    to={to}>
      {children}
    </NavLink>
  )
}