import React, { useState } from 'react'
import { produce } from 'immer';

const initalData = {
        name:"Anandhu",
        car:{
            name:"bmw",
            color:"red"
        }
    }

const Immer = () => {
    const [data, setData] = useState(initalData)

const saveCarName = (val) => {
  setData(
    produce((draft) => {
      draft.car.name = val; 
    })
  );
};

  return (
    <>
        <div style={{border:"1px solid black",padding:"10px"}}>
            <p>Name</p>
            <input type="text" name="" id="" defaultValue={data?.name} onChange={(e)=>{saveCarName(e.target.value)}}/>
            <p>car Name</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    </>
  )
}

export default Immer