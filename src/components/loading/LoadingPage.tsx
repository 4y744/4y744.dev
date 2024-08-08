import { Loading } from "."

export const LoadingPage = () => {

  return (
    <div
    className="h-full w-full
    flex justify-center items-center">
      <Loading.Spinner/>
    </div>
  )
}