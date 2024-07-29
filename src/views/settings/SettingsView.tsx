import { Outlet } from "react-router-dom"
import { Page } from "../../components/misc/Page"
import { SettingsLink } from "./SettingsLink"

export const SettingsView = () => {

  return (
    <Page
    centerH={true}>
      <div
      className="grid grid-cols-5 gap-4">
        <h1
        className="col-span-5">
          Settings
        </h1>
        <div
        className="grid grid-cols-1 gap-4
        auto-rows-fr col-span-1">
          <SettingsLink
          text="Theme"
          url="theme"/>

          <SettingsLink
          text="Language"
          url="language"/>
        </div>
        
        <div
        className="col-span-4 min-w-[800px]">
          <Outlet/>
        </div>
      </div>

    </Page>
  )
}