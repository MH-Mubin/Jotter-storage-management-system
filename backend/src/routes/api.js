const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/user/userController');
const staticContentController = require('../controllers/settings/staticContentController');
const changePassController = require('../controllers/settings/changePassController');
const deleteAccountController = require('../controllers/settings/deleteAccountController');
const logoutController = require('../controllers/user/logOutController');


// User Routes
router.post('/registration', userController.registration); // User Registration
router.post('/login', userController.login); // User Login



router.post('/profileUpdate', authMiddleware, userController.profileUpdate); // User Profile Update
router.get('/recoverVerifyEmail/:email', userController.recoverVerifyEmail); // User Recover Verify Email
router.get('/recoverVerifyOTP/:email/:otpCode', userController.recoverVerifyOTP); // User Recover Verify OTP
router.post('/resetPassword/:email/:otpCode', userController.recoverResetPass); // User Reset Password
router.get('/profileDetails', authMiddleware, userController.profileDetails); // User Profile Details
router.get('/profileDetails/:id', authMiddleware, userController.profileDetails); // User Profile Details by ID
router.get('/logout', authMiddleware, logoutController.logoutController); // User Logout

// Settings Routes
router.get('/aboutUs', staticContentController.aboutUs); // Get About Us Content
router.get('/privacyPolicy', staticContentController.privacyPolicy); // Get Privacy Policy Content
router.get('/termsAndConditions', staticContentController.termsAndCondition); // Get Terms and Conditions Content
router.post('/changePassword', authMiddleware, changePassController.changePasswordController); // Change Password
router.delete('/deleteAccount', authMiddleware, deleteAccountController.deleteAccountController); // Delete Account

module.exports = router;