import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const randomSelection = () =>  {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }



   
  const [selected, setSelected] = useState(0)
  const [anecdoteObj, setVotes] = useState(Object.fromEntries(anecdotes.map(anecdote => [anecdote, 0])))

const sortObjectKeys = (anecdoteObj: {[k: string]: number}) => {
  return   Object.keys(anecdoteObj).sort((a,b) => anecdoteObj[a] < anecdoteObj[b] ? 1 : -1)

}


  const updateVote = (anecdote :string, anecdoteObj: {[k: string]: number}) => {
    const updatedObj = {...anecdoteObj}
    updatedObj[anecdote] += 1
    setVotes(updatedObj)
  }

  


  return (
    <div>
    <div>
      {anecdotes[selected]}
    </div>
    <div>
        <button onClick={() => randomSelection()}>Next Anecdote</button>
        <button onClick={() => updateVote(anecdotes[selected], anecdoteObj)}>Vote for this anecdote</button>
        <p>This anecdote has {anecdoteObj[anecdotes[selected]]} votes</p>
        </div>
        <h3>Anecdote with the most votes</h3>
        <p>{sortObjectKeys(anecdoteObj)[0]}</p>
        </div>
    )
}

export default App