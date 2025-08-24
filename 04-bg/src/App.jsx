import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}
     >
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-warp justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2' >
          <button 
          onClick={() => setcolor("red")}
          className='outline-none px-4 rounded-full shadow-lg'
          style={{backgroundColor: "red"}}
          >red</button>

          <button 
          onClick={() => setcolor("blue")}
          className='outline-none px-4 rounded-full shadow-lg'
          style={{backgroundColor: "blue"}}
          >blue</button>

          <button 
          onClick={() => setcolor("green")}
          className='outline-none px-4 rounded-full shadow-lg'
          style={{backgroundColor: "green"}}
          >green</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
