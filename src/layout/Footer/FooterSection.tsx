import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export const FooterSection = ({ children } : Props) => {

  return (
    <div
    className="flex flex-col justify-start gap-2">
      { children }
    </div>
  )
}