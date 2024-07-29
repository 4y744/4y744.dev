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
        first="English"
        second="Bulgarian"
        onchange={() => {}}/>
      </div>
    </>
  )
}