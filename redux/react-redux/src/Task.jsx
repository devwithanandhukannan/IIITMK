import React, { useState } from 'react'

const Task = () => {
    const [inputval, setInputval] = useState('')
    const [tasks, setTask] = useState([])
  return (
    <>
        <br />
        <br />
        <input type="text" name="" id="inputbox" onChange={(e)=>{setInputval(e.target.value)}} />
        <button onClick={()=>{
            setTask([...tasks, inputval])
        }}>save</button>

        <ul>
            {tasks.map((val,index,arr)=>{
                return <li key={index}>{val}</li>
            })}
        </ul>
    </>
  )
}

export default Task