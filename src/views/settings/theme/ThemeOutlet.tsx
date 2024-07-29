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
        {/* <Switch
        first="Dark"
        second="Light"
        onchange={() => {}}/> */}
        <Select
        defaultValue="test">
          <Option
          text="test"
          value="testval"/>
          <Option
          text="test2ffffff"
          value="testval2"/>
        </Select>
      </div>
    </>
  )
}