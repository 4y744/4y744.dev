//Components
import { SidebarLink } from "./SidebarLink"

//Icons
import { ArtIcon } from "../icons/ArtIcon"
import { BlogIcon } from "../icons/BlogIcon"
import { CodeIcon } from "../icons/CodeIcon"
import { GameIcon } from "../icons/GameIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { MathIcon } from "../icons/MathIcon"
import { SettingsIcon } from "../icons/SettingsIcon"

export const Sidebar = () => {

  return (
    <nav
    className="fixed top-0 left-0
    flex flex-col justify-end
    border-r border-border-300
    h-full w-16 hover:w-48 z-50
    transition-w duration-200
    bg-primary shadow-md
    select-none overflow-hidden">
      <SidebarLink
      text="Home"
      icon={<HomeIcon/>}
      url=""/>

      <SidebarLink
      text="Code"
      icon={<CodeIcon/>}
      url="code"/>

      <SidebarLink
      text="Games"
      icon={<GameIcon/>}
      url="games"/>

      <SidebarLink
      text="Math"
      icon={<MathIcon/>}
      url="math"/>      
      
      <SidebarLink
      text="Blog"
      icon={<BlogIcon/>}
      url="blog"/>
      
      <SidebarLink
      text="Art"
      icon={<ArtIcon/>}
      url="art"/>

      <SidebarLink
      text="Settings"
      icon={<SettingsIcon/>}
      url="settings"/>
    </nav>
  )
}