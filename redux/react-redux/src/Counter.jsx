import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store' 
const Counter = () => {

  const value = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <>
      <div>{value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default Counter