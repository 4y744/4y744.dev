import { Outlet } from "react-router-dom"
import { Navbar } from "../layout/Navbar"
import { Footer } from "../layout/Footer"

export const Root = () => {

  return (
    <>
      <Navbar/>
      <div
      className="min-h-screen">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}