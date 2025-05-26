

const { timeStamp } = require('console');
const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'active', // Default status is 'active'
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //index: { expires: '10m' }
        // expires: '5m', // OTP will expire after 5 minutes
    },
    // expiresAt: {
    //     type: Date,
    //     required: true,
    // }
},{timestamps: true}, { versionKey: false });

const otpModel = mongoose.model('otps', dbSchema);
module.exports = otpModel;