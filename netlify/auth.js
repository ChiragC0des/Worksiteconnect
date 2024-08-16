// netlify/functions/auth.js
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      const { phoneNumber, action } = JSON.parse(event.body);

      if (!phoneNumber || !action) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Phone number and action are required' }),
        };
      }

      if (action === 'sendOtp') {
        // Generate OTP (for simplicity, using a random 6-digit number)
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Store OTP in some persistent storage (e.g., database, Redis) associated with the phone number
        // Here we're just using an in-memory object for demo purposes
        // const otpStorage = {}; // Replace with actual storage
        // otpStorage[phoneNumber] = otp;

        // Send OTP via email (or SMS) - example using nodemailer for email
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
          },
        });

        let info = await transporter.sendMail({
          from: '"Your App" <your-email@gmail.com>',
          to: phoneNumber, // Use appropriate recipient field
          subject: 'Your OTP Code',
          text: `Your OTP code is ${otp}`,
        });

        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'OTP sent successfully' }),
        };
      } else if (action === 'verifyOtp') {
        // Verify OTP logic here
        // const storedOtp = otpStorage[phoneNumber];
        // if (otp !== storedOtp) {
        //   return { statusCode: 400, body: JSON.stringify({ message: 'Invalid OTP' }) };
        // }
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'OTP verified successfully' }),
        };
      } else {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Invalid action' }),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Server error', error }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
};
