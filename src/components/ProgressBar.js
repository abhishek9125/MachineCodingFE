import React, { useState, useEffect } from 'react'

function ProgressBar({ value = 0, onComplete = () => {} }) {

    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(0, value)));
        if(value >= 100) {
            onComplete();
        }
    }, [value])
    
    return (
        <div className="progress-bar">
            <span style={{ color: percent > 49 ? 'white' : 'black' }}>{percent.toFixed()}%</span>
            <div 
                className="progress-fill"
                // style={{ transform: `scaleX(${percent/100})`, transformOrigin: 'left' }} />
                style={{ width: `${percent}%` }} />
        </div>
    )
}

export default ProgressBar
