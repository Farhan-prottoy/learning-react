import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [count, setCounter] = useState(15)

  const addValue = () => {
    count += 5;
    setCounter(count);
    console.log("Clicked! Counter is now: ", count);
  }
    const removeValue = () =>{
      count -= 5;
      setCounter(count);
      console.log("Removed counter value = ", count)
    }
  return (
    <>
      <h1>Hello, React!</h1>
      <h3>starting to count: {count}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
