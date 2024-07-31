import { Page } from "../../components/misc/Page"
import { Select } from "../../components/select/Select"
import { Option } from "../../components/select/Option"
import { Button } from "../../components/button/Button"
import { Switch } from "../../components/switch/Switch"
import { useEffect } from "react"
import { LoadingSpinner } from "../../components/loading/LoadingSpinner"

export const HomeView = () => {



  return (
    <Page
    centerH={true}
    centerV={true}>
      <h1
      className="mb-2">
        4y744.dev
      </h1>
    </Page>
  )
}