import React, { useState } from 'react';
import "../styles/login.css";
import OtpInput from './OtpInput';

function LoginForm() {

    const [phoneNumber, setPhoneNumber] = useState("7017841375");
    const [showOtp, setShowOtp] = useState(false);
    const [success, setSuccess] = useState(false);

    const handlePhoneSubmit = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        setShowOtp(true);
    };

    const handleOtpSubmit = (otp) => {
        setSuccess(true)
        console.log("Login Successful : ", otp)
    }

    return (
        <div className="login-wrapper">
            <div className="title">OTP Login Form</div>
            {!showOtp ?
                <form onSubmit={handlePhoneSubmit}>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Phone Number"
                    />
                    <button type="submit">Submit</button>
                </form>
                :
                <div>
                    <div>Enter OTP sent to {phoneNumber}</div>
                    <OtpInput length={4} onSubmit={handleOtpSubmit} />
                    {success && <div>Login Successful..!!</div>}
                </div>
            }
        </div>
    )
}

export default LoginForm
