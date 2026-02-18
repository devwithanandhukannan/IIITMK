import React, { useState } from 'react'
import Increment_button from './components/Increment_button'
import ChildOne from './components/Childone'
const Homepage = () => {
    const [start_value, setStart_value] = useState(0)
    const [increment_value, setIncrement_value] = useState(1)

    return (
        <>
            <h1>Homepage</h1>
            < ChildOne/>
            {/* <Increment_button
                start_val={start_value}
                increment_val={increment_value}
            /> */}

            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="increment_count">Increment Value</label>
                    <input
                        type="number"
                        id="increment_count"
                        value={increment_value}
                        onChange={(e) => setIncrement_value(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="start_value">Start Value</label>
                    <input
                        type="number"
                        id="start_value"
                        value={start_value}
                        onChange={(e) => setStart_value(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default Homepage
