import React, { useState } from 'react'
import Counter from './Counter'

const Color = () => {
  const [color, setColor] = useState('white')

  return (
    <>
      <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          marginBottom: '20px',
          border: '1px solid black'
        }}
      >
      </div>

      <button onClick={() => setColor('blue')}>
        Blue
      </button>

      <button onClick={() => setColor('green')}>
        Green
      </button>
    </div>
    <Counter/>
    </>
  )
}

export default Color