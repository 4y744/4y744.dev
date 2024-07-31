type PropsType = {
  children?: any,
  onClick?: () => void
}

export const Button = ({ children, onClick } : PropsType) => {

  return (
    <button
    className="button-3d w-fit"
    onClick={onClick}>
      {children}
    </button>
  )
}