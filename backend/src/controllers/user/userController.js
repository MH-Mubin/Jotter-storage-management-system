

const dataModel = require("../../models/users/userModel"); // Import the user model
const otpModel = require("../../models/users/otpModel"); // Import the OTP model
const userCreateService = require("../../commonServices/user/userCreateService");
const userLoginService = require("../../commonServices/user/userLoginService");
const userVerifyOTPService = require("../../commonServices/user/userVerifyOtpService");
const userResetPassService = require("../../commonServices/user/userResetPassService"); 
const userUpdateService = require("../../commonServices/user/userUpdateService");
const userVerifyEmailService = require("../../commonServices/user/userVerifyEmailService");
const userDetailsService = require("../../commonServices/user/userDetailsService");



exports.registration = async (req, res) => {
    let result = await userCreateService(req, dataModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, data: result.data });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

exports.login = async (req, res) => {
    let result = await userLoginService(req, dataModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, token: result.token, data: result.data  });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

exports.profileUpdate = async (req, res) => {
    let result = await userUpdateService(req, dataModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, data: result.data });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

exports.profileDetails = async (req, res) => {
    let result = await userDetailsService(req, dataModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, data: result.data });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

exports.recoverVerifyEmail = async (req, res) => {
    let result = await userVerifyEmailService(req, dataModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, data: result.data });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

exports.recoverVerifyOTP = async (req, res) => {
    let result = await userVerifyOTPService(req, otpModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, data: result.data });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

exports.recoverResetPass = async (req, res) => {
    let result = await userResetPassService(req, dataModel);
    if (result.status == 200) {
        res.status(result.status).json({ message: result.message, data: result.data });
    } else {
        res.status(result.status).json({ message: result.message, error: result.error });
    }
}

