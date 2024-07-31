//Components
import { Sidebar } from "./components/sidebar/Sidebar"
import { Router } from "./components/router/Router"

//React Router
import { BrowserRouter } from "react-router-dom"


export const App = () => {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Router/>
    </BrowserRouter>
  )
}

