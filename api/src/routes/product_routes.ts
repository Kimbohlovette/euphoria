import { Router } from 'express';
import { createProduct } from '../controllers/product/create_product';
import { getAllProducts } from '../controllers/product/get_all_products';

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProducts);

export default router;
