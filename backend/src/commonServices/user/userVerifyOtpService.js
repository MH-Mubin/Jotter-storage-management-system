
const otpModel = require("../../models/users/otpModel");

const userVerifyOTPService = async (req, dataModel) => {
    try {
        const email = req.params.email.trim().toLowerCase();
        const OTP = req.params.otpCode.toString().trim();

        const otpDoc = await otpModel.findOne({ email, otp: OTP, status: "active" });
        console.log("OTP found for verification:", otpDoc);

        if (!otpDoc) {
            return { status: 404, message: "Invalid or Already Verified OTP" };
        }

        await otpModel.updateOne(
            { _id: otpDoc._id },
            { $set: { status: "verified" } }
        );

        return { status: 200, message: "OTP Verified Successfully" };

    } catch (err) {
        console.log(err);
        return { status: 500, message: "Internal Server Error", error: err.message };
    }
};

module.exports = userVerifyOTPService;
