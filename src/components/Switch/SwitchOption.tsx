import { ReactNode } from "react"

type PropsType = {
  children: ReactNode,
  value: string,
  selected?: string,
  onSelect?: (value: string) => void
}

export const SwitchOption = ({ children, value, selected, onSelect } : PropsType) => {
  
  return (
    <button
    className={`switch-option
    ${value == selected ? "switch-option-active" : ""}`}
    onClick={() => onSelect!(value)}>
      {children}
    </button>
  )
}