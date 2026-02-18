import React, { memo } from 'react'

/**
 * Child Component
 * 
 * WHY MEMO?
 * - memo() prevents re-renders when parent re-renders IF props haven't changed
 * - Without memo, Child re-renders whenever Parent re-renders (even if expensivefun is the same)
 * - useCallback in Parent ensures expensivefun reference stays the same, so Child won't re-render
 * 
 * EXPECTED BEHAVIOR:
 * - Click "change color" button -> Parent re-renders
 * - Child should NOT re-render if expensivefun prop hasn't changed (due to useCallback + memo)
 */
const Child = ({ expensivefun }) => {
    console.log('Child rendered'); // This should log only once, not on every parent render
    console.log(expensivefun);
    
    return (
        <div className='p-4 m-4 bg-blue-100 rounded'>
            <p>Child Component (Memoized)</p>
            <p>Result: {expensivefun?.()}</p>
        </div>
    )
}

export default memo(Child)