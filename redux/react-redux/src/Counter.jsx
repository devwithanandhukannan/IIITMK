import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement } from './store' 
import store from './React-toolkit/store'
import { increment, decrement } from './React-toolkit/store'
const Counter = () => {

  const value = useSelector((state) => {return(state.counter);
  })

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