import React, { useState, useEffect } from 'react'
import useCustomEffect from '../hooks/useCustomEffect'

function CustomUseEffect() {

    const [count, setCount] = useState(0)

    useCustomEffect(() => {
        console.log('Count Updated in Effects : ', count)

        return () => {
            console.log("Cleanup")
        }
    }, [count])

    console.log('Render')

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <div>
            Current Count : {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CustomUseEffect
