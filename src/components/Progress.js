import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import '../styles/progress.css';

function Progress() {

    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            setValue((prev) => prev + 0.1);
        }, 20)

        return () => {
            clearInterval(timer);
        }
        
    }, [])

    return (
        <div className="progress-wrapper">
            <span className="title">Progress Bar</span>
            <ProgressBar value={value} onComplete={() => {setSuccess(true)}} />
            <span className="status" >{success ? "Completed" : "Loading..."}</span>
        </div>
    )
}

export default Progress
