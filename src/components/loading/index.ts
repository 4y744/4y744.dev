import { LoadingPage } from "./LoadingPage"
import { LoadingSpinner } from "./LoadingSpinner"


const index = Object.assign(LoadingSpinner, {
  Spinner: LoadingSpinner,
  Page: LoadingPage
})

export { index as Loading }