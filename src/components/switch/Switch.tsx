import { Children, useState } from "react"
import { Option } from "./Option"

type PropsType = {
  children: JSX.Element[],
  defaultValue?: string,
  onChange?: (value: string) => void
}

export const Switch = ({ children, defaultValue, onChange } : PropsType) => {

  const [selected, setSelected] = useState<string>(defaultValue || children[0]?.props.value)

  const handleChange = (value: string) => {
    setSelected(value);
    if(onChange)
      onChange(value);
  }

  const options = Children.map(children, child => (
    <Switch.Option
    value={child.props.value}
    selected={selected}
    onSelect={handleChange}>
      {child.props.children}
    </Switch.Option>
  ))

  return (
    <div
    className="switch">
      {options}
    </div>
  )
}

Switch.Option = Option;