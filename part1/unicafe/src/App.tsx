import React, { MouseEventHandler, useState } from 'react';

interface HeaderProps { 
  headerText : string
}

const Header = (props: HeaderProps) => <div>
  <h1>{props.headerText}</h1>
</div>

interface ButtonProps {
  buttonLabel : string
  handleClick : React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props : ButtonProps) => {
  return (
    <div>   
      <button onClick={props.handleClick}>{props.buttonLabel}</button>
    </div>
  )
}

interface StatsProps {
  good : number
  neutral : number
  bad : number
  total: number
  average: string
  positive: string
}

const Stats = (props : StatsProps) => {
 
  if (props.total < 1 ){
    return (
      <div>
        <p>
          No Feedback has been given
        </p>
      </div>
    )
  }

  return (
    <div>
     <table>
        <colgroup>
        <col span={2}/>
        </colgroup>
        <tr>
          <th>Good</th>
          <th>{props.good}</th>
        </tr>
        <tr>
          <th>Neutral</th>
          <th>{props.neutral}</th>
        </tr>
        <tr>
          <th>Bad</th>
          <th>{props.bad}</th>
        </tr>
        <tr>
          <th>average</th>
          <th>{props.average}</th>
        </tr>
        <tr>
          <th>positive</th>
          <th>{props.positive}</th>
        </tr>
      </table>
    </div>
  )
}

 const App = () =>  {
  const [good, setGoodValue] = useState(0)
  const [neutral, setNeutralValue] = useState(0)
  const [bad, setBadValue] = useState(0)

  let total = (good + neutral + bad || 0)
  let average = ((good * (1) + bad *(-1)) / total * 100 || 0).toString() + "%"
  let positive = ((good / total) * 100 || 0).toString() + "%"


  return (
    <body>
      <div>
      <Header headerText='Give Feedback'/>
    <Button buttonLabel='Good' handleClick={ () => setGoodValue(good + 1)} />
    <Button buttonLabel='Neutral' handleClick={ () => setNeutralValue(neutral + 1)} />
    <Button buttonLabel='Bad' handleClick={ () => setBadValue(bad + 1)} />
    </div>
    <div>
      <Header headerText='Statistics'/>
      <Stats good={good} bad = {bad} neutral= {neutral} total = {total} positive = {positive} average = {average}/>
    </div>
    </body>
  );
}

export default App;
