import { ReactNode } from "react"
import { Icon } from "../Icons"

type Props = {
  children: ReactNode
}

export const DefaultNote = ({ children } : Props) => {
  
  return (
    <div
    className="bg-primary
    rounded-lg shadow-md text-xl
    border border-border-300
    flex items-center gap-4
    p-4 my-4 w-fit min-w-[600px]">
      <Icon.Info/>
      <div
      className="text-base">
        {children}
      </div>
    </div>
  )
}
