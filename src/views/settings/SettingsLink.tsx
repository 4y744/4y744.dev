import { Link, NavLink } from "react-router-dom"

type PropsType = {
  text: string, 
  url: string 
}

export const SettingsLink = ({ text, url } : PropsType) => {

  return (
    <NavLink
    className={({isActive}) => `button-3d 
    ${isActive ? "button-3d-active" : ""}`}
    draggable={false}
    to={url}>
      {text}
    </NavLink>
  )
}