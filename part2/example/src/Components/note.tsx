
export interface INote {
    id: number,
    content: string, 
    important: boolean
  }

export interface Notes {
  notes: INote[]
}

  const Note = (notes: INote[]) => {
  
    return (
      <div>
          {notes.map((note) => 
          <li key={note.id}>
            {note.content}
            </li>
            )}
      </div>
      )
  }
  
  export default Note