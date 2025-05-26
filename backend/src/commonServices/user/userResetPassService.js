
const otpModel = require("../../models/users/otpModel");
const bcrypt = require("bcrypt");

const userResetPassService = async (request, dataModel) => {
    const email = request?.params?.email?.trim().toLowerCase();
    const otpCode = request?.params?.otpCode?.toString().trim();
    const newPassword = request?.body?.newPassword;

    if (!email || !otpCode || !newPassword) {
        return { status: 400, message: "Email, OTP, and new password are required" };
    }

    try {
        const otpDoc = await otpModel.findOne({ email, otp: otpCode, status: "verified" });
        console.log("OTP found for password reset:", otpDoc);

        if (!otpDoc) {
            return { status: 404, message: "Invalid or Already Used OTP" };
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user password
        const passUpdate = await dataModel.updateOne(
            { email },
            { password: hashedPassword }
        );

        // Mark OTP as expired
        await otpModel.updateOne(
            { _id: otpDoc._id },
            { $set: { status: "expired" } }
        );

        return { status: 200, message: "Password Updated Successfully", data: passUpdate };
    } catch (err) {
        console.log(err);
        return { status: 500, message: "Internal Server Error", error: err.message };
    }
};

module.exports = userResetPassService;
