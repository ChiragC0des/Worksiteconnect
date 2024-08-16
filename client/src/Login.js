import React, { useState } from 'react';
import axios from 'axios'; // for API calls

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [error, setError] = useState('');

    const handlePhoneNumberSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/sendOtp', { phoneNumber });
            setShowOtpForm(true);
            setError('');
        } catch (err) {
            setError('Failed to send OTP. Please try again.');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/verifyOtp', { phoneNumber, otp });
            const role = response.data.role; // Assuming the backend sends the role
            // Redirect based on role
            if (role === 'admin') {
                window.location.href = '/admin-dashboard';
            } else if (role === 'supervisor') {
                window.location.href = '/supervisor-dashboard';
            } else if (role === 'worker') {
                window.location.href = '/worker-dashboard';
            }
            setError('');
        } catch (err) {
            setError('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            {error && <div className="alert alert-danger">{error}</div>}
            {!showOtpForm ? (
                <form onSubmit={handlePhoneNumberSubmit}>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Send OTP</button>
                </form>
            ) : (
                <form onSubmit={handleOtpSubmit}>
                    <div className="form-group">
                        <label htmlFor="otp">Enter OTP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter the OTP"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Verify OTP</button>
                </form>
            )}
        </div>
    );
}

export default Login;
