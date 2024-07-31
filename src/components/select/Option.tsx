type PropsType = {
  children: any,
  value: string,
  selected?: string,
  onSelect?: (value: string) => void
}

export const Option = ({ children, value, selected, onSelect } : PropsType) => {

  return (
    <button
    className={`px-4 py-2 text-start
    hover:bg-white hover:text-primary
    ${value == selected ? "bg-white text-primary" : ""}`}
    onClick={() => onSelect!(value)}>
      {children}
    </button>

  )
}