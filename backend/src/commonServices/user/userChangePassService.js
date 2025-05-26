// services/users/userChangePassService.js
const bcrypt = require("bcrypt");

const userChangePassService = async (req, dataModel) => {
    const email = req.user?.email; // comes from JWT auth middleware
    const { currentPassword, newPassword } = req.body;


    if (!currentPassword || !newPassword) {
        return { status: 400, message: "Current and new passwords are required" };
    }

    try {
        // 1. Find user
        const user = await dataModel.findOne({ email });
        if (!user) {
            return { status: 404, message: "User not found" };
        }

        // 2. Match current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return { status: 401, message: "Current password is incorrect" };
        }

        // 3. Hash and update new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        return { status: 200, message: "Password changed successfully" };
    } catch (err) {
        console.error("Change Password Error:", err);
        return { status: 500, message: "Internal Server Error", error: err.message };
    }
};

module.exports = userChangePassService;
