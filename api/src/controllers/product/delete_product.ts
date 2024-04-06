import { Request, Response } from 'express';
import { Product } from '../../models/models';

const deleteProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await Product.findByPk(id);
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		product.destroy();
		return res.status(200).json({ deletedId: id });
	} catch (err) {
		return res.status(500).json({
			message: 'Error deleting product',
			error: err,
			code: 'internal_server_error',
		});
	}
};

export default deleteProduct;
