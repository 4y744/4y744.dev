//React
import { Children, useRef, useState } from "react"

//Components
import { Option } from "./Option"

//Icons
import { CaretUpIcon } from "../icons/CaretIcon"

type PropsType = {
  children: JSX.Element[],
  defaultValue?: string,
  onChange?: (value: string) => void
}

export const Select = ({ children, defaultValue, onChange } : PropsType) => {

  const [selected, setSelected] = useState<string>(defaultValue || children[0]?.props.value);
  const [wrapped, setWrapped] = useState<boolean>(true);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleChange = (value: string) => {
    setSelected(value);
    setWrapped(true);
    if(onChange)
      onChange(value);
  }

  const options = Children.map(children, child => (
    <Option
    value={child.props.value}
    selected={selected}
    onSelect={handleChange}>
      {child.props.children}
    </Option>
  ))

  return (
    <div
    className="relative min-w-64"
    style={{width: selectRef!.current?.scrollWidth}}
    onBlur={(event) => event.relatedTarget == null && setWrapped(true)}>
      <button
      className={`button-3d
      flex items-center
      text-start w-full
      ${wrapped ? "" : "button-3d-active"}`}
      onClick={() => setWrapped(!wrapped)}>
        <span>
          {children.find(child => child.props.value == selected)!.props.children}
        </span>
        <div
        className="ml-auto
        transition-rotation duration-100"
        style={{rotate: wrapped ? "0deg" : "-180deg"}}>
          <CaretUpIcon/>
        </div>
      </button>
      <div
      className="absolute top-12 left-0
      grid grid-cols-1 auto-cols-fr
      bg-primary overflow-hidden
      rounded-lg shadow-md
      border-border-300 w-full
      transition-h duration-100"
      style={{
        height: wrapped ? 0 : selectRef!.current?.scrollHeight,
        borderWidth: wrapped ? 0 : 1
      }}
      ref={selectRef}>
        {options}
      </div>
    </div>
  )
}

Select.Option = Option;