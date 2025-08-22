import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}



// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const anotherUser = " chai aur code"

const anotherElement = (
  <a href="#">visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "#", target: "_blank"},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  <App />
  
)

