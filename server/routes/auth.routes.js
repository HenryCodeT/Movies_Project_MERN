const express = require('express');

const AuthRouter = express.Router();
const AuthController = require('../controllers/auth.controller');
// eslint-disable-next-line no-unused-vars
const { authenticate } = require('../config/jwt.config');

console.log('*********************** 5-auth-routes ***********************');

AuthRouter.post('/register', AuthController.register);
AuthRouter.post('/login', AuthController.login);
AuthRouter.get('/logout', authenticate ,AuthController.logout);

module.exports = AuthRouter;
console.log('----------------------- 5-auth-routes -----------------------');
