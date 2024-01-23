import React, { useState, useEffect, useRef } from 'react';
import '../styles/countdown.css';

function Countdown() {

    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [startReset, setStartReset] = useState(false);
    const countdownTimer = useRef(null)

    const timer = () => {

        if(seconds != 0) {
            setSeconds((prev) => `${+prev < 10 ? "0" : ""}${+prev - 1}`)
        } else if(minutes != 0 && seconds == 0) {
            setSeconds(59);
            setMinutes((prev) => `${+prev < 10 ? "0" : ""}${+prev - 1}`)
        } else if(hours != 0 && minutes == 0) {
            setMinutes(59);
            setHours((prev) => `${+prev < 10 ? "0" : ""}${+prev - 1}`)
        }
    }

    const startTimer = () => {
        setStartReset(true);
    }

    useEffect(() => {
        if(startReset) {
            
            if(seconds > 60) {
                setMinutes((prev) => +prev + 1);
                setSeconds((prev) => +prev - 59);
            }
    
            if(minutes > 60) {
                setHours((prev) => +prev + 1);
                setMinutes((prev) => +prev - 59);
            }
           
            if(hours == 0 && minutes == 0 && seconds == 0) {
                setHours("")
                setMinutes("")
                setSeconds("")
                setStartReset(false);
            }
    
            countdownTimer.current = setTimeout(() => {
                timer();
            }, 1000)
        }   

        return () => {
            if(countdownTimer.current) {
                clearTimeout(countdownTimer.current)
            }
        }
    }, [startReset, hours, minutes, seconds])

    const resetTimer = () => {
        setHours("")
        setMinutes("")
        setSeconds("")
        setStartReset(false);
    }

    const stopTimer = () => {
        clearTimeout(countdownTimer.current);
        setStartReset(false)
    }

    return (
        <div className="countdown-wrapper">
            <div className="title">Countdown Timer</div>
            <div className="countdown">
                <div className="label-wrapper">
                    <div>Hours</div>
                    <div>Minutes</div>
                    <div>Seconds</div>
                </div>
                <div className="input-wrapper">
                    <input  
                        type="number"
                        maxLength={2}
                        placeholder="00"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                    /> 
                    <span>:</span>
                    <input  
                        type="number"
                        maxLength={2}
                        placeholder="00"
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                    /> 
                    <span>:</span>
                    <input  
                        type="number"
                        maxLength={2}
                        placeholder="00"
                        value={seconds}
                        onChange={(e) => setSeconds(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <div className="button start" onClick={startReset ? stopTimer : startTimer}>{startReset ? "Stop" : "Start"}</div>
                    <div className="button reset" onClick={resetTimer}>Reset</div>
                </div>
            </div>
        </div>
    )
}

export default Countdown
