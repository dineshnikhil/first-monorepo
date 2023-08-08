import bcrypt from 'bcrypt';

export default {
	SALT: bcrypt.genSaltSync(22),
};
