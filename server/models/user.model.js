// //// IMPORTS ///////////////////////////////////////////////////
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

console.log('******************* 3-Models ********************');
const UserSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			unique:[true,"User Name must be Unique"],
			required: [true, 'User Name is required'],
			minlength: [3, 'User Name must be at least three characters long']
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: [true, 'Email must be Unique'],
			validate: {
				// eslint-disable-next-line no-useless-escape
				validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
				message: 'Please enter a valid email'
			}
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			minlength: [8, 'Password must be 8 characters or longer']
		}
	},
	{ timestamps: true }
);

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
	.get(() => this._confirmPassword)
	.set((value) => {
		this._confirmPassword = value;
	});

UserSchema.pre('validate', function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate('confirmPassword', 'Password must match confirm password');
	}
	next();
});

// this should go after
UserSchema.pre('save', function (next) {
	bcrypt.hash(this.password, 10).then((hash) => {
		this.password = hash;
		next();
	});
});

const User = mongoose.model('user', UserSchema);
module.exports = User;

console.log('---------------------- 3-Models ----------------------*');
