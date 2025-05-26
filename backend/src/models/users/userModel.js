

const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

},{timestamps: true, versionKey: false});

const userModel = mongoose.model("users", dbSchema);
module.exports = userModel;