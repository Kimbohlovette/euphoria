import { Request, Response } from 'express';
import { Password, User } from '../../models/models';

export const createUser = async (req: Request, res: Response) => {
	const { userName, email, password } = req.body;
	try {
		const createdUser = User.build({
			userName,
			email,
		});
		const pwd = Password.build({ password });
		await createdUser.save();
		await pwd.save();

		return res.status(201).json(createdUser);
	} catch (err) {
		return res.status(500).json({
			message: 'Error creating user',
			error: err,
			code: 'internal_server_error',
		});
	}
};
