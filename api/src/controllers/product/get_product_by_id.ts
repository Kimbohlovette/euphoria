import { Request, Response } from 'express';
import { Product } from '../../models/models';

export const getProductById = async (req: Request, res: Response) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		return res.status(200).json(product);
	} catch (err) {
		return res.status(500).json({
			message: 'Error getting product',
			error: err,
			code: 'internal_server_error',
		});
	}
};
