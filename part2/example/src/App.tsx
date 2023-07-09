import Notes from "./Components/Notes"
import { INote } from "./Components/Notes"


interface INotes {
  notes: INote[]
}

const App = ({notes}: INotes) => {

  
  return (
    <div>
      <h1>Notes:</h1>
      <ul>
        {notes.map(note => <Notes key = {note.key} content = {note.content} important = {note.important} />)}
      </ul>
    </div>
    )
}

export default App