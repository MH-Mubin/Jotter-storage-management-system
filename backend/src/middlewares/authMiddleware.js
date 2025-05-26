
// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     let token = req.headers['token']; // or use req.headers.authorization if needed

//     jwt.verify(token, "jwtkey1234", (err, decoded) => {
//         if (err) {
//             console.error(err); // log the error
//             return res.status(401).json({ message: "Unauthorized" });
//         } else {
//             req.user = decoded.data; // ✅ Correct: set decoded data to req.user
//             next();
//         }
//     });
// };



const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/users/blackListTokenModel");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['token'];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // Check if token is blacklisted
    const blacklisted = await BlacklistToken.findOne({ token });
    if (blacklisted) return res.status(401).json({ message: "Token blacklisted. Please login again." });

    const decoded = jwt.verify(token, "jwtkey1234");
    req.headers.email = decoded['data'].email;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
