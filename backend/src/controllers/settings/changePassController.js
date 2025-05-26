// controllers/users/changePasswordController.js
const userChangePassService = require("../../commonServices/user/userChangePassService");
const dataModel = require("../../models/users/userModel");


exports.changePasswordController = async (req, res) => {
    const result = await userChangePassService(req, dataModel);
    return res.status(result.status).json(result);
};
