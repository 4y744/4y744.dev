import { MouseEvent } from "react"

type PropsType = {
  children?: any,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, onClick } : PropsType ) => {

  return (
    <button
    className="btn"
    onClick={onClick}>
      {children}
    </button>
  )
}