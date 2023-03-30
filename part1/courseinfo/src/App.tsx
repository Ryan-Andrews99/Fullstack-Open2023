interface Header {
  course: string
}

interface Total {
  total: number
}

interface Contents { 
  part: string, 
  exercise : number
}


const Header = (header: Header) => {
  return (
    <>
      <h1>{ header.course }</h1>
    </>  
    )
}

const Total = (props : Total) => {
  return (
    <>
    <p>The total number of exercises are {props.total}</p>
    </>
  )
}

const Content = (props: Contents[] ) => {
  return (
  <div> 
    <p>
      {props[0].part}: {props[0].exercise}
    </p>
    <p>
      {props[1].part}: {props[1].exercise}
    </p>
    <p>
      {props[2].part}: {props[2].exercise}
    </p>
  </div>
   
  )
}

const App = () => {
  const course = 'Half Stack applicaiton development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contents: Contents[] = [
    {
      part: part1, 
      exercise:exercises1 
    },
    {
      part: part2, 
      exercise:exercises2 
    },
    {
      part: part3, 
      exercise:exercises3 
    },
  ]


  return (
    <div>
      <Header course= {course}></Header>
      <Content {...contents}></Content>
      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
   }

export default App;
