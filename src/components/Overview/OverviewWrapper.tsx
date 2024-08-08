import { Children } from "react"
import { Overview } from "."

type Props = {
  children: any
}

export const OverviewWrapper = ({ children } : Props) => {

  const anchored = Children.map(children.props.children, child => (
    child.type == "h1" ? (
      <Overview.Anchor
      id={child.props.children}>
        {child}
      </Overview.Anchor>
    ) : (
      <>
        {child}
      </>
    )
  ))

  return (
    <div
    className="w-full">
      {anchored}
    </div>
  )
}