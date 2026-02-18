import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parentone from './assets/components/Parentone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parentone/>
      <h1>hello</h1>
    </>
  )
}

export default App
