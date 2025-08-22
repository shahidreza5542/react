import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter, setCounter] = useState(1)


  // let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter)
  }
  
  const remove = () => {
    console.log("remove value");
    counter = counter - 1;
    setCounter(counter)
    
  }

  if (counter < 0) {
    counter = 0
  }
   

  return (
    <>
      <h1>chai aur project</h1>
      <h2>counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button 
      onClick={remove}
      >Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
