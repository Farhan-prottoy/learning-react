import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15;

  const addValue = () => {
    console.log('adding value', Math.random());
  }
  return (
    <>
      <h1>Hello, React!</h1>
      <h3>starting to count: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
    </>
  )
}

export default App
