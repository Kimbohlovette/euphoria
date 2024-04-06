import { Request, Response } from 'express';
import { Category } from '../../models/models';

export const getCategoryById = async (req: Request, res: Response) => {
	try {
		const category = await Category.findByPk(req.params.id);
		if (!category) {
			return res.status(404).json({ message: 'Category not found' });
		}
		return res.status(200).json(category);
	} catch (err) {
		return res.status(500).json({
			message: 'Error getting category',
			error: err,
			code: 'internal_server_error',
		});
	}
};
