export interface INote {
  key: number,
  content: string, 
  important: boolean
}




const Notes = (note: INote) => {
  if (note.important) return (
    <li key = {note.key}><b>{note.content}</b></li>
  )
  else return ( <li key = {note.key}>{note.content}</li>)
}

export default Notes