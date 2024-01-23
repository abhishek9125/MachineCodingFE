import React, { useEffect, useState, useRef } from 'react';

function OtpInput({ length, onSubmit = () => {} }) {

    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([]);

    useEffect(() => {
        if(inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (e, i) => {
        let value = e.target.value;

        let newOtp = [...otp];

        newOtp[i] = value.substring(value.length - 1);

        setOtp(newOtp);

        let combinedOtp = newOtp.join("");

        if(combinedOtp.length == length) {
            onSubmit(combinedOtp)
        }

        if(value && i < length - 1 && inputRefs.current[i+1]) {
            inputRefs.current[i+1].focus()
        }

    }

    const handleClick = (e, index) => {
        inputRefs.current[index].setSelectionRange(1,1);

        if (index > 0 && inputRefs.current[otp.indexOf("")]) {
            inputRefs.current[otp.indexOf("")].focus();
        }

    }

    const handleKeyDown = (e, index) => {
        if(e.key == 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div>
            <div className="otp-wrapper">
                {
                    otp.map((item, index) => (
                        <input 
                            key={index}
                            ref={(input) => (inputRefs.current[index] = input)}
                            value={item}
                            className="otp-input"
                            onChange={(e) => handleChange(e, index)}
                            onClick={(e) => handleClick(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OtpInput
