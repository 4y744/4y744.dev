import { BrowserRouter } from "react-router-dom"
import { Sidebar} from "./components/sidebar/Sidebar"
import { Router } from "./components/router/Router"

export const App = () => {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Router/>
    </BrowserRouter>
  )
}

