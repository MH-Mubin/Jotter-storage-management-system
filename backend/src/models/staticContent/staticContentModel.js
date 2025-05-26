// models/staticContentModel.js
const mongoose = require('mongoose');

const staticContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['About Us', 'Terms & Condition', 'Privacy Policy'],
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const staticContentModel = mongoose.model('staticContent', staticContentSchema)
module.exports = staticContentModel;
