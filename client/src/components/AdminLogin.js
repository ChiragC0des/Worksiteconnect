import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/sendOtp', { phoneNumber });
            alert('OTP sent!');
        } catch (error) {
            alert('Error sending OTP');
        }
    };

    return (
        <div className="container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send OTP</button>
            </form>
        </div>
    );
}

export default AdminLogin;
