import User from '../models/users';
import { createUserType } from 'common';

class UserRepository {
	async create(userData: createUserType) {
		try {
			const user = await User.create(userData);
			return user;
		} catch (error) {
			console.log('something went wrong in repository layer..!');
			console.log(error);
		}
	}

	async getUser(username: string) {
		try {
			const user = await User.findOne({
				username: username,
			});
			return user;
		} catch (error) {
			console.log('something went wrong in repository layer..!');
			console.log(error);
		}
	}

	async getUserById(userId: string) {
		try {
			const user = await User.findById(userId);
			return user;
		} catch (error) {
			console.log('something went wrong in repository layer..!');
			console.log(error);
		}
	}
}

export default UserRepository;
