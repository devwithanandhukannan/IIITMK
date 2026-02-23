import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const value = useSelector((state)=>{
    return state.value
  })
  

  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch({
      type:'increment'
    })
  }

  const decrement = () => {
    dispatch({
      type:'decrement'
    })
  }

  return (
    <>
      <div>{value}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter