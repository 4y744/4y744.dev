import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type Props = {
  children: ReactNode,
  to: string
}

export const TopbarLink = ({ children, to } : Props) => {

  return (
    <NavLink
    className={({isActive}) => `
    text-dark-400 text-sm font-medium
    px-4 py-2
    ${isActive && `border-b border-b-white
    text-white font-bold`}`}
    to={to}>
      {children}
    </NavLink>
  )
}