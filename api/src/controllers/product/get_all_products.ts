import { Request, Response } from 'express';
import { Product } from '../../models/models';

export const getAllProducts = async (req: Request, res: Response) => {
	try {
		if (!!req.query.category) {
			const products = await Product.findAll({
				where: {
					CategoryId: req.query.category,
				},
			});
			return res.status(200).json(products);
		}
		const products = await Product.findAll();
		return res.status(200).json(products);
	} catch (err) {
		return res.status(500).json({
			message: 'Error getting products',
			error: err,
			code: 'internal_server_error',
		});
	}
};
