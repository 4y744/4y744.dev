type PropsType = {
  children: any,
  value: string,
  selected?: string,
  onSelect?: (value: string) => void
}

export const Option = ({ children, value, selected, onSelect } : PropsType) => {
  
  return (
    <button
    className={`switch-option
    ${value == selected ? "switch-option-active" : ""}`}
    onClick={() => onSelect!(value)}>
      {children}
    </button>
  )
}