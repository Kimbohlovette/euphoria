import { Router } from 'express';
import { createProduct } from '../controllers/product/create_product';
import { getAllProducts } from '../controllers/product/get_all_products';
import { getProductById } from '../controllers/product/get_product_by_id';

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;
