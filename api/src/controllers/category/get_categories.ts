import { Request, Response } from 'express';
import { Category } from '../../models/models';

export const getCategories = async (req: Request, res: Response) => {
	try {
		const categories = await Category.findAll({
			offset: Number(req.query.offset),
			limit: Number(req.query.limit),
		});
		return res
			.status(200)
			.json({ categories, total: (await Category.findAll()).length });
	} catch (err) {
		return res.status(500).json({
			message: "Error getting categories",
			error: err,
			code: "internal_server_error",
		});
	}
};
