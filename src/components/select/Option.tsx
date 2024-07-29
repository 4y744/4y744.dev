type PropsType = {
  text: string,
  value: string,
  select?: (value: string, text: string) => void
}

export const Option = ({ text, value, select } : PropsType) => {

  const handleSelect = () => {
    if(select)
      select(value, text);
  }

  return (
    <button
    className="px-4 py-2
    hover:bg-white hover:text-primary
    text-start"
    onClick={handleSelect}>
      {text}
    </button>

  )
}