import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const NavbarTitle = ({ children } : Props) => {

  return (
    <span
    className="font-bold text-lg">
      {children}
    </span>
  )
}