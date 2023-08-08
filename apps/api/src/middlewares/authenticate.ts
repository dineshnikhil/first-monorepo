import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthResponseData {
	id: string; // Change the type to match the actual type of 'id' in autheResData
	// Add other properties if needed
}

const authenticate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const headerAuth = req.headers.authorization;
		if (!headerAuth) {
			return res.status(401).json({
				error: 'no token send..!',
			});
		}
		const autheResData = jwt.verify(headerAuth, 'thisisit') as AuthResponseData;
		if (!autheResData) {
			res.status(402).json({
				error: 'invalid token..!',
			});
		}
		req.headers['userId'] = autheResData.id;
		next();
	} catch (error) {
		console.log('something went wrong in the authentication..!');
		console.log(error);
	}
};

export default authenticate;
