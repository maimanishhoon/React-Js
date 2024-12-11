import { useState } from 'react' // Form here we import useState hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // let counter = 15 ;
  // Here we use Hooks in React 
  //useState Hook
  let [counter , setCounter] = useState(15)// syntax - let [name ,setname] = useState(value)
  
  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter + 1 )
    }else{
      setCounter(20)
    }
  }
  let [manish , setManish] =useState(15 )
  const removeValue = ()=>{
    if(manish > 0) {
      setManish(manish - 1)
    }else{
      setManish(0)
    }
  }  
  const Reset = ()=>{
    setCounter(15)
    setManish(15)
    console.log("Clicked Reset" )
  }
  return (
    <>
      <h1>Chai aur react !</h1>
      <h2> total Count {counter} <br /> Remove Values {manish} </h2>
      <button onClick={addValue}>Add Count {counter}</button>
      <br />
      <button onClick={removeValue} >Remove Count {manish} </button>
      <br />
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
