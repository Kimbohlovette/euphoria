import { Request, Response } from 'express';
import { CartItem } from '../../models/models';

export const getUserShoppingCart = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const cartItems = await CartItem.findAll({
			where: {
				UserId: userId,
			},
		});
		return res.status(200).json(cartItems);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			message: error,
		});
	}
};
