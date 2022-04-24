const jwt = require('jsonwebtoken');

const secretkey = 'secretkey';
// module.exports.secret = secret;

module.exports.authenticate = (request, response, next) => {
	// eslint-disable-next-line no-unused-vars
	jwt.verify(request.cookies.usertoken, secretkey, (err, payload) => {
		if (err) {
			response.status(401).json({ verified: false });
		} else {
			next();
		}
	});
};
