import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import Store from './store'
import Counter from './Counter'
import Task from './Task'
import Immer from './Immer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
        <Counter/>
        <Task/>
        <h1>Immer</h1>
        <Immer/>
      </Provider>
    </>
  )
}

export default App
