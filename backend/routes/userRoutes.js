const express = require('express');
const { signup, updateProfile, verifyUser } = require('../controller/userController/profileController');
// const { fetchTransaction, transferMoney } = require('../controller/userController/transactionController');
const routes = express.Router()

// User Route
routes.post('/user/signup', signup)
routes.get('/user/verifyUser/:id', verifyUser)
routes.post('/user/updateProfile', updateProfile)

// user transaction routes
// routes.post('/user/fetchTransaction', fetchTransaction)
// routes.post('/user/transfer', transferMoney)

module.exports={routes}