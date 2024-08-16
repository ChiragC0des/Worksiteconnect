const twilio = require('twilio');
const { accountSid, authToken, phoneNumber } = require('../config/config').twilio;

const client = new twilio(accountSid, authToken);

const sendOtp = async (phoneNumber, otp) => {
    try {
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: phoneNumber,
            to: phoneNumber
        });
    } catch (error) {
        throw new Error('Failed to send OTP');
    }
};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

module.exports = { sendOtp, generateOtp };
