// services/staticContentService.js
const StaticContent = require('../../models/staticContent/staticContentModel');

const getStaticContent = async (type) => {
  try {
    const content = await StaticContent.findOne({ type });

    if (!content) {
      return { status: 404, message: "Content not found", data: null, error: true };
    }

    return { status: 200, message: "Success", data: content.content, error: false };
  } catch (err) {
    return { status: 500, message: err.message, data: null, error: true };
  }
};

module.exports = getStaticContent;
