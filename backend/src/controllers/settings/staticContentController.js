const getStaticContent = require('../../commonServices/staticContent/staticContentServices');

exports.aboutUs = async (req, res) => {
  const result = await getStaticContent('About Us');
  
  if (!result.error) {
    res.status(result.status).json({ message: result.message, data: result.data });
  } else {
    res.status(result.status).json({ message: result.message, error: result.error });
  }
};


exports.privacyPolicy = async (req, res) => {
  const result = await getStaticContent('Privacy Policy');

  if (!result.error) {
    res.status(result.status).json({ message: result.message, data: result.data });
  } else {
    res.status(result.status).json({ message: result.message, error: result.error });
  }
};



exports.termsAndCondition = async (req, res) => {
  const result = await getStaticContent('Terms & Condition');

  if (!result.error) {
    res.status(result.status).json({ message: result.message, data: result.data });
  } else {
    res.status(result.status).json({ message: result.message, error: result.error });
  }
};
