import { ReactNode } from "react"
import { Icon } from "../Icons"

type Props = {
  children: ReactNode
}

export const WarningNote = ({ children } : Props) => {
  
  return (
    <div
    className="bg-red-800
    flex items-center gap-4
    shadow-md text-xl
    p-4 my-2 w-fit min-w-[600px]">
      <Icon.Warning/>
      <div
      className="text-base">
        {children}
      </div>
    </div>
  )
}