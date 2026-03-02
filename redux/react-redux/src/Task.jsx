import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveTask } from './React-toolkit/store'
const Task = () => {
    const [inputval, setInputval] = useState('')

    const taskData = useSelector((state)=>{
        console.log(state);
        
        return state.task
        
    })
    console.log(taskData);
    const taskdispatch = useDispatch()
  return (
    <>
        <br />
        <br />
        <input type="text" name="" id="inputbox" onChange={(e)=>{setInputval(e.target.value)}} />
        <button onClick={()=>{
            taskdispatch(saveTask(inputval))
        }}>save</button>

        <ul>
            
        </ul>
    </>
  )
}

export default Task