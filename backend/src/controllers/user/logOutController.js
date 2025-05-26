const BlacklistToken = require("../../models/users/blackListTokenModel");
const jwt = require("jsonwebtoken");

exports.logoutController = async (req, res) => {
  try {
    const token = req.headers['token'];
    if (!token) return res.status(400).json({ message: "Token missing" });

    const decoded = jwt.verify(token, "jwtkey1234");
    const expiresAt = new Date(decoded.exp * 1000);

    await BlacklistToken.create({ token, expiresAt });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout Error:", err);
    return res.status(500).json({ message: "Logout failed", error: err.message });
  }
};
