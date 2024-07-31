import { Page } from "../misc/Page"
import { LoadingSpinner } from "./LoadingSpinner"

export const LoadingView = () => {

  return (
    <Page
    centerH={true}
    centerV={true}>
      <LoadingSpinner/>
    </Page>
  )
}