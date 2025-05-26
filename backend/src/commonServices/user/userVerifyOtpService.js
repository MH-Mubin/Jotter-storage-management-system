// const otpModel = require("../../models/users/otpModel"); // Import the OTP model

// const userVerifyOTPService = async (req, dataModel) => {
//     try{
//         let email = req.params.email;
//         let OTP = req.params.otpCode.toString(); // Convert OTP to string if it's a number
//         let status = 'active';
//         let statusUpdate = 'Used';

//         let otpCount = await otpModel.findOne({ email: email, otp: OTP, status: status});
//         console.log(otpCount);
//         if (otpCount.length > 0 && otpCount[0].total > 0) {
// //            console.log(otpCount);
//             await otpModel.updateOne(
//                 { email: email, otp: OTP },
//                 { $set: { status: statusUpdate } }
//             );
//             return { status: 200, message: "OTP Verified Successfully" };
//         }else{
//             return { status: 404, message: "Invalid OTP" };
//         }
//     }catch(err){
//         console.log(err);
//         return {status: 500, message: "Internal Server Error", error: err.message};
//     }
// }


// module.exports = userVerifyOTPService;



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
