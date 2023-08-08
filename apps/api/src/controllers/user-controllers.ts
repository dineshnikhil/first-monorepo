import { Request, Response } from 'express';
import UserServices from '../services/user-services';
import { createUser } from 'common';

const userServices = new UserServices();

const create = async (req: Request, res: Response) => {
	try {
		const parsedInput = createUser.safeParse(req.body);
		if (parsedInput.success) {
			const user = await userServices.createUser(parsedInput.data);
			return res.status(201).json({
				data: user,
				message: 'user was successfully created.!',
				error: {},
			});
		} else {
			return res.status(411).json({
				data: {},
				message: 'validation error occur..!',
				error: parsedInput.error,
			});
		}
	} catch (error) {
		return res.status(400).json({
			data: {},
			message: 'unable to create the user.!',
			error: error,
		});
	}
};

const signIn = async (req: Request, res: Response) => {
	try {
		const token = await userServices.signin(req.body);
		return res.status(200).json({
			token: token,
			message: 'successfully loged in the user.!',
			error: {},
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			message: 'unable to fetch the user.!',
			error: error,
		});
	}
};

export default {
	create,
	signIn,
};
