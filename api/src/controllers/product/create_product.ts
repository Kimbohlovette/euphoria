import { Request, Response } from 'express';
import { Product } from '../../models/models';

export const createProduct = async (req: Request, res: Response) => {
	const { title, images, description, price, tags, stock, CategoryId } =
		req.body;
	try {
		const createdProduct = await Product.create({
			title,
			images,
			description,
			price,
			tags,
			stock,
			CategoryId,
		});
		return res.status(201).json(createdProduct);
	} catch (err) {
		return res.status(500).json(err);
	}
};
