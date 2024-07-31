import { Button } from "../../components/button/Button"
import { Page } from "../../components/misc/Page"
import { Note } from "../../components/note/Note"

export const CodeView = () => {

  return (
    <Page>
      <h1>Code</h1>
      <h2>Para 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi cum maxime dolorem dolores praesentium optio quibusdam, 
        aliquid necessitatibus saepe! Officiis, magni sit maxime deserunt 
        saepe obcaecati inventore porro commodi fugit.
      </p>
      <h2>Para 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi cum maxime dolorem dolores praesentium optio quibusdam, 
        aliquid necessitatibus saepe! Officiis, magni sit maxime deserunt 
        saepe obcaecati inventore porro commodi fugit.
      </p>
      <Button>click me</Button>
      <Note.Warning>This is a test</Note.Warning>
    </Page>
  )
}