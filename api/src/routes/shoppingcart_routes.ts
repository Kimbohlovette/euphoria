import { Router } from 'express';
import { createCartItem } from '../controllers/shopping_cart/create_cart_item';
import { getUserShoppingCart } from '../controllers/shopping_cart/get_user_shopping_cart';

const router = Router();

router.post('/', createCartItem);
router.get('/:userId', getUserShoppingCart);

export default router;
