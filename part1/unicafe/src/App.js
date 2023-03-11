import { useState } from "react";

const Button = ({handleClick, text}) =>  <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, val}) => <tr><td>{text}</td><td>{val}</td></tr>


const Statistics = ({good, neutral, bad}) => {

  return (
    <table>
      <tbody>     
        <StatisticsLine text="good" val={good}/>
        <StatisticsLine text="neutral" val={neutral}/>
        <StatisticsLine text="bad" val={bad}/>
        <StatisticsLine text="all"val={good+neutral+bad}/>
        <StatisticsLine text="average" val={((good - bad) / (good + neutral + bad))}/>
        <StatisticsLine positive text="positive%"val={(good / (good + neutral + bad))*100}/>
      </tbody>
    </table>
  )
}


function App() {

const [good, setGood] = useState(0)
const [bad, setBad] = useState(0)
const [neutral, setNeutral] = useState(0)

const handleGood = () => {
  setGood(good + 1)
}

const handleBad = () => {
  setBad(bad + 1)
}

const handleNeutral = () => {
  setNeutral(neutral + 1)
}

  return (
    <div className="App">
     <h1>give feedback</h1>
     <Button handleClick={handleGood} text="good"></Button>
     <Button handleClick={handleNeutral} text="neutral"></Button>
     <Button handleClick={handleBad} text="bad"></Button>
     <h1>statistics</h1>
     {good|bad|neutral? <Statistics good={good} neutral={neutral} bad={bad}/>: <p>No stats</p>}
    </div>
  );
}

export default App;
