import { Children, Fragment, ReactNode, } from "react"
import { OverviewAnchor } from "./OverviewAnchor"
import { Overview } from "."

type Props = {
  children: any
}

export const OverviewDefault = ({ children } : Props) => {

  const skips = Children.map(children.props.children, child => (
    child.type == "h1" ? (
      <Overview.Skip
      to={child.props.children}>
        {child.props.children}
      </Overview.Skip>
    ) : null
  ));

  return (
    <div
    className="grid grid-cols-1 auto-rows-max
    w-64 px-4">
      <span
      className="text-sm font-bold
      px-4 py-2">
        Overview
      </span>
      {skips}
    </div>
  )
}