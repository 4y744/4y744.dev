import { Switch } from "../../../components/switch/Switch"

export const LanguageOutlet = () => {

  return (
    <>
      <div
      className="flex items-center">
        <div
        className="mr-auto">
          <h2>
            Language
          </h2>
          <p>
            Set the language of the app.
          </p>
        </div>
        <Switch
        defaultValue="english">
          <Switch.Option
          value="english">
            English
          </Switch.Option>
          <Switch.Option
          value="bulgarian">
            Bulgarian
          </Switch.Option>
        </Switch>
      </div>
    </>
  )
}