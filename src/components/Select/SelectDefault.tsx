//React
import { Children, useRef, useState } from "react"

//Components

import { Icon } from "../Icons"
import { Select } from "."

type Props = {
  children: JSX.Element[],
  defaultValue?: string,
  onChange?: (value: string) => void
}

export const SelectDefault = ({ children, defaultValue, onChange } : Props) => {

  const [selected, setSelected] = useState<string | undefined>(defaultValue);
  const [wrapped, setWrapped] = useState<boolean>(true);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleChange = (value: string) => {
    setSelected(value);
    setWrapped(true);
    if(onChange)
      onChange(value);
  }

  const options = Children.map(children, child => (
    <Select.Option
    value={child?.props.value}
    selected={selected}
    onSelect={handleChange}>
      {child.props.children}
    </Select.Option>
  ));

  return (
    <div
    className="min-w-64 w-fit"
    onBlur={(event) => event.relatedTarget == null && setWrapped(true)}>
      <button
      className={`bg-dark-800
      flex items-center
      w-full px-4 py-2
      ${wrapped ? "" : "button-3d-active"}`}
      onClick={() => setWrapped(!wrapped)}>
        <span>
          {children.find(child => child.props.value == selected)?.props.children}
        </span>
        <div
        className="ml-auto
        transition-rotation duration-100"
        style={{rotate: wrapped ? "0deg" : "-180deg"}}>
          <Icon.CaretUp/>
        </div>
      </button>
      <div
      className="bg-dark-800
      shadow-md overflow-hidden
      grid grid-cols-1 auto-cols-fr
      transition-h duration-100"
      style={{
        height: wrapped ? 0 : selectRef!.current?.scrollHeight
      }}
      ref={selectRef}>
        {options}
      </div>
    </div>
  )
}
