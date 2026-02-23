import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Task = () => {
    const [inputval, setInputval] = useState('')

    const taskData = useSelector((state)=>{
        return state.tasks
        
    })
    console.log(taskData);
    const taskdispatch = useDispatch()
  return (
    <>
        <br />
        <br />
        <input type="text" name="" id="inputbox" onChange={(e)=>{setInputval(e.target.value)}} />
        <button onClick={()=>{
            taskdispatch({
                type:'saveTask',
                payload:inputval
            })
        }}>save</button>

        <ul>
            
        </ul>
    </>
  )
}

export default Task