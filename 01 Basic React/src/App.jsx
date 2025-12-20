import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
    let [count, setCounter] = useState(15)

  const addValue = () =>{
    count *= 5; 
    setCounter(count)
    console.log("value increased and become = ", count)
  }

  return (
    <>
      <h1>hi there</h1>
      <h3>how are you</h3>
      <button onClick={addValue}>Add Value {count}</button>
    </>
  )
}

export default App
