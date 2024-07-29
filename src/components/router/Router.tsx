import { Route, Routes } from "react-router-dom"
import { CodeView } from "../../views/code/CodeView"
import { HomeView } from "../../views/home/HomeView"
import { GamesView } from "../../views/games/GamesView"
import { MathView } from "../../views/math/MathView"
import { BlogView } from "../../views/blog/BlogView"
import { SettingsView } from "../../views/settings/SettingsView"
import { ArtView } from "../../views/art/ArtView"
import { ThemeOutlet } from "../../views/settings/theme/ThemeOutlet"
import { LanguageOutlet } from "../../views/settings/language/LanguageOutlet"

export const Router = () => {

  return (
    <Routes>
      <Route
      path=""
      element={<HomeView/>}
      index/>

      <Route
      path="code"
      element={<CodeView/>}/>

      <Route
      path="games"
      element={<GamesView/>}/>

      <Route
      path="math"
      element={<MathView/>}/>

      <Route
      path="blog"
      element={<BlogView/>}/>

      <Route
      path="art"
      element={<ArtView/>}/>

      <Route
      path="settings"
      element={<SettingsView/>}>
        <Route
        path="theme"
        element={<ThemeOutlet/>}/>

        <Route
        path="language"
        element={<LanguageOutlet/>}/>
      </Route>
    </Routes>
  )
}