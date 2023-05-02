const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// SignUp
router.post('/signup', userController.SignUp);
router.post('/signin', userController.SignIn);
router.post('/verify', userController.VerifyAccount);
router.post('/verify-resend', userController.ResendVerification);


module.exports = router;