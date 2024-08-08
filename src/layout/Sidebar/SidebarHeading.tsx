import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const SidebarHeading = ({ children } : Props) => {

  return (
    <span
    className="px-4 py-2
    font-bold text-sm">
      {children}
    </span>
  )
}