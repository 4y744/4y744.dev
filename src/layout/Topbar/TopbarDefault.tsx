import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const TopbarDefault = ({ children } : Props) => {

  return (
    <nav
    className="flex gap-4 bg-dark-950
    border-b border-b-dark-800
    shadow-md">
      {children}
    </nav>
  )
}