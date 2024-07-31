import { InfoIcon } from "../icons/InfoIcon"
import { Warning } from "./Warning"

type PropsType = {
  children?: any
}

export const Note = ({ children } : PropsType) => {
  
  return (
    <div
    className="bg-primary
    rounded-lg shadow-md text-xl
    border border-border-300
    flex items-center gap-4
    p-4 my-4 w-fit min-w-[600px]">
      <InfoIcon/>
      <div
      className="text-base">
        {children}
      </div>
    </div>
  )
}

Note.Info = Note;
Note.Warning = Warning;