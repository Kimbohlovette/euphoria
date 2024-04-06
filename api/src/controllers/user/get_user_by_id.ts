import { Request, Response } from 'express';
import { User } from '../../models/models';

export const getUserById = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json({
			message: 'Error getting user',
			error: err,
			code: 'internal_server_error',
		});
	}
};
