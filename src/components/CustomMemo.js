import React, { useState, useMemo } from 'react'
import useCustomMemo from '../hooks/useCustomMemo';

function CustomMemo() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squareCounter = useCustomMemo(() => {

        console.log("Expensive Calculation")

        return counter1*counter1;
    }, [counter1])

    return (
        <div>
            <div>Value of Counter1 : {counter1}</div>
            <button onClick={() => setCounter1((prev) => prev + 1)}>Increment</button>
            <div>Squared Value is : {squareCounter}</div>
            <div>Value of Counter2 : {counter2}</div>
            <button onClick={() => setCounter2((prev) => prev - 1)}>Decrement</button>
        </div>
    )
}

export default CustomMemo
