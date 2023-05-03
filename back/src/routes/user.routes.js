const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authenticateUser } = require("../middlewares/authentication.middleware");

// SignUp
router.post('/signup', userController.SignUp);
router.post('/signin', userController.SignIn);
router.post('/verify', userController.VerifyAccount);
router.post('/verify-resend', userController.ResendVerification);
router.post('/profile', authenticateUser, userController.GetProfile);


module.exports = router;