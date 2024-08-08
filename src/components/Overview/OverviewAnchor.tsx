
import { ReactNode } from "react"
import { Icon } from "../Icons"
import { Tooltip } from "../Tooltip"

type Props = {
  children: ReactNode,
  id: string
}

export const OverviewAnchor = ({ children, id } : Props) => {

  return (
    <div
    className="flex items-center gap-2"
    id={id}>
      <div>
        {children}
      </div>
      <Tooltip
      text="Page anchor">
        <div
        className="text-sm text-zinc-400">
          <Icon.Anchor/>
        </div>
      </Tooltip>
    </div>
  )
}