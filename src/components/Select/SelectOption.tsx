import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  value: string,
  selected?: string,
  onSelect?: (value: string) => void
}

export const SelectOption = ({ children, value, selected, onSelect } : Props) => {

  return (
    <button
    className={`px-4 py-2 text-start
    hover:bg-dark-700
    ${value == selected ? "bg-dark-700" : ""}`}
    onClick={() => onSelect!(value)}>
      {children}
    </button>

  )
}