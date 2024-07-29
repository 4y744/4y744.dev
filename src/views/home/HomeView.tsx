import { Page } from "../../components/misc/Page"
import { Select } from "../../components/select/Select"
import { Option } from "../../components/select/Option"
import { Button } from "../../components/misc/Button"
import { Switch } from "../../components/switch/Switch"

export const HomeView = () => {

  return (
    <Page
    centerH={true}
    centerV={true}>
      <h1
      className="mb-2">
        4y744.dev
      </h1>
      {/* <button
      className="btn">
        Start
      </button> */}
      <Switch>
        <Switch.Option
        value="first">
          first
        </Switch.Option>
        <Switch.Option
        value="second">
          second
        </Switch.Option>
        <Switch.Option
        value="third">
          third
        </Switch.Option>
      </Switch>
    </Page>
  )
}