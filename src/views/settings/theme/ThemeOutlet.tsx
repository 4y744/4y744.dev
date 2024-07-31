import { Option } from "../../../components/select/Option"
import { Select } from "../../../components/select/Select"
import { Switch } from "../../../components/switch/Switch"

export const ThemeOutlet = () => {

  return (
    <>
      <div
      className="flex items-center">
        <div
        className="mr-auto">
          <h2>
            Light mode
          </h2>
          <p>
            Set the main color theme of the app.
          </p>
        </div>
        <Switch>
          <Switch.Option
          value="dark">
            Dark
          </Switch.Option>
          <Switch.Option
          value="light">
            Light
          </Switch.Option>
        </Switch>
      </div>
    </>
  )
}