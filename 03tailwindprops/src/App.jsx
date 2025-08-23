import { useState } from 'react'
import './App.css'
import "tailwindcss";
import Card from './component/Card';

function App() {

  const [count, setCount] = useState(0)
  let myobject = {
    username: "shahid",
    age: 16
  }
  return (
    <>
       <Card username="javascript course" price="10$" />
       <br />
       <Card username="css course" price="15$"/>
       <br />
       <Card username="html course" price="35$"/>
    </>
  )
}

export default App
