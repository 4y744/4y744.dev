import { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
  children?: ReactNode,
  url: string
}
 
export const FooterLink = ({ children, url } : Props) => {

  return (
    <Link
    className="text-zinc-400 text-sm hover:text-zinc-300
    transition-text duration-100"
    to={url}>
      { children }
    </Link>
  )
}