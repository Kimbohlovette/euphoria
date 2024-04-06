import { Request, Response } from 'express';
import { Category } from '../../models/models';

export const createCategory = async (req: Request, res: Response) => {
	const { title, image, description } = req.body;
	try {
		const createdCategory = await Category.create({
			title,
			image,
			description,
		});
		return res.status(201).json(createdCategory.toJSON());
	} catch (err) {
		res.status(500).json({
			message: 'Error creating category',
			error: err,
			code: 'internal_server_error',
		});
	}
};
