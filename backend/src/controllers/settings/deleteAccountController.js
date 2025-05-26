// controllers/settings/deleteAccountController.js
const userModel = require("../../models/users/userModel");

exports.deleteAccountController = async (req, res) => {
    try {
        const email = req.user.email;

        const result = await userModel.deleteOne({ email });

        if (result.deletedCount === 0) {
            return res.status(404).json({ status: 404, message: "User not found or already deleted" });
        }

        return res.status(200).json({ status: 200, message: "Account deleted successfully" });

    } catch (error) {
        console.error("Delete Account Error:", error);
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
};
