import { useState } from 'react';
import axios from 'axios';

function useOtp() {
    const [otp, setOtp] = useState('');

    const sendOtp = async (phoneNumber) => {
        try {
            await axios.post('/api/sendOtp', { phoneNumber });
            alert('OTP sent!');
        } catch (error) {
            alert('Error sending OTP');
        }
    };

    return { otp, setOtp, sendOtp };
}

export default useOtp;
