import mongoose from 'mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { createUserType } from 'common';

export interface createUserTypeInterface extends createUserType, Document {}

const userSchema = new mongoose.Schema<createUserTypeInterface>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// user save hook
userSchema.pre<createUserTypeInterface>('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	try {
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(this.password, salt);
		this.password = hashedPassword;
		return next();
	} catch (error) {
		console.log(error);
		return next();
	}
});

const User = mongoose.model('user', userSchema);

export default User;
