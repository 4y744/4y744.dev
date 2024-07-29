import { Link, NavLink } from "react-router-dom"

type PropsType = {
  text: string, 
  url: string 
}

export const SettingsLink = ({ text, url } : PropsType) => {

  return (
    <NavLink
    className={({isActive}) => `
    ${isActive ? "btn btn-active" : "btn"}
    `}
    draggable={false}
    to={url}>
      {text}
    </NavLink>
  )
}