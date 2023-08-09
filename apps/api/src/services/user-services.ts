import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../repository/user-repository';
import { createUserType, signInUserType } from 'common';

class UserServices {
	userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository();
	}

	async createUser(data: createUserType) {
		try {
			const user = await this.userRepository.create(data);
			return user;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}

	async signin(userData: signInUserType) {
		try {
			const user = await this.userRepository.getUser(userData.username);
			if (!user) {
				throw { error: 'user with this username not exsists.!' };
			}
			const passwordCheck = await this.checkPassword(
				userData.password,
				user.password
			);
			if (!passwordCheck) {
				throw { error: 'entered password is incorrect.!' };
			}
			const token = jwt.sign({ id: user._id }, 'thisisit', { expiresIn: '1h' });
			return token;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}

	async getUserById(userId: string) {
		try {
			const user = await this.userRepository.getUserById(userId);
			return user;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}

	async checkPassword(userInputPassword: string, encryptedPassword: string) {
		try {
			return bcrypt.compareSync(userInputPassword, encryptedPassword);
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}
}

export default UserServices;
