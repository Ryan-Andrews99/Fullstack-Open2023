import React, { ReactPropTypes } from 'react';
import logo from './logo.svg';

interface Props {
  name: string, 
  age: number| string
}

const Hello = (props: Props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
const name = 'Ryan'
const age = 13
  return (
    <div>
      <p>Greetings</p>
      <Hello name = { name } age = { age + 10 } />
      <Hello name = 'Sam' age = {23} />
      <Hello name = 'Liam' age = '24'/>
    </div>
  )
   }

export default App;
