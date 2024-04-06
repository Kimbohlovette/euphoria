import { Request, Response } from 'express';
import { Optional } from 'sequelize';
import { Category } from '../../models/models';
import { CategoryType } from '../../types';

export const createCategory = async (req: Request, res: Response) => {
	const { title, image, description } = req.body as unknown as Optional<
		CategoryType,
		'id'
	>;
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
