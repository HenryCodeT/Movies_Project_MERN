const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const secretkey = 'secretkey';
console.log('********************** 4-auth-controller **********************');

/**
 * Register User
 * @param {*} request
 * @param {*} response
 */
const register = (request, response) => {
	console.log('request-body', request.body);
	User.create(request.body)
		.then((user) => {
			const payload = {
				id: user._id
			};

			const expiration = {
				expiresIn: '20m'
			};

			const newJwt = jwt.sign(payload, secretkey, expiration);

			// //// response ////////////////////////////////////////////////////
			response.cookie('usertoken', newJwt, secretkey, { httpOnly: true });
			response.statusMessage = 'registered successfully';
			response
				.status(200)
				.json({ message: `User ${user.firstName} Created successfully`, user });
		})
		.catch((error) => {
			response.statusMessage = 'Something went Wrong';
			response.status(400).json({ error });
		});
};

/**
 * Login User
 * @param {*} request
 * @param {*} response
 */
const login = (request, response) => {
	console.log(request.body);
	const { email, password } = request.body;

	User.findOne({ email })
		.then((user) => {
			bcrypt
				.compare(password, user.password)
				.then((result) => {
					if (!result) {
						return response.status(400).json({
							message: 'Invalid password'
						});
					}
					const payload = {
						id: user._id
					};

					const expiration = {
						expiresIn: '20m'
					};
					const newJwt = jwt.sign(payload, secretkey, expiration);

					// //// response ////////////////////////////////////////////////////
					response.cookie('usertoken', newJwt, secretkey, { httpOnly: true });
					response.statusMessage = 'login successfully';
					response
						.status(200)
						.json({ message: `welcome back ${user.userName}`, user });
					return response;
				})
				.catch((err) => {
					response.statusMessage = 'Something went Wrong With loggin';
					response.status(400).json({ error: err });
				});
		})
		.catch((err) => {
			response.statusMessage = 'Something went Wrong With loggin';
			response.status(400).json({ error:err,message:'Invalid'});
		});
};

/**
 * Clear the cookie
 * @param {*} request
 * @param {*} response
 * @returns
 */
const logout = (request, response) => {
	console.log('Logged out');
	response.statusMessage = 'logged out successfully';
	response.clearCookie('usertoken');
	response.status(200);
	return response;
};

const AuthController = {
	register,
	login,
	logout
};

module.exports = AuthController;

console.log('---------------------- 4-auth-controller ----------------------');
