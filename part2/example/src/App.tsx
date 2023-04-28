interface Note {
      key: number,
      content: string, 
      important?: boolean
    }

interface Notes{
  notes: Note[]
}


const Note = (({content, key}: Note) => <li key = {key}>{content}</li>)

const App = ({ notes }: Notes) => {
  
  return (
    <div>
      <h1>Notes:</h1>
      <ul>
        {notes.map(note => <Note content = {note.content} id = {note.id}></Note>)}
      </ul>
    </div>
    )
}

export default App