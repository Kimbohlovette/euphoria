import { Request, Response } from 'express';
import { Category, Product } from "../../models/models";

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
		const categories = await Category.findAll();
		const formatted = products.map((product) => {
			return {
				...product.get(),
				category: categories.find(
					(c) => c.get("id") === product.get("CategoryId")
				),
			};
		});
		return res.status(200).json(formatted);
	} catch (err) {
		return res.status(500).json({
			message: "Error getting products",
			error: err,
			code: "internal_server_error",
		});
	}
};
