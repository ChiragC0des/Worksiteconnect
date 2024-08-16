const express = require('express');
const router = express.Router();
const { sendOtp, generateOtp } = require('../services/otpService');

router.post('/sendOtp', async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).send({ error: 'Phone number is required' });
    }

    const otp = generateOtp();

    try {
        await sendOtp(phoneNumber, otp);
        // Save OTP in your database or cache for verification
        // ...

        res.status(200).send({ message: 'OTP sent successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
