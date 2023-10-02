import { useState } from 'react'

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Button = ({click, title}) => {
  return(
    <button onClick={click}>{title}</button>
  )
}

const Forms = ({gdAdd, ntrlAdd, bdAdd}) => {
  return (
    <div>
      <Button title={"Good"} click={gdAdd} />
      <Button title={"Neutral"} click={ntrlAdd} />
      <Button title={"Bad"} click={bdAdd} />
    </div>
  )
}

const StatisticsLine = ({title, value}) => {
  return(
    <tr><td>{title}:</td><td>{value}</td></tr>
  )
}

const Statistics = ({gdCount, ntrlCount, bdCount}) => {
  return (
    <table>
      <tbody>
      <StatisticsLine title={"Good"} value={gdCount} />
      <StatisticsLine title={"Neutral"} value={ntrlCount} />
      <StatisticsLine title={"Bad"} value={bdCount} />
      <StatisticsLine title={"All"} value={gdCount + ntrlCount + bdCount} />
      <StatisticsLine title={"Average"} value={((gdCount * 1) + (ntrlCount * 0) + (bdCount * -1)) / (gdCount + ntrlCount + bdCount)} />
      <StatisticsLine title={"Positive"} value={(gdCount / (gdCount + ntrlCount + bdCount)) * 100+"%"} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleClick = (buttonId) => {
    if(buttonId == 1){
      setGood(good + 1)
    }
    else if(buttonId == 2){
      setNeutral(neutral + 1)
    }
    else if(buttonId == 3){
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <Header header={"give feedback"} />
      <Forms gdAdd={()=>HandleClick(1)} ntrlAdd={()=>HandleClick(2)} bdAdd={()=>HandleClick(3)}/>
      <Header header={"statistics"} />
      {good > 0 || neutral > 0 || bad > 0 ? <Statistics gdCount={good} ntrlCount={neutral} bdCount={bad}/> : <p>No feedback given</p>}
      

    </div>
  )
}

export default App
