
const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth_controller');

const {body} = require('express-validator');

const validateUser = [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid Email address'),
    body('password').isLength({min: 8}).withMessage('Password Minimum of 8 character')
    .isStrongPassword().withMessage('Password must complete one Uppercase'),
    body('phone').isMobilePhone().withMessage('Please enter a valid pone number')
];

router.post('/login',  authController.login);

router.post('/register', validateUser, authController.register);

router.post('/forgot-password', authController.forgotPassword);

router.post('/verify-otp', authController.verifyOtp);

router.post('/reset-password', authController.resetPassword);


module.exports = router;