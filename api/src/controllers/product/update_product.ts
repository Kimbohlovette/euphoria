import { Request, Response } from 'express';
import { Product } from '../../models/models';
export const updateProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, images, description, price, tags, stock, category } =
		req.body;
	try {
		const [count] = await Product.update(
			{ title, images, description, price, tags, stock, category },
			{ where: { id } }
		);
		if (count < 1) {
			return res.status(404).json({ message: 'Product not found' });
		}
		return res.status(200).json({ updatedId: id });
	} catch (err) {
		return res.status(500).json({
			message: 'Error updating product',
			error: err,
			code: 'internal_server_error',
		});
	}
};
