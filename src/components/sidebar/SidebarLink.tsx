import { MouseEvent } from "react";
import { Link } from "react-router-dom"

export const SidebarLink = ({ icon, text, url } : { icon: JSX.Element, text: string, url: string }) => {

  /**
   * Makes the link undraggable.
   */
  const handleMouseDown = (event: MouseEvent) => event.preventDefault();


  return (
    <Link
    className="flex items-center
    text-white text-xl
    hover:bg-white hover:text-primary hover:shadow-md
    transition-btn duration-100"
    onMouseDown={handleMouseDown}
    to={url}>
      <div
      className="flex justify-center items-center
      min-w-16 max-w-16 min-h-10 max-h-10
      active:bg-white">
        {icon}
      </div>
      <span
      className="font-bold text-base">
        {text}
      </span>
    </Link>
  )
}