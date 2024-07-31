import { WarningIcon } from "../icons/WarningIcon"

type PropsType = {
  children?: any
}

export const Warning = ({ children } : PropsType) => {
  
  return (
    <div
    className="bg-red-800
    rounded-lg shadow-md text-xl
    border border-red-500
    flex items-center gap-4
    p-4 my-4 w-fit min-w-[600px]">
      <WarningIcon/>
      <div
      className="text-base">
        {children}
      </div>
    </div>
  )
}