type PageProps = {
  children: JSX.Element | JSX.Element[],
  centerH?: boolean,
  centerV?: boolean
}

export const Page = ({ children, centerH, centerV} : PageProps) => {

  return (
    <div
    className={`flex flex-col 
    min-h-[calc(100vh-64px)]
    ml-16 p-8
    ${centerH ? "items-center" : ""}
    ${centerV ? "justify-center" : ""}`}>
      {children}
    </div>
  )
}