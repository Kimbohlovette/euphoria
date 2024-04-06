import { Request, Response } from 'express';
import { CartItem } from '../../models/models';

export const RemoveFromCart = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.query;
	try {
		const cartItem = await CartItem.findByPk(id);
		if (!cartItem) {
			return res.status(404).json({ message: 'CartItem not found' });
		}
		if (cartItem.get('UserId') !== userId) {
			return res.status(401).json({ message: 'Not authorized' });
		}
		cartItem.destroy();
		return res.status(200).json({ deletedId: id });
	} catch (error) {
		return res.status(400).json(error);
	}
};
