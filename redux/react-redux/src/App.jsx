import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Parent from './Color'
import { Provider } from 'react-redux'
import Store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
        <Parent />
      </Provider>
    </>
  )
}

export default App
