const express = require('express');
const Auth = require('../controller/userController/profileController');
const { verifyToken } = require('../middleware/validate_user_token');
// const { fetchTransaction, transferMoney } = require('../controller/userController/transactionController');
const routes = express.Router()

// User Route
routes.post('/user/register', Auth.register)
routes.post('/user/send_otp', Auth.sendOtp)
routes.post('/user/verify_otp', verifyToken, Auth.verify_otp)
routes.post('/user/updateProfile', Auth.updateProfile)
routes.post('/user/login', Auth.login)

// user transaction routes
// routes.post('/user/fetchTransaction', fetchTransaction)
// routes.post('/user/transfer', transferMoney)

module.exports={routes}