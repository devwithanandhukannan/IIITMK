import { useState } from 'react'
import './App.css'
import Parent from './assets/usememo_example/Parent'
import Child from './assets/usememo_example/Child'
// import Parentone from './assets/components/Parentone'
// import Card from './assets/components/assignments/Card'

function App() {
  // const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)
  
  return (
    <>
    {/* 
    <button onClick={()=>setDark(!dark)} className='bg-red-400 m-10 px-6 py-3 rounded'>{dark ? "Light":"Dark"}</button>
    <Card isDark={dark}/> */}
    <Parent/>

    </>
  )
}

export default App
