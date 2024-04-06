import { Request, Response } from 'express';
import { CartItem } from '../../models/models';

export const createCartItem = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { quantity, userId, productId } = req.body;
	try {
		const cartItem = await CartItem.create({
			id,
			quantity,
			UserId: userId,
			ProductId: productId,
		});
		return res.status(201).json(cartItem);
	} catch (err) {
		return res.status(500).json({
			message: 'Error creating cart item',
		});
	}
};
