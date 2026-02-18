import React from 'react'

const Parentone = () => {
  const name = 'Anandhu'
  const y = 100;
  const x = 200;
  const names = ["hacker","devops","pentesting"]
  const data = true
  return (
    <>
      <div className='text-5xl'>Demo App</div>
      <p>Hello {name}</p>
      <p>{y}+{x}={y+x}</p>
      <ul>
        {names.map((items, index, arr)=>{
          <li key={index}>{items}</li>
        })}
      </ul>
      {data?<p>passed</p>:<p>not passed</p>}

    </>
  )
}

export default Parentone
