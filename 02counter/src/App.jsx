import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,sonaliCounter] = useState(15)

  //let counter = 15
  const addValue = () =>{
    
    //counter = counter + 1
    sonaliCounter(counter+1)
   // console.log("clicked",counter)
    //console.log("value added",Math.random())
  }

  const removevalue = () => {
    sonaliCounter(counter-1)
  }
 

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick ={addValue}>Add value{counter}</button>
      <br />
      <button
      onClick = {removevalue}>Remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
