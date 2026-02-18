import React, { useCallback, useState } from 'react'
import Child from './Child'

/**
 * USECALLBACK vs USEMEMO
 * 
 * useCallback:
 * - Memoizes a FUNCTION and returns the same function reference if dependencies haven't changed
 * - Used to avoid unnecessary function recreations
 * - Helps when passing functions to memoized child components
 * - Syntax: useCallback(() => { }, [dependencies])
 * 
 * useMemo:
 * - Memoizes a VALUE and returns the same value if dependencies haven't changed
 * - Used to avoid expensive calculations on every render
 * - Syntax: useMemo(() => expensiveCalculation(), [dependencies])
 * 
 * WHY USEcallback HERE?
 * - Without useCallback, a new function is created on every render
 * - This would cause Child to re-render even with memo() applied
 * - With useCallback + dependency array [], function reference stays same -> Child doesn't re-render
 */
const Parent = () => {
    const [color, setColor] = useState(false)

    // useCallback memoizes this function - returns same reference if dependencies haven't changed
    // Empty dependency array [] means this function is created once and never changes
    const expensiveCalculation = useCallback(() => {
        return 1
    }, []) // IMPORTANT: Add dependency array

    return (
        <div className={`p-4 m-4 rounded-3xl ${color ? "bg-red-200" : "bg-green-300"}`}>
            <button 
                onClick={() => { setColor(!color) }} 
                className='bg-amber-500 px-4 py-3 rounded'
            >
                Change Color
            </button>
            <h1 className='text-5xl'>UseCallback Vs UseMemo</h1>
            
            {/* 
            Pass memoized function to Child
            Child is wrapped in memo(), so it only re-renders if expensivefun reference changes
            Since useCallback keeps the reference same, Child won't re-render on color change
            */}
            <Child expensivefun={expensiveCalculation} />
        </div>
    )
}

export default Parent