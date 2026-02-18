import React, { useState, useEffect } from 'react'

const Increment_button = ({ start_val, increment_val }) => {
    const [counter, setCounter] = useState(Number(start_val));

    useEffect(()=>{
        setCounter(Number(start_val))
    },[start_val])

    return (
        <>
            <div>{counter}</div>
            <h1>start value :{start_val}</h1>
            <h1>increment value :{increment_val}</h1>
            <button onClick={() => setCounter(counter + Number(increment_val))}>
                +{increment_val}
            </button>

            <button onClick={() => setCounter(counter - Number(increment_val))}>
                -{increment_val}
            </button>
        </>
    );
};

export default Increment_button;
