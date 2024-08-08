import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const SidebarDefault = ({ children } : Props) => {

  return (
    <nav
    className="grid grid-cols-1 auto-rows-max
    w-64 px-4">
      {children}
    </nav>
  )
}