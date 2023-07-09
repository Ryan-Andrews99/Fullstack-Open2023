interface Header {
  course: string
}

interface ITotal {
  total: number
}

interface Contents { 
  part: string, 
  exercise : number
}

interface ICourse {
  key: number
  name: string
  parts: {
    name: string
    exercises: number
    id: number
  }[]
}


const Header = (header: Header) => {
  return (
    <>
      <h1>{ header.course }</h1>
    </>  
    )
}

const Total = (props : ITotal) => {
  return (
    <>
    <p><b>The total number of exercises are {props.total}</b></p>
    </>
  )
}

const Content = (props: Contents ) => {
  return (
    <p>
      {props.part}: {props.exercise}
    </p>
  )
}


const Course = ({name, parts}: ICourse) => {
  return(
  <div>
    <Header course={name}></Header>
    <ul>
      {parts.map( part => <Content key={part.id} part={part.name} exercise = {part.exercises}></Content>)}
    </ul>
    <Total total={parts.reduce((acc: number, part) => { 
        acc += part.exercises
        return acc
    }, 0)}></Total>
    </div>
  )
}

const App = () => {
  const course: ICourse = {
    key: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (<Course key = {course.key} name = {course.name} parts = {course.parts} ></Course>)
}

export default App