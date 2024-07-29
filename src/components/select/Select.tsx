import { Children, useRef, useState } from "react"
import { Option } from "./Option"
import { CaretUpIcon } from "../icons/CaretIcon"

type PropsType = {
  children: JSX.Element[],
  defaultValue: string,
  onselect?: (value: string) => void
}

export const Select = ({ children, defaultValue, onselect } : PropsType) => {

  const [selected, setSelected] = useState<string>(defaultValue);
  const [wrapped, setWrapped] = useState<boolean>(true);
  const selectRef = useRef<HTMLDivElement>(null);

  const select = (value: string, text: string) => {
  

    if(onselect)
      onselect(value);
  }

  const toggle = () => {
    setWrapped(!wrapped);
  }

  const options = Children.map(children, child => (
    <Option
    text={child.props.text}
    value={child.props.value}
    select={select}/>
  ))

  return (
    <div
    className="relative min-w-64"
    style={{width: selectRef!.current?.scrollWidth}}
    onBlur={() => setWrapped(true)}>
      <button
      className={`btn
      flex items-center
      text-start w-full
      ${wrapped ? "" : "btn-active"}`}
      onClick={() => toggle()}>
        <span>
          {selected}
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
      bg-primary overflow-hidden
      rounded-lg shadow-md
      border-zinc-900
      grid grid-cols-1 auto-cols-fr
      transition-h duration-100
      w-full"
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